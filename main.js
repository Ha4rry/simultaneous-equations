let a1 = 1;
let b1 = 1;
let c1 = 1;

let a2 = 1;
let b2 = 1;
let c2 = 1;

let x = 0
let y = 0


window.addEventListener("load", (event) => {
    const solveButton = document.querySelector("#solveButton");
    const solutionTitleText = document.querySelector("#solutionTitleText")
    const solutionTextBox = document.querySelector("#solutionTextBox")

    solveButton.addEventListener("click", () => {
        a1 = parseFloat(document.querySelector("#a1").value);
        b1 = parseFloat(document.querySelector("#b1").value);
        c1 = parseFloat(document.querySelector("#c1").value);

        a2 = parseFloat(document.querySelector("#a2").value);
        b2 = parseFloat(document.querySelector("#b2").value);
        c2 = parseFloat(document.querySelector("#c2").value);

        y = (c1*a2 - c2*a1)/(b1*a2 - b2*a1)
        x = (c1 - b1*y) / a1
        solutionTitleText.innerText= 'Solution:'
        katex.render(String.raw`x = ${x}\\y = ${y}`, solutionTextBox)

    })
    allInputs=document.querySelectorAll("input")
    for (let i = 0; i < allInputs.length; i++){
        allInputs[i].addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                solveButton.click();
            }
        })
    }

  });