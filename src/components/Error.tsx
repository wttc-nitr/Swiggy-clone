import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h2>Oops...page not found!!</h2>
      <Link to="/">
        <h3 className="p-4 m-4 bg-gray-400 hover:bg-gray-500 inline-block rounded-lg">
          Go to HomePage
        </h3>
      </Link>
    </div>
  );
};

export default Error;
