import './styles.scss';

"use strict";

window.addEventListener("load", () => {

    const getAdviceButton = document.querySelector(".circle");
    const header = document.querySelector(".advice-generator h1");
    const quoteAdvice = document.querySelector(".quote-advice");

    getAdviceButton.addEventListener("click", fetchAdvice)

    async function fetchAdvice() {
        try {
            const results = await axios.get("https://api.adviceslip.com/advice");
            const data = results.data.slip;
            displayAdvice(data);
        } catch (error) {
            console.error(error);
        }
    }

    function displayAdvice(data) {
        header.textContent = `Advice #${data.id}`;
        quoteAdvice.textContent = `"${data.advice}"`;
    }
}) // End load event listener