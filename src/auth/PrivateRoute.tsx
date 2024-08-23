import { Navigate, Route } from "react-router-dom";

import { JSX } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export { PrivateRoute };

function PrivateRoute({ component: Component, ...rest }: any) {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");

  return (
    <Route
      {...rest}
      render={(props: JSX.IntrinsicAttributes) => {
        if (!token) {
          //   navigate("/login");
          <Navigate to="/login" replace={true} />;
          // not logged in so redirect to login page with the return url
          // return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }

        // authorized so return component
        return <Component {...props} />;
      }}
    />
  );
}
