import React from "react";
import ReactDOM from "react-dom";

const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

/**
 *1) Create the mapping function that generates a new array of planets in HTML
 */
const planetsInHTML = planets.map((planet, index) => {
	//Return on 'li' element with Bootstrap classes and planet name
	return (
		<li key={index} className="list-group-item">
			{planet}
		</li>
	);
});

/** Add planetsinHTML array inside the 'children' prop of the 'ul' element
 */
const content = <ul className="list-group m-5">{planetsInHTML}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
