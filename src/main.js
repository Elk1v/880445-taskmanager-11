import {createMenuTemplate} from "./components/menu.js";
import {createFilterTemplate} from "./components/filter.js";
import {createBoardTemplate} from "./components/board.js";
import {createTaskEditTemplate} from "./components/task-edit.js";
import {createTaskTemplate} from "./components/task.js";
import {createLoadMoreBtnTemplate} from "./components/load-more-btn";

const TASK_COUNT = 3;

const main = document.querySelector(`.main`);
const mainControl = main.querySelector(`.main__control`);

const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

renderTemplate(mainControl, createMenuTemplate(), `beforeend`);
renderTemplate(main, createFilterTemplate(), `beforeend`);
renderTemplate(main, createBoardTemplate(), `beforeend`);

const boardElement = main.querySelector(`.board`);
const taskListElement = boardElement.querySelector(`.board__tasks`);

renderTemplate(taskListElement, createTaskEditTemplate(), `beforeend`);

for (let i = 0; i < TASK_COUNT; i++) {
  renderTemplate(taskListElement, createTaskTemplate(), `beforeend`);
}

renderTemplate(boardElement, createLoadMoreBtnTemplate(), `beforeend`);
