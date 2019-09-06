import { Modules } from './modules.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../../login/storage.service';
import { Roles } from './roles.model';
import { environment } from '../../../../../environments/environment.prod';





@Injectable()
export class RolesService {


  constructor(
    private _http: HttpClient,
    private _session: StorageService
  ) {
  }
  /**
     * Obtiene los Roles del MW
     */
  get(): Observable<Roles[]> {
    var headers = new HttpHeaders().set('Authorization', this._session.getCurrentSession().token);
    return this._http.get<Roles[]>(environment.api_url + '/api/roles', { headers: headers });
  }

  /**
   * Obtiene todos los modules del MW.
   *
   */
  getModules(): Observable<Modules[]> {
    var headers = new HttpHeaders().set('Authorization', this._session.getCurrentSession().token);
    return this._http.get<Modules[]>(environment.api_url + '/api/roles/modules', { headers: headers });
  }

  /**
   * Inserta un nuevo Rol.
   */

   /**
   * Actualiza una muestra del MW
   */
  update(body: Roles): Observable<any> {
    var headers = new HttpHeaders().set('Authorization', this._session.getCurrentSession().token);
    return this._http.put(environment.api_url + '/api/roles', body, { headers: headers });
  }

  /**
   * Inserta una nueva muestra al MW
   */
  insert(body: Roles): Observable<any> {
    var headers = new HttpHeaders().set('Authorization', this._session.getCurrentSession().token);
    return this._http.post(environment.api_url + '/api/roles', body, { headers: headers });
  }

}
