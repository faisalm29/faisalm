import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Header = () => {
  return (
    <header className="flex items-center gap-4">
      <Avatar className="size-14">
        <AvatarImage src="https://github.com/faisalm29.png" alt="@faisalm29" />
        <AvatarFallback>FM</AvatarFallback>
      </Avatar>
      <div>
        <h1>Faisal M.</h1>
        <p className="text-muted-foreground">Long-lived Learner</p>
      </div>
    </header>
  );
};

export { Header };
