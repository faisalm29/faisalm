import type { SpotifyTopTracksResponse, TopTrack } from "./spotify.types";

const clientId = import.meta.env.SPOTIFY_CLIENT_ID;
const clientSecret = import.meta.env.SPOTIFY_CLIENT_SECRET;
const refreshToken = import.meta.env.SPOTIFY_REFRESH_TOKEN;

async function getAccessToken() {
  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Missing Spotify environment variables");
  }

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    console.error("Spotify token error:", err);
    throw new Error("Failed to refresh token.");
  }

  const data = await response.json();

  return data.access_token;
}

export async function getTopTracks(): Promise<TopTrack[]> {
  const accessToken = await getAccessToken();

  const response = await fetch(
    "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  if (!response.ok) {
    const err = await response.text();
    console.error("Spotify top tracks error:", err);
    throw new Error("Failed to fetch top tracks");
  }

  const data: SpotifyTopTracksResponse = await response.json();

  return data.items.map((track) => ({
    url: track.external_urls.spotify,
    name: track.name,
    artists: track.artists,
    album: track.album,
    duration: track.duration_ms,
  }));
}
