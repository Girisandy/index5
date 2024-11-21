
const tableBody = document.querySelector(".table tbody");
const addButton = document.querySelector(".forms button");
let isEditing = false; 
let currentRow; 


addButton.addEventListener("click", () => {
    const sno = document.getElementById("title").value;
    const name = document.getElementById("firstname").value;
    const relationship = document.getElementById("relationship").value;
    const dob = document.getElementById("dateofbirth").value;

    if (sno && name && relationship && dob) {
        if (isEditing) {
           
            currentRow.children[0].textContent = sno;
            currentRow.children[1].textContent = name;
            currentRow.children[2].textContent = relationship;
            currentRow.children[3].textContent = dob;
            currentRow.children[4].innerHTML = `<span style="color:green;">Active</span>`;
            resetForm();
        } else {
            
            addRow(sno, name, relationship, dob, "Active");
            resetForm();
        }
    } else {
        alert("Please fill all fields");
    }
});

function addRow(sno, name, relationship, dob, status) {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${sno}</td>
        <td>${name}</td>
        <td>${relationship}</td>
        <td>${dob}</td>
        <td style="color: ${status === 'Active' ? 'green' : 'red'};">${status}</td>
        <td>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </td>
    `;

    // Add event listeners for Edit and Delete buttons
    row.querySelector(".edit").addEventListener("click", () => editRow(row));
    row.querySelector(".delete").addEventListener("click", () => deleteRow(row));

    tableBody.appendChild(row);
}

// Edit a row
function editRow(row) {
    isEditing = true;
    currentRow = row;

    document.getElementById("title").value = row.children[0].textContent;
    document.getElementById("firstname").value = row.children[1].textContent;
    document.getElementById("relationship").value = row.children[2].textContent;
    document.getElementById("dateofbirth").value = row.children[3].textContent;
}

// Delete a row
function deleteRow(row) {
    tableBody.removeChild(row);
}

// Reset form and editing mode
function resetForm() {
    isEditing = false;
    currentRow = null;

    document.getElementById("title").value = "";
    document.getElementById("firstname").value = "";
    document.getElementById("relationship").value = "";
    document.getElementById("dateofbirth").value = "";
}


const dateInput = document.getElementById("dateofbirth");
const calendarIcon = document.getElementById("calendar-icon");

const datePicker = flatpickr(dateInput, {
    enableTime: false,
    dateFormat: "Y-m-d", 
    clickOpens: false,
});
calendarIcon.addEventListener("click", () => {
    datePicker.open();
});






