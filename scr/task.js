export default function task() {
  const tasks = document.querySelector(".left__wrap--bot");
  const taskList = Array.from(tasks.children);

  const dostList = document.createElement("div");
  dostList.classList.add("dost-list");
  tasks.appendChild(dostList);

  taskList.forEach((task, index) => {
    createDost(dostList);

    task.onclick = () => {
      taskList.forEach((task) => {
        task.classList.remove("active-data-btn");
      });

      task.classList.add("active-data-btn");

      activeDost(dostList, index);
    };
  });

  taskList[1].classList.add("active-data-btn");
  activeDost(dostList, 1);
}

function createDost(dostList) {
  const dost = document.createElement("div");
  dost.classList.add("task-dost");
  dostList.appendChild(dost);
}

function activeDost(dostList, currentIndex) {
  Array.from(dostList.children).forEach((dost) => {
    dost.classList.remove("active-data-btn");
  });
  Array.from(dostList.children).forEach((dost, index) => {
    if (currentIndex === index) {
      dost.classList.add("active-data-btn");
    }
  });
}
