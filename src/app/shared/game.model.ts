import { ITeamModel } from "./team.model";

export interface IGame{

    date?:Date;
    local?:ITeamModel;
    visitant?:ITeamModel;
}