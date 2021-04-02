import { FirestorePaths } from '../shared/constants/firestore-paths';
import { Inject, Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { CsgoFilter, CsgoInfo, CsgoMap } from '../shared/constants/models/games/csgo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterStrikeGlobalOffensiveService extends DatabaseService {

  constructor(
    @Inject(AngularFirestore) afs: AngularFirestore
  ) { super(afs, FirestorePaths.csgo)}

  getCsgoFilters() {
    return this.getDataTypes('filters') as Observable<CsgoFilter>;
  }

  getCsgoInfo() {
    return this.getDataTypes('info') as Observable<CsgoInfo>;
  }

  getMaps(filterType: string) {

    if (filterType === null) {
      return this.getAllMaps() as Observable<CsgoMap[]>;
    }
    if (filterType === 'Active-Duty') {
      return this.database.collection(`${FirestorePaths.csgo}/maps/maps`,
        ref => ref
        .where('active-duty', '==', true)
        .orderBy('name', 'asc')
        )
        .valueChanges() as Observable<CsgoMap[]>;
    }
    if (filterType === 'Reserve') {
      return this.database.collection(`${FirestorePaths.csgo}/maps/maps`,
        ref => ref
        .where('reserve', '==', true)
        .orderBy('name', 'asc')
        )
        .valueChanges() as Observable<CsgoMap[]>;
    }
    if (filterType === 'Hostage') {
      return this.database.collection(`${FirestorePaths.csgo}/maps/maps`,
        ref => ref
        .where('hostage', '==', true)
        .orderBy('name', 'asc')
        )
        .valueChanges() as Observable<CsgoMap[]>;
    }
  }
}
