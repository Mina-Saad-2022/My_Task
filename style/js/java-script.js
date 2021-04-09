var my_task = document.querySelector("#myInput"),
  my_add_task = document.querySelector("#addBtn"),
  empty_div = document.querySelector("#empty_div");

my_add_task.onclick = function (e) {
  e.preventDefault();
  if (my_task.value == "") {
    alert("please enter your task");
  } else {
    var my_new_div = document.createElement("div"),
      my_delete_button = document.createElement("button");

    empty_div.appendChild(my_new_div);

    my_new_div.setAttribute("class", "my_task_div");
    my_new_div.setAttribute("style", "cursor:grabbing;");
    my_new_div.innerHTML = my_task.value;

    my_task.value = "";
    my_task.focus();
    my_new_div.appendChild(my_delete_button);

    my_delete_button.setAttribute("class","fas fa-trash-alt btn btn-danger ");

    my_delete_button.innerHTML = " "+" Delete";

    my_delete_button.onclick = function () {
      this.parentNode.remove();
      my_number_task.innerHTML = empty_div.children.length - 0;
    }

    my_new_div.onclick = function () {
      this.classList.toggle("done");
      var my_number_done = document.querySelector("#my_number_done");
      my_number_done.innerHTML = document.querySelectorAll(".done").length;
    };
     var my_number_task = document.querySelector("#my_number_task");
    my_number_task.innerHTML = empty_div.children.length;

        
  }
};