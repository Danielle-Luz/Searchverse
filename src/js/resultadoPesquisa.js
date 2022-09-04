const containerMetaversos = document.querySelector (".container-metaversos");
const pesquisa = localStorage.getItem ("pesquisa");
const quantidadeResultado = document.querySelector (".titulo");

function criarMetaverso (metaverso) {
    const containerExterno = document.createElement ("article");
    const containerInterno = document.createElement ("figure");
    const divImagem = document.createElement ("div");
    const descricao = document.createElement ("figcaption");
    const nomeMetaverso = document.createElement ("h2");
    const tags = document.createElement ("span");
    containerExterno.className = "metaverso";
    divImagem.className = "metaverso-imagem";
    divImagem.style.backgroundImage = metaverso.img;
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

const retorno = fetch ("https://searchverse-api.herokuapp.com/metaverses")
.then (retornoDados => {
    return retornoDados.json ();
}).then (retornoJson => {
    let quantidade = 0;
    for (id in retornoJson) {
        for (let metaverso in retornoJson[id]) {
            if (retornoJson[id][metaverso] == pesquisa) {
                quantidade++;
                const elementoMetaverso = criarMetaverso (retornoJson[id]);
                containerMetaversos.appendChild (elementoMetaverso);
                break;
            }
        }
    }
    quantidadeResultado.innerHTML = `${quantidade} resultados encontrados`;
}).catch ((error) => {console.log (error);});