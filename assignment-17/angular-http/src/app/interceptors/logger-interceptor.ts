import {
  HttpInterceptorFn,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

function logRequest(method: string, url: string, headers: any, body: any) {
  console.log(` HTTP Request: ${method} ${url}`);
  console.log(' Method:', method);
  console.log(' URL:', url);
  console.log(' Headers:', headers);
  if (body) console.log('📦 Body:', body);
  console.log('');
}
function logResponse(method: string, url: string, status: number, body: any) {
  console.log(` HTTP Response: ${method} ${url}`);
  console.log('Status:', status);
  console.log(' Response Body:', body);
  console.log('');
}
function logError(method: string, url: string, status: number, error: any) {
  console.log(` HTTP Error: ${method} ${url}`);
  console.log(' Status:', status);
  console.log(' Error:', error);
  console.log('');
}

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  logRequest(req.method, req.url, req.headers, req.body);

  return next(req).pipe(
    tap((event) => {
      if (event instanceof HttpResponse) {
        logResponse(req.method, req.url, event.status, event.body);
      }
    }),
    catchError((error: HttpErrorResponse) => {
      logError(req.method, req.url, error.status, error.message);
      return throwError(() => error);
    })
  );
};
