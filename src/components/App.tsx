import * as React from "react";
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import {TodoPage} from "./TodoPage";
import {NavBar} from "./Navbar";
import {Container} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {InfoPage} from "./InfoPage";
import {ErrorComponent} from "./ErrorComponent";
import {LoadingComponent} from "./LoadingComponent";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageContainer: {
      paddingTop: theme.spacing(2)
    }
  }),
);


export const App: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline/>
      <Router>
        <NavBar/>
        <Container className={classes.pageContainer}>
          <Switch>
            <Route path="/" exact>
              <TodoPage/>
            </Route>
            <Route path="/about" exact>
              <InfoPage/>
            </Route>
          </Switch>
        </Container>
        <ErrorComponent/>
        <LoadingComponent/>
      </Router>
    </>
  );
};

