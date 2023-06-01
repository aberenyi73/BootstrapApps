var gis = document.querySelectorAll(".grid-item")

gis.forEach(element =>
    {
        element.addEventListener("click",
            function() {
                if (element.textContent == "X")
                    element.textContent = "O";
                else if (element.textContent == "O")
                    element.textContent = "";
                else
                    element.textContent = "X";
            }
        )
    }
)

var btn = document.querySelector("#restart")

btn.addEventListener("click", function() {gis.forEach(element => {element.textContent = ""})})