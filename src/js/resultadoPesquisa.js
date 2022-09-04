const containerMetaversos = document.querySelector (".container-metaversos");
const pesquisa = localStorage.getItem ("pesquisa");
const quantidadeResultado = document.querySelector (".titulo");

const retorno = fetch ("https://searchverse-api.herokuapp.com/metaverses")
.then (retornoDados => {
    return retornoDados.json ();
}).then (retornoJson => {
    let quantidade = 0;
    for (id in retornoJson) {
        for (let metaverso in retornoJson[id]) {
            let valor = retornoJson[id][metaverso];
            if (String (valor).toLowerCase () == pesquisa.toLowerCase ()) {
                quantidade++;
                console.log (retornoJson[id].img);
                const elementoMetaverso = criarMetaverso (retornoJson[id]);
                containerMetaversos.appendChild (elementoMetaverso);
                break;
            }
        }
    }
    quantidadeResultado.innerHTML = `${quantidade} resultados encontrados`;
}).catch ((error) => {console.log (error);});