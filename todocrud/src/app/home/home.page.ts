import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  toDoList: any = [];

  today: number = Date.now();

  constructor(public modalctrl: ModalController) {}

  async addTask() {
    console.log('Hello');
    const modal = await this.modalctrl.create({
      component: AddNewTaskPage,
    });
    console.log('shgjs');

    modal.onDidDismiss().then((newTaskObj) => {
      console.log(newTaskObj.data);
      this.toDoList.push(newTaskObj.data);
    });

    return await modal.present();
  }

  delete(i: any) {
    this.toDoList.splice(i, 1);
  }

  update(i: any) {
    this.toDoList[i].itemName = 'updated';
  }
}
