import React, { useState } from "react";
import { Button } from "../Button/Button";
type Todo = {
  id: number;
  name: string;
  description: string;
  checked: boolean;
};

const DEFAULT_TODO = {
  name: "",
  description: "",
};

interface TodoPanelProps {
  addTodo: ({ name, description }: Omit<Todo, "checked" | "id">) => void;
}

export const TodoPanel: React.FC<TodoPanelProps> = ({ addTodo }) => {
  const [todo, setTodo] = useState(DEFAULT_TODO);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onClick = () => {
    addTodo({ name: todo.name, description: todo.description });
    setTodo(DEFAULT_TODO);
  };

  return (
    <div>
      <div>
        <label htmlFor="name">
          <div>name</div>
          <input
            type="text"
            id="name"
            name="name"
            onChange={onChange}
            value={todo.name}
          />
        </label>
      </div>
      <div>
        <label htmlFor="name">
          <div>description</div>
          <input
            type="text"
            id="description"
            name="description"
            onChange={onChange}
            value={todo.description}
          />
        </label>
      </div>
      <div>
        <Button color="blue" onClick={onClick}>
          Add
        </Button>
      </div>
    </div>
  );
};
