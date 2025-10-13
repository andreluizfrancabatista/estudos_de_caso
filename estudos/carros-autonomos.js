const carrosAutonomos = {
    id: 'carros-autonomos',
    titulo: 'Táxis Autônomos na Cidade',
    subtitulo: 'Frota sem motoristas e o futuro do transporte urbano',
    icone: '🚕',
    resumo: 'Análise ética da proposta de autorização de uma frota de táxis autônomos em uma cidade brasileira, explorando dilemas entre inovação tecnológica, impacto no emprego e responsabilidade em acidentes.',
    
    secoes: [
        {
            id: 'introducao',
            titulo: 'Introdução',
            conteudo: `
                <h2>🚗 Sobre este Estudo de Caso</h2>
                <div class="card">
                    <p>A AutoDrive Brasil, empresa de tecnologia de mobilidade, propõe à prefeitura de uma capital brasileira a autorização para operar uma frota de 500 táxis totalmente autônomos (sem motorista humano). O projeto promete revolucionar o transporte urbano, reduzir acidentes e custos, mas levanta questões sobre desemprego em massa e responsabilidade legal.</p>
                    <p>A prefeitura convocou um conselho consultivo para avaliar a proposta antes de tomar uma decisão. Este estudo de caso simula esse debate, com diferentes stakeholders apresentando suas perspectivas sobre inovação, segurança, emprego e regulamentação.</p>
                    <p>O dilema central: deve-se priorizar o avanço tecnológico e seus benefícios potenciais, ou proteger os trabalhadores atuais e aguardar maior maturidade da tecnologia?</p>
                </div>

                <div class="destaque">
                    <h3>Objetivos Pedagógicos</h3>
                    <ul>
                        <li>Analisar conflitos entre inovação tecnológica e impactos sociais no mercado de trabalho</li>
                        <li>Compreender dilemas de responsabilidade legal em sistemas autônomos</li>
                        <li>Avaliar diferentes perspectivas de stakeholders em decisões sobre tecnologias disruptivas</li>
                        <li>Desenvolver pensamento crítico sobre regulamentação de tecnologias emergentes</li>
                    </ul>
                </div>

                <div class="card" style="background: #dbeafe; border-left: 4px solid var(--azul-primario);">
                    <h3>⚖️ Valores em Conflito</h3>
                    <p><strong>Inovação Tecnológica vs. Segurança no Emprego</strong></p>
                    <p><strong>Eficiência Operacional vs. Responsabilidade Humana</strong></p>
                    <p><strong>Progresso Econômico vs. Impacto Social</strong></p>
                    <p><strong>Segurança de Trânsito vs. Incerteza Tecnológica</strong></p>
                    <p><strong>Competitividade Global vs. Proteção de Trabalhadores Locais</strong></p>
                </div>
            `
        },
        {
            id: 'tecnologia',
            titulo: 'A Tecnologia',
            conteudo: `
                <h2>🤖 Táxis Autônomos - Nível 5 de Autonomia</h2>
                
                <div class="card">
                    <h3>O que são?</h3>
                    <p>Veículos de transporte de passageiros equipados com sistemas de direção autônoma de nível 5 (automação completa), capazes de operar em qualquer condição de tráfego sem intervenção humana. Os carros não possuem volante, pedais ou controles manuais - são projetados exclusivamente para operação autônoma.</p>
                </div>

                <div class="card">
                    <h3>Como funciona?</h3>
                    <ul>
                        <li><strong>Sensores Múltiplos:</strong> LiDAR 360°, câmeras de alta resolução, radar e ultrassom para detecção de ambiente</li>
                        <li><strong>Inteligência Artificial:</strong> Redes neurais profundas processam dados em tempo real para tomada de decisão</li>
                        <li><strong>Mapeamento 3D:</strong> Mapas detalhados com precisão centimétrica atualizados constantemente via nuvem</li>
                        <li><strong>Comunicação V2X:</strong> Veículos se comunicam entre si e com infraestrutura urbana (semáforos, sensores)</li>
                        <li><strong>Redundância de Sistemas:</strong> Múltiplos sistemas de backup para computação, energia e frenagem</li>
                        <li><strong>Monitoramento Remoto:</strong> Central de operações monitora frota 24/7 e pode assumir controle se necessário</li>
                    </ul>
                </div>

                <div class="card">
                    <h3>⚙️ Especificações do Projeto</h3>
                    <ul>
                        <li>Frota inicial de 500 veículos elétricos autônomos</li>
                        <li>Tempo de resposta médio: 3-5 minutos em áreas de alta demanda</li>
                        <li>Capacidade: 4 passageiros por veículo</li>
                        <li>Mais de 15 milhões de quilômetros de teste em diversos países</li>
                        <li>Taxa de acidentes: 0,3 por milhão de km (90% menor que média humana nos testes)</li>
                        <li>Certificações de segurança de agências internacionais</li>
                    </ul>
                </div>

                <div class="card" style="background: #fef3c7; border-left: 4px solid var(--amarelo);">
                    <h3>📍 Contexto de Aplicação</h3>
                    <p><strong>Local:</strong> Capital brasileira com 3 milhões de habitantes</p>
                    <p><strong>Empresa:</strong> AutoDrive Brasil (subsidiária de multinacional)</p>
                    <p><strong>Investimento:</strong> R$ 800 milhões em 5 anos (infraestrutura, veículos, tecnologia)</p>
                    <p><strong>Modelo de Negócio:</strong> Tarifa 30% mais barata que táxis tradicionais</p>
                    <p><strong>Promessas:</strong> Redução de 40% nos acidentes de trânsito com táxis, menor poluição, maior acessibilidade</p>
                    <p><strong>Prazo:</strong> Implementação gradual em 18 meses após aprovação</p>
                </div>
            `
        },
        {
            id: 'beneficios',
            titulo: 'Benefícios',
            conteudo: `
                <h2>✅ Possíveis Benefícios</h2>
                
                <div class="beneficio">
                    <h3>🛡️ Segurança Aumentada</h3>
                    <p>Redução drástica de acidentes causados por erro humano (fadiga, distração, embriaguez), que representam 90% dos acidentes de trânsito</p>
                </div>

                <div class="beneficio">
                    <h3>💰 Menor Custo para Usuários</h3>
                    <p>Tarifas 30-40% mais baratas que táxis tradicionais, democratizando acesso ao transporte individual de qualidade</p>
                </div>

                <div class="beneficio">
                    <h3>🌱 Sustentabilidade Ambiental</h3>
                    <p>Frota 100% elétrica com zero emissões, contribuindo para metas climáticas e qualidade do ar urbano</p>
                </div>

                <div class="beneficio">
                    <h3>♿ Acessibilidade Universal</h3>
                    <p>Veículos adaptados para pessoas com deficiência, idosos e pessoas com mobilidade reduzida, sem depender de motoristas treinados</p>
                </div>

                <div class="beneficio">
                    <h3>⏰ Disponibilidade 24/7</h3>
                    <p>Operação contínua sem necessidade de descanso, escalas ou pausas, com tempos de espera reduzidos</p>
                </div>

                <div class="beneficio">
                    <h3>📊 Eficiência de Tráfego</h3>
                    <p>Comunicação entre veículos otimiza fluxo de trânsito, reduz congestionamentos e melhora uso de vias públicas</p>
                </div>

                <div class="beneficio">
                    <h3>🚀 Inovação e Competitividade</h3>
                    <p>Cidade se posiciona como hub de inovação tecnológica, atraindo investimentos e talentos para o setor</p>
                </div>
            `
        },
        {
            id: 'riscos',
            titulo: 'Riscos',
            conteudo: `
                <h2>⚠️ Riscos e Dilemas Éticos</h2>
                
                <div class="risco">
                    <h3>👨‍💼 Desemprego em Massa</h3>
                    <p>Cerca de 8.000 motoristas de táxi e aplicativos na cidade perderiam seus empregos, afetando famílias inteiras sem alternativas claras de recolocação</p>
                </div>

                <div class="risco">
                    <h3>⚖️ Responsabilidade Legal Indefinida</h3>
                    <p>Quem responde por acidentes causados por veículos autônomos? Fabricante, software, operadora, prefeitura? Marco legal brasileiro é insuficiente</p>
                </div>

                <div class="risco">
                    <h3>🤖 Dilemas Éticos de Programação</h3>
                    <p>Como o carro decide em situações inevitáveis de colisão? Prioriza passageiros sobre pedestres? Quem programa essas decisões de vida ou morte?</p>
                </div>

                <div class="risco">
                    <h3>🔒 Vulnerabilidades de Segurança</h3>
                    <p>Riscos de hackeamento, sequestro de veículos, ataques cibernéticos contra frota inteira simultaneamente, terrorismo tecnológico</p>
                </div>

                <div class="risco">
                    <h3>🧪 Tecnologia Ainda Imatura</h3>
                    <p>Apesar dos testes, tecnologia nunca operou em escala real no caos do trânsito brasileiro - condições imprevisíveis podem causar falhas</p>
                </div>

                <div class="risco">
                    <h3>📊 Dependência Tecnológica</h3>
                    <p>Cidade fica refém de empresa estrangeira para mobilidade essencial; falhas técnicas ou decisões corporativas podem paralisar transporte</p>
                </div>

                <div class="risco">
                    <h3>👁️ Vigilância e Privacidade</h3>
                    <p>Câmeras e sensores coletam dados massivos sobre movimentação de pessoas, rotas, comportamentos - potencial para vigilância em massa</p>
                </div>

                <div class="risco">
                    <h3>💸 Concentração Econômica</h3>
                    <p>Receita que ficava com milhares de motoristas locais vai para megacorporação internacional, drenando recursos da economia local</p>
                </div>

                <div class="risco">
                    <h3>🚦 Infraestrutura Inadequada</h3>
                    <p>Cidade pode não ter infraestrutura (sinalização, conectividade 5G, manutenção de vias) adequada para operação segura dos veículos</p>
                </div>
            `
        }
    ],
    
    personagens: [
        {
            id: 'ceo_autodrive',
            nome: 'CEO da AutoDrive Brasil',
            icone: '👔',
            resumo: 'Executivo da empresa proponente defendendo autorização da frota',
            objetivo: 'Convencer a prefeitura e a sociedade de que os táxis autônomos são seguros, benéficos e representam o futuro inevitável do transporte, obtendo aprovação regulatória para iniciar operações e estabelecer presença pioneira no mercado brasileiro.',
            argumentos: [
                'Nossos veículos têm taxa de acidentes 90% menor que motoristas humanos em mais de 15 milhões de km testados internacionalmente',
                'Tarifas 30% mais baratas democratizam transporte de qualidade - famílias de baixa renda terão acesso a mobilidade segura e confortável',
                'Investimento de R$ 800 milhões gerará milhares de empregos indiretos: manutenção, tecnologia, suporte, infraestrutura',
                'Frota elétrica reduzirá emissões em 15 mil toneladas de CO2 por ano, contribuindo diretamente para metas climáticas da cidade',
                'Tecnologia já opera com sucesso em San Francisco, Cingapura e Dubai - não estamos experimentando, estamos implementando sistema comprovado',
                'Cada dia de atraso custará vidas: 40% menos acidentes significa salvar dezenas de pessoas por ano nesta cidade'
            ]
        },
        {
            id: 'motorista_taxi',
            nome: 'Motorista de Táxi há 20 Anos',
            icone: '🚕',
            resumo: 'Profissional que perderá emprego com a automação',
            objetivo: 'Defender seu meio de vida e de milhares de colegas, exigindo proteção trabalhista, período de transição adequado e alternativas reais de emprego antes da autorização de tecnologia que tornará sua profissão obsoleta.',
            argumentos: [
                'Tenho 52 anos, família para sustentar, e 20 anos de experiência - que emprego conseguirei depois? Empresa promete "requalificação" mas não apresenta plano concreto',
                'São 8.000 famílias que dependem dessa renda na cidade - substituir motoristas por robôs é trocar bem-estar humano por lucro de corporação',
                'Motoristas oferecem algo que máquinas nunca darão: humanidade, ajuda com bagagem, conversa, conhecimento local, segurança para passageiros vulneráveis',
                'Acidentes acontecerão - e quando acontecerem com tecnologia "infalível", serão catastróficos e a empresa negará responsabilidade',
                'Essa tecnologia não foi testada no trânsito caótico brasileiro: motos nas calçadas, pedestres atravessando fora da faixa, buracos, obras sem sinalização',
                'Se aprovar isso agora, daqui a pouco substituirão garçons, seguranças, porteiros - onde para a automação descontrolada?'
            ]
        },
        {
            id: 'ativista_trabalho',
            nome: 'Sindicalista e Ativista de Direitos Trabalhistas',
            icone: '✊',
            resumo: 'Defensor dos trabalhadores contra automação desregulada',
            objetivo: 'Impedir ou condicionar fortemente a autorização até que haja garantias trabalhistas sólidas, plano de transição justo, fundo de compensação e participação dos trabalhadores afetados nas decisões sobre tecnologia que impacta seus empregos.',
            argumentos: [
                'Corporações lucrando bilhões com tecnologia que destrói empregos devem pagar taxas significativas para fundo de transição e requalificação real dos afetados',
                'Histórico mostra que promessas de "novos empregos melhores" nunca se concretizam - automação concentra riqueza e precariza trabalho',
                'Motoristas não foram consultados, não participaram da decisão - isso é autoritarismo tecnológico, imposição de mudança radical sem democracia',
                'Exigimos moratória de 3-5 anos para estudos de impacto social, criação de marco regulatório adequado e preparação real da sociedade',
                'Cidades que aprovaram frotas autônomos apressadamente enfrentam crises sociais: desemprego, protestos, aumento de trabalho informal precário',
                'Progresso tecnológico deve servir à humanidade, não sacrificar trabalhadores no altar da eficiência e do lucro empresarial'
            ]
        },
        {
            id: 'pesquisadora_ia',
            nome: 'Pesquisadora em IA e Sistemas Autônomos',
            icone: '🔬',
            resumo: 'Cientista especialista alertando sobre limitações técnicas',
            objetivo: 'Fornecer análise técnica realista sobre capacidades e limitações atuais da tecnologia, alertar sobre riscos subestimados e defender implementação gradual com testes rigorosos em condições locais antes de aprovação em larga escala.',
            argumentos: [
                'Sistemas de IA funcionam bem em ambientes controlados, mas enfrentam "casos extremos" imprevisíveis: nosso trânsito brasileiro é um caso extremo permanente',
                'Nenhuma IA pode prever todas as situações: criança correndo atrás de bola, animal na pista, objeto caindo de caminhão - sistema nunca será 100% seguro',
                'Dilema do bonde é real: como programar decisão entre atropelar 1 pessoa ou desviar e matar 3? Quem decide valores morais do algoritmo?',
                'Tecnologia apresenta viés nos dados de treinamento - se testada principalmente em países desenvolvidos, pode discriminar padrões de comportamento de pedestres e motoristas brasileiros',
                'Recomendo projeto piloto rigoroso: 50 veículos, áreas limitadas, 2 anos de testes com supervisão contínua antes de qualquer expansão',
                'Necessária auditoria independente do código, transparência total sobre funcionamento do sistema e protocolo claro de responsabilização por falhas'
            ]
        },
        {
            id: 'advogado_transito',
            nome: 'Advogada Especialista em Direito de Trânsito',
            icone: '⚖️',
            resumo: 'Jurista alertando sobre lacunas legais e responsabilidade',
            objetivo: 'Impedir autorização enquanto não houver marco legal claro definindo responsabilidades civis e criminais em acidentes com veículos autônomos, protegendo tanto vítimas quanto estabelecendo segurança jurídica para todos os envolvidos.',
            argumentos: [
                'Código de Trânsito Brasileiro exige condutor responsável - veículo sem motorista não se enquadra em nenhuma categoria legal existente',
                'Em acidente fatal, quem responde criminalmente? Empresa alega que é o software, desenvolvedor diz que é o treinamento, fabricante culpa manutenção - vítimas ficam sem justiça',
                'Seguro obrigatório (DPVAT) pressupõe condutor humano - como funciona seguro para frota autônoma? Quem paga indenizações?',
                'Precedente perigoso: aprovar sem marco legal adequado abre brecha para outras tecnologias não regulamentadas operarem ilegalmente',
                'Necessário Projeto de Lei específico passando por debate democrático no Congresso antes de autorização municipal',
                'Vítimas de acidentes terão extrema dificuldade probatória - "caixa-preta" do veículo é propriedade da empresa, que controlará narrativa'
            ]
        },
        {
            id: 'prefeita',
            nome: 'Prefeita da Cidade',
            icone: '🏛️',
            resumo: 'Autoridade pública avaliando impactos políticos e sociais',
            objetivo: 'Tomar decisão que equilibre inovação, segurança pública, impacto econômico e social, considerando pressões políticas de todos os lados e as consequências eleitorais de aprovar ou rejeitar a proposta.',
            argumentos: [
                'Cidade precisa de inovação para atrair investimentos e talentos - ficar para trás tecnologicamente prejudica desenvolvimento econômico',
                'Mas não posso ignorar 8.000 eleitores motoristas e suas famílias - desemprego em massa gera crise social e revolta política',
                'Segurança é prioridade: se acidentes graves acontecerem, responsabilidade política recairá sobre mim, independentemente de quem seja culpado legalmente',
                'Proposta de implementação gradual pode ser solução: começar com 100 veículos em áreas específicas, avaliar resultados antes de expandir',
                'Precisamos de garantias contratuais sólidas: fundo de transição para trabalhadores, cláusulas de responsabilidade, auditoria independente, possibilidade de suspensão',
                'Consulta pública é essencial - decisão tão impactante não pode ser tomada apenas por conselho técnico, população deve participar do debate'
            ]
        },
        {
            id: 'usuario_entusiasta',
            nome: 'Usuário Entusiasta de Tecnologia',
            icone: '😊',
            resumo: 'Cidadão ansioso pelos benefícios da nova tecnologia',
            objetivo: 'Defender aprovação rápida da tecnologia que acredita trazer benefícios inegáveis para usuários como ele, argumentando que oposição é conservadorismo que atrasa progresso necessário.',
            argumentos: [
                'Uso aplicativos de transporte diariamente - táxi autônomo mais barato e seguro seria enorme melhoria na minha qualidade de vida',
                'Motoristas às vezes dirigem perigosamente, recusam corridas, estão cansados ou distraídos - carro autônomo não tem esses problemas humanos',
                'Países que adotaram essa tecnologia não voltaram atrás - é comprovadamente melhor, resistência é apenas medo de mudança',
                'Empregos sempre evoluem: cavaleiros viraram motoristas, motoristas virarão técnicos de frota autônoma - adaptação é natural',
                'Para idosos e pessoas com deficiência, como minha avó, isso é libertador - independência sem depender de familiares ou motoristas',
                'Cada dia de atraso é mais acidentes evitáveis, mais poluição desnecessária, mais pessoas pagando caro por serviço inferior'
            ]
        },
        {
            id: 'especialista_transito',
            nome: 'Especialista em Mobilidade Urbana',
            icone: '🚦',
            resumo: 'Urbanista analisando impactos no sistema de transporte',
            objetivo: 'Avaliar tecnicamente como táxis autônomos se integram ao sistema de mobilidade existente, identificando oportunidades e riscos para transporte público, tráfego e planejamento urbano.',
            argumentos: [
                'Táxis autônomos baratos podem reduzir uso de transporte público - ônibus e metrô ficam menos viáveis economicamente, prejudicando quem mais precisa',
                'Veículos circulando vazios entre corridas aumentam quilômetros rodados na cidade - pode piorar congestionamento em vez de melhorar',
                'Oportunidade: integrar sistema com transporte público para criar mobilidade multimodal eficiente, combinando metrô, ônibus e táxis autônomos',
                'Infraestrutura precisa ser adaptada: pontos de embarque/desembarque, zonas de espera para veículos autônomos, conectividade 5G em toda cidade',
                'Dados gerados pelos veículos são valiosos para planejamento urbano - contrato deve garantir acesso da prefeitura a esses dados',
                'Implementação gradual permite avaliar impactos reais e ajustar regulamentação - não devemos nem aprovar totalmente nem rejeitar de cara'
            ]
        },
        {
            id: 'moradora_periferia',
            nome: 'Moradora de Bairro Periférico',
            icone: '🏘️',
            resumo: 'Cidadã preocupada com acesso desigual à tecnologia',
            objetivo: 'Garantir que nova tecnologia beneficie toda a população, não apenas regiões centrais e classes mais altas, e questionar se investimento bilionário em táxis autônomos é prioridade real da cidade.',
            argumentos: [
                'Táxis autônomos vão operar primeiro em bairros nobres e turísticos - nossa periferia continuará sem transporte adequado, como sempre',
                'R$ 800 milhões de empresa privada, mas cadê investimento público em ônibus para periferia? Prioridades estão invertidas',
                'Tarifa "30% mais barata" ainda é cara para trabalhador de salário mínimo - vão continuar usando transporte lotado',
                'Tecnologia beneficia quem já tem acesso fácil a transporte - aprofunda desigualdade em vez de resolvê-la',
                'Motoristas que perderão emprego são da nossa comunidade - desemprego em massa aqui é crise social que empresa não vai resolver',
                'Antes de táxi do futuro, queremos ônibus que funcione, calçada sem buraco, iluminação pública - tecnologia de luxo não resolve problema real'
            ]
        },
        {
            id: 'jornalista_investigativa',
            nome: 'Jornalista Investigativa',
            icone: '📰',
            resumo: 'Profissional investigando detalhes e questionando empresa',
            objetivo: 'Revelar informações que empresa e autoridades podem estar omitindo, questionar dados apresentados e garantir que decisão seja tomada com base em informações completas e verificadas.',
            argumentos: [
                'Investiguei: AutoDrive enfrentou processos por acidentes fatais em outros países - empresa minimiza incidentes e esconde dados de segurança',
                'Promessa de "milhares de empregos indiretos" é marketing - maioria será terceirizado, precário, sem garantias trabalhistas',
                'Contrato prevê cláusula de confidencialidade sobre funcionamento do sistema - por que empresa precisa de sigilo se tecnologia é tão segura?',
                'Empresa recebeu subsídios e isenções fiscais milionárias em outros países - aqui também vai exigir benefícios sem dar contrapartidas adequadas?',
                'Executivos têm histórico de lobby agressivo e pressão sobre reguladores - processo de aprovação está sendo conduzido com transparência?',
                'População merece debate público real, não apresentação de empresa com dados selecionados - onde está estudo independente de impacto?'
            ]
        },
        {
            id: 'engenheiro_projeto',
            nome: 'Engenheiro que Trabalhou no Desenvolvimento',
            icone: '👨‍💻',
            resumo: 'Ex-funcionário com conhecimento interno sobre limitações',
            objetivo: 'Compartilhar conhecimento técnico interno sobre o que realmente funciona e o que ainda é problemático no sistema, alertando sobre pressões comerciais que levam a subestimar riscos.',
            argumentos: [
                'Trabalhei 3 anos no projeto - sistema é impressionante, mas há situações que ainda não resolvemos adequadamente, especialmente ambientes caóticos',
                'Empresa prioriza prazos de lançamento sobre segurança - várias vezes fomos pressionados a validar sistema mesmo com testes incompletos',
                'IA toma decisões que não conseguimos explicar completamente - "caixa-preta" é real, não sabemos sempre porque sistema fez determinada escolha',
                'Testes em "15 milhões de km" incluem muita simulação virtual - km reais em condições adversas são muito menos, especialmente em trânsito latino-americano',
                'Sistema funciona bem 99% do tempo, mas 1% de falha em milhões de corridas significa dezenas de acidentes graves por ano',
                'Tecnologia tem potencial enorme, mas deveria ser implementada gradualmente e com humildade - não é tão perfeita quanto marketing vende'
            ]
        },
        {
            id: 'vereador_oposicao',
            nome: 'Vereador de Oposição',
            icone: '🗣️',
            resumo: 'Político questionando processo e propondo alternativas',
            objetivo: 'Fiscalizar governo, questionar pressa na aprovação, defender interesses de trabalhadores e propor alternativas que equilibrem inovação com proteção social.',
            argumentos: [
                'Processo está sendo apressado e pouco transparente - grande decisão sendo tomada em meses sem debate democrático adequado',
                'Prefeitura tem conflito de interesse: empresa prometeu investimento em infraestrutura que beneficia gestão atual politicamente',
                'Proponho alternativa: condicionar aprovação a criação de fundo de R$ 200 milhões da empresa para transição trabalhista ao longo de 5 anos',
                'Por que não investir esses bilhões em melhorar transporte público para todos em vez de táxi de luxo para alguns?',
                'Exijo audiências públicas em todas as regiões, especialmente periferias - decisão não pode ser tomada só no centro',
                'Vou propor projeto de lei municipal estabelecendo regras claras ANTES da autorização - não podemos aprovar no escuro'
            ]
        }
    ],

    debriefing: [
        {
            titulo: 'Inovação e Emprego',
            texto: 'Como equilibrar o progresso tecnológico com a proteção dos trabalhadores que serão substituídos? É possível conciliar esses interesses ou sempre haverá perdedores na automação?'
        },
        {
            titulo: 'Responsabilidade em Acidentes',
            texto: 'Quem deve ser responsabilizado quando um veículo autônomo causa um acidente fatal? A empresa, o desenvolvedor do software, o fabricante ou a autoridade que autorizou? Como criar um sistema justo de responsabilização?'
        },
        {
            titulo: 'Velocidade da Mudança',
            texto: 'A sociedade deve adotar tecnologias disruptivas rapidamente para não ficar para trás, ou deve ser cautelosa e esperar maior maturidade? Como encontrar o equilíbrio entre inovação e prudência?'
        },
        {
            titulo: 'Desigualdade e Acesso',
            texto: 'Como garantir que inovações tecnológicas beneficiem toda a população e não apenas grupos privilegiados? Quais políticas públicas podem prevenir que novas tecnologias ampliem desigualdades existentes?'
        },
        {
            titulo: 'Participação Democrática',
            texto: 'Quem deve decidir sobre a adoção de tecnologias que afetam milhares de pessoas? Como garantir participação democrática real em decisões técnicas complexas? Consultas públicas são suficientes?'
        },
        {
            titulo: 'Dilemas Éticos na Programação',
            texto: 'É ético programar decisões de vida ou morte em algoritmos? Quem deve definir os valores morais que guiam essas decisões? Diferentes culturas deveriam ter programações diferentes?'
        },
        {
            titulo: 'Aprendizados',
            texto: 'Depois de explorar as diferentes perspectivas, sua opinião sobre carros autônomos mudou? Qual personagem apresentou os argumentos mais convincentes e por quê?'
        }
    ]
};

export default carrosAutonomos;