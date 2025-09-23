let tasks = [];

export function addTask(judul) {
  const task = { id: tasks.length + 1, judul };
  tasks.push(task);
}

export function getAllTask() {
  return tasks;
}

export function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
}