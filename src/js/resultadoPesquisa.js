const containerMetaversos = document.querySelector (".container-metaversos");
const filtros = JSON.parse (localStorage.getItem ("filtros"));
const quantidadeResultado = document.querySelector (".titulo");


    const retorno = fetch ("https://searchverse-api.herokuapp.com/metaverses")
    .then (retornoDados => {
        return retornoDados.json ();
    }).then (retornoJson => {
        let quantidade = 0;
        for (id in retornoJson) {
            console.log (retornoJson[id])
            for (let metaverso in retornoJson[id]) {
                let valor = retornoJson[id][metaverso];
                if (String (valor).toLowerCase () == filtros.pesquisa.toLowerCase ()) {
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


if (filtros.plataformas) {
    const retorno = fetch ("https://searchverse-api.herokuapp.com/metaverses/buscar_plataforma/" + filtros.plataformas)
    .then (retornoDados => {
        return retornoDados.json ();
    }).then (retornoJson => {
        let quantidade = 0;
        for (id in retornoJson) {
            const elementoMetaverso = criarMetaverso (retornoJson[id]);
            containerMetaversos.appendChild (elementoMetaverso);
            quantidade++;
        }
        quantidadeResultado.innerHTML = `${quantidade} resultados encontrados`;
    }).catch ((error) => {console.log (error);});
}

if (filtros.empresas) {
    const retorno = fetch ("https://searchverse-api.herokuapp.com/metaverses/buscar_empresa/" + filtros.empresas)
    .then (retornoDados => {
        return retornoDados.json ();
    }).then (retornoJson => {
        let quantidade = 0;
        for (id in retornoJson) {
            const elementoMetaverso = criarMetaverso (retornoJson[id]);
            containerMetaversos.appendChild (elementoMetaverso);
            quantidade++;
        }
        quantidadeResultado.innerHTML = `${quantidade} resultados encontrados`;
    }).catch ((error) => {console.log (error);});
}

if (filtros.categorias) {
    const retorno = fetch ("https://searchverse-api.herokuapp.com/metaverses/buscar_categoria/" + filtros.categorias)
    .then (retornoDados => {
        return retornoDados.json ();
    }).then (retornoJson => {
        let quantidade = 0;
        for (id in retornoJson) {
            const elementoMetaverso = criarMetaverso (retornoJson[id]);
            containerMetaversos.appendChild (elementoMetaverso);
            quantidade++;
        }
        quantidadeResultado.innerHTML = `${quantidade} resultados encontrados`;
    }).catch ((error) => {console.log (error);});
}