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
  checkTodo: (id: Todo["id"]) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, checkTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem todo={todo} checkTodo={checkTodo} />
      ))}
    </div>
  );
};
