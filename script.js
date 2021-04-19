let list1 = [];
let list2 = [];
let list3 = [];
let list4 = [];
let list5 = [];
let list6 = [];

var n = 1;
var x = 0;

function AddRow() {
  var AddRown = document.getElementById("show");
  var NewRow = AddRown.insertRow(n);

  // Get values
  var genderRadio = document.getElementsByName("gender");
  var hobbiesRadio = document.getElementsByName("hobbies");
  var name = document.getElementById("name");
  var phone = document.getElementById("phone");
  const dob = document.getElementById("dob").value;

  //  Validation

  // Gender
  let value;

  for (i = 0; i < genderRadio.length; i++) {
    if (genderRadio[i].checked) {
      value = genderRadio[i].value;
    }
  }
  if (new Date(dob) >= new Date()) {
    alert("wrong");
    return;
  }

  // Hobby
  let hobby;
  for (i = 0; i < hobbiesRadio.length; i++) {
    if (hobbiesRadio[i].checked) {
      hobby = hobbiesRadio[i].value;
    }
  }

  // Phone
  if (phone.value.length != 10) {
    alert("required 10 digits, match requested format!");
  }

  if (name.value.length >= 20 && name.value.length >= 4) {
    alert("make sure the input is between 5-10 characters long");
    return false;
  }

  list1[x] = document.getElementById("name").value;

  list2[x] = value;
  list3[x] = document.getElementById("dob").value;
  list4[x] = document.getElementById("email").value;
  list5[x] = document.getElementById("phone").value;
  list6[x] = hobby;

  var cel1 = NewRow.insertCell(0);
  var cel2 = NewRow.insertCell(1);
  var cel3 = NewRow.insertCell(2);
  var cel4 = NewRow.insertCell(3);
  var cel5 = NewRow.insertCell(4);
  var cel6 = NewRow.insertCell(5);

  cel1.innerHTML = list1[x];
  cel2.innerHTML = list2[x];
  cel3.innerHTML = list3[x];
  cel4.innerHTML = list4[x];
  cel5.innerHTML = list5[x];
  cel6.innerHTML = list6[x];

  n++;
  x++;
}
