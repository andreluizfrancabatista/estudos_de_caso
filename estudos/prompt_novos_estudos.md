# Prompt para Elaboração de Estudos de Caso

Crie um estudo de caso completo sobre ética em tecnologia no formato JavaScript para a aplicação web de estudos de caso.

## Informações do Tema

**TEMA FORNECIDO:**
Cenário: Carros Autônomos na Cidade
Descrição: Frota de táxis sem motorista
Contexto: Prefeitura avalia autorização
Dilema: Inovação vs. Desemprego e responsabilidade por acidentes

## Estrutura Esperada

Crie um arquivo JavaScript completo seguindo exatamente esta estrutura:

```javascript
const nomeDoEstudo = {
    id: 'nome-do-estudo',
    titulo: 'Título Completo e Descritivo',
    subtitulo: 'Subtítulo Explicativo',
    icone: '🚗', // Emoji representativo
    resumo: 'Breve descrição em 2-3 linhas que será exibida no card da página principal.',
    
    secoes: [
        // 4 seções obrigatórias
    ],
    
    personagens: [
        // 10-12 personagens diversos
    ],
    
    debriefing: [
        // 6-7 questões reflexivas (ou null se não aplicável)
    ]
};

export default nomeDoEstudo;
```

## Seções Obrigatórias

### 1. Introdução
Inclua:
- Apresentação do caso (2-3 parágrafos)
- Box "Objetivos Pedagógicos" (4 itens em lista)
- Box "Valores em Conflito" (3-5 pares de valores como "X vs. Y")

**Classes CSS a usar:**
```html
<div class="card">Apresentação...</div>
<div class="destaque">Objetivos...</div>
<div class="card" style="background: #dbeafe; border-left: 4px solid var(--azul-primario);">Valores...</div>
```

### 2. Tecnologia/Cenário
Inclua:
- O que é? (descrição clara)
- Como funciona? (lista com 4-6 itens técnicos)
- Especificações técnicas (opcional, se relevante)
- Contexto de aplicação (empresa/local, escopo, investimento, promessas)

**Classes CSS a usar:**
```html
<div class="card">...</div>
<div class="card" style="background: #fef3c7; border-left: 4px solid var(--amarelo);">Contexto...</div>
```

### 3. Benefícios
Liste 5-7 benefícios potenciais, cada um em um box separado com:
- Emoji representativo
- Título curto e impactante
- Explicação de 1-2 linhas

**Classe CSS a usar:**
```html
<div class="beneficio">
    <h3>⚡ Título do Benefício</h3>
    <p>Explicação...</p>
</div>
```

### 4. Riscos
Liste 6-9 riscos/dilemas éticos, cada um em um box separado com:
- Emoji representativo
- Título do risco
- Explicação de 1-2 linhas

**Classe CSS a usar:**
```html
<div class="risco">
    <h3>⚠️ Título do Risco</h3>
    <p>Explicação...</p>
</div>
```

## Personagens (10-12 obrigatórios)

Crie personagens diversos representando diferentes perspectivas. **OBRIGATORIAMENTE inclua:**

1. **Defensores/Proponentes (2-3 personagens):**
   - Executivo da empresa de tecnologia
   - Investidor/entusiasta
   - Usuário/beneficiário satisfeito

2. **Críticos/Oposicionistas (2-3 personagens):**
   - Ativista de direitos (digitais, trabalhistas, etc.)
   - Especialista alertando sobre riscos
   - Representante de comunidade afetada

3. **Moderados/Técnicos (2-3 personagens):**
   - Pesquisador/cientista
   - Advogado/regulador
   - Profissional da área

4. **Afetados Diretamente (2-3 personagens):**
   - Pessoa prejudicada pela tecnologia
   - Trabalhador impactado
   - Cidadão comum com preocupações

5. **Outros (1-2 personagens):**
   - Jornalista investigativo
   - Autoridade pública/política
   - Desenvolvedor/pessoa que trabalhou no projeto

### Formato de Cada Personagem:

```javascript
{
    id: 'identificador_unico',
    nome: 'Nome Completo do Personagem',
    icone: '👔', // Emoji apropriado
    resumo: 'Uma linha descrevendo o papel',
    objetivo: 'Parágrafo de 2-4 linhas explicando motivações, o que busca alcançar, seus interesses',
    argumentos: [
        'Argumento 1 completo e bem fundamentado (1-2 linhas)',
        'Argumento 2 completo e bem fundamentado (1-2 linhas)',
        'Argumento 3 completo e bem fundamentado (1-2 linhas)',
        'Argumento 4 completo e bem fundamentado (1-2 linhas)',
        'Argumento 5 completo e bem fundamentado (1-2 linhas)',
        'Argumento 6 completo e bem fundamentado (1-2 linhas)'
        // Mínimo 6 argumentos por personagem
    ]
}
```

