import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import {Alert} from "@material-ui/lab";

type SnackbarComponentProps = {
  message: string | null,
  severity: "success" | "error",
  open: boolean,
  setOpen: (open: boolean) => void,
}


export const SnackbarComponent: React.FC<SnackbarComponentProps> = (props): React.ReactElement => {
  const {severity, message, open, setOpen} = props;

  const handleClose = () => {
    setOpen(false);
  };

  console.log('snack');
  return (
    <Snackbar
      anchorOrigin={{vertical: "top", horizontal: "center"}}
      open={open}
      onClose={handleClose}
      autoHideDuration={3000}
    >
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};