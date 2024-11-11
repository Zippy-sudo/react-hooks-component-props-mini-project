import React from "react";
import Article from "./Article"
import { v4 as uuidv4 } from "uuid"

function ArticleList({ posts }) {
    const articles = posts.map(element => <Article key={uuidv4()} title={element.title} date={element.date} preview={element.preview} minutes={element.minutes} />)
    return (
        <main>
            {articles}
        </main>
    )
}

export default ArticleList;
