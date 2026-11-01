// ใช้ open.er-api.com (ฟรี ไม่ต้องใช้ API key) แทน key เดิมที่ใช้ไม่ได้แล้ว
const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("worth-first");
const currencySecondEl = document.getElementById("currency-second");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");

// เก็บอัตราแลกเปลี่ยนที่ดึงมาแล้ว จะได้ไม่ต้องเรียก API ทุกครั้งที่พิมพ์ตัวเลข
const ratesCache = {};

async function getRates(base) {
  if (!ratesCache[base]) {
    const res = await fetch(`https://open.er-api.com/v6/latest/${base}`);
    const data = await res.json();
    if (data.result !== "success") throw new Error("Rate API error");
    ratesCache[base] = data.rates;
  }
  return ratesCache[base];
}

async function updateRate() {
  try {
    const rates = await getRates(currencyFirstEl.value);
    const rate = rates[currencySecondEl.value];
    exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`;
    worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
  } catch (error) {
    console.log(error);
    exchangeRateEl.innerText = "Could not load exchange rate, please try again later";
  }
}

updateRate();

currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);
worthFirstEl.addEventListener("input", updateRate);
