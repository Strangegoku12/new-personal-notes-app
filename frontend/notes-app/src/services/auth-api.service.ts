import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private _http:HttpClient) {}
loginapi(logindatas: any): Observable<any> {
  const url = 'http://localhost:4000/login/logindata';
  return this._http.post<any>(url, logindatas)
    .pipe(
      catchError((error) => {
        console.error('Login API failed', error);
        return throwError(() => error);
      })
    );
}

  

  
}
