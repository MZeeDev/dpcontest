import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from '../../config';
import { HttpClient } from '@angular/common/http';
@Injectable()

export class CompitationService {

    constructor(private httpClient: HttpClient, private router: Router) { }

    public startCompittaion(obj) {
        let response = this.httpClient.post(`${Config.API_BASE}/competition`, obj, Config.HEADERS).toPromise();
        return response;
    }

    public getAllCompitators() {
        let response = this.httpClient.get(`${Config.API_BASE}/competition`, Config.HEADERS).toPromise();
        return response;
    }

    public getCompittaionbyId(Competationid) {
        let response = this.httpClient.get(`${Config.API_BASE}/candidate/vote/${Competationid}`, Config.HEADERS).toPromise();
        return response;
    }

    public deleteCompittaionbyId(Competationid) {
        let response = this.httpClient.delete(`${Config.API_BASE}/candidate/vote/${Competationid}`, Config.HEADERS).toPromise();
        return response;
    }

    public Vote(candidateId) {
        let body = { candidateId: candidateId }
        let response = this.httpClient.put(`${Config.API_BASE}/candidate/vote`, body, Config.HEADERS).toPromise();
        return response;
    }
}