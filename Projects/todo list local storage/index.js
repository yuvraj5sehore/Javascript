const inputTag = document.getElementById("input"); //This selects the HTML element whose id is "input"and stores it in the input variable.
const buttonTag = document.querySelector(".btn"); // This selects all HTML elements with the class name "btn" and stores them in button.

function taskAdder() {
  const taskText = inputTag.value.trim();
  // This function reads the input value and removes extra spaces:
  inputTag.value = "";
  if (taskText.length === 0) {
    alert("Task is empty");
    return;
  }
  /*checks whether taskText is empty. If it is, it shows an alert and exits taskAdder() early.
   Since you call .trim() first, input containing only spaces is also treated as empty.*/
  let taskObj = {
    task:taskText,
    id:Date.now();
  }

}

buttonTag.addEventListener("click", taskAdder);
