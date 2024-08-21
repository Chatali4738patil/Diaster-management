// Assuming session variables are managed on the server side and available in JavaScript through some means (e.g., AJAX)
// Check if the session variable indicating login status exists
if (!sessionStorage.getItem('login_status')) {
    console.log("Login First, Unauthorised Attempt");
    window.location.href = "index.php";
    // stop further execution
    throw new Error("Unauthorized access");
}

// Check if the user is logged in
if (sessionStorage.getItem('login_status') === "false") {
    console.log("Failed Login Attempt,Illegal Access");
    window.location.href = "index.php";
    // stop further execution
    throw new Error("Unauthorized access");
}

// Check if the user type is Admin
if (sessionStorage.getItem('usertype') !== 'Admin') {
    console.log("Unauthorized to access this resource");
    window.location.href = "index.php";
    // stop further execution
    throw new Error("Unauthorized access");
}
