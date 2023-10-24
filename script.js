//for task icon
document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addButton = document.getElementById("add-button");
    const taskList = document.getElementById("task-list");

    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-button">Delete</button>
            `;

            taskList.appendChild(li);

            taskInput.value = "";

            li.querySelector(".delete-button").addEventListener("click", function () {
                taskList.removeChild(li);
            });
        }
    });

    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addButton.click();
        }
    });
    // JavaScript for toggling the sidebar
const sidebar = document.querySelector(".sidebar");
const mainContent = document.querySelector(".main-content");

document.querySelector(".toggle-sidebar-button").addEventListener("click", () => {
    sidebar.classList.toggle("active");
    mainContent.classList.toggle("active");
});

});
