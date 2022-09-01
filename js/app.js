// 5. Cached element references
const input = document.querySelector("#response")
const btn = document.querySelector("#todo-list")
const uList = document.querySelector("#response")

// 6. Add an event listener to the button that listens to click events
btn.addEventListener("click", function(evt) {
  // Create a <li> element
  const li = document.createElement("li")
  // Access the text from the input and store it into input element
  li.textContent = input.value
  // Add the <li> with text to the <ul>
  document.querySelector("ul").appendChild(li)
  input.value=""
})
