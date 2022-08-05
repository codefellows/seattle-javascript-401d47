import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/todos";

export default function useTodos(){
  let todoList = useSelector(state => state.todos.list);
  let dispatch = useDispatch();

  let addToList = (todo) => {
    dispatch(addTodo(todo));
  }

  return {
    todoList,
    addToList,
  }
}
