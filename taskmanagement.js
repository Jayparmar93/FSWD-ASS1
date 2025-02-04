let tasks = [];

const addTask = (title, status, priority) => {
  if (priority < 1 || priority > 5) {
    console.error("Priority must be between 1 and 5.");
    return;
  }
  if (status !== "Pending" && status !== "Completed") {
    console.error("Status must be either 'Pending' or 'Completed'.");
    return;
  }
  tasks.push({ title, status, priority });
};


const filterByStatus = (status) => {
  return tasks.filter((task) => task.status === status);
};

const findHighPriorityTask = () => {
  return tasks.find((task) => task.priority === 5);
};


const getTaskTitlesWithStatus = () => {
  return tasks.map((task) => `Task: ${task.title}, Status: ${task.status}`);
};


const logTaskDetails = () => {
  if (tasks.length === 0) {
    console.log("No tasks available.");
    return;
  }
  tasks.forEach((task) => {
    console.log(`Title: ${task.title}\nStatus: ${task.status}\nPriority: ${task.priority}\n`);
  });
};


addTask("Buy groceries", "Pending", 3);
addTask("Complete project", "Completed", 5);
addTask("Call mom", "Pending", 2);
addTask("Workout", "Pending", 4);

console.log("All Pending Tasks:", filterByStatus("Pending"));
console.log("High Priority Task:", findHighPriorityTask());
console.log("Task Titles with Status:", getTaskTitlesWithStatus());
console.log("\nDetailed Task List:");
logTaskDetails();