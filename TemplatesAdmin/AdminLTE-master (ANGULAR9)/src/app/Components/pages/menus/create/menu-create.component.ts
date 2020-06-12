import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavigationService } from '../../../../Services/Navigations/navigation.service';
import { ToastrService } from 'ngx-toastr';
import { NavigationModel } from 'src/app/Models/Navigations/Navigation.model';

@Component({
  selector: 'app-menu-create',
  templateUrl: './menu-create.component.html',
  styleUrls: ['./menu-create.component.scss'],
  providers: [NavigationService],
  encapsulation: ViewEncapsulation.None
})
export class MenuCreateComponent implements OnInit {

  public load: boolean;
  public formGroup: FormGroup;
  public formCollapsed: FormGroup;
  public formItem: FormGroup;
  public formItemAlone: FormGroup;
  // Listas
  public navGroup: NavigationModel[];
  public navCollapsed: NavigationModel[];

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
    this._navService.getNavByTypechildless('group', 1).subscribe(nav =>  this.navGroup = nav);
    this._navService.getNavByTypechildless('collapse', 1).subscribe(nav =>  this.navCollapsed = nav);
  }

  // Menus Group
  cargarFormGroup() {
    this.formGroup = new FormGroup({
      title: new FormControl('',  [Validators.required]),
      type: new FormControl('group'),
      icon: new FormControl(''),
      route: new FormControl(''),
      state: new FormControl(1),
      createDate: new FormControl(new Date()),
      createdByUser: new FormControl(1),
      updateDate: new FormControl(null),
      updatedByUser: new FormControl(null),
      groupId: new FormControl(null)
    });
  }

  onSubmitGroup() {
    this.saveNav(this.formGroup.value);
    this.formGroup.patchValue({
      title: ''
    });
    this.load = false;
  }

  // Menus Collapsed
  cargarFormCollapsed() {
    this.formCollapsed = new FormGroup({
      title: new FormControl('',  [Validators.required]),
      type: new FormControl('collapse'),
      icon: new FormControl('',  [Validators.required]),
      route: new FormControl('',  [Validators.required]),
      state: new FormControl(1),
      createDate: new FormControl(new Date()),
      createdByUser: new FormControl(1),
      updateDate: new FormControl(null),
      updatedByUser: new FormControl(null),
      groupId: new FormControl(null,  [Validators.required])
    });
  }

  onSubmitCollapsed() {
    this.saveNav(this.formCollapsed.value);
    this.formCollapsed.patchValue({
      title: '',
      icon: '',
      route: '',
      groupId: null
    });
    this.load = false;
  }

  // Menus Item
  cargarFormItem() {
    this.formItem = new FormGroup({
      title: new FormControl('',  [Validators.required]),
      type: new FormControl('item'),
      icon: new FormControl('',  [Validators.required]),
      route: new FormControl('',  [Validators.required]),
      state: new FormControl(1),
      createDate: new FormControl(new Date()),
      createdByUser: new FormControl(1),
      updateDate: new FormControl(null),
      updatedByUser: new FormControl(null),
      groupId: new FormControl(null,  [Validators.required])
    });
  }

  onSubmitItem() {
    this.saveNav(this.formItem.value);
    this.formItem.patchValue({
      title: '',
      icon: '',
      route: '',
      groupId: null
    });
    this.load = false;
  }

  // Menus ItemAlone
  cargarFormItemAlone() {
    this.formItemAlone = new FormGroup({
      title: new FormControl('',  [Validators.required]),
      type: new FormControl('itemalone'),
      icon: new FormControl(''),
      route: new FormControl('',  [Validators.required]),
      state: new FormControl(1),
      createDate: new FormControl(new Date()),
      createdByUser: new FormControl(1),
      updateDate: new FormControl(null),
      updatedByUser: new FormControl(null),
      groupId: new FormControl(null,  [Validators.required])
    });
  }

  onSubmitItemAlone() {
    this.saveNav(this.formItemAlone.value);
    this.formItemAlone.patchValue({
      title: '',
      icon: '',
      route: '',
      groupId: null
    });
    this.load = false;
  }

  saveNav(nav: any) {
    this.load = true;
    this._navService.postNav(nav).subscribe(res => {
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
