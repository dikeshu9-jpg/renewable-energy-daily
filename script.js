async function loadNews() {
    const response = await fetch("news.json");
    const news = await response.json();

    const newsContainer = document.getElementById("news-list");

    if (!newsContainer) return;

    newsContainer.innerHTML = "";

    news.forEach(item => {
        newsContainer.innerHTML += `
        <div class="news">
            <h3>${item.title}</h3>
            <strong>${item.category}</strong>
            <p>${item.summary}</p>
        </div>
        `;
    });
}

loadNews();
