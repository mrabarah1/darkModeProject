const toggleBtn = document.querySelector(".btn");
const articlesContainer = document.querySelector(".articles");

toggleBtn.addEventListener("click", () => {
 document.documentElement.classList.toggle("dark-theme");
});

// iterate over the articles array
const articlesData = articles.map((item) => {
 const {title, date, length, snippet} = item;

 // formate date
 const formatDate = moment(date).format("MMM Do YY");



 return `<article class="post">
          <h2>${title}</h2>
          <div class="post-info">
            <span>${formatDate}</span>
            <span>${length}</span>
          </div>
          <p>${snippet}</p>
        </article>`;
}).join("");

articlesContainer.innerHTML = articlesData;

// momentjs.com
// cdnjs momentjs