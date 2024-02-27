function addRow() {
  var table = document.getElementById("details-table");
  var row = table.insertRow();

  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var address = document.getElementById("address").value;
  var country = document.getElementById("country").value;
  var state = document.getElementById("state").value;
  var city = document.getElementById("city").value;
  var pincode = document.getElementById("pincode").value;
  var employmentStatus = document.getElementById("employment-status").value;
  var maritalStatus = document.getElementById("marital-status").value;

  var cell1 = row.insertCell();
  cell1.innerHTML = firstName;

  var cell2 = row.insertCell();
  cell2.innerHTML = lastName;

  var cell3 = row.insertCell();
  cell3.innerHTML = gender;

  var cell4 = row.insertCell();
  cell4.innerHTML = address;

  var cell5 = row.insertCell();
  cell5.innerHTML = country;

  var cell6 = row.insertCell();
  cell6.innerHTML = state;

  var cell7 = row.insertCell();
  cell7.innerHTML = city;

  var cell8 = row.insertCell();
  cell8.innerHTML = pincode;

  var cell9 = row.insertCell();
  cell9.innerHTML = employmentStatus;

  var cell10 = row.insertCell();
  cell10.innerHTML = maritalStatus;

  var cell11 = row.insertCell();
  cell11.innerHTML =
    '<button class="edit-btn" id="openModal" onClick="editRow(this)">Edit</button> <button id="deleterow" class="delete-btn" onclick="deleteRow(this)">Delete</button>';

  document.getElementById("personal-details-form").reset();
}

function editRow(button) {
  var row = button.parentNode.parentNode;
  var cells = row.getElementsByTagName("td");

  var firstName = cells[0].innerHTML;
  var lastName = cells[1].innerHTML;
  var gender = cells[2].innerHTML;
  var address = cells[3].innerHTML;
  var country = cells[4].innerHTML;
  var state = cells[5].innerHTML;
  var city = cells[6].innerHTML;
  var pincode = cells[7].innerHTML;
  var employmentStatus = cells[8].innerHTML;
  var maritalStatus = cells[9].innerHTML;

  document.getElementById("first-name").value = firstName;
  document.getElementById("last-name").value = lastName;
  document.querySelector(
    'input[name="gender"][value="' + gender + '"]'
  ).checked = true;
  document.getElementById("address").value = address;
  document.getElementById("country").value = country;
  document.getElementById("state").value = state;
  document.getElementById("city").value = city;
  document.getElementById("pincode").value = pincode;
  document.getElementById("employment-status").value = employmentStatus;
  document.getElementById("marital-status").value = maritalStatus;

  row.parentNode.removeChild(row);
}

function deleteRow(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
  deleterow();
}
document
  .getElementById("personal-details-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    addRow();
  });

const openModalButton = document.getElementById("openModal");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close");

openModalButton.addEventListener("click", () => {
  modal.style.display = "block";
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});
