import { generateUUID } from "./validation";

export interface IDb {
  id: string;
  name: string;
  age: number;
}

export const data: IDb[] = [
  {
    name: 'alo123',
    age: 12,
    id: generateUUID()
  },

  {
    name: 'Cristian',
    age: 23,
    id: generateUUID()
  },

  {
    name: 'cast',
    age: 43,
    id: generateUUID()
  },
];