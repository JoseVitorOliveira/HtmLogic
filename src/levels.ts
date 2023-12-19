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
    title: "Forms, Inputs e Labels",
    instructions: "Instruções 1",
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

  {
    level: "2 de 3",
    title: "Forms, Inputs e Labels",
    instructions: "Instruções 2",
    cards: [
      { id: 1, text: "<form>" },
      { id: 2, text: "<input type='radio' id='css' name='lang' value='CSS'>" },
      { id: 3, text: "<label for='html'>HTML</label><br>" },
      { id: 4, text: "<label for='js'>JS</label>" },
      { id: 5, text: "<label for='css'>CSS</label><br>" },
      {
        id: 6,
        text: "<input type='radio' id='html' name='lang' value='HTML'>",
      },
      { id: 7, text: "<input type='radio' id='js' name='lang' value='JS'>" },
      { id: 8, text: "</form>" },
    ],
    correctOrder: [
      "<form>",
      "<input type='radio' id='html' name='lang' value='HTML'>",
      "<label for='html'>HTML</label><br>",
      "<input type='radio' id='css' name='lang' value='CSS'>",
      "<label for='css'>CSS</label><br>",
      "<input type='radio' id='js' name='lang' value='JS'>",
      "<label for='js'>JS</label>",
      "</form>",
    ],
  },

  {
    level: "3 de 3",
    title: "Headings e Paragraphs",
    instructions: "Instruções 3",
    cards: [
      { id: 1, text: "<p>Paragraph 3.</p>" },
      { id: 2, text: "<h1>This is heading 1</h1>" },
      { id: 3, text: "<p>Paragraph 2.</p>" },
      { id: 4, text: "<h2>This is heading 2</h2>" },
      { id: 5, text: "<p>Paragraph 1.</p>" },
      { id: 6, text: "<br>" },
      { id: 7, text: "<h3>This is heading 3</h3>" },
      { id: 8, text: "<hr>" },
    ],
    correctOrder: [
      "<h1>This is heading 1</h1>",
      "<p>Paragraph 1.</p>",
      "<br>",
      "<h2>This is heading 2</h2>",
      "<p>Paragraph 2.</p>",
      "<hr>",
      "<h3>This is heading 3</h3>",
      "<p>Paragraph 3.</p>",
    ],
  },
];
