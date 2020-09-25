import * as React from "react";
import {Box, Button} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../redux/reducers/rootReducer";
import {TodosState} from "../redux/types/todoTypes";
import {changeFilter} from "../redux/actions/todoAction";

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
  const dispatch = useDispatch();
  const {showAll} = useSelector<AppState, TodosState>(state => state.todo);

  const changeHandler = (filter: boolean): void => {
    dispatch(changeFilter(filter));
  };

  return (
    <Box className={classes.filterBox}>
      <Button size='small'
              color='primary'
              variant={showAll ? "contained" : "outlined"}
              onClick={changeHandler.bind(null, true)}
      >
        All
      </Button>
      <Button size='small'
              color='secondary'
              variant={!showAll ? "contained" : "outlined"}
              onClick={changeHandler.bind(null, false)}
      >
        Completed
      </Button>
    </Box>
  );
};
