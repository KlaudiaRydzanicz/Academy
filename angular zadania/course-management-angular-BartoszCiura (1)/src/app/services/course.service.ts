import {Injectable} from '@angular/core';
import {Course} from '../models/course';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import firebase from 'firebase/app';
import {DataSnapshot} from '@angular/fire/database/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private db: AngularFireDatabase) {
    this.courses = db.list(this.collectionPath);
  }

  private collectionPath = '/tutorials';

  courses: AngularFireList<Course> = null;
  course: AngularFireObject<Course> = null;

  static getCourse(key: string): Promise<DataSnapshot> {
    return firebase.database().ref().child('tutorials').child(key).get();
  }

  getAll(): AngularFireList<Course> {
    return this.courses;
  }

  create(course: Course): any {
    console.log(course);
    return this.courses.push(course);
  }

  update(key: string, value: any): Promise<void> {
    console.log(key);
    return this.courses.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.courses.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.courses.remove();
  }
}
