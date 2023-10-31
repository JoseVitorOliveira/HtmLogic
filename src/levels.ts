export interface Item {
  id: number;
  text: string;
}

export interface Level {
  level: string;
  title: string;
  imagePath: string;
  cards: Item[];
  correctOrder: string[];
}

export const levels: Level[] = [
  {
    level: "1/3",
    title: "Navigation Bar",
    imagePath: "/assets/level1.png",
    cards: [
      { id: 1, text: "<nav>" },
      { id: 2, text: "</nav>" },
      { id: 3, text: "   <ul>" },
      { id: 4, text: "   </ul>" },
      { id: 5, text: "      <li><a>Home</a></li>" },
      { id: 6, text: "      <li><a>About</a></li>" },
      { id: 7, text: "      <li><a>Services</a></li>" },
      { id: 8, text: "      <li><a>Portfolio</a></li>" },
      { id: 9, text: "      <li><a>Contact</a></li>" },
    ],
    correctOrder: [
      "<nav>",
      "   <ul>",
      "      <li><a>Home</a></li>",
      "      <li><a>About</a></li>",
      "      <li><a>Services</a></li>",
      "      <li><a>Portfolio</a></li>",
      "      <li><a>Contact</a></li>",
      "   </ul>",
      "</nav>",
    ],
  },
  {
    level: "2/3",
    title: "Form",
    imagePath: "/assets/level2.png",
    cards: [
      { id: 1, text: "<form>" },
      { id: 2, text: "</form>" },
      { id: 3, text: "   <label>Email</label>" },
      { id: 4, text: "   <label>Password</label>" },
      { id: 5, text: "   <input type='email' name='email'>" },
      { id: 6, text: "   <input type='password' name='password'>" },
      { id: 7, text: "   <button type='submit'>Login</button>" },
    ],
    correctOrder: [
      "<form>",
      "   <label>Email</label>",
      "   <input type='email' name='email'>",
      "   <label>Password</label>",
      "   <input type='password' name='password'>",
      "   <button type='submit'>Login</button>",
      "</form>",
    ],
  },

  {
    level: "3/3",
    title: "Section",
    imagePath: "/assets/level3.png",
    cards: [
      { id: 1, text: "<div>" },
      { id: 2, text: "</div>" },
      { id: 3, text: "   <p>Welcome to html</p>" },
      { id: 4, text: "   <h1>Hello World</h1>" },
    ],
    correctOrder: [
      "<div>",
      "   <h1>Hello World</h1>",
      "   <p>Welcome to html</p>",
      "</div>",
    ],
  },
];
