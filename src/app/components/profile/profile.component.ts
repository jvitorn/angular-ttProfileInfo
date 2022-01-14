import { Component, OnInit,OnDestroy  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageLocalService } from '../../services/storage-local.service';
import { ComunService } from 'src/app/services/comun.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  id: any;
  profile?:any
  private sub: any;
  constructor(private route: ActivatedRoute,private StorageLocalService: StorageLocalService,private Api: ComunService) { }

  backToPage() {
    history.back()
  }
  backToLogin() {
    this.StorageLocalService.clear();
    this.StorageLocalService.redirectToLogin();
  }
  ngOnInit(): void {
    
    this.StorageLocalService.redirectToLogin();
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.Api.listarProfileUnico(this.id).subscribe(s => {
        const {profile} = s
        this.profile = profile;
      },
        e => {
          console.error('erro',e)
        }
      );
   });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
