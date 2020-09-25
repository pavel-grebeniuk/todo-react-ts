import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchStart} from "../redux/actions/todoAction";

export const useTodosFetch = (): void => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStart());
  }, [dispatch]);
};
