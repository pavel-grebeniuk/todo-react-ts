import * as React from "react";
import {Checkbox, Grid, IconButton, Typography} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItem from "@material-ui/core/ListItem";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      flexGrow: 1,
      padding: "0 10px"
    },
  }),
);


export const TodoItem: React.FC = () => {
  const classes = useStyles();
  return (
    <ListItem button>
      <Grid container alignItems="center" justify="space-between">
        <Grid item>
          <Checkbox
            color="primary"
            inputProps={{"aria-label": "secondary checkbox"}}
          />
        </Grid>
        <Grid item className={classes.text}>
          <Typography>
            text
          </Typography>
        </Grid>
        <Grid item>
          <IconButton aria-label="edit" size='small'>
            <EditIcon/>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton aria-label="delete" size='small'>
            <DeleteIcon/>
          </IconButton>
        </Grid>
      </Grid>
    </ListItem>
  );
};
