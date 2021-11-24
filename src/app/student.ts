import { Finance } from "./finance";
import { Group } from "./group";

export interface Student {
    id: number;
    name: string;
    lastName: string;
    middleName: string;
    stGroup: Group;
    finance: Finance;
    phone: string;
    userPic: string;
}