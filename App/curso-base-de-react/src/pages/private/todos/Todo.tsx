import { useState } from "react";
import { List } from "../../../components/List";
import { TodoItem } from "../../../components/TodoItem";
import { PageLayout } from "../../../shared/layout/page-layout/PageLayout";
import TodoStyles from "./Todo.module.css";
import { Link } from "react-router-dom";

export const Todo = () => {
  const [list, setList] = useState([
    { id: 1, label: "Item 1", completed: false },
    { id: 2, label: "Item 2", completed: false },
    { id: 3, label: "Item 3", completed: false },
  ]);

  const handleToggle = (id: number) => {
    setList(
      list.map((listitem) =>
        listitem.id === id
          ? { ...listitem, completed: !listitem.completed }
          : listitem
      )
    );
  };

  const handleDelete = (id: number) => {
    setList(list.filter((listitem) => listitem.id !== id));
  };
  return (
    <>
      <PageLayout title="Tarefas">
        <div className={TodoStyles.ButtonContainer}>
        <Link to='/todos/detalhe/adicionar' className={TodoStyles.Button}>
          Adicionar
        </Link>
      </div>
        <List>
          {list.map((listitem) => (
            <TodoItem
              key={listitem.id}
              id={listitem.id}
              label={listitem.label}
              completed={listitem.completed}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))}
        </List>
      </PageLayout>
    </>
  );
}