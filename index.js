import { criarItemDaLista } from './scripts/criarItemDaLista.js';
import verificarListaVazia from './scripts/verificarListaVazia.js';

const listaDeCompras = document.getElementById('lista-de-compras');
const formAdicionarItem = document.getElementById('form-adicionar-item');

formAdicionarItem.addEventListener('submit', (event) => {
    event.preventDefault();
    const itemDaLista = criarItemDaLista();
    if (itemDaLista) {
        listaDeCompras.appendChild(itemDaLista);
        verificarListaVazia(listaDeCompras);
        formAdicionarItem.reset();
    }
});

verificarListaVazia(listaDeCompras);