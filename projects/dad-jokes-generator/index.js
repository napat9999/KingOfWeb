// เปลี่ยนจาก api-ninjas (ต้องใช้ key และ limit=1 กลายเป็นฟีเจอร์เสียเงิน) มาใช้ icanhazdadjoke.com (ฟรี ไม่ต้องใช้ key)
const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiURL = "https://icanhazdadjoke.com/";

const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

async function getJoke() {
  try {
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    if (!response.ok) throw new Error(`Joke API error ${response.status}`);
    const data = await response.json();
    jokeEl.innerText = data.joke;
  } catch (error) {
    jokeEl.innerText = "An error happened, try again later";
    console.log(error);
  } finally {
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
  }
}

btnEl.addEventListener("click", getJoke);
