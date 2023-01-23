function scrollFirstElement() {
    const firstElement = document.querySelector("#list > :first-child");
    firstElement.scrollIntoView({behavior: "smooth"});
};

function scrollLastElement() {
    const lastElement = document.querySelector("#list > :last-child");
    lastElement.scrollIntoView({behavior: "smooth"});
};

let inputString = document.getElementById("inputNum");
const submitString = document.getElementById("submitValue");

submitString.addEventListener("click", () => {

    let stringInput = inputString.value;
    let num = parseInt(stringInput);
    let listElement = document.querySelectorAll("li");
    listElement[num].scrollIntoView({behavior: "smooth"});
    inputString.value = "";
});