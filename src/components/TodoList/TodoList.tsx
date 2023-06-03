import React from "react";
import { TodoItem } from "./TodoItem/TodoItem";
import { TodoPanel } from "../TodoPanel/TodoPanel";

type Todo = {
  id: number;
  name: string;
  description: string;
  checked: boolean;
};

interface TodoListProps {
  todos: Todo[];
  checkTodo: (id: Todo["id"]) => void;
  deletTodo: (id: Todo["id"]) => void;
  selectTodoIdForEdit: (id: Todo["id"]) => void;
  todoIdForEdit: Todo["id"] | null;
  changeTodo: ({ name, description }: Omit<Todo, "checked" | "id">) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  checkTodo,
  deletTodo,
  selectTodoIdForEdit,
  todoIdForEdit,
  changeTodo,
}) => {
  return (
    <div>
      {todos.map((todo) => {
        if (todo.id === todoIdForEdit)
          return (
            <TodoPanel
              key={todo.id}
              mode="edit"
              changeTodo={changeTodo}
              editTodo={{ name: todo.name, description: todo.description }}
            />
          );
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            checkTodo={checkTodo}
            deletTodo={deletTodo}
            selectTodoIdForEdit={selectTodoIdForEdit}
          />
        );
      })}
    </div>
  );
};
