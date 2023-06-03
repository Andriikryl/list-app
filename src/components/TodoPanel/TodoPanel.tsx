import { useState } from "react";
import { Button } from "../Button/Button";

const DEFAULT_TODO = {
  name: "",
  description: "",
};

export const TodoPanel = () => {
  const [todo, setTodo] = useState(DEFAULT_TODO);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
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
        <Button color="blue">Add</Button>
      </div>
    </div>
  );
};
