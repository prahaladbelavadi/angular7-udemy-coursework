import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { map, catchError } from 'rxjs/operators';
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
        postData
      ).subscribe((response) => {
        console.log(response);
      }, error => {
        this.error.next(error.message);
      });

  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post }>(
        'https://ng-complete-guide-udemy.firebaseio.com/posts.json'
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
    return this.http.delete('https://ng-complete-guide-udemy.firebaseio.com/posts.json');
  }

}
