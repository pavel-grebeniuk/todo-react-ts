import * as React from "react";
import {Alert} from "@material-ui/lab";
import {Link} from "react-router-dom";


export const NotFound: React.FC = () => {
  return (
    <Alert severity="warning">
      Page not found
      <b> 404</b>
      <br/>
      <Link to='/'>
        Back to home page
      </Link>
    </Alert>
  );
};
