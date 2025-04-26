const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const isPalindrome = (str) => {
  const cleaned = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  return cleaned === cleaned.split("").reverse().join("");
};

const animateResult = (inputValue, isPalin) => {
  result.innerHTML = '';

  if (isPalin) {
    result.textContent = `${inputValue} is a palindrome.`;

    void result.offsetWidth;
    result.classList.add('show');
  } else {
    const firstPart = document.createElement('span');
    firstPart.textContent = `${inputValue} is `;
    firstPart.style.opacity = '0';
    firstPart.style.transition = 'opacity 0.8s ease';

    const notWord = document.createElement('span');
    notWord.textContent = 'NOT';
    notWord.classList.add('glitch-word');
    notWord.style.opacity = '0';
    notWord.style.transition = 'opacity 0.8s ease 2s'; // 2 sec delay

    const secondPart = document.createElement('span');
    secondPart.textContent = ' a palindrome.';
    secondPart.style.opacity = '0';
    secondPart.style.transition = 'opacity 0.8s ease 2s'; // 2 sec delay to match

    result.appendChild(firstPart);
    result.appendChild(notWord);
    result.appendChild(secondPart);

    void result.offsetWidth;

    firstPart.style.opacity = '1';
    notWord.style.opacity = '1';
    secondPart.style.opacity = '1';

    void result.offsetWidth;
    result.classList.add('not-palindrome');
  }
};

checkBtn.addEventListener("click", () => {
  const inputValue = textInput.value.trim();

  if (!inputValue) {
    alert("Please input a value.");
    return;
  }

  result.classList.remove('show', 'not-palindrome');

  const palin = isPalindrome(inputValue);
  animateResult(inputValue, palin);
});
