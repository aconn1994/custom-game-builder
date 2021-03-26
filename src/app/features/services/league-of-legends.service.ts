import { DatabaseService } from './database.service';
import { Inject, Injectable } from '@angular/core';
import { FirestorePaths } from '../shared/constants/firestore-paths';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LeagueOfLegendsService extends DatabaseService {

  constructor(
    @Inject(AngularFirestore) afs: AngularFirestore
  ) { super(afs, FirestorePaths.leagueOfLegends) }
}
