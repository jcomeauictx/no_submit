const submitText = {
	"Submit": "Make it so!",
	"submit": "make it so!"
};
const buttonTypes = {
	"submit": "submit",
	"button": "button"
};
// inefficient, but I can't figure out iterating over xpath results
let result = document.querySelectorAll("button, input")
for (let i = 0; i < result.length; i++) {
	let node = result[i];
	if (node.tagName == "INPUT" && node.type in buttonTypes) {
		if (node.value in submitText) {
			node.value = submitText[node.value];
		} else if (!node.value) {
			node.value = submitText["Submit"];
		}
	} else {  // must be BUTTON
		if (node.innerText in submitText) {
			node.innerText = submitText[node.innerText];
		}
	}
}
