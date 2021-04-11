import { ContactForm } from './../shared/constants/models/server/server.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirestorePaths } from './../shared/constants/firestore-paths';
import { DatabaseService } from './database.service';
import { Inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService extends DatabaseService {

  constructor(
    @Inject(AngularFirestore) afs: AngularFirestore
  ) { super(afs, FirestorePaths.feedback)}

  saveFeedback(contactForm: ContactForm) {
    this.database.collection('server').doc('feedback').collection('feedback').add(contactForm);
  }

  get fieldGroup() {
    return new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      contactReason: new FormControl('', Validators.required),
      comment: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(300)
      ])
    });
  }

}
