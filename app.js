let heading = document.querySelector("h2");
heading.style.display = "block";

document.querySelector("button").addEventListener("click", event => {
    event.preventDefault();

    console.log("heading", heading.style.display);

    if (heading.style.display === "none"){
        heading.style.display = "block";
    } else {
        heading.style.display = "none";
    }
});
