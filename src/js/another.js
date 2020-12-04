import $ from "jquery";
import velocity from "velocity-animate";
import { greet } from "./modules/greet";

$("body").css("color", "red").append(`<p>${greet("Another")}</p>`);
velocity($("h1"), "fadeIn", {dulation: 2000, loop: true});

// console.log(a);