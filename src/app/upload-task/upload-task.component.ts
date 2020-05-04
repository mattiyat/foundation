import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask,
  AngularFireStorageReference
} from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-upload-task', template: `
  <input type="file" (change)="uploadFile($event)" />
  <div>{{ uploadPercent | async }}</div>
  <a [href]="downloadURL | async">{{ downloadURL | async }}</a>
`,
  styleUrls: ['./upload-task.component.scss']
})
export class UploadTaskComponent implements OnInit {
  @Input() file: File;
  ref: AngularFireStorageReference;
  uploadProgress: Observable<number>;
  uploadState: Observable<string>;
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore
  ) { }

ngOnInit() {
  this.downloadURL = this.storage.ref('/users/davideast.png').getDownloadURL()
  }
  

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'name-your-file-path-here';
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = fileRef.getDownloadURL() )
     )
    .subscribe()
  }
}
