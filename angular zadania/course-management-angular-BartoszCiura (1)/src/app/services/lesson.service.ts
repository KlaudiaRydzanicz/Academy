import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import {Lesson} from "../models/lesson";
import {DataSnapshot} from "@angular/fire/database/interfaces";
import firebase from "firebase/app";


@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private db: AngularFireDatabase) {
    this.lessons = db.list(this.collectionPath);
  }

  key = '';
  private collectionPath = `/tutorials/${this.key}/lesson`;
  lessons: AngularFireList<Lesson> = null;

  static getCourse(key: string): Promise<DataSnapshot> {
    return firebase.database().ref().child('tutorials').child(key).get();
  }

  getAll(key: string): AngularFireList<Lesson> {
    this.key = key;
    return this.db.list(`/tutorials/${this.key}/lesson`);
  }

  create(lesson: Lesson, key: string): any {
    this.key = key;
    return firebase.database().ref(`/tutorials/${key}/lesson`).push(lesson);
  }

  update(courseKey: string, key: string, value: any): any  {
    this.key = courseKey;
    return firebase.database().ref(`/tutorials/${courseKey}/lesson/${key}`).update(value);
    // return firebase.database().ref(`/tutorials/${this.key}/lesson`).update(key, value);

  }

  delete(courseKey: string, key: string): any {
    return firebase.database().ref(`/tutorials/${courseKey}/lesson/${key}`).remove();
  }

  deleteAll(): Promise<void> {
    return this.lessons.remove();
  }
}
