function sendMail(form) {
    emailjs.send("gmail", "newsletter", {
        "from_name": form.fname.value + lname.value,
        "from_email": form.email.value,
        "phone_number": form.phone.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false; // To block from loading a new page
};