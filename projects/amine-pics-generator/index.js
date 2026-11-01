// ใช้ AniList (ฟรี ไม่ต้องใช้ API key) สุ่มอนิเมะจริงพร้อมรูปปกและชื่อเรื่อง
const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const amineNameEl = document.querySelector(".anime-name");

const API_URL = "https://graphql.anilist.co";

const QUERY = `
  query ($page: Int) {
    Page(page: $page, perPage: 1) {
      media(type: ANIME, sort: POPULARITY_DESC, isAdult: false) {
        title { romaji english }
        coverImage { extraLarge large }
      }
    }
  }
`;

async function getRandomAnime() {
  const page = Math.floor(Math.random() * 2000) + 1;
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ query: QUERY, variables: { page } }),
  });
  if (!response.ok) throw new Error(`AniList error ${response.status}`);
  const data = await response.json();
  const anime = data.data.Page.media[0];
  if (!anime) throw new Error("No anime found");
  return anime;
}

btnEl.addEventListener("click", async function () {
  try {
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    amineNameEl.innerText = "Updating...";
    animeImgEl.src = "spinner.svg";
    const anime = await getRandomAnime();
    animeContainerEl.style.display = "block";
    animeImgEl.src = anime.coverImage.extraLarge || anime.coverImage.large;
    animeImgEl.alt = anime.title.english || anime.title.romaji;
    amineNameEl.innerText = anime.title.english || anime.title.romaji;
  } catch (error) {
    console.log(error);
    amineNameEl.innerText = "An error happened, please try again";
  } finally {
    btnEl.disabled = false;
    btnEl.innerText = "Get Anime";
  }
});
