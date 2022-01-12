import { Component, OnInit } from '@angular/core';
import { ComunService } from '../services/comun.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pass:any;
  name:any;
  constructor(private ComunService: ComunService) { }
  ngOnInit(): void {
  }

  onSubmit(f:any) {
    this.ComunService.logar(f.form.value).subscribe((logServer) => {
      const { auth, token} = logServer;
    });
  }
}
