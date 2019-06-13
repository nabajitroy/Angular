import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }
  getAuthor(){
    return ['Author1','Auther2','Auther3']
  }
}
