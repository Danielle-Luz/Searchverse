//CSS
const categorias = document.querySelector ("#categorias");

categorias.onclick = () => {
    categorias.classList.toggle ("bd-radius-select");
};

//INTEGRAÇÃO BACKEND
const bBuscar = document.getElementById ("b-buscar");
const barraPesquisa = document.getElementById ("barra-pesquisa");
/*
                <article class="metaverso">
                    <figure>
                        <div class="metaverso-imagem"></div>
                        <figcaption class="metaverso-descricao">
                            <h2 class="nome-metaverso">Nome do metaverso</h2>
                            <span class="tags">#enem #inglês #meioambien...</span>
                        </figcaption>
                    </figure>
                </article>
*/

bBuscar.onclick = () => {
    const resultadosBarraPesquisa = {};
    const resultadosCategorias = {};
    if (barraPesquisa) {
        localStorage.setItem ("pesquisa", barraPesquisa.value);
    }
}
