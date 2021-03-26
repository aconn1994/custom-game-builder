import { FirestorePaths } from './../shared/constants/firestore-paths';
import { Inject, Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RainbowSixSiegeService extends DatabaseService {

  constructor(
    @Inject(AngularFirestore) afs: AngularFirestore
  ) { super(afs, FirestorePaths.rainbowSixSiege)}

  getMaps(filterType: string) {

    if (filterType === null) {
      return this.getAllMaps();
    }
    if (filterType ===  'Newcomer') {
      return this.database.collection(`${FirestorePaths.rainbowSixSiege}/maps/maps`,
        ref => ref
        .where('newcomer', '==', true)
        .orderBy('name', 'asc')
        )
        .valueChanges();
    }
    if (filterType === 'Casual') {
      return this.database.collection(`${FirestorePaths.rainbowSixSiege}/maps/maps`,
        ref => ref
        .where('casual', '==', true)
        .orderBy('name', 'asc')
        )
        .valueChanges();
    }
    if (filterType === 'Ranked') {
      return this.database.collection(`${FirestorePaths.rainbowSixSiege}/maps/maps`,
        ref => ref
        .where('ranked', '==', true)
        .orderBy('name', 'asc')
        )
        .valueChanges();
    }
    if (filterType === 'Custom Game Only') {
      return this.database.collection(`${FirestorePaths.rainbowSixSiege}/maps/maps`,
        ref => ref
        .where('customOnly', '==', true)
        .orderBy('name', 'asc')
        )
        .valueChanges();
    }
  }
}
