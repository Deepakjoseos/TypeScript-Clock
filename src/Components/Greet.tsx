type GreetProps = {
  name: string;
  messageNumber: number;
  isLoggedIn: boolean;
};
export default function Greet(props: GreetProps) {
  return (
    <>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${props.messageNumber} messages.`
          : "Welcome Guest"}
      </h2>
    </>
  );
}
