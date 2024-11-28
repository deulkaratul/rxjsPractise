import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { SubjectComponent } from './subject/subject.component';
import {BehevioursubjectComponent} from './behevioursubject/behevioursubject.component';
import { ReplaysubjectComponent } from './replaysubject/replaysubject.component';
import { AsyncsubjectComponent } from './asyncsubject/asyncsubject.component';


const routes: Routes = [
  {path:'promise',component:PromiseComponent},
  {path:'observable',component:ObservableComponent},
  {path:'asyncawait',component:AsyncAwaitComponent},
  {path:'subject',component:SubjectComponent},
  {path:"behavioursubject",component:BehevioursubjectComponent},
  {path:"replaysubject",component:ReplaysubjectComponent},
  {path:"asyncsubject",component:AsyncsubjectComponent},
  {path:'**',redirectTo:'promise'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
