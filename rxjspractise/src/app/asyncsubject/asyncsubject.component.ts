import { Component } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-asyncsubject',
  templateUrl: './asyncsubject.component.html',
  styleUrls: ['./asyncsubject.component.css']
})
export class AsyncsubjectComponent {

  ngOnInit() {
    //AsyncSubject is a subject that only emits the last value
    //will not emit any values until the subject’s complete() method is called
    const asyncSubject = new AsyncSubject();

    asyncSubject.next(111);
    asyncSubject.next(222);
    asyncSubject.next(333);

    asyncSubject.subscribe(result => {
      console.log("S1: ", result);
    })
    asyncSubject.next(555);
    asyncSubject.complete();

  }
}
