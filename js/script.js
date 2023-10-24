const form = document.getElementById("empForm");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
            const id = document.getElementById("id").value;
            const name = document.getElementById("name").value;
            const extension = document.getElementById("extension").value;
            const email = document.getElementById("email").value;
            const department = document.getElementById("department").value;
            console.log("Form submitted with the following data:");
            console.log("ID: " + id);
            console.log("Name: " + name);
            console.log("Extension: " + extension);
            console.log("Email: " + email);
            console.log("Department: " + department);
        });