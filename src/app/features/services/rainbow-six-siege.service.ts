import { R6SiegeFilter, R6SiegeInfo } from './../shared/constants/models/games/r6-siege.model';
import { Observable } from 'rxjs';
import { FirestorePaths } from './../shared/constants/firestore-paths';
import { Inject, Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { R6SiegeMap } from '../shared/constants/models/games/r6-siege.model';

@Injectable({
  providedIn: 'root'
})
export class RainbowSixSiegeService extends DatabaseService {

  constructor(
    @Inject(AngularFirestore) afs: AngularFirestore
  ) { super(afs, FirestorePaths.rainbowSixSiege)}

  getR6SiegeFilters() {
    return this.getDataTypes('filters') as Observable<R6SiegeFilter>;
  }

  getR6SiegeInfo() {
    return this.getDataTypes('info') as Observable<R6SiegeInfo>;
  }

  getMaps(filterType: string) {

    if (filterType === null) {
      return this.getAllMaps() as Observable<R6SiegeMap[]>;
    }
    if (filterType ===  'Newcomer') {
      return this.database.collection(`${FirestorePaths.rainbowSixSiege}/maps/maps`,
        ref => ref
        .where('newcomer', '==', true)
        .orderBy('name', 'asc')
        )
        .valueChanges() as Observable<R6SiegeMap[]>;
    }
    if (filterType === 'Casual') {
      return this.database.collection(`${FirestorePaths.rainbowSixSiege}/maps/maps`,
        ref => ref
        .where('casual', '==', true)
        .orderBy('name', 'asc')
        )
        .valueChanges() as Observable<R6SiegeMap[]>;
    }
    if (filterType === 'Ranked') {
      return this.database.collection(`${FirestorePaths.rainbowSixSiege}/maps/maps`,
        ref => ref
        .where('ranked', '==', true)
        .orderBy('name', 'asc')
        )
        .valueChanges() as Observable<R6SiegeMap[]>;
    }
    if (filterType === 'Custom Game Only') {
      return this.database.collection(`${FirestorePaths.rainbowSixSiege}/maps/maps`,
        ref => ref
        .where('customOnly', '==', true)
        .orderBy('name', 'asc')
        )
        .valueChanges() as Observable<R6SiegeMap[]>;
    }
  }
}
