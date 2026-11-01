// quotable.io ปิดตัวแล้ว เปลี่ยนมาใช้ dummyjson.com (ฟรี ไม่ต้องใช้ key)
const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiURL = "https://dummyjson.com/quotes/random";

async function getQuote() {
  try {
    btnEl.innerText = "Loading...";
    btnEl.disabled = true;
    quoteEl.innerText = "Updating...";
    authorEl.innerText = "Updating...";
    const response = await fetch(apiURL);
    if (!response.ok) throw new Error(`Quote API error ${response.status}`);
    const data = await response.json();
    quoteEl.innerText = data.quote;
    authorEl.innerText = "~ " + data.author;
  } catch (error) {
    console.log(error);
    quoteEl.innerText = "An error happened, try again later";
    authorEl.innerText = "An error happened";
  } finally {
    btnEl.innerText = "Get a quote";
    btnEl.disabled = false;
  }
}

getQuote();

btnEl.addEventListener("click", getQuote);
