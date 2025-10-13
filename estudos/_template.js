// Template para criar um novo estudo de caso
// 1. Copie este arquivo
// 2. Renomeie para: seu-estudo.js
// 3. Preencha todas as seções
// 4. Adicione o ID em app.js no array estudosDisponiveis

const templateEstudo = {
    // CONFIGURAÇÕES BÁSICAS
    id: 'seu-estudo', // Use kebab-case: letras minúsculas e hífens
    titulo: 'Título Completo do Seu Estudo',
    subtitulo: 'Subtítulo Descritivo',
    icone: '🔬', // Escolha um emoji representativo
    resumo: 'Breve descrição do estudo de caso em 2-3 linhas que aparecerá no card da página principal.',
    
    // SEÇÕES DO ESTUDO
    secoes: [
        // SEÇÃO 1: INTRODUÇÃO
        {
            id: 'introducao',
            titulo: 'Introdução',
            conteudo: `
                <h2>📋 Sobre este Estudo de Caso</h2>
                <div class="card">
                    <p>Apresentação geral do tema e do caso a ser estudado.</p>
                    <p>Contextualize o problema e sua relevância.</p>
                </div>

                <div class="destaque">
                    <h3>Objetivos Pedagógicos</h3>
                    <ul>
                        <li>Objetivo 1</li>
                        <li>Objetivo 2</li>
                        <li>Objetivo 3</li>
                        <li>Objetivo 4</li>
                    </ul>
                </div>

                <div class="card" style="background: #dbeafe; border-left: 4px solid var(--azul-primario);">
                    <h3>⚖️ Valores em Conflito</h3>
                    <p><strong>Valor A vs. Valor B</strong></p>
                    <p><strong>Valor C vs. Valor D</strong></p>
                    <p><strong>Valor E vs. Valor F</strong></p>
                </div>
            `
        },

        // SEÇÃO 2: CENÁRIO/TECNOLOGIA
        {
            id: 'tecnologia',
            titulo: 'A Tecnologia',
            conteudo: `
                <h2>🤖 Nome da Tecnologia</h2>
                
                <div class="card">
                    <h3>O que é?</h3>
                    <p>Descrição clara e objetiva da tecnologia.</p>
                </div>

                <div class="card">
                    <h3>Como funciona?</h3>
                    <ul>
                        <li><strong>Aspecto 1:</strong> Explicação</li>
                        <li><strong>Aspecto 2:</strong> Explicação</li>
                        <li><strong>Aspecto 3:</strong> Explicação</li>
                    </ul>
                </div>

                <div class="card">
                    <h3>⚙️ Especificações Técnicas</h3>
                    <ul>
                        <li>Detalhe técnico 1</li>
                        <li>Detalhe técnico 2</li>
                        <li>Detalhe técnico 3</li>
                    </ul>
                </div>

                <div class="card" style="background: #fef3c7; border-left: 4px solid var(--amarelo);">
                    <h3>📍 Contexto de Aplicação</h3>
                    <p><strong>Local/Organização:</strong> Onde será implementado</p>
                    <p><strong>Escopo:</strong> Abrangência do projeto</p>
                    <p><strong>Investimento:</strong> Custos envolvidos</p>
                    <p><strong>Promessa:</strong> Resultados esperados</p>
                </div>
            `
        },

        // SEÇÃO 3: BENEFÍCIOS
        {
            id: 'beneficios',
            titulo: 'Benefícios',
            conteudo: `
                <h2>✅ Possíveis Benefícios</h2>
                
                <div class="beneficio">
                    <h3>⚡ Benefício 1</h3>
                    <p>Descrição do benefício e seu impacto</p>
                </div>

                <div class="beneficio">
                    <h3>💰 Benefício 2</h3>
                    <p>Descrição do benefício e seu impacto</p>
                </div>

                <div class="beneficio">
                    <h3>📊 Benefício 3</h3>
                    <p>Descrição do benefício e seu impacto</p>
                </div>

                <div class="beneficio">
                    <h3>📈 Benefício 4</h3>
                    <p>Descrição do benefício e seu impacto</p>
                </div>

                <div class="beneficio">
                    <h3>🎯 Benefício 5</h3>
                    <p>Descrição do benefício e seu impacto</p>
                </div>

                <!-- Adicione mais benefícios conforme necessário -->
            `
        },

        // SEÇÃO 4: RISCOS
        {
            id: 'riscos',
            titulo: 'Riscos',
            conteudo: `
                <h2>⚠️ Riscos e Dilemas Éticos</h2>
                
                <div class="risco">
                    <h3>🔴 Risco 1</h3>
                    <p>Descrição do risco e possíveis consequências</p>
                </div>

                <div class="risco">
                    <h3>⚖️ Risco 2</h3>
                    <p>Descrição do risco e possíveis consequências</p>
                </div>

                <div class="risco">
                    <h3>🔒 Risco 3</h3>
                    <p>Descrição do risco e possíveis consequências</p>
                </div>

                <div class="risco">
                    <h3>❌ Risco 4</h3>
                    <p>Descrição do risco e possíveis consequências</p>
                </div>

                <div class="risco">
                    <h3>🚫 Risco 5</h3>
                    <p>Descrição do risco e possíveis consequências</p>
                </div>

                <!-- Adicione mais riscos conforme necessário -->
            `
        }

        // Você pode adicionar mais seções se necessário
    ],
    
    // PERSONAGENS/STAKEHOLDERS
    personagens: [
        // PERSONAGEM 1 - DEFENSOR/PROPONENTE
        {
            id: 'proponente',
            nome: 'Nome do Personagem Proponente',
            icone: '👔',
            resumo: 'Breve descrição do papel (1 linha)',
            objetivo: 'Descrição detalhada do objetivo principal do personagem, suas motivações e o que busca alcançar com suas ações.',
            argumentos: [
                'Argumento 1 a favor da tecnologia',
                'Argumento 2 destacando benefícios',
                'Argumento 3 minimizando riscos',
                'Argumento 4 sobre competitividade',
                'Argumento 5 sobre inevitabilidade',
                'Argumento 6 sobre responsabilidade'
            ]
        },

        // PERSONAGEM 2 - CRÍTICO/OPOSITOR
        {
            id: 'critico',
            nome: 'Nome do Personagem Crítico',
            icone: '🛡️',
            resumo: 'Breve descrição do papel (1 linha)',
            objetivo: 'Descrição detalhada do objetivo principal, focando em proteção de direitos e prevenção de danos.',
            argumentos: [
                'Argumento 1 alertando sobre riscos',
                'Argumento 2 questionando transparência',
                'Argumento 3 sobre impacto social negativo',
                'Argumento 4 sobre violação de direitos',
                'Argumento 5 propondo alternativas',
                'Argumento 6 sobre responsabilização'
            ]
        },

        // PERSONAGEM 3 - MODERADO/TÉCNICO
        {
            id: 'tecnico',
            nome: 'Nome do Personagem Técnico',
            icone: '🔬',
            resumo: 'Breve descrição do papel (1 linha)',
            objetivo: 'Análise técnica objetiva, identificando limitações e propondo melhorias necessárias.',
            argumentos: [
                'Argumento 1 sobre aspectos técnicos',
                'Argumento 2 sobre limitações do sistema',
                'Argumento 3 sobre necessidade de testes',
                'Argumento 4 sobre transparência técnica',
                'Argumento 5 sobre melhorias necessárias',
                'Argumento 6 sobre monitoramento contínuo'
            ]
        },

        // PERSONAGEM 4 - PESSOA AFETADA
        {
            id: 'afetado',
            nome: 'Nome da Pessoa Diretamente Afetada',
            icone: '👤',
            resumo: 'Breve descrição do papel (1 linha)',
            objetivo: 'Perspectiva de quem será diretamente impactado pela tecnologia, com preocupações pessoais e práticas.',
            argumentos: [
                'Argumento 1 baseado em experiência pessoal',
                'Argumento 2 sobre impactos no cotidiano',
                'Argumento 3 sobre preocupações específicas',
                'Argumento 4 sobre falta de controle',
                'Argumento 5 questionando justiça',
                'Argumento 6 sobre necessidades reais'
            ]
        },

        // PERSONAGEM 5 - AUTORIDADE/REGULADOR
        {
            id: 'autoridade',
            nome: 'Nome da Autoridade Reguladora',
            icone: '⚖️',
            resumo: 'Breve descrição do papel (1 linha)',
            objetivo: 'Garantir conformidade legal e regulatória, equilibrando inovação com proteção de direitos.',
            argumentos: [
                'Argumento 1 sobre aspectos legais',
                'Argumento 2 sobre conformidade regulatória',
                'Argumento 3 sobre responsabilidade legal',
                'Argumento 4 sobre necessidade de marco legal',
                'Argumento 5 sobre fiscalização',
                'Argumento 6 sobre sanções e garantias'
            ]
        },

        // PERSONAGEM 6 - REPRESENTANTE COMUNITÁRIO
        {
            id: 'comunidade',
            nome: 'Representante de Comunidade Vulnerável',
            icone: '🏘️',
            resumo: 'Breve descrição do papel (1 linha)',
            objetivo: 'Defender interesses de comunidades marginalizadas que podem ser desproporcionalmente afetadas.',
            argumentos: [
                'Argumento 1 sobre impacto desproporcional',
                'Argumento 2 sobre histórico de discriminação',
                'Argumento 3 sobre falta de representação',
                'Argumento 4 sobre agravamento de desigualdades',
                'Argumento 5 sobre necessidades ignoradas',
                'Argumento 6 sobre alternativas mais justas'
            ]
        },

        // PERSONAGEM 7 - JORNALISTA/OBSERVADOR
        {
            id: 'jornalista',
            nome: 'Jornalista Investigativo',
            icone: '📰',
            resumo: 'Breve descrição do papel (1 linha)',
            objetivo: 'Investigar, questionar e informar o público sobre todas as dimensões do caso.',
            argumentos: [
                'Argumento 1 questionando dados apresentados',
                'Argumento 2 investigando conflitos de interesse',
                'Argumento 3 expondo informações ocultas',
                'Argumento 4 comparando com casos similares',
                'Argumento 5 pressionando por transparência',
                'Argumento 6 dando voz aos afetados'
            ]
        },

        // PERSONAGEM 8 - PESSOA A FAVOR (BENEFICIADA)
        {
            id: 'beneficiado',
            nome: 'Pessoa Beneficiada pela Tecnologia',
            icone: '👨‍💼',
            resumo: 'Breve descrição do papel (1 linha)',
            objetivo: 'Defender a tecnologia com base em experiência positiva pessoal.',
            argumentos: [
                'Argumento 1 sobre experiência positiva',
                'Argumento 2 sobre eficiência do sistema',
                'Argumento 3 sobre justiça do processo',
                'Argumento 4 sobre oportunidades criadas',
                'Argumento 5 defendendo meritocracia',
                'Argumento 6 minimizando críticas'
            ]
        }

        // Adicione mais personagens conforme necessário (recomendado: 8-12 total)
        // Busque diversidade de perspectivas: empresários, ativistas, acadêmicos,
        // trabalhadores, usuários, reguladores, etc.
    ],

    // DEBRIEFING (OPCIONAL)
    // Use "debriefing: null" se não quiser incluir esta seção
    debriefing: [
        {
            titulo: 'Conflito de Valores',
            texto: 'Quais valores entraram em conflito durante a análise deste caso?'
        },
        {
            titulo: 'Perspectivas Diferentes',
            texto: 'Como os diferentes stakeholders veem o mesmo problema de formas distintas?'
        },
        {
            titulo: 'Impactos Sociais',
            texto: 'Quem se beneficia e quem é prejudicado por esta tecnologia?'
        },
        {
            titulo: 'Questões de Justiça',
            texto: 'Como garantir que a tecnologia não amplifique desigualdades existentes?'
        },
        {
            titulo: 'Governança e Regulação',
            texto: 'Quem deve decidir sobre a implementação e como garantir participação democrática?'
        },
        {
            titulo: 'Alternativas',
            texto: 'Que outras soluções foram propostas? São viáveis?'
        },
        {
            titulo: 'Aprendizados',
            texto: 'O que você aprendeu com este estudo de caso? Sua perspectiva mudou?'
        }
    ]
};

// IMPORTANTE: Altere o nome da constante e da exportação para o nome do seu estudo
export default templateEstudo;