import { create } from "zustand";

interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
}

const todoDB: Todo[] = [
  { id: "123", text: "firstTodo", isCompleted: false },
  { id: "124", text: "hi there", isCompleted: true },
];
todoDB.push({ id: "125", text: "this is 3rd todo", isCompleted: true });

interface ITodo {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
  addTodo: (todo: Todo) => void;
}

export const useTodo = create<ITodo>((set) => ({
  todos: [...todoDB],
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    })),
  deleteTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },

  updateTodo: (id, text) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: text } : todo,
      ),
    }));
  },

  addTodo: (todo) => {
    set((state) => ({
      todos: [...state.todos, todo],
    }));
  },
}));
