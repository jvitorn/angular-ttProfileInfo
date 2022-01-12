import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  apiHttp$ : String = 'https://profile-tt.herokuapp.com'
  constructor(private http : HttpClient) {
    
  }
  listarTodosProdutos() {
    return this.http.get(`${this.apiHttp$}/profile/`);
  }
}
