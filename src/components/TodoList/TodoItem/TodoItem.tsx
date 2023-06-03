import React from "react";

type Todo = {
  id: number;
  name: string;
  description: string;
  checked: boolean;
};

interface TodoItem {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItem> = ({ todo }) => {
  return <div>{todo.name}</div>;
};
