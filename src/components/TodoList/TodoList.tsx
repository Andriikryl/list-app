import React from "react";
import { TodoItem } from "./TodoItem/TodoItem";

type Todo = {
  id: number;
  name: string;
  description: string;
  checked: boolean;
};

interface TodoListProps {
  todos: Todo[];
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </div>
  );
};
