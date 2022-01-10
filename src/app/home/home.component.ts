import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }
  // myStyle(id:string,border:string,color:string,icon:boolean) {
  //   this.cardEdit = document.getElementById(id) as HTMLElement;
  //   let r = true;
  //   let c = card.getElementsByClassName('card-title-twitter');
  //   if(!border) {
  //     r = false;
  //     border = 'rgba(0,0,0,.125)';
  //     c = card.getElementsByTagName("h6");
  //   }
  //   if(icon) {
  //     let icons = card.getElementsByClassName("bi");
  //     changeColor(icons,color,false,true);
  //   }
  //   card.style.borderColor = border ;
  //   return changeColor(c,color,r,false);
  // }
  
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
  }

}
