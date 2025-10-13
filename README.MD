# Estudos de Caso: Ética em Tecnologia

Aplicação web para exibir e gerenciar estudos de caso sobre dilemas éticos em tecnologias emergentes. Desenvolvida para uso educacional em disciplinas de Computação e Sociedade.

## 📁 Estrutura do Projeto

```
/
├── index.html                    # Página principal com lista de estudos
├── estudo-de-caso.html          # Template para exibir estudos
├── estilos.css                  # Estilos globais
├── app.js                       # Lógica principal da aplicação
├── README.md                    # Este arquivo
└── estudos/                     # Pasta com os estudos de caso
    ├── vigilancia-urbana.js     # Estudo sobre vigilância com IA
    ├── ia-recrutamento.js       # Estudo sobre IA em recrutamento
    └── [novos estudos aqui]     # Adicione novos estudos aqui
```

## 🚀 Como Usar

### Instalação

1. Clone ou baixe este repositório
2. Abra o arquivo `index.html` em um navegador moderno
3. Ou use um servidor local (recomendado para ES6 modules):

```bash
# Usando Python 3
python -m http.server 8000

# Ou usando Node.js com http-server
npx http-server
```

4. Acesse `http://localhost:8000` no navegador

### Requisitos

- Navegador moderno com suporte a ES6 Modules (Chrome 61+, Firefox 60+, Safari 11+)
- Não requer instalação de dependências ou frameworks

## ✨ Funcionalidades

### Página Principal
- Lista todos os estudos de caso disponíveis
- Cards clicáveis com ícone, título e resumo
- Design responsivo e moderno

### Página de Estudo
- Navegação por abas entre seções (Introdução, Tecnologia, Benefícios, Riscos, Personagens)
- Seção de personagens/stakeholders com cards clicáveis
- Modal com detalhes completos de cada personagem
- Seção de debriefing/reflexões (quando aplicável)
- Botão "Voltar aos estudos" sempre visível

## 📝 Como Adicionar um Novo Estudo de Caso

### Passo 1: Criar o arquivo do estudo

Crie um novo arquivo na pasta `estudos/` com o formato: `nome-do-estudo.js`

```javascript
// estudos/meu-novo-estudo.js

const meuNovoEstudo = {
    id: 'meu-novo-estudo',
    titulo: 'Título do Estudo',
    subtitulo: 'Subtítulo descritivo',
    icone: '🔬', // Emoji que representa o estudo
    resumo: 'Breve descrição do estudo de caso em 2-3 linhas',
    
    // Seções do estudo
    secoes: [
        {
            id: 'introducao',
            titulo: 'Introdução',
            conteudo: `
                <h2>Título da Seção</h2>
                <div class="card">
                    <p>Conteúdo em HTML...</p>
                </div>
                
                <!-- Use as classes CSS disponíveis -->
                <div class="destaque">
                    <h3>Destaque</h3>
                    <p>Informação importante</p>
                </div>
                
                <div class="beneficio">
                    <h3>Benefício</h3>
                    <p>Aspecto positivo</p>
                </div>
                
                <div class="risco">
                    <h3>Risco</h3>
                    <p>Aspecto negativo</p>
                </div>
            `
        },
        {
            id: 'tecnologia',
            titulo: 'A Tecnologia',
            conteudo: `<h2>Descrição da tecnologia...</h2>`
        },
        // Adicione mais seções conforme necessário
    ],
    
    // Personagens/Stakeholders
    personagens: [
        {
            id: 'personagem1',
            nome: 'Nome do Personagem',
            icone: '👔',
            resumo: 'Resumo curto do papel',
            objetivo: 'Objetivo principal detalhado do personagem',
            argumentos: [
                'Argumento 1',
                'Argumento 2',
                'Argumento 3',
                // Adicione mais argumentos
            ]
        },
        // Adicione mais personagens
    ],

    // Debriefing (opcional)
    debriefing: [
        {
            titulo: 'Questão 1',
            texto: 'Pergunta para reflexão e discussão'
        },
        {
            titulo: 'Questão 2',
            texto: 'Outra pergunta importante'
        },
        // Adicione mais questões
    ]
    // Se não houver debriefing, use: debriefing: null
};

export default meuNovoEstudo;
```

### Passo 2: Registrar o estudo

Abra o arquivo `app.js` e adicione o ID do novo estudo no array `estudosDisponiveis`:

```javascript
// app.js

const estudosDisponiveis = [
    'vigilancia-urbana',
    'ia-recrutamento',
    'meu-novo-estudo'  // Adicione aqui
];
```

### Passo 3: Testar

1. Recarregue a página principal (`index.html`)
2. O novo estudo aparecerá automaticamente na lista
3. Clique no card para visualizar o estudo completo

