import * as React from "react";
import {LoaderComponent} from "./Loader";
import {useSelector} from "react-redux";
import {AppState} from "../redux/reducers/rootReducer";
import {TodosState} from "../redux/types/todoTypes";

export const LoadingComponent: React.FC = () => {

  const {
    fetchRequest: {loading: fetchLoading},
    createRequest: {loading: createLoading},
    updateRequest: {loading: updateLoading},
    deleteRequest: {loading: deleteLoading}
  } = useSelector<AppState, TodosState>(state => state.todo);

  const isLoading = fetchLoading || createLoading || updateLoading || deleteLoading;

  if (isLoading) {
    return (
      <LoaderComponent/>
    );
  } else return null;
};
