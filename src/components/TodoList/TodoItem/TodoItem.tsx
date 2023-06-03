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
}

export const TodoItem: React.FC<TodoItem> = ({ todo, checkTodo }) => {
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
        <Button color="blue">Edit</Button>
        <Button color="orange">Delet</Button>
      </div>
    </div>
  );
};
