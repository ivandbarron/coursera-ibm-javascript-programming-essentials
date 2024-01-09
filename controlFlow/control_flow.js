let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system";
}

console.log("User Message:", userMessage);

let userType = "subscriber"
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authenticated Status:", authenticationStatus);

let person = "Employee";
let dietaryServices;
let message;

switch (person) {
    case "Employee":
        dietaryServices = "full";
        message = "Yo have access to one-to-one interaction with a dietician";
        break;
    case "Enrolled Member":
        dietaryServices = "partial";
        message = "You have partial access to facilitate \"Dietary Services\" only";
        break;
    case "Subscriber":
        dietaryServices = "None";
        message = "You need to enroll or subscribe first to avail this facility";
        break;
    default:
        dietaryServices = "Unknown";
        message = "";
}

console.log(message);
