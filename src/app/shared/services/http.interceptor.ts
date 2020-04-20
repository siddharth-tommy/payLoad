import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
@Injectable()
export class InterceptedHttp implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with token if available
    let currentToken = localStorage.getItem("payloadtoken");
    const baseUrl = environment.apiURL;
    if (currentToken) {
      request = request.clone({
        setHeaders: {
          "Content-Type": `application/json`,
          Authorization: `Bearer ${currentToken}`
        }
      });
    }
    if (request.url != '/assets/i18n/en.json') {
      request = request.clone({
        url: `${baseUrl}${request.url}`
      });
    }
    return next.handle(request);
  }
}