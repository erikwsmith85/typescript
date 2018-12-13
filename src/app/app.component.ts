import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FieldBook';
   items: Observable<any[]>;
   constructor(public db: AngularFireDatabase){
      this.tracts = db.list('tracts').valueChanges();


   }
}
