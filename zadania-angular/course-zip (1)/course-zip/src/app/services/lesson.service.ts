import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import {Lesson} from "../models/lesson";
import {DataSnapshot} from "@angular/fire/database/interfaces";
import firebase from "firebase";

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
    console.log(this.key);
    return this.lessons;
  }

  create(lesson: Lesson, key: string): any {
    return firebase.database().ref().child('tutorials').child(key).set(lesson);
  }

  // this.key = key;
  // console.log(this.key);
  // return this.lessons.push(lesson);

  update(key: string, value: any): Promise<void> {
    return this.lessons.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.lessons.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.lessons.remove();
  }
}
