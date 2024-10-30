import React from "react";
import Article from "./Article"

function ArticleList({ posts }) {
    const articles = posts.map(element => <Article title={element.title} date={element.date} preview={element.preview} minutes={element.minutes} />)
    return (
        <main>
            {articles}
        </main>
    )
}

export default ArticleList;
