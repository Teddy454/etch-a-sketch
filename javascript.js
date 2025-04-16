function drawGrid(gridSide) {
    const container = document.querySelector("#container");
    container.innerHTML = "";

    const squareSize = 500 / gridSide;

    for (let i = 0; i < gridSide * gridSide; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;

        div.addEventListener("mouseenter", () => {
            div.classList.add("hovered");
        });

        container.appendChild(div);
    }
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => drawGrid(prompt("How many squares per side")));