**Dicas para argumentos efetivos:**
- Seja específico, não genérico
- Use dados, exemplos ou casos quando possível
- Apresente lógica clara
- Varie entre argumentos técnicos, éticos, econômicos e sociais
- Evite repetição entre personagens

## Debriefing (6-7 questões)

Crie questões abertas para reflexão e discussão. Foque em:
1. Conflito de valores identificados
2. Perspectivas diferentes dos stakeholders
3. Questões de justiça e equidade
4. Governança e participação democrática
5. Transparência e responsabilização
6. Alternativas propostas
7. Aprendizados pessoais

**Formato:**
```javascript
debriefing: [
    {
        titulo: 'Título Curto da Questão',
        texto: 'Pergunta completa e clara para discussão em grupo'
    },
    // ... 5-6 questões adicionais
]
```

Se o tema não se beneficiar de debriefing, use: `debriefing: null`

## Diretrizes de Qualidade

### Conteúdo:
- ✅ Linguagem clara e acessível (evite jargão excessivo)
- ✅ Exemplos concretos e situações reais
- ✅ Equilíbrio: apresente benefícios E riscos honestamente
- ✅ Diversidade de perspectivas nos personagens
- ✅ Argumentos baseados em posições reais do debate público
- ✅ Contextualização brasileira quando possível

### Técnico:
- ✅ HTML válido e bem formatado nas seções
- ✅ IDs únicos para personagens (use snake_case)
- ✅ Mínimo 6 argumentos por personagem
- ✅ Uso correto das classes CSS (.card, .destaque, .beneficio, .risco)
- ✅ Exportação correta: `export default nomeDoEstudo;`

### Pedagógico:
- ✅ Objetivos de aprendizagem claros
- ✅ Conflitos éticos bem definidos
- ✅ Personagens que geram debate natural
- ✅ Questões de debriefing que estimulam pensamento crítico

## Exemplo de Estrutura Completa

```javascript
const carrosAutonomos = {
    id: 'carros-autonomos',
    titulo: 'Táxis Autônomos na Cidade',
    subtitulo: 'Frota sem motoristas e o futuro do transporte urbano',
    icone: '🚗',
    resumo: 'Análise do impacto da introdução de táxis autônomos em uma cidade, explorando dilemas de inovação, desemprego e responsabilidade em acidentes.',
    
    secoes: [
        {
            id: 'introducao',
            titulo: 'Introdução',
            conteudo: `
                <h2>🚗 Sobre este Estudo de Caso</h2>
                <div class="card">
                    <p>Uma grande empresa de tecnologia propõe...</p>
                    <p>Este estudo explora os dilemas...</p>
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
                    <p><strong>Inovação vs. Segurança no Emprego</strong></p>
                    <p><strong>Eficiência vs. Responsabilidade Humana</strong></p>
                    <p><strong>Progresso Tecnológico vs. Impacto Social</strong></p>
                </div>
            `
        },
        // ... mais 3 seções
    ],
    
    personagens: [
        {
            id: 'ceo_empresa',
            nome: 'CEO da TechDrive',
            icone: '👔',
            resumo: 'Executivo propondo a frota de táxis autônomos',
            objetivo: 'Convencer a prefeitura a autorizar...',
            argumentos: [
                'Argumento técnico detalhado...',
                'Argumento econômico...',
                'Argumento de segurança...',
                'Argumento de sustentabilidade...',
                'Argumento competitivo...',
                'Argumento social...'
            ]
        },
        // ... mais 9-11 personagens
    ],
    
    debriefing: [
        {
            titulo: 'Inovação e Emprego',
            texto: 'Como equilibrar progresso tecnológico com proteção de empregos?'
        },
        // ... mais 5-6 questões
    ]
};

export default carrosAutonomos;
```

## Entrega

Forneça o arquivo JavaScript completo, pronto para ser salvo como `estudos/nome-do-estudo.js` e adicionado ao array `estudosDisponiveis` em `app.js`. **Não crie ou altere o `app.js`**. Apenas avise que o `estudos/nome-do-estudo.js` e adicionado ao array `estudosDisponiveis` em `app.js`.