$(document).ready(function () {
  // Add task
  $("#addTaskButton").click(function () {
    addTask();
  });

  // Add task on Enter key press
  $("#taskInput").keypress(function (e) {
    if (e.which === 13) {
      // Enter key code
      addTask();
    }
  });

  // Function to add a new task
  function addTask() {
    let taskText = $("#taskInput").val().trim();
    if (taskText !== "") {
      $("#taskList").append(
        `<li>
            <span class="task-text">${taskText}</span>
            <button class="edit-btn">Edit</button>
            <button class="remove-btn">Remove</button>
          </li>`
      );
      $("#taskInput").val(""); // Clear the input field
    }
  }

  // Mark task as completed
  $(document).on("click", ".task-text", function () {
    $(this).toggleClass("completed");
  });

  // Remove task
  $(document).on("click", ".remove-btn", function () {
    $(this).parent().remove();
  });

  // Edit task
  $(document).on("click", ".edit-btn", function () {
    let taskItem = $(this).siblings(".task-text");
    let currentText = taskItem.text();
    let inputField = `<input type="text" class="edit-input" value="${currentText}">`;
    taskItem.replaceWith(inputField);
    $(this).text("Save").toggleClass("edit-btn save-btn");
  });

  // Save edited task
  $(document).on("click", ".save-btn", function () {
    let editedText = $(this).siblings(".edit-input").val().trim();
    if (editedText !== "") {
      $(this)
        .siblings(".edit-input")
        .replaceWith(`<span class="task-text">${editedText}</span>`);
      $(this).text("Edit").toggleClass("save-btn edit-btn");
    }
  });
});
