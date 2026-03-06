export interface Todo {
  id: string;
  title: string;
  done: boolean;
}

export type FilterType = 'all' | 'todo' | 'done';