import $ from "jquery";
import velocity from "velocity-animate";
import { greet } from "./modules/greet";
import { add } from "./modules/math";

console.log("app");

const result = add(1,2);

$("body").append(result).append(`<p>${greet("App")}</p>`);
velocity($("h1"), "fadeIn", {dulation: 2000, loop: true});

// console.log(a);