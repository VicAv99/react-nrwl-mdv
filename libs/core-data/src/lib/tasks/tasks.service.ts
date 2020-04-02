import axios from 'axios';

import { Task } from '@task-manager/api-interfaces';

const BASE_URL = 'https://server-30-x-30.herokuapp.com';
const model = 'items';

const getUrl = `${BASE_URL}/${model}`;
const getUrlWithId = (id: string | number) => `${getUrl}/${id}`;

export const TasksService = {
  all: async () => {
    return (await axios.get(getUrl)).data;
  },
  find: async (id: string | number) => {
    return (await axios.get(getUrlWithId(id))).data;
  },
  create: async (task: Task) => {
    return (await axios.post(getUrl, task)).data;
  },
  update: async (task: Task) => {
    return (await axios.patch(getUrlWithId(task.id), task)).data;
  },
  delete: async (id: string | number) => {
    return (await axios.delete(getUrlWithId(id))).data;
  }
}
