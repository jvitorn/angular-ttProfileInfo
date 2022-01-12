import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pass:any;
  name:any;
  constructor() { }
  ngOnInit(): void {
  }

  onSubmit(f:any) {
   console.error('testando retorno do form',f.form);
  }
}
