import React from "react";
import ReactDOM from "react-dom";

//Updated function to return: "I Love React"
const PrintHello = () => {
	return <h1>I Love React</h1>;
};

//Render the function's output into the DOM
ReactDOM.render(PrintHello(), document.querySelector("#myDiv"));
