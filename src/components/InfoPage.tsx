import * as React from "react";
import {Alert} from "@material-ui/lab";
import {Box, Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    infoBox: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column"
    },
    alert: {
      alignSelf: "stretch",
      marginBottom: theme.spacing(2)
    }
  }),
);

export const InfoPage: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const clickHandler = (): void => {
    history.push("/");
  };

  return (
    <Box className={classes.infoBox}>
      <Alert severity="info"
             className={classes.alert}
      >Some info about Todo App</Alert>
      <Button variant='outlined'
              color='primary'
              onClick={clickHandler}
      >
        Back
      </Button>
    </Box>
  );
};