## 🎨 Classes CSS Disponíveis

Use essas classes para estilizar o conteúdo das seções:

### Containers
- `.card` - Container padrão com fundo cinza claro
- `.destaque` - Caixa de destaque com borda azul (para informações importantes)
- `.beneficio` - Caixa verde (para aspectos positivos)
- `.risco` - Caixa vermelha (para aspectos negativos/riscos)

### Exemplo de uso
```html
<div class="card">
    <h3>Título</h3>
    <p>Conteúdo...</p>
</div>

<div class="destaque">
    <h3>Atenção</h3>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
</div>
```

## 🎯 Estrutura Recomendada de Seções

Para manter consistência entre os estudos, recomenda-se usar estas seções:

1. **Introdução** - Apresentação do caso, objetivos pedagógicos, valores em conflito
2. **Cenário/Tecnologia** - Descrição detalhada da tecnologia e contexto de aplicação
3. **Benefícios** - Possíveis vantagens e aspectos positivos
4. **Riscos** - Dilemas éticos, riscos e preocupações
5. **Personagens** - Sempre presente automaticamente
6. **Reflexões** (opcional) - Questões para debriefing e discussão

## 👥 Criando Personagens Efetivos

### Dicas para criar bons personagens:

1. **Diversidade de perspectivas**: Inclua stakeholders de diferentes posições sociais, econômicas e políticas
2. **Objetivos claros**: Cada personagem deve ter motivações específicas
3. **Argumentos realistas**: Base os argumentos em posições reais encontradas em debates sobre o tema
4. **Conflitos de interesse**: Crie tensões naturais entre os personagens
5. **Quantidade**: 8-12 personagens oferecem boa variedade sem sobrecarregar

### Exemplos de tipos de personagens:

- **Defensores**: Empresários, investidores, entusiastas de tecnologia
- **Críticos**: Ativistas, ONGs, pesquisadores de ética
- **Moderados**: Gestores públicos, profissionais da área, usuários comuns
- **Afetados**: Pessoas diretamente impactadas pela tecnologia

## 🔧 Personalização

### Alterar cores

Edite as variáveis CSS em `estilos.css`:

```css
:root {
    --azul-primario: #2563eb;
    --verde: #10b981;
    --vermelho: #ef4444;
    --amarelo: #f59e0b;
    /* Altere conforme necessário */
}
```

### Adicionar novas classes CSS

Adicione seus estilos personalizados no final de `estilos.css`:

```css
.minha-classe-custom {
    background: #your-color;
    padding: 1rem;
    border-radius: 0.5rem;
}
```

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona bem em:
- Desktop (1200px+)
- Tablets (768px - 1199px)
- Smartphones (< 768px)

## ♿ Acessibilidade

- Navegação por teclado suportada
- Semântica HTML adequada
- Modal fecha com tecla ESC
- Contraste de cores apropriado

## 🐛 Resolução de Problemas

### Estudos não aparecem na página principal

1. Verifique se está usando um servidor local (necessário para ES6 modules)
2. Confirme que o arquivo do estudo está na pasta `estudos/`
3. Verifique o console do navegador para erros de importação

### Modal não abre ao clicar no personagem

1. Verifique se o `id` do personagem está correto
2. Confirme que o arquivo `app.js` está carregado
3. Verifique o console para erros JavaScript

### Estilos não aplicados

1. Confirme que `estilos.css` está no mesmo diretório que `index.html`
2. Limpe o cache do navegador (Ctrl+Shift+R ou Cmd+Shift+R)
3. Verifique se há erros de sintaxe no CSS

## 📚 Exemplos de Estudos Incluídos

### 1. Vigilância Urbana (vigilancia-urbana.js)
Sistema de monitoramento comportamental preditivo com IA em ambientes urbanos. Explora temas de:
- Segurança pública vs. privacidade
- Viés algorítmico
- Vigilância em massa
- Controle social

### 2. IA em Recrutamento (ia-recrutamento.js)
Sistema automatizado de seleção de candidatos. Aborda:
- Discriminação algorítmica
- Justiça no mercado de trabalho
- Transparência e accountability
- Desumanização de processos

## 🤝 Contribuindo

Este é um projeto educacional aberto. Sinta-se livre para:
- Adicionar novos estudos de caso
- Melhorar estudos existentes
- Corrigir bugs
- Sugerir melhorias

## 📄 Licença

Uso livre para fins pedagógicos e educacionais.

## 📧 Suporte

Para dúvidas ou sugestões sobre o uso da plataforma em sala de aula, consulte a documentação ou entre em contato com o desenvolvedor.

---

**Versão:** 1.0  
**Última atualização:** 2025  
**Desenvolvido para:** Disciplinas de Computação e Sociedade