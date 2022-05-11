import { Injectable } from '@angular/core';
import { CATS } from '../../mock-cats'
import { Cat } from '../models/cat';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CatService {

  getCats$: Observable<Cat[]> = of(CATS);

  /*
  getCats(): Observable<Cat[]> {
    return of(CATS);
  }
  */

  constructor() { }
}
