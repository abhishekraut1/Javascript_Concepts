let elem = document.getElementById("id1")

// getAttribute
console.log(elem.getAttribute("class"));
console.log(elem.getAttribute("id"));

// setAttribute
// elem.setAttribute("hidden","true")
// elem.setAttribute("class","class2 class3")

// hasAttribute
console.log(elem.hasAttribute("class"));
console.log(elem.hasAttribute("name"));

// removeAttribute
// elem.removeAttribute("class")y

// attributes
console.log(elem.attributes);   // --> gives all attributes of the element

// dataset ( data-* )     --> custom attributes
console.log(elem.dataset);
console.log(elem.dataset.game);
console.log(elem.dataset.player);

