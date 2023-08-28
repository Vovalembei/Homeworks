const body = document.querySelector(".body")
const btn = document.querySelector(".btn")
const colors = ['red', 'blue', 'yellow', 'orange', 'gray', 'black', 'aqua', 'brown']
const getRandomIndex = () => {
    const randomIndex = Math.floor(Math.random() * (7 + 1));
    return colors[randomIndex]
  }
  const handleClick = () => {
    body.style.backgroundColor = getRandomIndex();
    console.log("click");
  }
  btn.addEventListener("click", handleClick);