import $ from "jquery";
import velocity from "velocity-animate";

$("body").css("color", "red");
velocity($("h1"), "fadeIn", {dulation: 2000, loop: true});

// console.log(a);