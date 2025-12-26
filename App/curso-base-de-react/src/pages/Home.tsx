import { useState } from "react";
import { List } from "../components/List";
import { TodoItem } from "../components/TodoItem";
import { InputAdd } from "../components/InputAdd";
import { PageLayout } from "../shared/Layout/page-layout/PageLayout";

export const Home = () => {
  const [list, setList] = useState([
    { id: 1, label: "Item 1", completed: false },
    { id: 2, label: "Item 2", completed: false },
    { id: 3, label: "Item 3", completed: false },
  ]);

  const handleAddItem = (item: string) => {
    setList([...list, { id: list.length + 1, label: item, completed: false }]);
  };

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
      <PageLayout title="Home">
        <InputAdd onAddItem={handleAddItem} />

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