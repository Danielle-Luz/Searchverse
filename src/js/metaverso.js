const metaversoSelecionado = localStorage.getItem ("metaversoSelecionado");
const containerExterno = document.querySelector (".container-externo");


const retorno = fetch ("https://searchverse-api.herokuapp.com/metaverses/")
.then ((data) => {
    return DataTransfer.json ();
}).then ((json) => {
    for (let metaverso in json) {
        if (metaverso.id == metaversoSelecionado) {
            const divImagem = document.querySelector (".imagem-metaverso");
            const nomeMetaverso = document.querySelector (".nome-metaverso");
            const nomeEmpresa = document.querySelector (".nome-empresa");
            const descricao = document.querySelector (".descricao");
            const tags = document.querySelector (".tags");
            
            divImagem.style.backgroundImage = `url(${metaverso.img})`;
            nomeMetaverso.innerHTML = metaverso.nome;
            nomeEmpresa.querySelector ("a").innerHTML = metaverso.empresa;
            descricao.innerHTML = metaverso.descricao;
            tags.innerHTML = metaverso.categoria;
        }
    }
});