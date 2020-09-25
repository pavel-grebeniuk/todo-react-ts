import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100vw",
      top: 0,
      bottom: 0,
      paddingTop: theme.spacing(1),
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
  }),
);

export const LoaderComponent: React.FC = (): React.ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress/>
    </div>
  );
};
