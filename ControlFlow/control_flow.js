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
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
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
console.log("Authentication Status:", authenticationStatus);

// misstion

let role = "Nhân Viên"
let messenger
switch (role) {
    case "Nhân Viên":
        messenger = `được phép truy cập vào "Dịch vụ ăn kiêng"`;
        break;
    case "Thành viên đã đăng ký":
        messenger = `được phép truy cập vào "Dịch vụ ăn kiêng" và tương tác trực tiếp với chuyên gia dinh dưỡng.`;
        break;
    case "Người đã đăng ký":
        messenger = `chỉ được phép truy cập một phần để tạo điều kiện cho "Dịch vụ ăn kiêng".`;
        break;
    case "Người không đăng ký":
        messenger = `cần đăng ký hoặc ít nhất là đăng ký trước để tận dụng cơ sở này.`;
        break;
    default:
        messenger = "Unknown";
}

console.log(messenger)