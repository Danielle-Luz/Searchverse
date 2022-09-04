const containerMetaversos = document.querySelector (".container-metaversos");

const retorno = fetch ("https://searchverse-api.herokuapp.com/metaverses")
.then (data => {
    return data.json();
}).then (json => {
    //console.log (json);
    for (let id in json) {
        containerMetaversos.appendChild (criarMetaverso (json[id]));
    }
})