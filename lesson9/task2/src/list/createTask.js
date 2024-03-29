import { getItem, setItem } from './storage';
import { renderTasks } from './renderTasks';

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');

  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }
  taskTitleInputElem.value = '';

  const listElem = document.querySelector('.list');
  listElem.textContent = '';
  const tasksList = getItem('tasksList') || [];
  const newTasksList = tasksList.concat({
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  });
  setItem('tasksList', newTasksList);
  renderTasks();
};
