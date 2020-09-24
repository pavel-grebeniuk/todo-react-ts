import React from "react";
import {makeStyles, Theme, createStyles} from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      paddingTop: theme.spacing(1),
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

export const LoaderComponent: React.FC = (): React.ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <LinearProgress/>
    </div>
  );
};
