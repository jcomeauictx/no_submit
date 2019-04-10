const submitText = {
	"Submit": "Make it so!",
	"submit": "make it so!"
};
let result = document.querySelectorAll(
	"button, input[type=submit], input[type=button]")
for (let i = 0; i < result.length; i++) {
	let node = result[i];
	if (node.tagName == "INPUT") {
		if (node.value in submitText) {
			node.value = submitText[node.value];
		} else if (!node.value) {
			node.value = submitText["Submit"];
		}
	} else {  // must be "BUTTON"
		if (node.innerText in submitText) {
			node.innerText = submitText[node.innerText];
		}
	}
}
