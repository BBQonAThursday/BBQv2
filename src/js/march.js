// Set all non-featured article heights to be the same size.

var articles = document.querySelectorAll('.article');
console.log(articles);

function setArticleHeight() {
  articleHeights = []
  for(i = 0; i < articles.length; i ++){
    if(articles[i].classList.contains('featured-article')){
      console.log('is featured');
    } else {
      console.log(articles[i].clientHeight);
      articleHeights.push(articles[i].clientHeight);
    }
    console.log(articleHeights);

    for(j = 0; j < articles.length; j++) {
      if(articles[j].classList.contains('featured-article')){
        // break;
      } else {
        articles[j].style.height = Math.max.apply(Math, articleHeights) + 'px';
        console.log(Math.max.apply(Math, articleHeights) + 'px');
      }
    }
  }
}
document.addEventListener('resize', setArticleHeight);
window.addEventListener('load', setArticleHeight);