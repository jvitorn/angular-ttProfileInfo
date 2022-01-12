import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ComunService {
  apiHttp$ : String = 'https://profile-tt.herokuapp.com'
  constructor(private http : HttpClient) {
    
  }
  listarTodosProdutos() {
    return this.http.get(`${this.apiHttp$}/profile/`);
  }
  
  logar(login:any) : Observable <any> {
    return this.http.post(`${this.apiHttp$}/login`,login);
  }
}
