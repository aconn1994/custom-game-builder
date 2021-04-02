import { LolInfo } from './../shared/constants/models/games/lol.model';
import { DatabaseService } from './database.service';
import { Inject, Injectable } from '@angular/core';
import { FirestorePaths } from '../shared/constants/firestore-paths';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeagueOfLegendsService extends DatabaseService {

  constructor(
    @Inject(AngularFirestore) afs: AngularFirestore
  ) { super(afs, FirestorePaths.leagueOfLegends) }

  getLolInfo() {
    return this.getDataTypes('info') as Observable<LolInfo>;
  }
}
