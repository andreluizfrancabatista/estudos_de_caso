// Lista de estudos disponíveis
const estudosDisponiveis = [
    'vigilancia-urbana',
    'ia-recrutamento',
    'carros-autonomos'
];

// Estado global da aplicação
let estadoApp = {
    estudoAtual: null,
    secaoAtiva: 0,
    personagemSelecionado: null
};

// Função para carregar um estudo específico
async function carregarEstudo(idEstudo) {
    try {
        const modulo = await import(`./estudos/${idEstudo}.js`);
        return modulo.default;
    } catch (erro) {
        console.error(`Erro ao carregar estudo ${idEstudo}:`, erro);
        return null;
    }
}

// Função para renderizar lista de estudos na página principal
async function renderizarListaEstudos() {
    const lista = document.getElementById('lista-estudos');
    if (!lista) return;

    lista.innerHTML = '<p style="text-align: center;">Carregando estudos...</p>';

    try {
        const estudos = await Promise.all(
            estudosDisponiveis.map(id => carregarEstudo(id))
        );

        lista.innerHTML = '';

        estudos.forEach((estudo, index) => {
            if (!estudo) return;

            const item = document.createElement('div');
            item.className = 'item-estudo';
            item.onclick = () => {
                window.location.href = `estudo-de-caso.html?id=${estudo.id}`;
            };

            item.innerHTML = `
                <div class="numero-estudo">${index + 1}</div>
                <span class="icone-estudo-item">${estudo.icone}</span>
                <div class="info-estudo-item">
                    <h2>${estudo.titulo}</h2>
                    <p class="subtitulo-item">${estudo.subtitulo}</p>
                    <p>${estudo.resumo}</p>
                </div>
                <a href="estudo-de-caso.html?id=${estudo.id}" class="btn-acessar" onclick="event.stopPropagation()">
                    Acessar →
                </a>
            `;

            lista.appendChild(item);
        });
    } catch (erro) {
        console.error('Erro ao renderizar estudos:', erro);
        lista.innerHTML = '<p style="text-align: center; color: red;">Erro ao carregar estudos.</p>';
    }
}

// Função para obter parâmetro da URL
function obterParametroURL(nome) {
    const params = new URLSearchParams(window.location.search);
    return params.get(nome);
}

// Função para renderizar página de estudo
async function renderizarEstudo() {
    const idEstudo = obterParametroURL('id');
    if (!idEstudo) {
        alert('Estudo não especificado!');
        window.location.href = 'index.html';
        return;
    }

    const estudo = await carregarEstudo(idEstudo);
    if (!estudo) {
        alert('Estudo não encontrado!');
        window.location.href = 'index.html';
        return;
    }

    estadoApp.estudoAtual = estudo;

    // Atualizar cabeçalho
    document.getElementById('icone-estudo').textContent = estudo.icone;
    document.getElementById('titulo-estudo').textContent = estudo.titulo;
    document.getElementById('subtitulo-estudo').textContent = estudo.subtitulo;

    // Renderizar navegação
    renderizarNavegacao(estudo);

    // Renderizar primeira seção
    renderizarSecao(0);
}

// Função para renderizar navegação entre seções
function renderizarNavegacao(estudo) {
    const nav = document.getElementById('navegacao-secoes');
    nav.innerHTML = '';

    // Adicionar botões das seções
    estudo.secoes.forEach((secao, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn-secao';
        btn.textContent = secao.titulo;
        btn.onclick = () => {
            estadoApp.secaoAtiva = index;
            renderizarSecao(index);
            atualizarNavegacao();
        };
        nav.appendChild(btn);
    });

    // Adicionar botão de personagens
    const btnPersonagens = document.createElement('button');
    btnPersonagens.className = 'btn-secao';
    btnPersonagens.textContent = '👥 Personagens';
    btnPersonagens.onclick = () => {
        estadoApp.secaoAtiva = estudo.secoes.length;
        renderizarPersonagens();
        atualizarNavegacao();
    };
    nav.appendChild(btnPersonagens);

    // Adicionar botão de debriefing se existir
    if (estudo.debriefing) {
        const btnDebriefing = document.createElement('button');
        btnDebriefing.className = 'btn-secao';
        btnDebriefing.textContent = '💭 Reflexões';
        btnDebriefing.onclick = () => {
            estadoApp.secaoAtiva = estudo.secoes.length + 1;
            renderizarDebriefing();
            atualizarNavegacao();
        };
        nav.appendChild(btnDebriefing);
    }

    // Adicionar botão de imagem de referência se existir
    if (estudo.imagem) {
        const btnImagem = document.createElement('button');
        btnImagem.className = 'btn-secao';
        btnImagem.textContent = '🖼️ Imagem de referência';
        btnImagem.onclick = () => {
            estadoApp.secaoAtiva = estudo.secoes.length + 2;
            renderizarImagem();
            atualizarNavegacao();
        };
        nav.appendChild(btnImagem);
    }

    atualizarNavegacao();
}

// Função para atualizar estado ativo da navegação
function atualizarNavegacao() {
    const botoes = document.querySelectorAll('.btn-secao');
    botoes.forEach((btn, index) => {
        if (index === estadoApp.secaoAtiva) {
            btn.classList.add('ativo');
        } else {
            btn.classList.remove('ativo');
        }
    });
}

