var submit = document.getElementById("submit");
entry.addEventLisner("click", DisplayDetails);

var raw = 1;

function DisplayDetails() {
  var name = document.getElementById("full-name").value;
  var gender = document.getElementById("gender").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone-number").value;
  var hobbies = document.getElementById("hobbies").value;

  if (!name || !gender || !email || !phone || hobbies) {
    alert("please Fill All Details");
    return;
  }
  var Display = document.getElementById(" display");

  var newRow = display.insertRow(row);

  var cell = newRow.insertCell(0);
  var cell = newRow.insertCell(1);
  var cell = newRow.insertCell(2);
  var cell = newRow.insertCell(3);
  var cell = newRow.insertCell(4);
}
