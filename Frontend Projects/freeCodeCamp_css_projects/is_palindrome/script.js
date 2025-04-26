const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

    const isPalindrome = (str) => {
      const cleaned = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
      return cleaned === cleaned.split("").reverse().join("");
    };

    checkBtn.addEventListener("click", () => {
      const inputValue = textInput.value;

      if (!inputValue) {
        alert("Please input a value.");
        return;
      }

      if (isPalindrome(inputValue)) {
        result.textContent = `${inputValue} is a palindrome.`;
      } else {
        result.textContent = `${inputValue} is not a palindrome.`;
      }

      result.classList.remove('show'); 
      void result.offsetWidth; 
      result.classList.add('show');
    });