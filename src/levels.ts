export interface Item {
  id: number;
  text: string;
}

export interface Level {
  level: string;
  title: string;
  cards: Item[];
  correctOrder: string[];
  instructions: string;
}

export const levels: Level[] = [
  {
    level: "1 de 3",
    title: "Estrutura Básica",
    instructions:
      "HTML possui uma estrutura básica composta por tags de abertura e fechamento que envolvem o conteúdo. A estrutura básica inclui as tags <html>, <head>, <title>, <body>, entre outras.",
    cards: [
      { id: 1, text: "</html>" },
      { id: 2, text: "<!DOCTYPE html>" },
      { id: 3, text: "<html>" },
      { id: 4, text: "<title>Minha Página</title>" },
      { id: 5, text: "</body>" },
      { id: 6, text: "<body>" },
      { id: 7, text: "<h1>Olá, mundo!</h1>" },
      { id: 8, text: "<head>" },
      { id: 9, text: "</head>" },
    ],
    correctOrder: [
      "<!DOCTYPE html>",
      "<html>",
      "<head>",
      "<title>Minha Página</title>",
      "</head>",
      "<body>",
      "<h1>Olá, mundo!</h1>",
      "</body>",
      "</html>",
    ],
  },

  {
    level: "2 de 3",
    title: "Elementos de Texto e Títulos",
    instructions:
      "HTML usa tags para marcar diferentes partes do conteúdo. Cada tag é um elemento e pode ter atributos que fornecem informações adicionais. Exemplos incluem <p> para parágrafos, <h1> a <h6> para cabeçalhos, <a> para links, etc.",
    cards: [
      { id: 1, text: "<br>" },
      { id: 2, text: "<p>Este é um parágrafo de texto.</p>" },
      { id: 3, text: "<b>Texto em Negrito</b>" },
      { id: 4, text: "<h2>Subtítulo</h2>" },
      { id: 5, text: "<h1>Título Principal</h1>" },
      { id: 6, text: "<i>Texto em Itálico</i>" },
      { id: 7, text: "<a href='www.exemplo.com'>Isso é um link</a>" },
    ],
    correctOrder: [
      "<h1>Título Principal</h1>",
      "<p>Este é um parágrafo de texto.</p>",
      "<h2>Subtítulo</h2>",
      "<br>",
      "<i>Texto em Itálico</i>",
      "<b>Texto em Negrito</b>",
      "<a href='www.exemplo.com'>Isso é um link</a>",
    ],
  },

  {
    level: "3 de 3",
    title: "Forms, Inputs e Labels",
    instructions:
      "Formulários em HTML são elementos que permitem a coleta de dados interativos dos usuários, usando tags como <form>, <input>, e <button>. Esses elementos possibilitam a criação de caixas de entrada, botões de envio, e outros controles para coletar informações que podem ser processadas por servidores web.",
    cards: [
      { id: 1, text: "<form>" },
      { id: 2, text: "</form>" },
      { id: 3, text: "<label>Email</label><br>" },
      { id: 4, text: "<label>Password</label><br>" },
      { id: 5, text: "<input type='email' name='email'><br>" },
      { id: 6, text: "<input type='password' name='password'><br>" },
      { id: 7, text: "<button type='submit'>Login</button>" },
    ],
    correctOrder: [
      "<form>",
      "<label>Email</label><br>",
      "<input type='email' name='email'><br>",
      "<label>Password</label><br>",
      "<input type='password' name='password'><br>",
      "<button type='submit'>Login</button>",
      "</form>",
    ],
  },
];
