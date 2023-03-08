import "./style.scss";
import createElemet from "./createElement";

const app = document.querySelector("#app");
const soundButton = new Audio("./audio/buttonSound.mp3");
const soundTimer = new Audio("./audio/timer.mp3");

// зона табов
const tabsZone = createElemet({
  tag: "div",
  proops: [{ class: "tabsZone" }],
  parent: app,
});

const pomidoroButton = createElemet({
  tag: "button",
  content: "Помидор",
  proops: [{ class: "tabsZoneBtn btn" }],
  parent: tabsZone,
});
const shortBreakButton = createElemet({
  tag: "button",
  content: "Маленький перерыв",
  proops: [{ class: "tabsZoneBtn btn" }],
  parent: tabsZone,
});
const longBreakButton = createElemet({
  tag: "button",
  content: "Большой перерыв ",
  proops: [{ class: "tabsZoneBtn btn" }],
  parent: tabsZone,
});

// зона тамера помидора

const pomidoroZone = createElemet({
  tag: "div",
  proops: [{ class: "timerZone" }],
  parent: app,
});

const pomidoroTimer = createElemet({
  tag: "h1",
  content: "25:00",
  proops: [{ class: "timer" }],
  parent: pomidoroZone,
});
const pomidoroTimerButton = createElemet({
  tag: "button",
  content: "Запустить таймер",
  proops: [{ class: "pomidoroTimerBtn btn" }],
  parent: pomidoroZone,
});
startTimerButton(pomidoroTimerButton, 1500, pomidoroTimer, "25:00");

// зона тамера маленького перерыва

const shortBreakZone = createElemet({
  tag: "div",
  proops: [{ class: "timerZone" }],
  parent: app,
});

const shortBreakTimer = createElemet({
  tag: "h1",
  content: "05:00",
  proops: [{ class: "timer" }],
  parent: shortBreakZone,
});
const shortBreakTimerButton = createElemet({
  tag: "button",
  content: "Запустить таймер",
  proops: [{ class: "startTimerButton btn" }],
  parent: shortBreakZone,
});
startTimerButton(shortBreakTimerButton, 300, shortBreakTimer, "05:00");

// зона тамера длинного перерыва
const longBreakZone = createElemet({
  tag: "div",
  proops: [{ class: "timerZone" }],
  parent: app,
});

const longBreakTimer = createElemet({
  tag: "h1",
  content: "15:00",
  proops: [{ class: "timer" }],
  parent: longBreakZone,
});

const longBreakTimerButton = createElemet({
  tag: "button",
  content: "Запустить таймер",
  proops: [{ class: "longBreakTimerButton btn" }],
  parent: longBreakZone,
});
startTimerButton(longBreakTimerButton, 900, longBreakTimer, "15:00");

function startTimer(time, timer) {
  let timerID = setInterval(() => {
    let sec = Math.floor(time % 60);
    let min = Math.floor(time / 60);
    time--;
    if (time === -1) {
      clearInterval(timerID);
    }
    if (min === 0 && sec === 0) {
      soundTimer.load();
      soundTimer.play();
    }
    timer.textContent = fixedNumb(min) + ":" + fixedNumb(sec);
  }, 1000);
  return timerID;
}

function startTimerButton(button, time, timer, timeContent) {
  let timerID;
  button.onclick = () => {
    soundButton.play();
    if (button.textContent === "Запустить таймер") {
      timerID = startTimer(time, timer);
      button.textContent = "Сброc";
    } else {
      clearInterval(timerID);
      button.textContent = "Запустить таймер";
      timer.textContent = timeContent;
      soundTimer.pause();
    }
  };
}
// let timerIDPomidor = 0,
//   timerIDShortBreak = 0,
//   timerIDLongBreak = 0;
// function startTimer(time, timer, timerID) {
//   timerID = setInterval(() => {
//     let sec = Math.floor(time % 60);
//     let min = Math.floor(time / 60);
//     time--;
//     if (time === 0) {
//       clearInterval(timerID);
//     }
//     timer.textContent = fixedNumb(min) + ":" + fixedNumb(sec);
//   }, 1000);
// }

// function startTimerButton(button, time, timer, timeContent, timerID) {
//   let timerID;
//   button.onclick = () => {
//     if (button.textContent === "Запустить таймер") {
//       timerID = startTimer(time, timer, timerID);
//       button.textContent = "Сброc";
//     } else {
//       clearInterval(timerID);
//       button.textContent = "Запустить таймер";
//       timer.textContent = timeContent;
//     }
//   };
// }

const fixedNumb = (num) => {
  if (num < 10) {
    return "0" + num;
  }
  return num;
};

//логика табов

const tabs = [pomidoroButton, shortBreakButton, longBreakButton];
const tabsContent = [pomidoroZone, shortBreakZone, longBreakZone];

const hideTabContent = () => {
  tabsContent.forEach((el) => (el.style.display = "none"));
  tabs.forEach((el) => (el.classList.remove = "active"));
};
const showTabContent = (i = 0) => {
  tabsContent[i].style.display = "flex";
  tabs[i].classList.add = "active";
  document.body.style.backgroundColor =
    "#" + ((Math.random() * 0xffffff) << 0).toString(16);
};
hideTabContent();
showTabContent();
tabsZone.onclick = (e) => {
  if (e.target && e.target.classList.contains("tabsZoneBtn")) {
    tabs.forEach((el, i) => {
      if (e.target === el) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
};
// зона добавления задач

const taskZone = createElemet({
  tag: "div",
  proops: [{ class: "taskZone" }],
  parent: app,
});
const buttonTask = createElemet({
  tag: "button",
  content: "Добавить задачу",
  proops: [{ class: "buttonTask btn" }],
  parent: taskZone,
});
const tasks = createElemet({
  tag: "div",
  proops: [{ class: "tasks" }],
  parent: taskZone,
});

buttonTask.onclick = () => {
  const tasksArr = [];
  const taskName = prompt("Введите назавание задачи");
  tasksArr.push(taskName);
  if (taskName) {
    const task = createElemet({
      tag: "div",
      proops: [{ class: "task" }],
      parent: tasks,
    });
    createElemet({
      tag: "p",
      content: tasksArr.at(-1),
      proops: [{ class: "taskContent" }],
      parent: task,
    });
    const taskResert = createElemet({
      tag: "p",
      content: "+",
      proops: [{ class: "taskBtn" }],
      parent: task,
    });
    taskResert.onclick = () => {
      task.remove();
    };
    if (tasks.firstChild) {
      buttonClearTasks.style.display = "block";
    }
  }

  return tasksArr;
};

const buttonClearTasks = createElemet({
  tag: "button",
  content: "Очистить список задач",
  proops: [{ class: "buttonClearTasks btn" }],
  parent: app,
});

buttonClearTasks.onclick = () => {
  buttonClearTasks.style.display = "none";
  tasks.replaceChildren();
};
