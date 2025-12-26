import TodoItemStyles from "./TodoItem.module.css";

interface ITodoItemProps {
  id: number;
  label: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TodoItem = (props: ITodoItemProps) => {
  return (
    <li key={props.id} className={TodoItemStyles.Item}>
        <span className={TodoItemStyles.Text}>
            {props.label}
        </span>
      <div className={TodoItemStyles.ButtonsGroup}>
        <input
          type="checkbox"
          checked={props.completed}
          onChange={() => props.onToggle(props.id)}
        />
        <button
          className={TodoItemStyles.ButtonRemove}
          onClick={() => props.onDelete(props.id)}>
            Excluir
        </button>
      </div>
    </li>
  );
};
