import { error } from '@sveltejs/kit';
import livros from '../../../constants/livros.js';

/**
 * @param {{ params: { id: any; }; }} dados
 */
export function load(dados) {
    const livroId = dados.params.id;


    for (let livro of livros) {
        if (livro.id == livroId) {
            return { livro }
        }
    }

    error(404, "Livro não encontrado.")
}