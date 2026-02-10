import { create } from "zustand";

interface ITodoStore {
  count: number;
  increaseTodo: () => void;
  decreaseTodo: () => void;
  resetTodo: () => void;
}

export const useTodoStore = create<ITodoStore>((set) => ({
  count: 0,
  increaseTodo: () => set((state) => ({ count: state.count + 1 })),
  decreaseTodo: () => set((state) => ({ count: state.count - 1 })),
  resetTodo: () => set(() => ({ count: 0 })),
}));
