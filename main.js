document.getElementById("subBtn").addEventListener("click", () => {
    const emailCheck = document.getElementById("emailForm").value; // Get value inside event
    const error = document.getElementById("errMsg");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation pattern
    if (!emailPattern.test(emailCheck)) {
        error.innerHTML = "Please provide a valid email address!";
        error.style.color = "red";
    } else {
        error.innerHTML = "Done! ,You will recieve tips on how to grow your community."; // Clear error message if email is valid
        error.style.color = "green";
        }

    emailForm.value = ""; // Clear input field after submission
    error.classList.add("show"); // Show error message
 setTimeout(() => {
        error.classList.remove("show"); // Hide error message after 3 seconds
    }, 3000);
});




 

  
    