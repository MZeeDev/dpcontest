import { HttpHeaders } from "@angular/common/http";
let httpHeaders: HttpHeaders = new HttpHeaders({ 'Content-type': 'application/json',
'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
'Access-Control-Allow-Origin':'*',
'Authorization': `bearer ${localStorage.getItem('token')}` });
export const Config = Object.freeze({
    API_BASE: "http://localhost:3000/api",
    HEADERS: { headers: httpHeaders },
    refresh: function () {
        httpHeaders = new HttpHeaders({ 'Content-type': 'application/json',       
        'Access-Control-Allow-Origin':'*', 'Authorization': `bearer ${localStorage.getItem('token')}` });    
    }
});
