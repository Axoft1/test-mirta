export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface IComment {
  postId: number;
  id: number;
  name: string;
  body: string;
  email: string;
}
export interface IUser {
  map(arg0: (e: IPost) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
  address: IAddress;
  company: ICompany;
  email: string;
  id: 1;
  name: string;
  phone: string;
  username: string;
  website: string;
}
interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}
interface IGeo {
  lat: string;
  lng: string;
}