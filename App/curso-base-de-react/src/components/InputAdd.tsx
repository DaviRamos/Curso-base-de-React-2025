import { useState } from "react";

import InputAddStyles from "./InputAdd.module.css";

interface IInputAddProps {
  onAddItem: (item: string) => void;
}

export const InputAdd = (props: IInputAddProps) => {
  const [value, setValue] = useState("");

  const handleAddItem = () => {
    props.onAddItem(value);
    setValue("");
  };

  return (
    <div className={InputAddStyles.Container}>
      <input
        value={value}
        className={InputAddStyles.Input}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Digite um novo item"
      />
      <button onClick={handleAddItem} className={InputAddStyles.Button}>
        Adicionar
      </button>
    </div>
  );
};
