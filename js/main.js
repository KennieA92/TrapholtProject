let darkMode = () => {
    let element = document.getQuerySelector("body").classList.toggle("dark") // [0] cuz class are going through an array
    element.classList.toggle("dark");
}
