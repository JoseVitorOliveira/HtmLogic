export interface Item {
  id: number;
  text: string;
}

export interface Level {
  cards: Item[];
  correctOrder: string[];
}

export const levels: Level[] = [
  {
    cards: [
      { id: 1, text: "<nav>" },
      { id: 2, text: "</nav>" },
      { id: 3, text: "<ul>" },
      { id: 4, text: "</ul>" },
      { id: 5, text: "<li><a>Home</a></li>" },
      { id: 6, text: "<li><a>About</a></li>" },
      { id: 7, text: "<li><a>Services</a></li>" },
      { id: 8, text: "<li><a>Portfolio</a></li>" },
      { id: 9, text: "<li><a>Contact</a></li>" },
    ],
    correctOrder: [
      "<nav>",
      "<ul>",
      "<li><a>Home</a></li>",
      "<li><a>About</a></li>",
      "<li><a>Services</a></li>",
      "<li><a>Portfolio</a></li>",
      "<li><a>Contact</a></li>",
      "</ul>",
      "</nav>",
    ],
  },
  {
    cards: [
      { id: 1, text: "<div>" },
      { id: 2, text: "<p>Paragraph</p>" },
      { id: 3, text: "</div>" },
    ],
    correctOrder: ["<div>", "<p>Paragraph</p>", "</div>"],
  },

  {
    cards: [
      { id: 1, text: "<div>" },
      { id: 2, text: "</div>" },
      { id: 3, text: "<p>Welcome to html</p>" },
      { id: 4, text: "<h1>Hello World</h1>" },
    ],
    correctOrder: [
      "<div>",
      "<h1>Hello World</h1>",
      "<p>Welcome to html</p>",
      "</div>",
    ],
  },

  // Add more levels as needed
];
