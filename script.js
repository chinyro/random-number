const number = document.querySelector(".number");
const generateBtn = document.querySelector('.generate');


// Generate number between 0 and 100
const generateNumber = () => {
  const randomNumber = Math.floor(Math.random() * 101);
  number.textContent = randomNumber;
}

generateBtn.addEventListener('click', generateNumber);
