import useCounter from "../utils/useCounter";

const User = (props: { name: string; location: string }) => {
  const counter = useCounter();

  return (
    <div style={{ border: "3px solid blue" }}>
      <h2>Counter: {counter}</h2>
      <h3>{props.name}</h3>
      <h3>{props.location}</h3>
    </div>
  );
};

export default User;
