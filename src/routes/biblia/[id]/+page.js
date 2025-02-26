import { error } from '@sveltejs/kit';
import biblia from '../../../constants/livros.js';

/**
 * @param {{ params: { id: any; }; }} dados
 */
export function load(dados) {
    const bibliaId = dados.params.id;


    for (let b of biblia) {
        if (b.id == bibliaId) {
            return { b }
        }
    }

    error(404, "Livro da bíblia não encontrado.")
}