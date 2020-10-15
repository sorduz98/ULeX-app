import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

interface userData {
  tokenExpirationDate: Date;
  login: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<userData>({
    tokenExpirationDate: null,
    login: false
  });
  private tokenExpirationTimer: any;
  constructor(private router: Router) { }

  login(){
    let expirationDate: Date = new Date(new Date().getTime());
    expirationDate.setMinutes(expirationDate.getMinutes()+10); //Tiempo para permanecer autenticado

    const newUser: userData = {
      tokenExpirationDate: expirationDate,
      login: true
    }
    localStorage.setItem('userData', JSON.stringify(newUser));
    this.user.next(newUser);

    const expiresIn = new Date(newUser.tokenExpirationDate).getTime() - new Date().getTime();
    this.autoLogout(expiresIn);
    this.router.navigate(['/productos']);
  }

  autoLogin(){
    const newUser: userData = JSON.parse(localStorage.getItem('userData'));
    if(!newUser){
      return;
    }
    if(newUser.login){
      const expiresIn = new Date(newUser.tokenExpirationDate).getTime() - new Date().getTime();
      this.user.next(newUser);
      this.autoLogout(expiresIn);
      this.router.navigate(['/productos']);
    }
  }

  logout(){
    localStorage.removeItem('userData');
    this.router.navigate(['/auth']);
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
    this.user.next({tokenExpirationDate: null, login: false});
  }

  autoLogout(expirationDuration){
    this.tokenExpirationTimer = setTimeout(()=>{this.logout();}, expirationDuration);
  }
}
