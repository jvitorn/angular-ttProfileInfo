import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StorageLocalService {
  private storage: Storage;
  constructor(private router: Router) {
    this.storage = window.localStorage;
  }

  set(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  get(key: string) {
    const strItem = this.storage.getItem(key);
    return JSON.parse(strItem ? strItem : 'null');
  }

  remove(key: string) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
  redirectToLogin() {
    if(this.get('token') == null) this.router.navigate(['/login']);
  }
}
