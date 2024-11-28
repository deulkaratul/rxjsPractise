import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {
  first_subscriber_observable: number | undefined;
  second_subscriber_observable: number | undefined;
  thrid_subscriber_observable: number | undefined;

  ngOnInit() {

    //  //observabless are unicast
    // const observable=new Observable(obj=>obj.next(Math.random()));

    // //subscriber 1
    // observable.subscribe(value => {
    //   console.log("observable return unicast value 1:",value);  // Logs a random number
    // });

    // //subscriber 2
    // observable.subscribe(value => {
    //   console.log("observable return unicast value 2:",value);  // Logs a random number
    // });

    //------------------Observables are unicast-----------------
    //observable
    let observable = new Observable<number>(ele =>
      ele.next(Math.random()))

    //first subscriber
    observable.subscribe(result => {
      this.first_subscriber_observable = result;
      console.log(result)
    })

    //second subscriber
    observable.subscribe(result => {
      this.second_subscriber_observable = result;
      console.log(result)
    })

    //third subscriber
    observable.subscribe(result => {
      this.thrid_subscriber_observable = result;
      console.log(result)
    })
  }
}

