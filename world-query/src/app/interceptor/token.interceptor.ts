/* Intercepta todas las peticiones para mandar el token a travez del header */
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJkdXZhbkBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJrZ195dmZwZmRCbGpPQlJWN1lVejRsRnRfcnlTZWQyamF4bzdmM201U2dFUTRIWU5ocDk3Q2JLdUc1NHVYc0wwSXVBIn0sImV4cCI6MTY4MTg3NjI1NX0.BCYzZL4R6g84nSKiQ8-fHlUGRxYp18gjt6NjUuvyVYg';
  constructor() {}
  /* Pasamos el Token para todas las peticiones */
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      /* En los headers por medio del bearer enviamos el token almacenado en el localStorage */
      setHeaders: {
        Authorization: `Bearer ${this.token}`,
        Accept: 'application/json',
      },
    });
    return next.handle(req);
  }
}
