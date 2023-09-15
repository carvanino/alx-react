import $ from "jquery";
import '../body/body.css';

var _ = require('lodash');

const par1 = "<p>Dashboard data for the students</p>";

const button = "<button>Click here to get started</button>";

const par2 = "<p id='count'></p>";

$("body").append(par1, button, par2);

$("button").on("click", _.debounce(updateCounter, 100));

let count = 0;
function updateCounter() {
    count += 1;
    $("#count").text(`${count} clicks on the button`);
}