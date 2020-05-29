import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavigationService } from '../../../../Services/Navigations/navigation.service';
import { ToastrService } from 'ngx-toastr';
import { NavigationModel } from 'src/app/Models/Navigations/Navigation.model';
import { state } from '@angular/animations';

@Component({
  selector: 'app-menu-modifi',
  templateUrl: './menu-modifi.component.html',
  styleUrls: ['./menu-modifi.component.scss'],
  providers: [NavigationService],
  encapsulation: ViewEncapsulation.None
})
export class MenuModifiComponent implements OnInit {

  public load: boolean;
  public formGroup: FormGroup;
  public formCollapsed: FormGroup;
  public formItem: FormGroup;
  public formItemAlone: FormGroup;
  public menuGroupSelect: NavigationModel;
  public menuCollapsedSelect: NavigationModel;
  public menuItemSelect: NavigationModel;
  public menuItemAloneSelect: NavigationModel;
  // Listas
  public navGroup: NavigationModel[];
  public navCollapsed: NavigationModel[];
  public menuGroup: NavigationModel[];
  public menuCollapsed: NavigationModel[];
  public menuItem: NavigationModel[];
  public menuItemAlone: NavigationModel[];

  // tslint:disable-next-line: variable-name
  constructor(private _navService: NavigationService, private toastr: ToastrService) { }

  ngOnInit() {
    this.cargarFormGroup();
    this.cargarFormCollapsed();
    this.cargarFormItem();
    this.cargarFormItemAlone();
    this.cargarListas();
  }

  cargarListas() {
    this._navService.getNavByTypechildless('group', 2).subscribe(nav =>  this.menuGroup = nav);
    this._navService.getNavByTypechildless('collapse', 2).subscribe(nav =>  this.menuCollapsed = nav);
    this._navService.getNavByTypechildless('item', 2).subscribe(nav =>  this.menuItem = nav);
    this._navService.getNavByTypechildless('itemalone', 2).subscribe(nav =>  this.menuItemAlone = nav);
    this._navService.getNavByTypechildless('group', 1).subscribe(nav =>  this.navGroup = nav);
    this._navService.getNavByTypechildless('collapse', 1).subscribe(nav =>  this.navCollapsed = nav);
  }

  // Menus Group
  cargarFormGroup() {
    this.formGroup = new FormGroup({
      id: new FormControl(null),
      title: new FormControl('',  [Validators.required]),
      type: new FormControl('group'),
      icon: new FormControl(''),
      route: new FormControl(''),
      state: new FormControl(1),
      createDate: new FormControl(new Date()),
      createdByUser: new FormControl(1),
      updateDate: new FormControl(1),
      updatedByUser: new FormControl(new Date()),
      groupId: new FormControl(null)
    });
    this.formGroup.disable();
  }

  groupSelect() {
    this.formGroup.patchValue(this.menuGroupSelect);
    this.formGroup.enable();
  }

  cancelGroup() {
    this.menuGroupSelect = null;
    this.formGroup.disable();
  }

  onSubmitGroup() {
    this.updateNav(this.formGroup.value);
    this.formGroup.patchValue({
      title: '',
      state: 0
    });
    this.load = false;
  }

  // Menus Collapsed
  cargarFormCollapsed() {
    this.formCollapsed = new FormGroup({
      id: new FormControl(null),
      title: new FormControl('',  [Validators.required]),
      type: new FormControl('collapse'),
      icon: new FormControl('',  [Validators.required]),
      route: new FormControl('',  [Validators.required]),
      state: new FormControl(1),
      createDate: new FormControl(new Date()),
      createdByUser: new FormControl(1),
      updateDate: new FormControl(1),
      updatedByUser: new FormControl(new Date()),
      groupId: new FormControl(null,  [Validators.required])
    });
    this.formCollapsed.disable();
  }

  collapsedSelect() {
    this.formCollapsed.patchValue(this.menuCollapsedSelect);
    this.formCollapsed.enable();
  }

  cancelCollapsed() {
    this.menuCollapsedSelect = null;
    this.formCollapsed.disable();
  }

  onSubmitCollapsed() {
    this.updateNav(this.formCollapsed.value);
    this.formCollapsed.patchValue({
      title: '',
      icon: '',
      route: '',
      state: 0,
      groupId: null
    });
    this.load = false;
  }

  // Menus ITEM
  cargarFormItem() {
    this.formItem = new FormGroup({
      title: new FormControl('',  [Validators.required]),
      type: new FormControl('item'),
      icon: new FormControl('',  [Validators.required]),
      route: new FormControl('',  [Validators.required]),
      state: new FormControl(1),
      createDate: new FormControl(new Date()),
      createdByUser: new FormControl(1),
      updateDate: new FormControl(1),
      updatedByUser: new FormControl(new Date()),
      groupId: new FormControl(null,  [Validators.required])
    });
    this.formItem.disable();
  }

  itemSelect() {
    this.formItem.patchValue(this.menuItemSelect);
    this.formItem.enable();
  }

  cancelItem() {
    this.menuItemSelect = null;
    this.formItem.disable();
  }

  onSubmitItem() {
    this.updateNav(this.formItem.value);
    this.formItem.patchValue({
      title: '',
      icon: '',
      route: '',
      state: 0,
      groupId: null
    });
    this.load = false;
  }

  // Menus ITEM ALONE
  cargarFormItemAlone() {
    this.formItemAlone = new FormGroup({
      title: new FormControl('',  [Validators.required]),
      type: new FormControl('itemalone'),
      icon: new FormControl('',  [Validators.required]),
      route: new FormControl('',  [Validators.required]),
      state: new FormControl(1),
      createDate: new FormControl(new Date()),
      createdByUser: new FormControl(1),
      updateDate: new FormControl(new Date()),
      updatedByUser: new FormControl(1),
      groupId: new FormControl(null,  [Validators.required])
    });
    this.formItemAlone.disable();
  }

  itemAloneSelect() {
    this.formItemAlone.patchValue(this.menuItemAloneSelect);
    this.formItemAlone.enable();
  }

  cancelItemAlone() {
    this.menuItemAloneSelect = null;
    this.formItemAlone.disable();
  }

  onSubmitItemAlone() {
    this.updateNav(this.formItemAlone.value);
    this.formItemAlone.patchValue({
      title: '',
      icon: '',
      route: '',
      state: 0,
      groupId: null
    });
    this.load = false;
  }

  updateNav(nav: any) {
    this.load = true;
    this._navService.putNav(nav).subscribe(res => {
      if (res.status === 201 || res.status === 200) {
        this.toastr.success(res.body.message, 'Status: ' + res.status);
        setTimeout (() => {
          window.location.reload();
       }, 1500);
      } else if (res.status === 404 || res.status === 500 || res.status === 404) {
        this.toastr.error(res.body.message, 'Status: ' + res.status);
      } else if (res.status === 401) {
        this.toastr.info(res.body.message, 'Status: ' + res.status);
      }
    }, err => {
      this.toastr.error('Error en el servicio FALLO CONEXION', 'Status: ' + 500);
    });
  }



}
