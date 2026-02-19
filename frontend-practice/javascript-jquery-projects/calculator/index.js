$(".item").click(function () {
  let content = $(this).text();
  if ($("#item1").text() == "0" || $("#item1").text() == "Error!") {
    $("#item1").text(content);
  } else {
    $("#item1").append(content);
  }
});
$(".op").click(function () {
  let content = $(this).text();
  if ($("#item1").text() == "0" || $("#item1").text() == "Error!") {
    $("#item1").text(content);
  } else {
    $("#item1").append(content);
  }
});
$("#item18").click(function () {
  $("#item1").text("0");
});
let userInput = "";
$("#item16").click(function () {
  userInput = $("#item1").text();

  flag1 = false;
  for (let i = 0; i < userInput.length - 1; i++) {
    if (userInput[i] == "÷" && userInput[i + 1] == "÷") {
      $("#item1").text("Error!");
      flag1 = true;
      break;
    }
  }

  flag2 = false;
  for (let k = 0; k < userInput.length - 1; k++) {
    if (userInput[k] == "×" && userInput[k + 1] == "×") {
      $("#item1").text("Error!");
      flag2 = true;
      break;
    }
  }

  if (!flag1) {
    userInput = userInput.replace(/÷/g, "/");
  }
  if (!flag2) {
    userInput = userInput.replace(/×/g, "*");
  }
  if (!flag1 && !flag2) {
    try {
      let result = new Function("return " + userInput);
      $("#item1").text(result());
    } catch {
      $("#item1").text("Error!");
    }
  }
});
