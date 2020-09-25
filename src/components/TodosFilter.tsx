import * as React from "react";
import {useState} from "react";
import {Box, Button} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {useSelector} from "react-redux";
import {AppState} from "../redux/reducers/rootReducer";
import {TodosState} from "../redux/types/todoTypes";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    filterBox: {
      marginTop: theme.spacing(2),
      "& > button": {
        margin: "0 5px"
      },
    }
  }),
);

export const TodosFilter: React.FC = () => {
  const classes = useStyles();
  const {showAll: filter} = useSelector<AppState, TodosState>(state => state.todo);

  const [all, showAll] = useState(filter);

  const changeHandler = (): void => {
    showAll(prev => !prev);
  };

  return (
    <Box className={classes.filterBox}>
      <Button size='small'
              color='primary'
              variant={all ? "contained" : "outlined"}
              onClick={changeHandler}
      >
        All
      </Button>
      <Button size='small'
              color='secondary'
              variant={!all ? "contained" : "outlined"}
              onClick={changeHandler}
      >
        Completed
      </Button>
    </Box>
  );
};
