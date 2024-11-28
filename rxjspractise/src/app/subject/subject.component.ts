import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {ajax} from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {

  ngOnInit() {
    // const subject = new Subject();

    // //subscriber 1
    // subject.subscribe(value => {
    //   console.log("observable return MultiCast value 1:", value);  // Logs a random number
    // });

    // //subscriber 2
    // subject.subscribe(value => {
    //   console.log("observable return multicast value 2:", value);  // Logs a random number
    // });

    // subject.next(Math.random());

    const subject=new Subject();
    const data=ajax('https://jsonplaceholder.typicode.com/users');
    // data.subscribe(d=> console.log("Subscriber1: ",d));
    // data.subscribe(d=> console.log("Subscriber2: ",d));

    subject.subscribe(d=>console.log("Subscriber1: ",d));
    subject.subscribe(d=>console.log("Subscriber1: ",d));

    const result=data.subscribe(subject);
    
  
  }
}
