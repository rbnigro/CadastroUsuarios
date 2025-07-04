import { IAddress } from "./address.interface"
import { ICompany } from "./company.interface";

export interface IUserPlaceHolder {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}