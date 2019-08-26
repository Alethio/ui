import { UserPlan } from "./UserPlan";

export interface IUserProfileBasic {
    email: string;
    plan: UserPlan;
    picture: string | undefined;
}
