# 🚀 Guia Rápido - Estudos de Caso: Ética em Tecnologia

## Começar a Usar (3 minutos)

### 1. Abrir a aplicação

**Opção A: Direto no navegador** (pode não funcionar devido a restrições de CORS)
- Abra `index.html` diretamente no navegador

**Opção B: Com servidor local** (recomendado)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

Depois acesse: `http://localhost:8000`

### 2. Navegar pelos estudos
- A página inicial mostra todos os estudos disponíveis
- Clique em qualquer card para explorar
- Use as abas para navegar entre seções
- Clique nos personagens para ver detalhes

### 3. Usar em sala de aula
- Projete a tela para os alunos
- Distribua os personagens entre os estudantes
- Cada um argumenta de acordo com seu papel
- Use o debriefing para discussão final

---

## Adicionar Novo Estudo (5 minutos)

### Passo 1: Copiar o template
```bash
cp estudos/_template.js estudos/meu-estudo.js
```

### Passo 2: Editar o arquivo
Abra `estudos/meu-estudo.js` e preencha:
- `id`: nome-com-hifens
- `titulo`, `subtitulo`, `icone`, `resumo`
- Seções com conteúdo HTML
- Personagens com argumentos
- Debriefing (opcional)

### Passo 3: Registrar em app.js
```javascript
const estudosDisponiveis = [
    'vigilancia-urbana',
    'ia-recrutamento',
    'meu-estudo'  // ← Adicione aqui
];
```

### Passo 4: Testar
- Recarregue `index.html`
- Seu estudo aparecerá na lista!

---

## Estrutura de um Estudo

```
📁 Estudo de Caso
├── 📋 Informações Básicas (id, título, ícone, resumo)
├── 📑 Seções
│   ├── Introdução (objetivos, valores em conflito)
│   ├── Tecnologia (o que é, como funciona)
│   ├── Benefícios (aspectos positivos)
│   └── Riscos (dilemas éticos)
├── 👥 Personagens (8-12 stakeholders)
│   ├── Nome, ícone, resumo
│   ├── Objetivo principal
│   └── 6+ argumentos
└── 💭 Debriefing (questões para reflexão)
```

---

## Dicas Rápidas

### 🎨 Estilização
```html
<!-- Destaque azul -->
<div class="destaque">Importante!</div>

<!-- Benefício verde -->
<div class="beneficio">Vantagem</div>

<!-- Risco vermelho -->
<div class="risco">Problema</div>

<!-- Card padrão -->
<div class="card">Conteúdo</div>
```

### 👤 Criar bons personagens
- ✅ Perspectivas diversas (empresário, ativista, usuário)
- ✅ Objetivos claros e realistas
- ✅ 6-8 argumentos por personagem
- ✅ Conflitos naturais entre personagens

### 📝 Escrever conteúdo
- Use linguagem clara e acessível
- Inclua exemplos concretos
- Evite jargão técnico excessivo
- Seja equilibrado nos argumentos

---

## Checklist para Novo Estudo

Antes de publicar, verifique:

- [ ] ID único e descritivo
- [ ] Emoji apropriado escolhido
- [ ] Resumo com 2-3 linhas
- [ ] 4-5 seções criadas
- [ ] Introdução com objetivos pedagógicos
- [ ] Descrição clara da tecnologia
- [ ] Benefícios e riscos equilibrados
- [ ] 8-12 personagens diversos
- [ ] Cada personagem tem 6+ argumentos
- [ ] Debriefing com 5-7 questões (se aplicável)
- [ ] Arquivo exporta corretamente
- [ ] ID adicionado em app.js
- [ ] Testado no navegador

---

## Exemplos Práticos

### Temas Sugeridos para Novos Estudos

1. **Carros Autônomos**
   - Dilemas éticos de decisão
   - Responsabilidade em acidentes
   - Impacto no emprego de motoristas

2. **Redes Sociais e Algoritmos de Recomendação**
   - Bolhas de filtro
   - Desinformação
   - Saúde mental

3. **Reconhecimento Facial em Escolas**
   - Segurança vs privacidade
   - Vigilância de menores
   - Impacto psicológico

4. **Telemedicina e Diagnóstico por IA**
   - Acesso à saúde
   - Responsabilidade médica
   - Vieses em dados de saúde

