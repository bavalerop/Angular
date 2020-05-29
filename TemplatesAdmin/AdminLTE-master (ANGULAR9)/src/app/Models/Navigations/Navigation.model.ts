export class NavigationModel {
    id: number;
    title: string;
    type: 'item' | 'collapse' | 'group' | 'itemalone';
    icon: string;
    route: string;
    state: number;
    createFech: Date;
    createUser: number;
    updateFech: Date;
    updateUser: number;
    children?: NavigationModel[];

  constructor(id: number, title: string, type: 'item' | 'collapse' | 'group' | 'itemalone', icon: string,
              route: string,  state: number, createFech: Date, createUser: number, updateFech: Date,
              updateUser: number,  children?: NavigationModel[]) {
    this.id = id;
    this.title = title;
    this.type = type;
    this.icon = icon;
    this.route = route;
    this.state = state;
    this.createFech = createFech;
    this.createUser = createUser;
    this.updateFech = updateFech;
    this.updateUser = updateUser;
    this.children = children;
    // sessionStorage.setItem('', )
  }
}
