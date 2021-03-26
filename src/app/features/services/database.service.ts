import { BaseService } from './base.service';
import { Inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService extends BaseService {

  constructor(
    @Inject(AngularFirestore) afs: AngularFirestore,
    private firestorePath: string
  ) {
    super(afs);
  }

  public getAllMaps() {
    return this.database.collection(`${this.firestorePath}/maps/maps`, ref => ref
      .orderBy('name', 'asc')
    ).valueChanges();
  }

  public getDataTypes(path: string) {
    return this.database.collection(this.firestorePath).doc(path).valueChanges();
  }

}