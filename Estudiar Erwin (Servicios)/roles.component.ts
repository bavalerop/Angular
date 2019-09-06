import { Component, OnInit } from '@angular/core';
import { RolesService } from '../../../../services/settings/roles/roles.service';
import { Roles } from '../../../../services/settings/roles/roles.model';
import { NotificationsService } from 'angular2-notifications/dist';
import { Modules } from '../../../../services/settings/roles/modules.model';
import { StorageService } from '../../../../services/login/storage.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  providers: [RolesService, NotificationsService]
})
export class RolesComponent implements OnInit {

  public _rolesData: any[];
  public _selectedRol: Roles;
  public _enabledAll = false;
  public _rolModules: Modules[];
  public _allModules: any[];


  constructor(
    public _rolesService: RolesService,
    public _notifications: NotificationsService,
    private _session: StorageService,
    private _translate: TranslateService

  ) { }

  ngOnInit() {
    this._translate.use(this._session.getCurrentLanguage());
    this.getRoles();
    this.getModules();
    this._selectedRol = new Roles();
  }

  /**
   * Obtiene los Roles de MW.
   */
  getRoles() {
    this._rolesService.get().subscribe(
      resp => {
        this._rolesData = resp;
      },
      error => {
        console.log(error);
      });
  }

  /**
   * Obtiene los Modules del MW.
   */

  getModules() {
    this._rolesService.getModules().subscribe(
      resp => {
        this._allModules = resp;
        console.log(resp);
      },
      error => {
        console.log(error);
      }
    );

  }


  select(role: Roles) {
    this._selectedRol = new Roles();
    this._selectedRol.id = role.id;
    this._selectedRol.name = role.name;
    this._selectedRol.description = role.description;
    this._selectedRol.modules = role.modules;
  }

  newRole() {
    this.reset();
    this._enabledAll = true;
  }

  reset() {
    this._selectedRol = new Roles();
    this._selectedRol.id = null;
    this._selectedRol.name = '';
    this._enabledAll = false;
  }

  edit() {
    if (this._selectedRol.id === null || this._selectedRol.id === undefined) {
      this._enabledAll = false;
      this._notifications.alert('Editar', 'Para editar debe seleccionar un rol de la tabla');
    } else {
      this._enabledAll = true;
    }
  }

  save() {
    if (this._selectedRol.id == null || this._selectedRol.id === undefined) {

      this._rolesService.insert(this._selectedRol).subscribe(
        resp => {
          console.log(resp);
          this.getRoles();
          this.reset();
        }, error => {
          this._notifications.error('Error al guardar', 'Error al guardar nuevo Rol');
        });
    } else {
      this._rolesService.update(this._selectedRol).subscribe(
        resp => {
          console.log(resp);
          this.getRoles();
          this.reset();
        },
        error => {
          this._notifications.error('Error al guardar', 'Error al  actualizar el Rol');
        }
      );
    }
  }
}
