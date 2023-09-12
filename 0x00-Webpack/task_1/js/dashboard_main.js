import $ from "jquery";
var _ = require('lodash');

const par1 = "<p>Holberton Dashboard</p>"

const par2 = "<p>Dashboard data for the students</p>"

const button = "<button>Click here to get started</button>"

const par3 = "<p id='count'></p>"

const par4 = "<p>Copyright - Holberton School</p>"

$("body").append(par1, par2, button, par3, par4);

// const buttonElement = $("button").add(onclick="updateCounter")

$("button").on("click", _.debounce(updateCounter, 100));

let count = 0;
function updateCounter() {
    count += 1
    $("#count").text(`${count} clicks on the button`)
}