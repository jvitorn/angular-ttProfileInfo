import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { StorageLocalService } from './storage-local.service';

@Injectable({
  providedIn: 'root'
})
export class ComunService {
  apiHttp$ : String = 'https://profile-tt.herokuapp.com'
  token : String = 'null' ;
  constructor(private http : HttpClient,private StorageLocalService: StorageLocalService) {
    
  }
  listarTodosProfiles() : Observable <any> {
    const token = this.token = this.StorageLocalService.get('token');
    const header = new HttpHeaders({'x-access-token': token,'Content-Type':'application/json; charset=utf-8'});
    return this.http.get(`${this.apiHttp$}/profile/`, { headers:  header});
  }
  listarProfileUnico(id:String) : Observable <any> {
    const token = this.token = this.StorageLocalService.get('token');
    const header = new HttpHeaders({'x-access-token': token,'Content-Type':'application/json; charset=utf-8'});
    return this.http.get(`${this.apiHttp$}/profile/${id}`, { headers:  header});
  }
  logar(login:any) : Observable <any> {
    return this.http.post(`${this.apiHttp$}/login`,login);
  }

}
