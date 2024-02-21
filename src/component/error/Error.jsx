import { useRouteError } from "react-router-dom";
import Button from "../button/button";
import { Link } from "react-router-dom";
import "./Error.css";
const Error = () => {
  const err = useRouteError();
  return (
    <div id="error-container">
      <div id="error">
        <h3 className="error-heading">OOPS!!</h3>
        <p className="error-body">Something went Wrong!</p>
        <p className="error-des">{err.status + " URL " + err.statusText}</p>
        {/* <button>Go To Homepage</button> */}
        <Link to={"/"}>
          <Button
            ButtonText={"Go To Homepage"}
            id={"error-btn"}
            onClick={() => {
              return;
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Error;
