import { criarMetaverso } from "./scripts.js";

const metaversoSelecionado = localStorage.getItem ("metaversoSelecionado");
const containerExterno = document.querySelector (".container-externo");
const metaversosAside = document.querySelectorAll (".metaverso");

const retorno = fetch ("https://searchverse-api.herokuapp.com/metaverses/")
.then ((data) => {
    return data.json ();
}).then ((json) => {
    let contador = 0;
    let metaversoEncontrado = {};
    for (let metaverso in json) {
        console.log (metaversoSelecionado)
        if (json[metaverso].id == metaversoSelecionado) {
            const divImagem = document.querySelector (".imagem-metaverso");
            const nomeMetaverso = document.querySelector (".nome-metaverso");
            const nomeEmpresa = document.querySelector (".nome-empresa");
            const descricao = document.querySelector (".descricao");
            const tags = document.querySelector (".tags");
            const acessar = document.querySelector (".botao-acessar");
            
            divImagem.style.backgroundImage = `url(${json[metaverso].img})`;
            nomeMetaverso.innerHTML = json[metaverso].nome;
            nomeEmpresa.querySelector ("a").innerHTML = json[metaverso].empresa;
            descricao.innerHTML = json[metaverso].descricao;
            tags.innerHTML = "#"+json[metaverso].categoria;
            metaversoEncontrado = json[metaverso];
        }
        if (json[metaverso].id != metaversoSelecionado && contador < 3 && json[metaverso].categoria == metaversoEncontrado.categoria) {
            let asideImg = metaversosAside[contador].querySelector (".metaverso-imagem");
            let asideH2 = metaversosAside[contador].querySelector (".nome-metaverso");
            let asideDescricao = metaversosAside[contador].querySelector (".metaverso-descrica");
            let asideSpan = metaversosAside[contador].querySelector (".tags");
            asideImg.style.backgroundImage = json[metaverso].img;
            asideH2.innerHTML = json[metaverso].nome;
            asideDescricao.innerHTML = json[metaverso].descricao;
            asideSpan = json[metaverso].categoria;
            contador++;
        }
    }
});