const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//Question 1
function cat(complain) {
    console.log("Meow!");
}

cat();


//Question 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";


//Question 3
heading.style.fontSize = "2em";


//Question 4
heading.classList.add("subheading");


//Question 5
const para = document.querySelectorAll("p");

for (let i = 0; i < para.length; i++) {
    para[i].style.color = "red";
};


//Question 6
const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p style="background-color:yellow">New paragragh</p>`;


//Question 7
function list() {
    for(let i = 0; i < cats.length; i++) {
        console.log(cats[i].name);
    }
};

list();


//Question 8
function createCats(cats) {
    
    let html = "";

    for(let i = 0; i < cats.length; i++){

            let catAge = "Uknown age";

            if(cats[i].age) {
                catAge = cats[i].age;
            }

        html += `<div class="cats">
                    <h5>${cats[i].name}</h5>
                    <p>${catAge}</p>
                    </div>`

    }

    return html;
}

const newHTML = createCats(cats)

const catsContainer = document.querySelector(".cat-container");
catsContainer.innerHTML = newHTML;

