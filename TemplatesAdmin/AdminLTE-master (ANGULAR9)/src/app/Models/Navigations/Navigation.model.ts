export class NavigationModel {
  constructor(
    id: number,
    title: string,
    type: 'item' | 'collapse' | 'group',
    translate?: string,
    icon?: string,
    hidden?: boolean,
    route?: string,
    classes?: string,
    functiones?: any,
    children?: NavigationModel[]
  ) {
    id = 0;
    title = '';
    translate = '';
    icon = '';
    hidden = false;
    route = '';
    classes = '';
    functiones = '';
    children = [];
  }
}
