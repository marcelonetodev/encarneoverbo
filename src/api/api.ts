let book
let text
let verses
let reference
let count = 1

export async function api(livro: any, capitulo: any) {
    const response = await fetch(
        `https://bible-api.com/${livro}+${capitulo}?translation=almeida`
    );
    book = await response.json();
    text = book.text;
    verses = book.verses;
    reference = book.reference;
    count++
    return book;
}

