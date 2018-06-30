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
    name: '',
    photoUrl: ''
  }

  constructor(private httpClient: HttpClient, private router: Router) { }
  //Sign Up
  // public async signup(firstname,lastname, email, password) {
  //   let body = { firstname: firstname,lastname:lastname, email: email, password: password };
  //   let response = await this.httpClient.post(`${Config.API_BASE}/user/signup`, body, Config.HEADERS).toPromise();
  //   return this.loginWithToken((<any>response).token);
  // }
  public async signIn( email, password) {
    let body = {  email: email, password: password };
    let response = await this.httpClient.post(`${Config.API_BASE}/user/login`, body, Config.HEADERS).toPromise();
    return this.loginWithToken((<any>response).token);
  }
  public async signup(value) {

    let response = await this.httpClient.post(`${Config.API_BASE}/user/signup`, value, Config.HEADERS).toPromise();
    return this.loginWithToken((<any>response).token);
  }

  updateWeatherStatus(city: string) {
    // a1f2d85f6babd3bf7afd83350bc5f2a6
    return this.httpClient.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+'&APPID=a1f2d85f6babd3bf7afd83350bc5f2a6&units=imperial&cnt=7', Config.HEADERS).toPromise();
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

    let response = await this.httpClient.post(`${Config.API_BASE}/user/login/social`, user).toPromise();
    return this.loginWithToken((<any>response).token);
  }
  public logout() {
    try {
      let response = localStorage.removeItem("token");
      this.router.navigate(['/user-gate-way']);
    } catch (error) {
    }
  }
  public getAllUser() {
    return this.httpClient.get(`${Config.API_BASE}/user`, Config.HEADERS).toPromise();
  }
  public getAllUserById(_id) {
    return this.httpClient.get(`${Config.API_BASE}/user?id=${_id}`, Config.HEADERS).toPromise();
  }

}