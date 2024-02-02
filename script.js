//Get ID
const inputArea = document.getElementById("text-input");
const submitButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");


//Functions
const solvePalindrome = () => {  
    const isTextAreaEmpty = () => {
        if(inputArea.value.trim() === "") {
          alert("Please input a value")
          return false;
        }
          return true;
      }
      const removePunctuation = (text) => {
        return text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~() \s]/g, " ").trim();
      }
      const reverseWord = (text) => {
        return text.split("").reverse().join("");
      }
      const removeSpace = (text) => {
        return text.replace(/\s/g, "");
      }
    const isValid = isTextAreaEmpty(); 
    if (isValid) {
        let answer = ""
        const initialValue = removeSpace(removePunctuation(inputArea.value));
        const reversedValue = removeSpace(removePunctuation(reverseWord(inputArea.value)));
        console.log(initialValue, reversedValue);
        if (initialValue === reversedValue) {
            answer = `${inputArea.value} is a palindrome`
            resultDiv.innerHTML = answer ;
        } else {
            answer = `${inputArea.value} is not a palindrome`
            resultDiv.innerHTML = answer;
        }
    }
    }
   
//Query Selector
submitButton.addEventListener('click', solvePalindrome);

  