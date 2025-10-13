const estudoIARecrutamento = {
    id: 'ia-recrutamento',
    titulo: 'Sistema de IA para Seleção de Emprego',
    subtitulo: 'TalentAI Pro - Análise Ética e Social',
    icone: '🤖',
    resumo: 'Análise dos dilemas éticos e sociais relacionados à implementação de sistemas de inteligência artificial em processos de recrutamento e seleção de pessoas.',
    
    secoes: [
        {
            id: 'introducao',
            titulo: 'Introdução',
            conteudo: `
                <h2>📋 Sobre este Estudo de Caso</h2>
                <div class="card">
                    <p>Este estudo de caso explora os dilemas éticos e sociais relacionados à implementação de sistemas de inteligência artificial em processos de recrutamento e seleção de pessoas.</p>
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

                <div class="card" style="background: #dbeafe; border-left: 4px solid var(--azul-primario);">
                    <h3>⚖️ Valores em Conflito</h3>
                    <p><strong>Eficiência Econômica vs. Justiça Social</strong></p>
                    <p><strong>Inovação Tecnológica vs. Direitos Fundamentais</strong></p>
                    <p><strong>Autonomia Empresarial vs. Regulação Estatal</strong></p>
                    <p><strong>Mérito Individual vs. Equidade Estrutural</strong></p>
                    <p><strong>Objetividade Algorítmica vs. Julgamento Humano</strong></p>
                </div>
            `
        },
        {
            id: 'tecnologia',
            titulo: 'A Tecnologia',
            conteudo: `
                <h2>🤖 TalentAI Pro: A Tecnologia</h2>
                
                <div class="card">
                    <h3>O que é?</h3>
                    <p>TalentAI Pro é uma plataforma de inteligência artificial que automatiza o processo completo de recrutamento, desde a triagem de currículos até a análise de entrevistas em vídeo, gerando pontuações e rankings de candidatos sem intervenção humana nas etapas iniciais.</p>
                </div>

                <div class="card">
                    <h3>Como funciona?</h3>
                    <ul>
                        <li><strong>Análise de Currículos:</strong> Algoritmos de processamento de linguagem natural (NLP) extraem informações estruturadas e não estruturadas dos CVs</li>
                        <li><strong>Entrevistas em Vídeo:</strong> Candidatos respondem perguntas padronizadas gravando vídeos; a IA analisa conteúdo verbal, tom de voz, expressões faciais e linguagem corporal</li>
                        <li><strong>Sistema de Pontuação:</strong> Machine learning treinado com dados históricos gera scores de 0-100 para cada candidato</li>
                        <li><strong>Ranking Automático:</strong> Apenas os 10% melhores classificados avançam para entrevista com humanos</li>
                    </ul>
                </div>

                <div class="card">
                    <h3>⚙️ Especificações Técnicas</h3>
                    <ul>
                        <li>Modelo treinado com dados de 50.000 processos seletivos anteriores (últimos 8 anos)</li>
                        <li>Análise facial com 68 pontos de referência</li>
                        <li>Processamento de prosódia vocal (pitch, velocidade, pausas)</li>
                        <li>Tempo de processamento: 3 minutos por candidato vs. 45 minutos do processo tradicional</li>
                        <li>Dados armazenados por 5 anos em nuvem</li>
                    </ul>
                </div>

                <div class="card" style="background: #fef3c7; border-left: 4px solid var(--amarelo);">
                    <h3>🏢 Contexto de Aplicação</h3>
                    <p><strong>Empresa:</strong> MegaCorp Brasil - multinacional de tecnologia e consultoria com 15.000 funcionários</p>
                    <p><strong>Escopo:</strong> Implementação em todos os processos seletivos para vagas júnior a pleno (~3.000 contratações/ano)</p>
                    <p><strong>Investimento:</strong> R$ 4,5 milhões (contrato de 5 anos)</p>
                    <p><strong>Promessa:</strong> Redução de 60% no tempo de contratação e economia de R$ 2,8 milhões/ano</p>
                </div>
            `
        },
        {
            id: 'beneficios',
            titulo: 'Benefícios',
            conteudo: `
                <h2>✅ Possíveis Benefícios</h2>
                
                <div class="beneficio">
                    <h3>⚡ Eficiência Operacional</h3>
                    <p>Redução do tempo médio de contratação de 45 para 18 dias, permitindo resposta mais rápida às demandas do mercado</p>
                </div>

                <div class="beneficio">
                    <h3>💰 Economia de Recursos</h3>
                    <p>Diminuição de custos com equipe de recrutamento e processos administrativos, liberando profissionais para atividades estratégicas</p>
                </div>

                <div class="beneficio">
                    <h3>📊 Padronização</h3>
                    <p>Todos candidatos avaliados pelos mesmos critérios objetivos, eliminando variações de humor ou preferências pessoais</p>
                </div>

                <div class="beneficio">
                    <h3>📈 Escalabilidade</h3>
                    <p>Capacidade de processar milhares de candidatos simultaneamente durante períodos de alta demanda</p>
                </div>

                <div class="beneficio">
                    <h3>🔍 Análise Aprofundada</h3>
                    <p>Identificação de padrões não óbvios que correlacionam com desempenho futuro</p>
                </div>

                <div class="beneficio">
                    <h3>🚫 Redução de Nepotismo</h3>
                    <p>Sistema impessoal não influenciado por relações pessoais ou charme interpessoal nas fases iniciais</p>
                </div>
            `
        },
        {
            id: 'riscos',
            titulo: 'Riscos',
            conteudo: `
                <h2>⚠️ Riscos e Dilemas Éticos</h2>
                
                <div class="risco">
                    <h3>🔄 Perpetuação de Vieses Históricos</h3>
                    <p>Sistema treinado com dados passados pode reproduzir discriminações existentes (ex: se empresa sempre contratou mais homens brancos, IA aprende que esse é o "perfil de sucesso")</p>
                </div>

                <div class="risco">
                    <h3>🎭 Discriminação por Proxy</h3>
                    <p>Algoritmo pode identificar padrões aparentemente neutros que são marcadores de raça, gênero, classe social (ex: tipo de universidade, bairro, hobbies)</p>
                </div>

                <div class="risco">
                    <h3>📦 Opacidade e Caixa-Preta</h3>
                    <p>Candidatos rejeitados não saberão por quê; até a empresa pode não compreender completamente os critérios do algoritmo</p>
                </div>

                <div class="risco">
                    <h3>👁️ Vigilância Invasiva</h3>
                    <p>Análise de microexpressões faciais e tom de voz representa monitoramento biométrico intenso, com dados sensíveis armazenados por anos</p>
                </div>

                <div class="risco">
                    <h3>🤖 Desumanização</h3>
                    <p>Candidatos tratados como conjuntos de dados processáveis, sem espaço para narrativas pessoais ou potencial de desenvolvimento</p>
                </div>

                <div class="risco">
                    <h3>🎯 Performance Algorítmica</h3>
                    <p>Surgimento de "coaching para IA" onde candidatos aprendem a enganar o sistema, favorecendo quem tem recursos</p>
                </div>

                <div class="risco">
                    <h3>💼 Desemprego em RH</h3>
                    <p>Profissionais de recrutamento podem perder empregos, criando ironia de usar IA para contratar enquanto demite humanos</p>
                </div>

                <div class="risco">
                    <h3>🛑 Erro Técnico em Escala</h3>
                    <p>Bug ou viés pode eliminar injustamente centenas de candidatos qualificados antes que problema seja detectado</p>
                </div>

                <div class="risco">
                    <h3>⚖️ Responsabilidade Difusa</h3>
                    <p>Quando IA erra, quem é responsável? Desenvolvedor, empresa, fornecedor? Ambiguidade dificulta reparação e justiça</p>
                </div>
            `
        }
    ],
    
    personagens: [
        {
            id: 'vp_rh',
            nome: 'VP de Recursos Humanos da MegaCorp',
            icone: '👔',
            resumo: 'Executiva que propõe a implementação do sistema para modernizar RH e demonstrar resultados ao board.',
            objetivo: 'Liderar a transformação digital do departamento de RH, comprovar que inovações tecnológicas trazem resultados mensuráveis (redução de custos, aumento de eficiência) e consolidar sua posição como líder inovadora na empresa, garantindo promoção futura e reconhecimento no mercado.',
            argumentos: [
                'Dados do projeto piloto mostram 70% de aumento na eficiência e economia anual de R$ 2,8 milhões, números que beneficiam toda a organização',
                'Sistemas de IA eliminam vieses humanos inconscientes como favoritismo, atratividade física e networking privilegiado',
                'Padronização garante que todos os candidatos sejam avaliados pelos mesmos critérios objetivos, tornando processo mais justo',
                'Profissionais de RH serão liberados de tarefas repetitivas para focar em desenvolvimento humano, retenção de talentos e cultura organizacional',
                'Empresa precisa se manter competitiva: concorrentes já estão adotando tecnologias similares e atraindo talentos mais rapidamente',
                'Sistema pode ser auditado e ajustado continuamente; se houver problemas, temos controle para corrigi-los rapidamente'
            ]
        },
        {
            id: 'candidata_rejeitada',
            nome: 'Candidata Rejeitada pelo Sistema',
            icone: '👩🏾‍💼',
            resumo: 'Profissional qualificada eliminada automaticamente sem entender os motivos da rejeição.',
            objetivo: 'Compreender por que foi rejeitada apesar de atender todos os requisitos da vaga, garantir que teve avaliação justa e não foi discriminada por características pessoais, e conseguir oportunidade de demonstrar seu valor além dos algoritmos.',
            argumentos: [
                'Tenho todas as qualificações técnicas exigidas na descrição da vaga, mas fui eliminada em 48 horas sem feedback específico ou chance de me explicar',
                'Sou mulher negra, mãe solo, formada em universidade pública - o sistema pode ter me penalizado por marcadores sociais disfarçados de "fit cultural"',
                'Minha trajetória profissional é não-linear por necessidades de cuidado familiar; algoritmos privilegiam currículos "perfeitos" que refletem privilégios',
                'Gravação de vídeo não captura minha real capacidade: estava nervosa, minha internet caiu duas vezes, não pude demonstrar como trabalho em equipe',
                'Impossível contestar decisão de uma IA - com recrutador humano, eu poderia pedir reconsideração, mostrar portfólio, explicar contextos',
                'Empresas terceirizam responsabilidade para tecnologia: quando denuncio possível discriminação, dizem "o sistema é neutro", mas ninguém me dá explicações'
            ]
        },
        {
            id: 'cientista_dados',
            nome: 'Cientista de Dados Especialista em Viés Algorítmico',
            icone: '🔬',
            resumo: 'Pesquisadora que alerta para riscos técnicos de discriminação automatizada em sistemas de IA.',
            objetivo: 'Demonstrar com evidências científicas que sistemas de IA para recrutamento frequentemente reproduzem e amplificam desigualdades sociais existentes, defender necessidade de auditoria externa independente e regulamentação rigorosa, e proteger grupos historicamente marginalizados de novas formas de discriminação.',
            argumentos: [
                'Estudos acadêmicos comprovam que sistemas similares discriminam mulheres, negros, pessoas acima de 40 anos e pessoas com deficiência mesmo sem intenção explícita',
                '"Dados históricos" refletem discriminações passadas: se empresa sempre contratou determinado perfil, IA aprende que esse é o "padrão de sucesso"',
                'Análise de vídeo identifica marcadores raciais, de gênero e classe através de sotaque, expressões culturais, iluminação de casa, qualidade da câmera',
                'Termo "eliminar viés humano" é marketing enganoso - substitui viés individual por viés sistêmico em escala industrial, mais difícil de detectar e contestar',
                'Empresa não tem transparência sobre funcionamento do algoritmo: sem auditoria externa, impossível garantir fairness; fornecedor protege "segredo comercial"',
                'Casos reais documentados: Amazon descartou sistema similar em 2018 por discriminar mulheres; outros sistemas penalizam nomes "étnicos" e universidades públicas'
            ]
        },
        {
            id: 'ceo',
            nome: 'CEO da MegaCorp Brasil',
            icone: '🏢',
            resumo: 'Líder máximo focado em resultados financeiros, competitividade e satisfação dos acionistas.',
            objetivo: 'Maximizar eficiência operacional e lucratividade da empresa, demonstrar aos acionistas que está na vanguarda da inovação tecnológica, e evitar crises de imagem ou processos judiciais que possam prejudicar valor de mercado e reputação corporativa.',
            argumentos: [
                'Investimento de R$ 4,5 milhões retorna em menos de 2 anos; economias anuais de R$ 2,8 milhões vão direto para o resultado da companhia',
                'Velocidade é vantagem competitiva crítica: contratar talentos 60% mais rápido que concorrentes define quem ganha projetos estratégicos',
                'Temos compromisso público com diversidade e inclusão; relatórios anuais mostram metas ESG - sistema pode ajudar a atingi-las de forma mensurável',
                'Riscos legais existem em qualquer processo de contratação; assessoria jurídica garante que estamos em conformidade com LGPD e leis trabalhistas',
                'Não podemos ficar para trás enquanto concorrentes globais já usam IA em tudo - nossa sobrevivência depende de inovação constante',
                'Se surgir problema real (não especulação), temos recursos e expertise para corrigi-lo; somos empresa responsável e transparente'
            ]
        },
        {
            id: 'advogada',
            nome: 'Advogada Trabalhista e de Direitos Digitais',
            icone: '⚖️',
            resumo: 'Profissional que defende trabalhadores e alerta para violações legais e de direitos fundamentais.',
            objetivo: 'Garantir que trabalhadores e candidatos tenham seus direitos fundamentais respeitados no uso de tecnologias, assegurar conformidade legal rigorosa com LGPD e legislação trabalhista, e construir jurisprudência que responsabilize empresas por discriminação algorítmica.',
            argumentos: [
                'LGPD proíbe decisões automatizadas que afetem significativamente direitos sem revisão humana - rejeição automática pode violar Art. 20 da lei',
                'Candidato tem direito legal de saber critérios de avaliação e contestar decisão (princípio do contraditório); sistema opaco impede isso',
                'Análise de características biométricas (face, voz) são dados sensíveis que requerem consentimento explícito e específico, não genérico',
                'Discriminação algorítmica é discriminação real: se sistema rejeita mais mulheres ou negros, empresa é responsável mesmo que não intencional',
                'Armazenamento de dados por 5 anos sem justificativa clara viola princípio da minimização; compartilhamento com fornecedor aumenta riscos',
                'Já estamos preparando ações coletivas contra empresas que usam sistemas similares; precedentes judiciais estão se formando contra essas práticas'
            ]
        },
        {
            id: 'recrutador',
            nome: 'Recrutador Sênior com 15 Anos de Experiência',
            icone: '👨‍💼',
            resumo: 'Profissional de RH que teme perder emprego e acredita que intuição humana é insubstituível.',
            objetivo: 'Preservar relevância profissional e emprego da equipe de recrutamento, defender valor da avaliação humana no processo seletivo, e garantir que candidatos sejam tratados com dignidade e não como dados processáveis por máquinas.',
            argumentos: [
                'Melhores contratações que fiz na carreira foram pessoas que "no papel" não eram ideais, mas tinham algo especial que algoritmo nunca detectaria',
                'Recrutamento é sobre conexão humana, entender contextos de vida, potencial de crescimento - IA não capta resiliência, criatividade genuína ou fit cultural real',
                'Empresa demitirá metade do time de RH após implementação; estamos usando IA para contratar enquanto destruímos carreiras de quem trabalhou aqui por anos',
                'Candidatos já reclamam que processo é frio e desumano; isso prejudica employer branding e afasta talentos que valorizam cultura humanizada',
                'Quando sistema errar (e vai errar), não teremos expertise humana para identificar e corrigir rapidamente; estamos criando dependência perigosa',
                'IA pode triar em volume, mas entrevista final ainda é humana - por que não investir em treinar recrutadores contra vieses em vez de substituí-los?'
            ]
        },
        {
            id: 'investidor',
            nome: 'Investidor e Entusiasta de Tecnologia',
            icone: '💼',
            resumo: 'Empreendedor que vê IA como inevitável e defende rápida adoção de inovações disruptivas.',
            objetivo: 'Promover adoção ampla de tecnologias de IA para transformar mercado de trabalho, defender que benefícios da automação superam custos de transição, e garantir retorno sobre investimentos em startups de HR tech.',
            argumentos: [
                'Automação é tendência irreversível; resistir é lutar contra o futuro - melhor adaptar-se rapidamente e liderar mudança do que ficar obsoleto',
                'IA democratiza acesso a oportunidades: candidato de qualquer lugar pode participar sem precisar viajar, gastar com roupa ou ter networking privilegiado',
                'Empresas que adotam IA crescem mais rápido, contratam melhor e lucram mais - isso gera mais empregos no médio prazo, mesmo com ajustes no curto',
                'Problemas técnicos são temporários e resolvíveis; cada iteração melhora o sistema - primeiras críticas a carros, aviões e internet também previam catástrofes',
                'Países asiáticos e empresas americanas já usam massivamente; se Brasil resistir por medo, ficaremos ainda mais atrasados tecnologicamente',
                'Mercado de "auditoria de IA" e "ética algorítmica" está crescendo - própria tecnologia cria novos empregos qualificados que substituem os antigos'
            ]
        },
        {
            id: 'candidato_aprovado',
            nome: 'Candidato Aprovado pelo Sistema',
            icone: '👨‍💼',
            resumo: 'Profissional selecionado pela IA que considera o processo justo, eficiente e meritocrático.',
            objetivo: 'Defender a legitimidade do processo seletivo automatizado que o aprovou, argumentar que o sistema é mais objetivo que recrutadores humanos, e demonstrar que candidatos qualificados são recompensados independentemente de conexões pessoais ou aparência.',
            argumentos: [
                'Fui aprovado com base nas minhas competências reais, não por networking ou conhecer alguém na empresa - isso é verdadeira meritocracia',
                'O processo foi extremamente eficiente: recebi resposta em 3 dias, enquanto em outros processos esperei semanas ou nunca recebi retorno',
                'Não precisei gastar dinheiro com deslocamento, roupa formal ou tirar dia de trabalho para entrevistas presenciais - democratiza o acesso',
                'Sistema não se importou com minha aparência, sotaque ou se fui simpático - avaliou apenas minhas qualificações técnicas e experiência',
                'Perguntas padronizadas no vídeo foram justas: todos responderam as mesmas, sem "pegadinhas" ou perguntas capciosas de recrutadores',
                'Quem reclama do sistema geralmente não atende aos requisitos; é mais fácil culpar a tecnologia do que admitir que faltam qualificações'
            ]
        },
        {
            id: 'jornalista',
            nome: 'Jornalista Investigativa de Tecnologia',
            icone: '📰',
            resumo: 'Profissional de imprensa investigando impactos sociais de sistemas de IA e responsabilidade corporativa.',
            objetivo: 'Revelar ao público como decisões tecnológicas afetam vidas reais, expor práticas corporativas questionáveis, e pressionar empresas e governos por transparência e accountability no uso de IA.',
            argumentos: [
                'Investigação revelou que 68% dos candidatos eliminados pelo sistema piloto eram mulheres ou negros, proporção desproporcional ao pool de candidatos',
                'Documentos internos vazados mostram que empresa sabia de alertas sobre viés, mas priorizou economia de custos sobre correções éticas',
                'Fornecedora TalentAI Inc. já foi processada em 3 países por discriminação; MegaCorp não fez due diligence adequada ou escolheu ignorar histórico',
                'Candidatos relatam experiências humilhantes: sistema rejeitou deficientes visuais por "contato visual inadequado", penalizou sotaques regionais',
                'Cláusula permitindo uso de dados para "aprimoramento" significa que perfis de brasileiros estão treinando IA em servidor americano sem controle',
                'Público tem direito de saber como decisões que afetam suas vidas são tomadas; empresas que resistem à transparência têm algo a esconder'
            ]
        },
        {
            id: 'desenvolvedor',
            nome: 'Jovem Desenvolvedor que Trabalhou no Projeto',
            icone: '👨‍💻',
            resumo: 'Engenheiro de software que ajudou a construir o sistema e agora questiona implicações éticas de seu trabalho.',
            objetivo: 'Compartilhar conhecimento interno sobre funcionamento e limitações do sistema, alertar sobre decisões de design que priorizaram performance sobre fairness, e reconciliar ambição profissional com responsabilidade ética sobre impacto de seu código.',
            argumentos: [
                'Fui instruído a otimizar para "replicar decisões de contratação históricas bem-sucedidas", o que por definição replica vieses do passado',
                'Testamos modelo apenas com métricas técnicas (acurácia, velocidade); ninguém pediu análise de impacto em grupos demográficos diferentes',
                'Sistema usa características correlacionadas com raça/gênero sem dizer: nome, CEP, universidade, padrões linguísticos são proxies estatísticos',
                'Análise facial foi treinada principalmente com rostos brancos; precisão cai 30% em rostos negros - viés técnico documentado na literatura científica',
                'Pressionamos por mais testes éticos, mas cronograma e orçamento venceram; management disse que "melhorias viriam depois do lançamento"',
                'Jovens desenvolvedores como eu enfrentam dilema: tecnologia paga bem, mas posso estar construindo ferramentas que prejudicam pessoas - preciso de diretrizes claras'
            ]
        }
    ],

    debriefing: null // Este estudo não tem debriefing
};

export default estudoIARecrutamento;