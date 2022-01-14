import { Component, OnInit } from '@angular/core';
import { StorageLocalService } from '../../services/storage-local.service';
import { ComunService } from 'src/app/services/comun.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profiles?:any
  constructor(private router: Router,private StorageLocalService: StorageLocalService,private ComunService: ComunService) {
  }
  verProfile(id:any) {
    this.router.navigate([`/profile/${id}`])
    console.error('passando id',id)
    //this.router.navigate(['/profile'],id);
  }
  myStyle(id:string, border:string , color:string, icon:boolean) : void {
    const card = document.getElementById(id);
    let r = true;
    let c = card?.getElementsByClassName('card-title-twitter');
    if(border === 'false') {
      r = false;
      border = 'rgba(0,0,0,.125)';
      c = card?.getElementsByTagName("h6");
    }
    if(icon) {
      let icons = card?.getElementsByClassName("bi");  
      this.changeColor(icons,color,false,true);
    }
    card!.style!.borderColor = border;
    this.changeColor(c,color,r,false);
  }
  changeColor(c:any,color:string,remove:boolean,icon:boolean) : void {
    for (const cn of c) {
      if(!icon) {
        remove ? cn.classList.remove("card-title-twitter") : cn.classList.add("card-title-twitter");
      }
      cn.style.color = color;
    }
  }
  ngOnInit(): void {
    this.StorageLocalService.redirectToLogin();
    this.ComunService.listarTodosProfiles().subscribe(s => {
      const {profile} = s
      this.profiles = profile;
    },
      e => {
        console.error('erro',e)
      }
    );
  }

}
