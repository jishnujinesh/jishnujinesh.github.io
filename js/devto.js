async function loadDevtoArticles() {
  const container = document.getElementById("devtoArticles");
  container.innerHTML = "<p>Loading AI articles...</p>";

  try {
    const response = await fetch("https://dev.to/api/articles?tag=ai&per_page=5 ");
    const articles = await response.json();

    if (!articles || articles.length === 0) {
      container.innerHTML = "<p>No AI articles found.</p>";
      return;
    }

    container.innerHTML = ""; // clear loading message

    articles.forEach(article => {
      const card = document.createElement("div");
      card.className = "article-card";
      card.innerHTML = `
        <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
        <p>${article.description || "No description available."}</p>
        <p><strong>By:</strong> ${article.user.name}</p>
      `;
      container.appendChild(card);
    });

  } catch (error) {
    console.error("Error fetching articles:", error);
    container.innerHTML = "<p>Failed to load articles.</p>";
  }
}

loadDevtoArticles();
