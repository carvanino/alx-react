import $ from "jquery";

const par1 = "<p>Holberton Dashboard</p>"

const par2 = "<p>Dashboard data for the students</p>"

const par3 = "<p>Copyright - Holberton School</p>"

$("body").append(par1, par2, par3);

// Another method
/*
const text = $("<p></p>").text("Holberton Dashboard\nDashboard data for the students\nCopyright - Holberton School");

$("body").append(text);
*/