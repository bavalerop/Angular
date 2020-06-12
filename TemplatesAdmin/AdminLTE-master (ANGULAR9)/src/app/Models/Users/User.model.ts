import { RolModel } from './Rol.model';

export class UserModel {

    constructor(public id: number,
                public name1: string,
                public name2: string,
                public lastName: string,
                public surName: string,
                public userName: string,
                public passWord: string,
                public birthDay: Date,
                public mail: string,
                public address: string,
                public phone: number,
                public logo: string,
                public state: number,
                public createFech: Date,
                public updateFech: Date,
                public rol: RolModel) {}
}
