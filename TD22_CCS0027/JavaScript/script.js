function saveData() {
    const id = document.getElementById("idNum").value;
    const first = document.getElementById("fstName").value;
    const middle = document.getElementById("midName").value;
    const last = document.getElementById("lastName").value;
    const gender = document.getElementById("gender").value;
    const birthday = document.getElementById("birthday").value;

    const table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).innerText = id;
    newRow.insertCell(1).innerText = first;
    newRow.insertCell(2).innerText = middle;
    newRow.insertCell(3).innerText = last;
    newRow.insertCell(4).innerText = gender;
    newRow.insertCell(5).innerText = birthday;

    document.getElementById("inputForms").reset();
}