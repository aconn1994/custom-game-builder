import { SystemOptions } from './../shared/constants/models/server/server.model';
import { DatabaseService } from './database.service';
import { Inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestorePaths } from '../shared/constants/firestore-paths';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SystemOptionsService extends DatabaseService {

  constructor(
    @Inject(AngularFirestore) afs: AngularFirestore
  ) { super(afs, FirestorePaths.systemOptions)}

  getSystemOptions() {
    return this.database.collection('server').doc('system_options').valueChanges() as Observable<SystemOptions>;
  }
}
