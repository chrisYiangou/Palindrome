//Get ID
const inputArea = document.getElementById("text-input");
const submitButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");
const historyDiv = document.querySelector("#history");
const historyButton = document.querySelector("#history-button");
const clearHistoryButton = document.querySelector("#clear-history-button");

//Variables
let displayHistory = false;

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
      const saveAnswerToMemory = (answer) => {
        //Will save to local memory for now
        localStorage.setItem(localStorage.length, answer);
      }
    const isValid = isTextAreaEmpty(); 
    if (isValid) {
        let answer = ""
        const initialValue = removeSpace(removePunctuation(inputArea.value));
        const reversedValue = removeSpace(removePunctuation(reverseWord(inputArea.value)));
        if (initialValue === reversedValue) {
            answer = `${inputArea.value} is a palindrome ✅`;
            resultDiv.innerHTML = answer;
        } else {
            answer = `${inputArea.value} is not a palindrome ❌`;
            resultDiv.innerHTML = answer;
        }
        saveAnswerToMemory(answer);
    }
    } 

    const showHistory = () => {
        displayHistory = !displayHistory;
        if (!displayHistory) {
            for (let i=0; i < localStorage.length; i++) {
                const para = document.createElement("p");
                para.innerText = localStorage.getItem(i);
                historyDiv.appendChild(para);
            }
        } else {
            historyDiv.innerHTML = "";
        }
    }

    const clearHistory = () => {
        localStorage.clear();
        historyDiv.innerHTML = "";
    }
   
//Query Selectors
submitButton.addEventListener('click', solvePalindrome);
inputArea.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') solvePalindrome();
});
historyButton.addEventListener('click', showHistory);
clearHistoryButton.addEventListener('click', clearHistory);

  