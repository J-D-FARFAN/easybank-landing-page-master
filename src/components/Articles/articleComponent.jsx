export function ArticleComponent({
  imageArticles,
  byName,
  titleArticle,
  descriptionArticle,
}) {
  return (
    <>
      <article className="content--allArticleLatest">
        <div className="contentImageArticle">
          <img src={imageArticles} alt="" className="imageArticle" />
        </div>

        <section className="bx-infoArticle">
          <span className="byName">By {byName}</span>

          <h3 className="titleArticle">{titleArticle}</h3>

          <p className="txt">{descriptionArticle}</p>
        </section>
      </article>
    </>
  );
}
