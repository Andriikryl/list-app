import React from "react";
import { Button } from "../../Button/Button";

type Todo = {
  id: number;
  name: string;
  description: string;
  checked: boolean;
};

interface TodoItem {
  todo: Todo;
  checkTodo: (id: Todo["id"]) => void;
  deletTodo: (id: Todo["id"]) => void;
  selectTodoIdForEdit: (id: Todo["id"]) => void;
}

export const TodoItem: React.FC<TodoItem> = ({
  todo,
  checkTodo,
  deletTodo,
  selectTodoIdForEdit,
}) => {
  return (
    <div>
      <div
        style={{
          opacity: todo.checked ? 0.5 : 1,
          textDecoration: todo.checked ? "line-through" : "none",
        }}
        onClick={() => checkTodo(todo.id)}
      >
        <div>{todo.name}</div>
        <div>{todo.description}</div>
      </div>
      <div>
        <Button color="blue" onClick={() => selectTodoIdForEdit(todo.id)}>
          Edit
        </Button>
        <Button color="orange" onClick={() => deletTodo(todo.id)}>
          Delet
        </Button>
      </div>
    </div>
  );
};
