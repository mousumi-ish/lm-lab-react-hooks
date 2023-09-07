// make an api call using useEffect
import { useState, useEffect } from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const fetchTodo = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/2"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};
export const APICall = () => {
  // Your code here!
  const [todoList, setJson] = useState<Todo | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const todoData = await fetchTodo();
      setJson(todoData);
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>useEffect</h2>
      {todoList ? <p>{todoList.title}</p> : <p>please wait...</p>}
      {todoList === null && <p>Error fetching data.</p>}
    </>
  );
};
