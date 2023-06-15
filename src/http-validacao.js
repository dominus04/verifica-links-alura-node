function converteLinksString(arrLinks) {
    const listaUrls = arrLinks.map((objetoLink) => Object.values(objetoLink).join());
    return listaUrls;
}

function manejaErro(error) {
    return error.code == "ENOTFOUND" ? "O link está inativo." : "Há um erro no link.";
}

async function checaStatus(listaUrls) {
    const arrStatus = await Promise.all(
        listaUrls.map(async (url) => {
            try{
                const response = await fetch(url, {method: 'HEAD'});
                return `${response.status} - ${response.statusText}`;
            }catch(error){
                return manejaErro(error.cause);
            }
        })
    );
    return arrStatus;
}

export default async function listaValidada(listaDeLinks){
    const links = converteLinksString(listaDeLinks);
    const status = await checaStatus(links);
    return listaDeLinks.map((objeto, indice) => ({
        ...objeto,
        status: status[indice]
    }))
}
