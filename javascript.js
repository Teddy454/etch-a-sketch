// const container = document.querySelector("#container");

const gridHeight = 16;
const gridWidth = 16;

for (let i = 0; i < gridHeight - 1; i++) {
    const container = document.querySelector("#container");
    const gridLine = document.createElement("div");
    gridLine.classList.add("gridLine");
    for (let i = 0; i < gridWidth - 1; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");
        div.textContent = "Test";
        gridLine.appendChild(div);
    }
    container.appendChild(gridLine);
}