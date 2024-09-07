function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nenhum resultado foi encontrado. Você precisa digitar o nome de um atleta, modalidade, esporte, cidade ou estado.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let modalidade = "";
    let localDeNascimento = "";
    let biografia = "";
    let conquistas = "";
    let tags = "";

    for (let atleta of atletas) {
        titulo = atleta.titulo.toLowerCase()
        modalidade = atleta.modalidade.toLowerCase()
        localDeNascimento = atleta.localDeNascimento.toLowerCase()
        biografia = atleta.biografia.toLowerCase()
        conquistas = atleta.conquistas.toLowerCase()
        tags = atleta.tags.toLowerCase()

        if (titulo.includes(campoPesquisa) || modalidade.includes(campoPesquisa) || localDeNascimento.includes(campoPesquisa)|| biografia.includes(campoPesquisa) || conquistas.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${atleta.link}" target="_blank">${atleta.titulo}</a>
                </h2>
                <img class="retrato" src="${atleta.retrato}" alt="retrato do(a) atleta">
                <a  href="${atleta.redeSocial}" target="_blank">Instagram</a>
                <p class="modalidade"><strong>Modalidade: </strong>${atleta.modalidade}</p> 
                <p class="local-de-nascimento"><strong>Local de nascimento: </strong>${atleta.localDeNascimento}</p> 
                <p class="biografia-meta"><strong>Biografia: </strong>${atleta.biografia}</p> 
                <p class="conquistas"><strong>Conquistas: </strong>${atleta.conquistas}</p> 
                <a href="${atleta.link}" target="_blank">Mais informações</a>
            </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nenhum resultado foi encontrado</p>"

    }

    section.innerHTML = resultados;
}


