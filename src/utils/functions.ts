import { IFile } from "../interfaces";

export const doesFileOpjectExist = (arr: IFile[], id: string) => {
  return arr.some((obj) => obj.id === id);
};
