
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http'
import { tap } from 'rxjs'


export class LoggingInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(tap(event => {
      console.log('Outgoing Request');
      console.log(req.url);
      console.log(req.headers);

      return next.handle(req).pipe(
        tap(event => {
          if (event.type === HttpEventTyep.Response) {
            console.log('Incoming Response');
            console.log(event.body);
            console.log(event.headers); l
          }
        })
      )
    }));
  }
}
