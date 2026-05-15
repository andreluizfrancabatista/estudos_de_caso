const estudoVigilanciaUrbana = {
    id: 'vigilancia-urbana',
    titulo: 'Sistema de Monitoramento Comportamental Preditivo em Ambientes Urbanos',
    subtitulo: 'SMCP-Urban - Vigilância com IA',
    icone: '📹',
    resumo: 'Avaliação ética de um sistema de câmeras inteligentes com IA que monitora espaços públicos urbanos para prever comportamentos de risco antes que crimes ou acidentes ocorram.',

    secoes: [
        {
            id: 'introducao',
            titulo: 'Introdução',
            conteudo: `
                <h2>🎯 Jogo de Simulação para Sala de Aula</h2>
                <div class="card">
                    <p>Você fará parte de um comitê que deve avaliar se uma inovação tecnológica controversa deve ser aprovada para implementação.</p>
                    <p>Cada participante terá um papel específico com seus próprios objetivos e argumentos.</p>
                </div>

                <div class="destaque">
                    <h3>Objetivos Pedagógicos</h3>
                    <ul>
                        <li>Compreender diferentes perspectivas sobre tecnologias controversas</li>
                        <li>Identificar conflitos entre valores sociais e empresariais</li>
                        <li>Desenvolver pensamento crítico sobre implicações éticas da tecnologia</li>
                        <li>Praticar argumentação e tomada de decisão em grupo</li>
                    </ul>
                </div>
            `
        },
        {
            id: 'cenario',
            titulo: 'Cenário',
            conteudo: `
                <h2>📍 Cenário Tecnológico</h2>
                
                <div class="card">
                    <h3>Descrição da Inovação</h3>
                    <p>A empresa TechGuard Solutions desenvolveu o SMCP-Urban, um sistema integrado de câmeras inteligentes com IA que monitora espaços públicos urbanos (praças, terminais de transporte, centros comerciais e vias principais) para prever comportamentos considerados "de risco" antes que crimes ou acidentes ocorram.</p>
                    
                    <h4>O sistema utiliza:</h4>
                    <ul>
                        <li>Reconhecimento facial em tempo real</li>
                        <li>Análise de padrões de movimento corporal</li>
                        <li>Detecção de expressões faciais e tom de voz</li>
                        <li>Cruzamento com bancos de dados públicos e privados</li>
                        <li>Algoritmos preditivos treinados com dados históricos de ocorrências policiais</li>
                    </ul>
                </div>

                <div class="card" style="background: #fef3c7; border-left: 4px solid var(--amarelo);">
                    <h3>Contexto</h3>
                    <p>A prefeitura de uma cidade de médio porte (500 mil habitantes) está considerando implementar o sistema em parceria público-privada. A empresa oferece instalação gratuita em troca de acesso aos dados coletados por 10 anos. O contrato prevê cobertura de 70% das áreas públicas da cidade nos próximos 3 anos.</p>
                </div>
            `
        },
        {
            id: 'beneficios',
            titulo: 'Benefícios',
            conteudo: `
                <h2>✅ Possíveis Benefícios</h2>
                
                <div class="beneficio">
                    <h3>🛡️ Segurança preventiva</h3>
                    <p>Alertas para a polícia antes que crimes ocorram</p>
                </div>

                <div class="beneficio">
                    <h3>🚨 Resposta rápida a emergências</h3>
                    <p>Identificação automática de acidentes e situações de perigo</p>
                </div>

                <div class="beneficio">
                    <h3>👶 Localização de desaparecidos</h3>
                    <p>Crianças perdidas, pessoas com Alzheimer</p>
                </div>

                <div class="beneficio">
                    <h3>📊 Dados para planejamento urbano</h3>
                    <p>Análise de fluxos populacionais</p>
                </div>

                <div class="beneficio">
                    <h3>💰 Redução de custos policiais</h3>
                    <p>Patrulhamento mais eficiente</p>
                </div>

                <div class="beneficio">
                    <h3>😌 Sensação de segurança</h3>
                    <p>Moradores se sentindo mais protegidos</p>
                </div>
            `
        },
        {
            id: 'riscos',
            titulo: 'Riscos',
            conteudo: `
                <h2>⚠️ Riscos e Dilemas Éticos</h2>
                
                <div class="risco">
                    <h3>👁️ Vigilância em massa</h3>
                    <p>Monitoramento constante sem suspeita prévia</p>
                </div>

                <div class="risco">
                    <h3>⚖️ Viés algorítmico</h3>
                    <p>Discriminação de grupos étnicos e sociais específicos</p>
                </div>

                <div class="risco">
                    <h3>⚖️ Presunção de inocência</h3>
                    <p>Todos tratados como potenciais criminosos</p>
                </div>

                <div class="risco">
                    <h3>🔒 Privacidade</h3>
                    <p>Dados biométricos coletados sem consentimento explícito</p>
                </div>

                <div class="risco">
                    <h3>❌ Falsos positivos</h3>
                    <p>Pessoas inocentes abordadas injustamente</p>
                </div>

                <div class="risco">
                    <h3>🔓 Uso indevido de dados</h3>
                    <p>Venda, hackeamento ou perseguição política</p>
                </div>

                <div class="risco">
                    <h3>🚫 Sociedade de controle</h3>
                    <p>Inibição de liberdades e manifestações</p>
                </div>

                <div class="risco">
                    <h3>📦 Falta de transparência</h3>
                    <p>Algoritmos proprietários não auditáveis</p>
                </div>

                <div class="risco">
                    <h3>🔗 Dependência tecnológica</h3>
                    <p>Cidade refém de empresa privada por 10 anos</p>
                </div>
            `
        }
    ],

    personagens: [
        {
            id: 'ceo',
            nome: 'CEO da TechGuard Solutions',
            icone: '👔',
            resumo: 'Defender a tecnologia e garantir aprovação do contrato',
            objetivo: 'Aprovar o contrato e demonstrar que a tecnologia é segura, lucrativa e benéfica para todos.',
            argumentos: [
                'Nossa tecnologia já reduziu crimes em 40% nas cidades-piloto',
                'Investimos milhões em pesquisa e desenvolvimento; somos líderes globais',
                'O sistema só alerta autoridades; a decisão de agir é sempre humana',
                'Temos certificações internacionais de segurança e ética em IA',
                'Estamos oferecendo isso gratuitamente; é um investimento social',
                'Empresas concorrentes já estão negociando com outras cidades'
            ]
        },
        {
            id: 'prefeito',
            nome: 'Prefeito(a) Municipal',
            icone: '🏛️',
            resumo: 'Equilibrar segurança pública com responsabilidade política',
            objetivo: 'Equilibrar demandas por segurança com responsabilidade política, pensando em reeleição e legado.',
            argumentos: [
                'A população cobra ações contra a violência todos os dias',
                'Precisamos de soluções inovadoras; os métodos tradicionais não funcionam mais',
                'Qual o custo político se isso der errado? E se não fizer nada?',
                'Como isso afeta diferentes bairros e grupos da cidade?',
                'Posso perder votos tanto aprovando quanto rejeitando isso',
                'Há garantias legais suficientes no contrato?'
            ]
        },
        {
            id: 'representante_ong',
            nome: 'Representante de ONG de Direitos Digitais',
            icone: '🛡️',
            resumo: 'Proteger privacidade e prevenir discriminação algorítmica',
            objetivo: 'Proteger privacidade, liberdades civis e prevenir discriminação algorítmica.',
            argumentos: [
                'Vigilância em massa é incompatível com democracia',
                'Estudos mostram que IAs de reconhecimento facial erram mais com pessoas negras',
                'Quem vigia os vigilantes? Quem audita esses algoritmos?',
                'Dados biométricos são irreversíveis; se vazarem, o dano é permanente',
                'Isso cria efeito inibidor: pessoas deixam de se expressar livremente',
                'Existem alternativas que não sacrificam direitos fundamentais'
            ]
        },
        {
            id: 'delegado',
            nome: 'Delegado(a) de Polícia',
            icone: '👮',
            resumo: 'Avaliar efetividade operacional no combate ao crime',
            objetivo: 'Avaliar efetividade operacional e impactos no trabalho policial.',
            argumentos: [
                'Precisamos de ferramentas modernas para combater o crime organizado',
                'Minha equipe está sobrecarregada; tecnologia pode ajudar',
                'Preocupa-me a dependência de sistemas que não controlamos',
                'Como isso afeta a relação polícia-comunidade?',
                'E os falsos positivos? Não posso prender pessoas com base apenas em algoritmos',
                'Precisamos de treinamento adequado para usar essa tecnologia'
            ]
        },
        {
            id: 'pai_mae',
            nome: 'Mãe/Pai de Adolescente',
            icone: '👨‍👩‍👧',
            resumo: 'Proteger filhos, mas preocupado com discriminação',
            objetivo: 'Proteger filhos e família, mas com preocupações sobre privacidade e discriminação.',
            argumentos: [
                'Meu filho volta tarde da escola; quero que ele esteja seguro',
                'Mas e se o sistema achar meu filho "suspeito" só pela aparência?',
                'Adolescentes merecem privacidade para crescer e errar sem serem vigiados',
                'Li sobre jovens negros sendo mais perseguidos por esses sistemas',
                'Segurança é importante, mas não a qualquer custo',
                'Quero que a cidade seja segura para todos, não só para alguns'
            ]
        },
        {
            id: 'pesquisador',
            nome: 'Pesquisador(a) em IA e Ética',
            icone: '🔬',
            resumo: 'Analisar tecnicamente e alertar sobre limitações científicas',
            objetivo: 'Analisar tecnicamente o sistema e alertar sobre limitações e riscos científicos.',
            argumentos: [
                'IAs preditivas não preveem o futuro; apenas reproduzem padrões do passado',
                'Se o passado é discriminatório, a IA aprende e amplifica essa discriminação',
                'Não há IA perfeitamente neutra; toda tecnologia reflete valores de quem a cria',
                'Precisamos de transparência total: código aberto, dados de treinamento, taxa de erros',
                'Sistemas assim criam loops de feedback: bairros mais policiados geram mais dados de "crime"',
                'Há literatura científica robusta mostrando os perigos dessas tecnologias'
            ]
        },
        {
            id: 'comerciante',
            nome: 'Comerciante do Centro da Cidade',
            icone: '🏪',
            resumo: 'Aumentar segurança para proteger o comércio',
            objetivo: 'Aumentar sensação de segurança para atrair clientes e proteger comércio.',
            argumentos: [
                'Já fui assaltado três vezes este ano; perdemos clientes por medo',
                'Câmeras podem inibir crimes e ajudar a identificar criminosos',
                'Meu negócio está quebrando; preciso de soluções agora',
                'Não me importo de ser filmado se isso me protege',
                'Mas e se o sistema espantar clientes honestos também?',
                'Quero segurança, mas também movimento nas ruas'
            ]
        },
        {
            id: 'ativista',
            nome: 'Ativista de Movimentos Sociais',
            icone: '✊',
            resumo: 'Defender comunidades vulneráveis contra opressão tecnológica',
            objetivo: 'Defender comunidades vulneráveis e protestar contra tecnologias opressivas.',
            argumentos: [
                'Essa tecnologia será usada para perseguir negros, pobres e manifestantes',
                'Já vivemos em um estado policial nas periferias; isso vai piorar',
                'Quem decide o que é "comportamento suspeito"? Baseado em quais valores?',
                'Vigilância é uma forma de controle social e silenciamento',
                'Empresas lucram com nossos dados enquanto nossas comunidades sofrem',
                'Existem formas de promover segurança investindo em educação, saúde e emprego'
            ]
        },
        {
            id: 'jornalista',
            nome: 'Jornalista Investigativo(a)',
            icone: '📰',
            resumo: 'Questionar, investigar e informar o público',
            objetivo: 'Questionar, investigar contradições e informar o público sobre todos os lados.',
            argumentos: [
                'Quem financia essa empresa? Há conflitos de interesse?',
                'Quais cidades "testaram" isso? Posso verificar os dados de sucesso?',
                'Como a população será informada sobre isso? Haverá consulta pública?',
                'O que dizem especialistas independentes?',
                'Há cláusulas secretas no contrato?',
                'Meu papel é expor riscos que outros preferem esconder'
            ]
        },
        {
            id: 'vereador',
            nome: 'Vereador(a) de Oposição',
            icone: '🏛️',
            resumo: 'Fiscalizar governo e propor alternativas',
            objetivo: 'Fiscalizar o governo, proteger interesses eleitorais e propor alternativas.',
            argumentos: [
                'Por que não investir em mais policiais humanos em vez de vigilância?',
                'Esse contrato beneficia empresas privadas às custas do interesse público',
                'Cadê o debate público? Isso está sendo aprovado às pressas',
                'E a legalidade? Isso não fere a Constituição?',
                'Queremos segurança, mas com justiça social',
                'Proponho investir em iluminação, transporte e oportunidades de emprego'
            ]
        },
        {
            id: 'representante_periferia',
            nome: 'Representante de Comunidade Periférica',
            icone: '🏘️',
            resumo: 'Garantir que tecnologia não prejudique comunidades marginalizadas',
            objetivo: 'Garantir que tecnologia não prejudique ainda mais comunidades marginalizadas.',
            argumentos: [
                'Nossa comunidade já é sobre-policiada; isso vai piorar o assédio',
                'Jovens daqui são parados pela polícia só pela cor da pele',
                'Essa tecnologia vai rotular nossos filhos como criminosos antes de fazerem qualquer coisa',
                'Ninguém nos perguntou se queremos isso',
                'Segurança pra quem? No nosso bairro, a polícia é o perigo',
                'Invistam em escola, hospital e emprego, não em câmeras'
            ]
        },
        {
            id: 'advogado',
            nome: 'Advogado(a) Constitucionalista',
            icone: '⚖️',
            resumo: 'Analisar legalidade e constitucionalidade',
            objetivo: 'Analisar legalidade e constitucionalidade da implementação.',
            argumentos: [
                'Isso pode violar direitos fundamentais: privacidade, imagem, presunção de inocência',
                'A Lei Geral de Proteção de Dados (LGPD) permite isso? Há base legal adequada?',
                'Coleta de dados biométricos requer consentimento; como fica em espaço público?',
                'Quem responde judicialmente por erros? A empresa? O município?',
                'Precisamos de marco regulatório específico antes de implementar',
                'Cidadãos terão direito de acessar, contestar e deletar seus dados?'
            ]
        }
    ],

    debriefing: [
        {
            titulo: 'Conflito de Valores',
            texto: 'Quais valores entraram em conflito durante o debate? (segurança vs. privacidade, inovação vs. cautela, eficiência vs. direitos humanos)'
        },
        {
            titulo: 'Segurança e Privacidade',
            texto: 'É possível conciliar segurança pública e privacidade individual? Como?'
        },
        {
            titulo: 'Justiça Tecnológica',
            texto: 'Como garantir que tecnologias não amplifiquem desigualdades e discriminações existentes?'
        },
        {
            titulo: 'Governança Democrática',
            texto: 'Quem deve decidir sobre a implementação de tecnologias que afetam toda a sociedade? Como envolver diferentes vozes?'
        },
        {
            titulo: 'Transparência e Accountability',
            texto: 'Que mecanismos de transparência e responsabilização são necessários para sistemas de IA em contextos públicos?'
        },
        {
            titulo: 'Alternativas',
            texto: 'Quais outras formas de promover segurança pública foram mencionadas? São viáveis?'
        },
        {
            titulo: 'Aprendizados',
            texto: 'O que você aprendeu ao interpretar seu personagem? Sua visão sobre o tema mudou?'
        }
    ],

    imagem: [
        {
            filename: 'estudos/images/estudo-vigilancia-01.png'
        },
        {
            filename: 'estudos/images/estudo-vigilancia-02.png'
        }
    ]
};

export default estudoVigilanciaUrbana;