import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from './dummy-tasks';
import { type NewTask, type Task } from './task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks: Task[] = DUMMY_TASKS;

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask({ title, summary, dueDate }: NewTask, userId: string) {
    this.tasks.unshift({
      title,
      summary,
      dueDate,
      userId,
      id: Date.now().toString(),
    });
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
