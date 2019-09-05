import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class AUthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Request is on its way');
    const modifiedRequest = req.clone({ headers: req.headers.append('Auth', 'xyz') });

    return next.handle(modifiedRequest).pipe(tap(event=>{
      if(event.type === HttpEventType.Response){
         console.log('Response arrived, body data');
         console.log(event.body);

      }
    }));
  }
}
