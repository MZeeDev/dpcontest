import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from '../../config';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AuthServiceManual {
  public profile = {
    _id: '',
    firstname: '',
    lastname: '',
    email: '',
    image: '',
    password: '',
    dateofbirth: '',
    gender: '',
    city: '',
    country: '',
    authToken: '',
    createdAt: '',
    updatedAt: '',
    provider: '',
    name:'',
    photoUrl:''
  }
  constructor(private httpClient: HttpClient, private router: Router) { }
  //Sign Up
  public async signup(name, email, password) {
    let body = { name: name, email: email, password: password };
    let response = await this.httpClient.post(`${Config.API_BASE}/user/signup`, body, Config.HEADERS).toPromise();
    return this.loginWithToken((<any>response).token);
  }
  //for logIn 
  public async login(email, password) {
    let body = { email: email, password: password };
    let response = await this.httpClient.post(`${Config.API_BASE}/user/login`, body, Config.HEADERS).toPromise();
    return this.loginWithToken((<any>response).token);

  }
  //Im making this method for checking  Login Check
  public async isLoggedIn() {
    try {
      let token = localStorage.getItem('token');
      let response = await this.httpClient.post(`${Config.API_BASE}/user/login/check`, { token: token }, Config.HEADERS).toPromise();
      if ((<any>response).authenticated) {
        await this.getProfile(token);
        
        return true;
      }
      else return false;
    } catch (error) {
    
    }
  }
  //done
  public async getProfile(token) {
    try {
      let body = { token: token };
      let response = await this.httpClient.post(`${Config.API_BASE}/user/profile`, body, Config.HEADERS).toPromise();
      this.profile = <any>response;
    } catch (error) {
     
    }
  }
  public loginWithToken(token) {
    localStorage.setItem("token", token);
    this.router.navigate(['/']);
  }
//for Social logIn
public async getAuthState(user) {
  
  let response = await this.httpClient.post(`${Config.API_BASE}/user/login/social`,user ).toPromise();
  return this.loginWithToken((<any>response).token);
}
  public logout() {
    try {
      let response = localStorage.removeItem("token");
      this.router.navigate(['/user-gate-way']);
    } catch (error) {
    
      
    }

  }

}