5. **Gamificação no Trabalho**
   - Produtividade vs bem-estar
   - Manipulação comportamental
   - Privacidade de dados

6. **Moderação de Conteúdo por IA**
   - Liberdade de expressão
   - Transparência
   - Vieses culturais

---

## Recursos de Apoio

### Emojis Úteis
```
Tecnologia: 🤖 💻 📱 🔬 ⚙️ 🛠️ 📡
Pessoas: 👔 👨‍💼 👩‍💼 👨‍🔬 👩‍⚖️ 👮 🧑‍🎓
Conceitos: ⚖️ 🛡️ 💰 📊 📈 🔒 🔓 👁️
Sentimentos: ✅ ⚠️ ❌ 💡 🎯 🚨 💭
Locais: 🏢 🏛️ 🏪 🏘️ 🌍 📰 🎓
```

### Classes CSS Disponíveis
```
Containers:
- .card (cinza claro)
- .destaque (azul)
- .beneficio (verde)
- .risco (vermelho)

Tipografia:
- <h2> Título de seção
- <h3> Subtítulo
- <p> Parágrafo
- <ul><li> Listas
```

### Estrutura HTML Básica
```html
<h2>Título Principal</h2>

<div class="card">
    <h3>Subtítulo</h3>
    <p>Parágrafo de texto...</p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
</div>
```

---

## Solução de Problemas Comuns

### ❌ Erro: "Failed to load module"
**Causa:** ES6 modules requerem servidor HTTP  
**Solução:** Use um servidor local (veja seção 1)

### ❌ Estudo não aparece na lista
**Verificar:**
1. Arquivo está em `estudos/` ?
2. Nome do arquivo em `estudosDisponiveis` está correto?
3. Arquivo exporta com `export default` ?

### ❌ Modal não abre
**Verificar:**
1. ID do personagem está correto?
2. Função `abrirModalPersonagem` está sendo chamada?
3. Console do navegador mostra erros?

### ❌ Estilos não aplicados
**Verificar:**
1. `estilos.css` está no mesmo diretório?
2. Nome das classes está correto?
3. Cache do navegador foi limpo? (Ctrl+Shift+R)

---

## Fluxo de Trabalho Recomendado

### Para Criar um Novo Estudo:

```
1. 📖 Pesquisa (30-60 min)
   ├─ Ler sobre o tema
   ├─ Identificar valores em conflito
   └─ Listar stakeholders relevantes

2. ✍️ Rascunho (60-90 min)
   ├─ Copiar _template.js
   ├─ Preencher informações básicas
   ├─ Escrever seções principais
   └─ Criar lista de personagens

3. 👥 Personagens (30-45 min)
   ├─ Definir 8-12 personagens
   ├─ Escrever objetivos
   └─ Listar 6+ argumentos cada

4. 💭 Debriefing (15-20 min)
   └─ Criar 5-7 questões reflexivas

5. 🧪 Teste (10-15 min)
   ├─ Adicionar em app.js
   ├─ Testar no navegador
   └─ Verificar responsividade

6. ✅ Revisão (15-20 min)
   ├─ Revisar ortografia
   ├─ Verificar links/formatação
   └─ Testar todos os botões

Total: 2h30 - 4h para um estudo completo
```

---

## Pedagogia e Uso em Sala

### 🎓 Dinâmica Sugerida (1h30 - 2h)

**1. Introdução (10 min)**
- Apresente o caso e contextualize
- Explique a dinâmica da atividade
- Projete a tela com o estudo

**2. Leitura Individual (15 min)**
- Alunos exploram as seções
- Leem sobre a tecnologia
- Analisam benefícios e riscos

**3. Distribuição de Personagens (5 min)**
- Atribua um personagem para cada aluno/grupo
- Peça que leiam objetivo e argumentos
- Dê tempo para preparação

**4. Debate/Simulação (40-60 min)**
- Cada personagem apresenta sua posição (2-3 min)
- Rodadas de debate
- Mediação do professor
- Argumentação e contra-argumentação

**5. Debriefing (20-30 min)**
- Use as questões do estudo
- Reflexão coletiva
- Discussão sobre aprendizados
- Conexão com conceitos teóricos

### 📋 Variações da Atividade

**Formato 1: Comitê de Ética**
- Grupo simula comitê consultivo
- Votação ao final
- Justificativa das decisões

