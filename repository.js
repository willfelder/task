class Repository {

    constructor() {
        this.array = [];
    };

    init() {

        for(let i = 0; i < 600; i++) {
            this.array.push(Math.random().toString(36).substring(7));
        }
        setTimeout(() => {
            console.log("Done");
        }, 1000)
    };

    get() {
        return this.array;
    };
};

const repo = new Repository();
window.onload = repo.init();

const array = repo.get();
let myList = "";

for(let i = 0; i < array.length; i++) {
    myList += "<li>" + array[i] + "</li>";
}

document.getElementById("list").innerHTML = "<ul>" + myList + "</ul>";