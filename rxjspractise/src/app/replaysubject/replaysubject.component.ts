import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replaysubject',
  templateUrl: './replaysubject.component.html',
  styleUrls: ['./replaysubject.component.css']
})
export class ReplaysubjectComponent {



  ngOnInit() {
    const replaysubject = new ReplaySubject(2);

    replaysubject.next(111);
    replaysubject.next(222);
    replaysubject.next(333);

    replaysubject.subscribe(result => {
      console.log("S1:", result);
    })
    replaysubject.next(444);

    replaysubject.subscribe(result=>{console.log("S2:",result);
    })

    replaysubject.next(555);


  }

}
