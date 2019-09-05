import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Post } from './post.model';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class PostsService {

  constructor(private http: HttpClient) { }
  error = new Subject<string>();
  createAndStorePost(title: string, content: string) {

    const postData: Post = { title, content };

    return this.http
      .post<{ name: string }>(
        'https://ng-complete-guide-udemy.firebaseio.com/posts.json',
        postData,
        {
          observe: 'response'
        }
      ).subscribe((response) => {
        console.log(response);
      }, error => {
        this.error.next(error.message);
      });

  }

  fetchPosts() {
    let searchParams = new HttpParams();

    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('Custom', 'key');

    return this.http
      .get<{ [key: string]: Post }>(
        'https://ng-complete-guide-udemy.firebaseio.com/posts.json', {
          headers: new HttpHeaders({
            'Custom-Header': 'Hello'
          }),
          params: searchParams
          // params: new HttpParams().set('print', 'pretty')
        }
      )
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http.delete('https://ng-complete-guide-udemy.firebaseio.com/posts.json', {
      observe: 'events',
      responseType: 'json'
    })
      .pipe(
      //   tap(event => {
      //   console.log(event);
      //   if (event.type = HttpEventType.Sent) {
      //     // ..
      //   }
      //   if (event.type = HttpEventType.Response) {
      //     console.log(event.body);
      //   }
      // })
      );
  }

}
