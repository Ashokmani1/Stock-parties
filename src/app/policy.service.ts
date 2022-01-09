import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Policy } from 'src/app/policy.model';

export class PolicyService {
  constructor(private firestore: AngularFirestore) { }

  getPolicies() {
    return this.firestore.collection('policies').snapshotChanges();
  }
}

