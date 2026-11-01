const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

const formEl = document.querySelector("form");
const searchInputEl = document.getElementById("search-input");
const searchResultsEl = document.querySelector(".search-results");
const showMoreButtonEl = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImages() {
  inputData = searchInputEl.value.trim();
  if (!inputData) return;

  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${encodeURIComponent(
    inputData
  )}&client_id=${accessKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Unsplash error ${response.status}`);
    const data = await response.json();

    if (page === 1) {
      searchResultsEl.innerHTML = "";
    }

    const results = data.results;

    if (page === 1 && results.length === 0) {
      searchResultsEl.innerHTML = "<p>No images found</p>";
      showMoreButtonEl.style.display = "none";
      return;
    }

    results.forEach((result) => {
      const caption = result.alt_description || result.description || "Untitled";
      const imageWrapper = document.createElement("div");
      imageWrapper.classList.add("search-result");
      const image = document.createElement("img");
      image.src = result.urls.small;
      image.alt = caption;
      const imageLink = document.createElement("a");
      imageLink.href = result.links.html;
      imageLink.target = "_blank";
      imageLink.rel = "noopener noreferrer";
      imageLink.textContent = caption;

      imageWrapper.appendChild(image);
      imageWrapper.appendChild(imageLink);
      searchResultsEl.appendChild(imageWrapper);
    });

    page++;
    showMoreButtonEl.style.display = page <= data.total_pages ? "block" : "none";
  } catch (error) {
    console.log(error);
    searchResultsEl.innerHTML = "<p>An error happened, please try again later</p>";
    showMoreButtonEl.style.display = "none";
  }
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
});

showMoreButtonEl.addEventListener("click", () => {
  searchImages();
});
