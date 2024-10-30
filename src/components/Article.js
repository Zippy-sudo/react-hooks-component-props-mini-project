import React from "react";

function Text({minutes}) {
    let display; 
    if (minutes < 30) {
        let number = Math.round(minutes/5);
        let array = new Array();
        array.push(`${minutes} minute read`)
        for (let counter = 0; counter < number; counter++) {
            array.unshift("☕️");
        }
        display = array.join(" ");
        return <p>{display}</p>;
    } else  {
        let number = Math.round(minutes/10);
        let array = new Array();
        array.push(`${minutes} minute read`)
        for (let counter = 0; counter < number; counter++) {
            array.unshift("🍱");
        }
        display = array.join(" ");
        return <p>{display}</p>;
    }
}
function Article({id, title, date="January 1, 1970", preview, minutes}) {
    return(
    <article key={id}>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
        <Text minutes={minutes}/>
    </article>
    )
}

export default Article;