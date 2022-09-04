//CSS
const categorias = document.querySelector ("#categorias");
const empresas = document.querySelector ("#categorias");
const plataformas = document.querySelector ("#categorias");

categorias.onclick = () => {
    categorias.classList.toggle ("bd-radius-select");
};

//INTEGRAÇÃO BACKEND
const bBuscar = document.getElementById ("b-buscar");
const barraPesquisa = document.getElementById ("barra-pesquisa");

function criarMetaverso (metaverso) {
    const containerExterno = document.createElement ("article");
    const containerInterno = document.createElement ("figure");
    const divImagem = document.createElement ("div");
    const descricao = document.createElement ("figcaption");
    const nomeMetaverso = document.createElement ("h2");
    const tags = document.createElement ("span");
    containerExterno.className = "metaverso";
    divImagem.className = "metaverso-imagem";
    divImagem.style.backgroundImage = `url(${metaverso.img});`;
    descricao.className = "metaverso-descricao";
    nomeMetaverso.className = "nome-metaverso";
    nomeMetaverso.innerText = metaverso.nome;
    tags.className = "tags";
    tags.innerHTML = metaverso.categoria;
    descricao.appendChild (nomeMetaverso);
    descricao.appendChild (tags);
    containerInterno.appendChild (divImagem);
    containerInterno.appendChild (descricao);
    containerExterno.appendChild (containerInterno);
    containerExterno.setAttribute ("data-id-bd", metaverso.id);
    return containerExterno;
}

bBuscar.onclick = () => {
    const resultadosBarraPesquisa = {};
    const resultadosCategorias = {};
    if (barraPesquisa) {
        localStorage.setItem ("pesquisa", barraPesquisa.value);
    }
    if ()
}
