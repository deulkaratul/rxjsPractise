import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behevioursubject',
  templateUrl: './behevioursubject.component.html',
  styleUrls: ['./behevioursubject.component.css']
})
export class BehevioursubjectComponent {

  ngOnInit() {
    const behSubj = new BehaviorSubject<number>(123);

    behSubj.subscribe(result => console.log('Sub1:', result))
    behSubj.next(456);
    behSubj.subscribe(result=>console.log("Sub2:",result))

  }
}
