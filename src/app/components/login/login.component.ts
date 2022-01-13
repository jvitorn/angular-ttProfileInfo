import { Component, OnInit } from '@angular/core';
import { ComunService } from '../../services/comun.service';
import { NgForm } from '@angular/forms';
import { StorageLocalService } from '../../services/storage-local.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pass: any;
  name: any;
  msg: any;
  doc: any;

  constructor(private router: Router, private ComunService: ComunService, private StorageLocalService: StorageLocalService) {

  }

  ngOnInit(): void {

  }
  onSubmit(f: NgForm) {
    if (f.valid) {
      this.ComunService.logar(f.form.value)
        .subscribe(success => {
          const { auth, token } = success;
          this.StorageLocalService.set("token", token);
          this.msg = false;
          this.router.navigate(['/home']); 
        },
          e => {
            const { error } = e;
            this.msg = error.msg
          }
        )

    }

  }
}
