export class Modules {

    public id: number;
    public esName: string;
    public enName: string;
    public moduleCode: string;

    constructor(id: number, esName: string, enName: string, moduleCode: string) {
        this.id = id;
        this.esName = esName;
        this.enName = enName;
        this.moduleCode = moduleCode;
    }

}
