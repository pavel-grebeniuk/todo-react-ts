import * as React from "react";
import {useEffect, useState} from "react";
import {SnackbarComponent} from "./SnackbarComponent";
import {useSelector} from "react-redux";
import {AppState} from "../redux/reducers/rootReducer";
import {TodosState} from "../redux/types/todoTypes";

export const ErrorComponent: React.FC = () => {

  const {
    fetchRequest: {error: fetchError},
    createRequest: {error: createError},
    updateRequest: {error: updateError},
    deleteRequest: {error: deleteError}
  } = useSelector<AppState, TodosState>(state => state.todo);

  const [open, setOpen] = useState<boolean>(false);
  const error = fetchError || createError || updateError || deleteError;

  useEffect(() => {
    setOpen(!!error);
  }, [error]);


  if (open) {
    return (
      <SnackbarComponent message={error}
                         severity={error ? "error" : "success"}
                         open={open}
                         setOpen={setOpen}/>
    );
  } else return null;
};