// Função para renderizar uma seção específica
function renderizarSecao(index) {
    const estudo = estadoApp.estudoAtual;
    const conteudo = document.getElementById('conteudo-estudo');
    
    if (index < estudo.secoes.length) {
        conteudo.innerHTML = estudo.secoes[index].conteudo;
    }

    // Rolar para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função para renderizar personagens
function renderizarPersonagens() {
    const estudo = estadoApp.estudoAtual;
    const conteudo = document.getElementById('conteudo-estudo');

    let html = `
        <h2>👥 Personagens / Stakeholders</h2>
        <p style="color: var(--cinza-medio); margin-bottom: 2rem;">
            Diferentes atores com perspectivas e interesses distintos sobre a tecnologia.
        </p>
        <div class="grid-personagens">
    `;

    estudo.personagens.forEach(personagem => {
        html += `
            <div class="card-personagem" onclick="abrirModalPersonagem('${personagem.id}')">
                <span class="icone">${personagem.icone}</span>
                <h3>${personagem.nome}</h3>
                <p>${personagem.resumo}</p>
                <span class="ver-mais">Ver detalhes →</span>
            </div>
        `;
    });

    html += '</div>';
    conteudo.innerHTML = html;
}

// Função para renderizar debriefing
function renderizarDebriefing() {
    const estudo = estadoApp.estudoAtual;
    const conteudo = document.getElementById('conteudo-estudo');

    if (!estudo.debriefing) return;

    let html = `
        <h2>💭 Debriefing - Reflexões Finais</h2>
        <p style="color: var(--cinza-medio); margin-bottom: 2rem;">
            Questões para discussão e reflexão após explorar o estudo de caso.
        </p>
    `;

    estudo.debriefing.forEach((questao, index) => {
        html += `
            <div class="questao">
                <h3>${index + 1}. ${questao.titulo}</h3>
                <p>${questao.texto}</p>
            </div>
        `;
    });

    conteudo.innerHTML = html;
}

// Função para renderizar imagem de referência
function renderizarImagem() {
    const estudo = estadoApp.estudoAtual;
    const conteudo = document.getElementById('conteudo-estudo');

    if (!estudo.imagem) return;

    let html = `
        <div class="ai-disclaimer">
            <h2>
                <strong>Aviso Importante:</strong>
            </h2>

            <p>
                A imagem apresentada nesta página <strong>não representa um cenário real</strong> e foi 
                <strong>gerada artificialmente por Inteligência Artificial (IA)</strong>, com finalidade 
                exclusivamente <em>ilustrativa, conceitual e demonstrativa</em>.
            </p>

            <p>
                <strong>Todas as pessoas, rostos, nomes, perfis, imagens, dados, ambientes e situações exibidas 
                são inteiramente fictícios</strong>, não possuindo qualquer vínculo com indivíduos reais, vivos 
                ou falecidos, nem com eventos, instituições ou ocorrências reais.
            </p>

            <p>
                Qualquer semelhança com pessoas, locais ou fatos reais é <strong>mera coincidência</strong>. 
                A imagem não deve ser interpretada como evidência, registro documental ou representação fiel 
                de sistemas, tecnologias ou operações reais.
            </p>

            <p>
                Este aviso tem como objetivo a <strong>prevenção de interpretações equivocadas</strong> e a 
                <strong>mitigação de possíveis conflitos legais, éticos ou de privacidade</strong>.
            </p>
            <img src=${imagem.filename} alt='Imagem gerada por IA'></img>
        </div>
    `;

    // estudo.debriefing.forEach((questao, index) => {
    //     html += `
    //         <div class="questao">
    //             <h3>${index + 1}. ${questao.titulo}</h3>
    //             <p>${questao.texto}</p>
    //         </div>
    //     `;
    // });

    conteudo.innerHTML = html;
}

// Função para abrir modal do personagem
window.abrirModalPersonagem = function(idPersonagem) {
    const estudo = estadoApp.estudoAtual;
    const personagem = estudo.personagens.find(p => p.id === idPersonagem);
    
    if (!personagem) return;

    estadoApp.personagemSelecionado = personagem;

    const modalBody = document.getElementById('modal-body');
    
    let argumentosHTML = personagem.argumentos.map(arg => 
        `<li>${arg}</li>`
    ).join('');

    modalBody.innerHTML = `
        <h2>${personagem.icone} ${personagem.nome}</h2>
        <p style="color: var(--cinza-medio); margin-bottom: 1.5rem;">${personagem.resumo}</p>
        
        <div class="destaque">
            <h3>🎯 Objetivo Principal</h3>
            <p>${personagem.objetivo}</p>
        </div>
        
        <h3>💭 Argumentos Típicos</h3>
        <ul>
            ${argumentosHTML}
        </ul>
    `;

    document.getElementById('modal-personagem').style.display = 'block';
};

// Função para fechar modal
window.fecharModal = function() {
    document.getElementById('modal-personagem').style.display = 'none';
};

// Fechar modal ao clicar fora
window.onclick = function(event) {
    const modal = document.getElementById('modal-personagem');
    if (event.target === modal) {
        fecharModal();
    }
};

// Fechar modal com tecla ESC
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        fecharModal();
    }
});

// Inicialização
if (document.getElementById('lista-estudos')) {
    // Estamos na página principal
    renderizarListaEstudos();
} else if (document.getElementById('conteudo-estudo')) {
    // Estamos na página de estudo
    renderizarEstudo();
}