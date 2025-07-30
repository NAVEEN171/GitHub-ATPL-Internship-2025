import {
  HttpInterceptorFn,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

const logger = {
  request: (method: string, url: string, headers: any, body: any) => {
    console.group(` HTTP Request: ${method} ${url}`);
    console.log(' Method:', method);
    console.log(' URL:', url);
    console.log(' Headers:', headers);
    if (body) console.log('📦 Body:', body);
    console.groupEnd();
  },

  response: (method: string, url: string, status: number, body: any) => {
    console.group(` HTTP Response: ${method} ${url}`);
    console.log('Status:', status);
    console.log(' Response Body:', body);
    console.groupEnd();
  },

  error: (method: string, url: string, status: number, error: any) => {
    console.group(` HTTP Error: ${method} ${url}`);
    console.log(' Status:', status);
    console.log(' Error:', error);
    console.groupEnd();
  },
};

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(req.headers);
  logger.request(
    req.method,
    req.url,
    req.headers.keys().reduce((headers: any, key) => {
      headers[key] = req.headers.get(key);
      return headers;
    }, {}),
    req.body
  );

  return next(req).pipe(
    tap((event) => {
      if (event instanceof HttpResponse) {
        logger.response(req.method, req.url, event.status, event.body);
      }
    }),
    catchError((error: HttpErrorResponse) => {
      logger.error(req.method, req.url, error.status, error.message);
      return throwError(() => error);
    })
  );
};
