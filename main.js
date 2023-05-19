const saveBtn = document.getElementById("save-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let myLeads = [];
saveBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  renderLeads();
});
function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li>${myLeads[i]}</li>`;
  }
  ulEl.innerHTML = listItems;
}
