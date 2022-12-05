import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {
  categories = ['Work', 'Personal', 'Home'];

  taskName: any;
  taskDate: any;
  taskPriority: any;
  taskCategory: any;

  // taskobje
  taskObject: any;

  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {}

  async dismiss() {
    await this.modalCtrl.dismiss(this.taskObject);
  }

  selectedCategory(index: any) {
    this.taskCategory = this.categories[index];
  }

  AddTask() {
    this.taskObject = {
      itemName: this.taskName,
      itemDueDate: this.taskDate,
      itemPriority: this.taskPriority,
      itemCategory: this.taskCategory,
    };
    console.log('jhjk');
    this.dismiss();
  }
}
