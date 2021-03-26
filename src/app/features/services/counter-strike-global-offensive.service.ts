import { FirestorePaths } from '../shared/constants/firestore-paths';
import { Inject, Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CounterStrikeGlobalOffensiveService extends DatabaseService {

  constructor(
    @Inject(AngularFirestore) afs: AngularFirestore
  ) { super(afs, FirestorePaths.csgo)}

  getMaps(filterType: string) {

    if (filterType === null) {
      return this.getAllMaps();
    }
    if (filterType === 'Active-Duty') {
      return this.database.collection(`${FirestorePaths.csgo}/maps/maps`,
        ref => ref
        .where('active-duty', '==', true)
        .orderBy('name', 'asc')
        )
        .valueChanges();
    }
    if (filterType === 'Reserve') {
      return this.database.collection(`${FirestorePaths.csgo}/maps/maps`,
        ref => ref
        .where('reserve', '==', true)
        .orderBy('name', 'asc')
        )
        .valueChanges();
    }
    if (filterType === 'Hostage') {
      return this.database.collection(`${FirestorePaths.csgo}/maps/maps`,
        ref => ref
        .where('hostage', '==', true)
        .orderBy('name', 'asc')
        )
        .valueChanges();
    }
  }
}
