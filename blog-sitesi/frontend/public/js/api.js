
async function fetchPosts() {
  try {
    const response = await fetch('/api/posts');
    const posts = await response.json();
    renderPosts(posts);
  } catch (err) {
    console.error('Gönderiler yüklenirken hata:', err);
  }
}

function renderPosts(posts) {
  const container = document.getElementById('posts-container');
  container.innerHTML = posts.map(post => `
    <article class="post-card">
      <h2>${post.title}</h2>
      <div class="post-meta">
        <span>${post.username}</span> | 
        <span>${new Date(post.created_at).toLocaleDateString()}</span>
      </div>
      <p>${post.content.substring(0, 150)}...</p>
      <a href="/posts/detail.html?id=${post.id}" class="read-more">Devamını Oku</a>
    </article>
  `).join('');
}


document.addEventListener('DOMContentLoaded', fetchPosts);