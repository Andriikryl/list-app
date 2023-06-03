import React, { useState } from "react";
import { Button } from "../Button/Button";
import { type } from "os";
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

interface AddTodoPanelProps {
  mode: "add";
  addTodo: ({ name, description }: Omit<Todo, "checked" | "id">) => void;
}

interface EditTodoPanelProps {
  mode: "edit";
  editTodo: Omit<Todo, "id" | "checked">;
  changeTodo: ({ name, description }: Omit<Todo, "checked" | "id">) => void;
}

type TodoPanelProps = AddTodoPanelProps | EditTodoPanelProps;

export const TodoPanel: React.FC<TodoPanelProps> = (props) => {
  const isEdit = props.mode === "edit";

  const [todo, setTodo] = useState(isEdit ? props.editTodo : DEFAULT_TODO);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onClick = () => {
    const todoItem = { name: todo.name, description: todo.description };
    if (isEdit) {
      return props.changeTodo(todoItem);
    }

    props.addTodo(todoItem);
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
        {!isEdit && (
          <Button color="blue" onClick={onClick}>
            Add
          </Button>
        )}
        {isEdit && (
          <Button color="blue" onClick={onClick}>
            edit
          </Button>
        )}
      </div>
    </div>
  );
};
