# Prompt para Criação de Aplicação Web de Estudos de Caso

Crie uma aplicação web simples usando HTML, CSS e JavaScript vanilla para gerenciar múltiplos estudos de caso sobre ética em tecnologia. A aplicação deve ter uma arquitetura modular que facilite a adição de novos estudos de caso semanalmente.

## Requisitos Principais

### 1. Estrutura da Aplicação
- **Página inicial**: Lista todos os estudos de caso disponíveis em cards clicáveis
- **Página de estudo de caso**: Exibe o conteúdo completo de um estudo específico com navegação por abas/seções
- **Arquitetura modular**: Cada estudo de caso deve ser um arquivo JavaScript separado que pode ser facilmente adicionado

### 2. Estrutura de Arquivos
```
/
├── index.html (página principal com lista de estudos)
├── estudo-de-caso.html (template para exibir qualquer estudo)
├── estilos.css (estilos globais)
├── app.js (lógica principal da aplicação)
└── estudos/
    ├── vigilancia-urbana.js
    ├── ia-recrutamento.js
    └── [novos estudos serão adicionados aqui]
```

### 3. Formato do Arquivo de Estudo de Caso

Cada arquivo na pasta `estudos/` deve exportar um objeto com esta estrutura:

```javascript
const estudoDeCase = {
  id: 'vigilancia-urbana',
  titulo: 'Sistema de Monitoramento Comportamental Preditivo',
  subtitulo: 'Vigilância com IA em Ambientes Urbanos',
  icone: '📹',
  resumo: 'Breve descrição do estudo de caso (2-3 linhas)',
  
  // Seções do estudo
  secoes: [
    {
      id: 'introducao',
      titulo: 'Introdução',
      conteudo: `<div class="card">...</div>` // HTML da seção
    },
    {
      id: 'tecnologia',
      titulo: 'A Tecnologia',
      conteudo: `<div class="card">...</div>`
    },
    // ... mais seções
  ],
  
  // Personagens/Stakeholders
  personagens: [
    {
      id: 'ceo',
      nome: 'CEO da TechGuard Solutions',
      icone: '👔',
      resumo: 'Defender a tecnologia...',
      objetivo: 'Aprovar o contrato...',
      argumentos: ['Argumento 1', 'Argumento 2', ...]
    },
    // ... mais personagens
  ]
};
```

### 4. Funcionalidades da Página Principal (index.html)

- **Cabeçalho** com título "Estudos de Caso: Ética em Tecnologia"
- **Grid de cards** mostrando todos os estudos disponíveis:
  - Ícone do estudo
  - Título
  - Resumo curto
  - Botão "Explorar estudo"
- **Carregamento dinâmico**: Os estudos devem ser carregados automaticamente da pasta `estudos/`

### 5. Funcionalidades da Página de Estudo (estudo-de-caso.html)

- **Navegação por abas/botões** entre as seções (Introdução, Tecnologia, Benefícios, Riscos, Personagens, etc.)
- **Seção de personagens**: 
  - Grid de cards clicáveis
  - Modal/expansão para mostrar detalhes completos (objetivo, argumentos)
- **Debriefing/Reflexões finais** (quando aplicável)
- **Botão "Voltar aos estudos"** no topo

### 6. Sistema de Navegação

```javascript
// Em app.js - sistema para carregar estudos dinamicamente
const estudosDisponiveis = [
  'vigilancia-urbana',
  'ia-recrutamento',
  // novos estudos serão adicionados aqui
];

// Função para carregar um estudo específico
async function carregarEstudo(idEstudo) {
  const modulo = await import(`./estudos/${idEstudo}.js`);
  return modulo.default; // retorna o objeto do estudo
}
```

### 7. Design e Estilo

- **Design moderno e limpo** similar aos exemplos fornecidos
- **Responsivo**: funciona bem em desktop, tablet e mobile
- **Cores**: Usar paleta com azul primário (#2563eb), verde para benefícios, vermelho para riscos
- **Tipografia**: Fontes legíveis, hierarquia clara de títulos
- **Animações sutis**: Transições suaves ao trocar de seção

### 8. Requisitos Técnicos

- **Apenas HTML, CSS e JavaScript vanilla** (sem frameworks)
- **ES6 Modules** para importar estudos dinamicamente
- **LocalStorage** para salvar votos e progresso (opcional)
- **Acessibilidade**: Semântica HTML adequada, navegação por teclado
- **Performance**: Carregar apenas o estudo selecionado, não todos de uma vez

### 9. Como Adicionar um Novo Estudo de Caso

Deve ser simples:
1. Criar novo arquivo `novo-estudo.js` na pasta `estudos/`
2. Seguir o formato do objeto `estudoDeCase`
3. Adicionar o ID do novo estudo no array `estudosDisponiveis` em `app.js`
4. Pronto! O novo estudo aparece automaticamente na página principal

### 10. Conversão dos Estudos Existentes

Por favor, converta os dois estudos de caso fornecidos (vigilância urbana e IA em recrutamento) para o novo formato modular, mantendo todo o conteúdo e funcionalidades existentes.

### 11. Sistema de votação
 
Por favor, não faça sistema de votação. A aplicação web é somente para exibir os estudos de caso e os personagens.

---

## Entregáveis Esperados Entregues em Artefatos Separados

1. `index.html` - Página principal com lista de estudos
2. `estudo-de-caso.html` - Template para exibir estudos
3. `estilos.css` - Estilos globais da aplicação
4. `app.js` - Lógica principal e carregamento dinâmico
5. `estudos/vigilancia-urbana.js` - Primeiro estudo convertido
6. `estudos/ia-recrutamento.js` - Segundo estudo convertido
7. `README.md` - Instruções de uso e como adicionar novos estudos

A aplicação deve ser funcional, bem organizada e fácil de manter, permitindo expansão contínua com novos estudos de caso.