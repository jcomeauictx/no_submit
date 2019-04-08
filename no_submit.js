const submitText = {
	"Submit": "Make it so!",
	"submit": "make it so!"
};
// inefficient, but I can't figure out iterating over xpath results
let result = document.querySelectorAll("button, input")
for (let i = 0; i < result.length; i++) {
	let node = result[i];
	if (node.tagName == "INPUT") {
		if (node.value in submitText) {
			node.value = submitText[node.value];
		} else if (!node.value) {
			node.value = submitText["Submit"];
		}
	} else {
		if (node.innerText in submitText) {
			node.innerText = submitText[node.innerText];
		}
	}
}
