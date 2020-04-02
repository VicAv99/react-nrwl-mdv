export interface Message {
  message: string;
}

export interface Task {
  id: string | number;
  name: string;
  description?: string;
}
