import { error } from "@sveltejs/kit";

import acf from "../constants/JSON/acf.json";
import ara from "../constants/JSON/ara.json";
import arc from "../constants/JSON/arc.json";
import as21 from "../constants/JSON/as21.json";
import jfaa from "../constants/JSON/jfaa.json";
import kja from "../constants/JSON/kja.json";
import kjf from "../constants/JSON/kjf.json";
import naa from "../constants/JSON/naa.json";
import nbv from "../constants/JSON/nbv.json";
import ntlh from "../constants/JSON/ntlh.json";
import nvi from "../constants/JSON/nvi.json";
import nvt from "../constants/JSON/nvt.json";
import tb from "../constants/JSON/tb.json";


export let book: any = null;
export let text: any = null;
export let verses: any = null;
export let reference: any = null;

async function json(tipo: any, livro: any, capitulo: any) {
  try {

    tipo == "ACF"
      ? (book = acf)
      : tipo == "ARA"
        ? (book = ara)
        : tipo == "ARC"
          ? (book = arc)
          : tipo == "AS21"
            ? (book = as21)
            : tipo == "JFAA"
              ? (book = jfaa)
              : tipo == "KJA"
                ? (book = kja)
                : tipo == "KJF"
                  ? (book = kjf)
                  : tipo == "NAA"
                    ? (book = naa)
                    : tipo == "NBV"
                      ? (book = nbv)
                      : tipo == "NTLH"
                        ? (book = ntlh)
                        : tipo == "NVI"
                          ? (book = nvi)
                          : tipo == "NVT"
                            ? (book = nvt)
                            : tipo == "TB"
                              ? (book = tb)
                              : null;
    text = book[livro].chapters[capitulo];
    verses = book[livro].chapters[capitulo];
    reference = `${book[livro].name} ${capitulo + 1}`;
    return { text, verses, reference }
  } catch {
    error(401, 'Livro não encontrado')
  }
}

export default json