**Formato 2: Audiência Pública**
- Simular audiência legislativa
- Depoimentos formais
- Perguntas dos "legisladores"

**Formato 3: Júri Simulado**
- Um lado acusa, outro defende
- Apresentação de evidências
- Veredito final

**Formato 4: Mesa Redonda**
- Discussão mais livre
- Mediação do professor
- Busca por consensos

### 🎯 Objetivos de Aprendizagem

Esta plataforma ajuda estudantes a:
- ✅ Compreender múltiplas perspectivas
- ✅ Identificar conflitos de valores
- ✅ Desenvolver pensamento crítico
- ✅ Praticar argumentação ética
- ✅ Reconhecer complexidade de decisões tecnológicas
- ✅ Aplicar conceitos teóricos a casos reais

---

## Personalização Avançada

### Adicionar Nova Seção ao Template

Em `estudo-de-caso.html`, adicione após as seções existentes:

```html
<button class="btn-secao" data-secao="nova-secao">
    Nova Seção
</button>
```

### Criar Novo Estilo de Card

Em `estilos.css`:

```css
.meu-card-especial {
    background: #e0f2fe;
    border-left: 4px solid #0284c7;
    padding: 1.5rem;
    border-radius: 0.5rem;
    margin: 1rem 0;
}
```

Usar no conteúdo:
```html
<div class="meu-card-especial">
    <h3>Título</h3>
    <p>Conteúdo...</p>
</div>
```

### Adicionar Funcionalidade JavaScript

Em `app.js`, adicione suas funções:

```javascript
// Sua função customizada
function minhaFuncaoCustom() {
    // código aqui
}

// Expor para uso global
window.minhaFuncaoCustom = minhaFuncaoCustom;
```

---

## Boas Práticas

### ✅ Faça

- Use linguagem acessível e inclusiva
- Inclua fontes e referências quando possível
- Apresente argumentos equilibrados
- Cite casos reais quando relevante
- Mantenha consistência entre estudos
- Teste em diferentes navegadores
- Peça feedback de alunos

### ❌ Evite

- Jargão técnico excessivo sem explicação
- Texto muito longo em uma seção
- Viés explícito em favor de uma posição
- Personagens estereotipados ou caricatos
- Mais de 15 personagens (fica confuso)
- Argumentos repetitivos
- Questões de debriefing muito abstratas

---

## Exemplos de Bons Argumentos

### ✅ Argumento Bem Escrito
"Estudos acadêmicos comprovam que sistemas similares discriminam mulheres, negros e pessoas acima de 40 anos, mesmo sem intenção explícita dos desenvolvedores."

**Por quê é bom:**
- Específico e concreto
- Baseado em evidências
- Contextualizado
- Compreensível

### ❌ Argumento Fraco
"Essa tecnologia é ruim e não deveria existir."

**Por quê é fraco:**
- Muito vago
- Sem justificativa
- Não apresenta evidências
- Não contribui para o debate

---

## FAQ - Perguntas Frequentes

**P: Quantos estudos posso adicionar?**  
R: Ilimitados! A aplicação carrega dinamicamente.

**P: Posso usar imagens nos estudos?**  
R: Sim, use tags `<img>` no HTML do conteúdo.

**P: Funciona offline?**  
R: Sim, depois de carregado pela primeira vez.

**P: Posso modificar estudos existentes?**  
R: Sim, edite os arquivos em `estudos/`.

**P: Como compartilhar com outros professores?**  
R: Compartilhe o repositório ou os arquivos via ZIP.

**P: Preciso de conhecimento avançado de programação?**  
R: Não! Basta saber copiar/colar e editar texto.

**P: Funciona em smartphone?**  
R: Sim, é totalmente responsivo.

**P: Posso traduzir para outro idioma?**  
R: Sim, edite os textos nos arquivos.

---

## Próximos Passos

Agora que você conhece o básico:

1. 🔍 **Explore** os estudos existentes
2. 🧪 **Teste** em sala de aula
3. ✍️ **Crie** seu primeiro estudo
4. 🤝 **Compartilhe** com colegas
5. 💡 **Contribua** com melhorias

---

## Contato e Suporte

- 📖 Consulte README.md para detalhes completos
- 🐛 Reporte bugs ou sugestões
- 💬 Compartilhe experiências de uso
- 🌟 Contribua com novos estudos

---

**Boa aula! 🎓**

*Versão 1.0 - 2025*