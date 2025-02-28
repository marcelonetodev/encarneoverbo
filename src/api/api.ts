import { error } from "@sveltejs/kit";

export let data: any
let link = "https://bible-api.com/";
let traducao = "almeida";
export async function api(livro: any, capitulo: any) {
  try {
    const response = await fetch(
      `${link}${livro}+${capitulo}?translation=${traducao}`,
    );
    data = await response.json();
    return data;

  } catch {
    error(404, "Livro não encontrado.")
  }
}

export async function randomApi(){
  try{
    const response = await fetch(
      `${link}/data/${traducao}/random`
    );
    data = await response.json();
    return data.random_verse
  }catch{
    error(404, "Versículo não encontrado.")
  }
}

