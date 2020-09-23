import {TodosState} from "../redux/types/todoTypes";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchStart} from "../redux/actions/todoAction";
import {AppState} from "../redux/reducers/rootReducer";

export const useTodosFetch = (): TodosState => {
  const dispatch = useDispatch();
  const {entities, fetchRequest, createRequest, deleteRequest} = useSelector<AppState, TodosState>(state => state.todo);
  useEffect(() => {
    dispatch(fetchStart());
  }, [dispatch]);

  return {
    entities,
    fetchRequest,
    createRequest,
    deleteRequest
  };
};