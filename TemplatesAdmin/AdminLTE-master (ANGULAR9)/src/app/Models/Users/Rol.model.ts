export class RolModel {

  constructor(public id: number,
              public name: string,
              public desc: string,
              public state: number,
              public createFech: Date,
              public createUser: number,
              public updateFech: Date,
              public updateUser: number) {}
}
