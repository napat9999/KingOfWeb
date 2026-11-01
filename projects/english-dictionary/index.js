// api.dictionaryapi.dev เชื่อมต่อไม่ได้แล้ว เปลี่ยนมาใช้ freedictionaryapi.com (ฟรี ไม่ต้องใช้ key)
// API ใหม่ไม่มีไฟล์เสียง จึงใช้เสียงอ่านของเบราว์เซอร์ (speechSynthesis) แทน
const inputEl = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");

// ปุ่มฟังเสียง ใช้แทน <audio> เดิม
audioEl.style.display = "none";
const speakBtn = document.createElement("button");
speakBtn.type = "button";
speakBtn.textContent = "🔊 Listen";
speakBtn.style.cssText = "margin-top:10px;padding:6px 14px;cursor:pointer;";
meaningContainerEl.appendChild(speakBtn);
let currentWord = "";
speakBtn.addEventListener("click", () => {
  if (!currentWord || !("speechSynthesis" in window)) return;
  const utterance = new SpeechSynthesisUtterance(currentWord);
  utterance.lang = "en-US";
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
});

async function fetchAPI(word) {
  try {
    infoTextEl.style.display = "block";
    meaningContainerEl.style.display = "none";
    infoTextEl.innerText = `Searching the meaning of "${word}"`;
    const url = `https://freedictionaryapi.com/api/v1/entries/en/${encodeURIComponent(word)}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Dictionary API error ${response.status}`);
    const result = await response.json();

    infoTextEl.style.display = "none";
    meaningContainerEl.style.display = "block";

    const entry = result.entries.find((e) => e.senses && e.senses.length > 0);
    if (!entry) {
      titleEl.innerText = word;
      meaningEl.innerText = "N/A";
      speakBtn.style.display = "none";
      return;
    }

    const ipa = entry.pronunciations?.find((p) => p.type === "ipa")?.text;
    currentWord = result.word;
    titleEl.innerText = ipa ? `${result.word} ${ipa}` : result.word;
    meaningEl.innerText = `(${entry.partOfSpeech}) ${entry.senses[0].definition}`;
    speakBtn.style.display = "speechSynthesis" in window ? "inline-block" : "none";
  } catch (error) {
    console.log(error);
    infoTextEl.style.display = "block";
    meaningContainerEl.style.display = "none";
    infoTextEl.innerText = `an error happened, try again later`;
  }
}

inputEl.addEventListener("keyup", (e) => {
  if (e.target.value.trim() && e.key === "Enter") {
    fetchAPI(e.target.value.trim());
  }
});
