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
    level: "1 de 5",
    title: "Estrutura Básica",
    instructions:
      "HTML possui uma estrutura básica com tags de abertura e fechamento que envolvem o conteúdo. Inclui <html> (início/fim do documento), <head> (configurações da página, como título e estilos), <body> (conteúdo visível), e <!DOCTYPE html> que inicia o código definindo o tipo de documento, assegurando a formatação correta da página web. Certifique-se de que as tags de abertura sempre precedam as de fechamento para manter a organização adequada.",
    cards: [
      { id: 1, text: "</html>" },
      { id: 2, text: "<!DOCTYPE html>" },
      { id: 3, text: "<html lang='pt-br'>" },
      { id: 4, text: "<body>" },
      { id: 5, text: "<p>Boas Vindas ao Html.</p>" },
      { id: 6, text: "<h1>Olá, mundo!</h1>" },
      { id: 7, text: "</body>" },
      { id: 8, text: "<head>" },
      { id: 9, text: "<style>h1 {color:red;}</style>" },
      { id: 10, text: "</head>" },
    ],
    correctOrder: [
      "<!DOCTYPE html>",
      "<html lang='pt-br'>",
      "<head>",
      "<style>h1 {color:red;}</style>",
      "</head>",
      "<body>",
      "<h1>Olá, mundo!</h1>",
      "<p>Boas Vindas ao Html.</p>",
      "</body>",
      "</html>",
    ],
  },

  {
    level: "2 de 5",
    title: "Elementos de Texto",
    instructions:
      "Como você observou no nível anterior, HTML usa tags para marcar diferentes partes do conteúdo. Cada tag é um elemento e pode ter atributos que fornecem informações adicionais. O nível atual contém uma estrutura textual básica. Utiliza a tag <h1> para criar um título principal, <p> para um parágrafo, <h2> para um subtítulo, <br> para uma quebra de linha, <i> para texto em itálico, <b> para texto em negrito e <a> para criar um link.",
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
    level: "3 de 5",
    title: "Formulários",
    instructions:
      "Formulários em HTML são elementos que permitem a coleta de dados interativos dos usuários, usando tags como <form>, <input>, e <button>. Esses elementos possibilitam a criação de caixas de entrada, botões de envio, e outros controles para coletar informações que podem ser processadas por servidores web.",
    cards: [
      { id: 1, text: "<form>" },
      { id: 2, text: "</form>" },
      { id: 3, text: "<label>Email</label>" },
      { id: 4, text: "<label>Password</label>" },
      { id: 5, text: "<input type='email' name='email'>" },
      { id: 6, text: "<input type='password' name='password'>" },
      { id: 7, text: "<button type='submit'>Login</button>" },
    ],
    correctOrder: [
      "<form>",
      "<label>Email</label>",
      "<input type='email' name='email'>",
      "<label>Password</label>",
      "<input type='password' name='password'>",
      "<button type='submit'>Login</button>",
      "</form>",
    ],
  },

  {
    level: "4 de 5",
    title: "Listas",
    instructions:
      "A estrutura de uma lista em html inclui as tags <ul> (início da lista) e </ul> (fim da lista), enquanto cada item é definido entre as tags <li> e </li>. Se desejado, essa lista pode ser transformada em uma lista ordenada substituindo <ul> por <ol>, resultando em itens numerados automaticamente.",
    cards: [
      { id: 1, text: "<li>Feijão</li>" },
      { id: 2, text: "<h1>Lista de Compras</h1>" },
      { id: 3, text: "<ul>" },
      { id: 4, text: "<li>Arroz</li>" },
      { id: 5, text: "</ul>" },
      { id: 6, text: "<li>Carne</li>" },
      { id: 7, text: "<li>Maçã</li>" },
    ],
    correctOrder: [
      "<h1>Lista de Compras</h1>",
      "<ul>",
      "<li>Feijão</li>",
      "<li>Arroz</li>",
      "<li>Carne</li>",
      "<li>Maçã</li>",
      "</ul>",
    ],
  },

  {
    level: "5 de 5",
    title: "Tabelas",
    instructions:
      "Esse código cria uma tabela simples com duas linhas e duas colunas. A estrutura da tabela é definida pelas tags <table> (início da tabela) e </table> (fim da tabela). Cada linha é representada pelas tags <tr> (início da linha) e </tr> (fim da linha). As células da tabela são definidas pelas tags <th> para cabeçalhos de coluna e <td> para dados de célula.",
    cards: [
      { id: 1, text: "<table>" },
      { id: 2, text: "<th>Produto</th>" },
      { id: 3, text: "<th>Preço</th>" },
      { id: 4, text: "<tr>" },
      { id: 5, text: "</tr>" },
      { id: 6, text: "<tr>" },
      { id: 7, text: "<td>2,50</td>" },
      { id: 8, text: "<td>Arroz</td>" },
      { id: 9, text: "</table>" },
      { id: 10, text: "</tr>" },
    ],
    correctOrder: [
      "<table>",
      "<tr>",
      "<th>Produto</th>",
      "<th>Preço</th>",
      "</tr>",
      "<tr>",
      "<td>Arroz</td>",
      "<td>2,50</td>",
      "</tr>",
      "</table>",
    ],
  },
];
