import { error } from "@sveltejs/kit";

export let data: any
let link = "https://bible-api.com/";
let traducao = "almeida";
async function api(livro: any, capitulo: any) {
  try {
    const response = await fetch(
      `${link}${livro}+${capitulo}?translation=almeida`,
      // `${link}/data/${traducao}/${livro}/${capitulo}`
    );
    data = await response.json();
    return data;

  } catch {
    error(404, "Livro não encontrado.")
  }
}

export default api