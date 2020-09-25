import * as React from "react";
import {Alert} from "@material-ui/lab";


export const NotFound: React.FC = () => {
  return (
    <Alert severity="warning">
      Page not found <b>404</b>
    </Alert>
  );
};
