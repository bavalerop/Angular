export class NavigationModel {
    id: number;
    title: string;
    type: 'item' | 'collapse' | 'group' | 'itemalone';
    translate: string;
    icon: string;
    hidden: boolean;
    route: string;
    classes: string;
    functiones: any;
    state: number;
    createFech: Date;
    createUser: number;
    updateFech: Date;
    updateUser: number;
    index: number;
    children?: NavigationModel[];

  constructor(id: number, title: string, type: 'item' | 'collapse' | 'group' | 'itemalone', translate: string, icon: string,
              hidden: boolean, route: string, classes: string, functiones: any, state: number, createFech: Date,
              createUser: number, updateFech: Date, updateUser: number, index: number, children?: NavigationModel[]) {
    this.id = id;
    this.title = title;
    this.type = type;
    this.translate = translate;
    this.icon = icon;
    this.hidden = hidden;
    this.route = route;
    this.classes = classes;
    this.functiones = functiones;
    this.state = state;
    this.createFech = createFech;
    this.createUser = createUser;
    this.updateFech = updateFech;
    this.updateUser = updateUser;
    this.index = index;
    this.children = children;

    // sessionStorage.setItem('', )
  }
}
