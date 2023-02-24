export interface INewsData {
  userId: number;
  id: number;
  title: string;
  body: string;
}
interface IUserData {
  username: string;
  password: string;
}
export interface StoreState {
  dataNews: INewsData[];
  userData: IUserData;
}
