export interface Blog {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  image: string;
  content: string; // Can be markdown or plain HTML
}

export const blogs: Blog[] = [
  {
    slug: "reflections-on-time",
    title: "Reflections on Time",
    date: "Jan 20, 2026",
    excerpt:
      "Reflecting on the passage of time and life's fleeting moments. Profound intersection of classical literature, ancient and modern philosophy, and the enduring power of the poetic voice.",

    author: "Abdelselam Kemal",
    image:
      "https://images.unsplash.com/photo-1769251296969-a4c7aa0b4478?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    content: `
<p>Time moves like a river, unstoppable and deep,</p>
<p>Moments slip like water through our fingers,</p>
<p>Yet memories remain, etched in our souls,</p>
<p>Silent witnesses to lives that linger.</p>
`,
  },
  {
    slug: "ode-to-the-moon",
    title: "Ode to the Moon",
    date: "Feb 2, 2026",
    excerpt:
      "A classical poem exploring the calmness of rivers and nature. Profound intersection of classical literature, ancient and modern philosophy, and the enduring power of the poetic voice.",
    author: "Abdelselam Kemal",
    image:
      "https://images.unsplash.com/photo-1769251296969-a4c7aa0b4478?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    content: `
<p><em>O shining moon, up in the sky,</em></p>
<p>Your silver glow illuminates the night,</p>
<p>Whispering secrets to the wandering hearts,</p>
<p>And serenading dreams in gentle light.</p>


<p><strong>The night is your canvas,</strong> painted with stars,</p>
<p>Softly guiding the poet’s pen,</p>
<p>Every word a reflection of your grace,</p>
<p>Every verse a tribute to your zen.</p>
`,
  },
  {
    slug: "reflections-on-time",
    title: "Reflections on Time",
    date: "Jan 20, 2026",
    excerpt:
      "Reflecting on the passage of time and life's fleeting moments. Profound intersection of classical literature, ancient and modern philosophy, and the enduring power of the poetic voice.",

    author: "Abdelselam Kemal",
    image:
      "https://images.unsplash.com/photo-1769251296969-a4c7aa0b4478?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    content: `
<p>Time moves like a river, unstoppable and deep,</p>
<p>Moments slip like water through our fingers,</p>
<p>Yet memories remain, etched in our souls,</p>
<p>Silent witnesses to lives that linger.</p>
`,
  },
  {
    slug: "ode-to-the-moon",
    title: "Ode to the Moon",
    date: "Feb 2, 2026",
    excerpt:
      "A classical poem exploring the calmness of rivers and nature. Profound intersection of classical literature, ancient and modern philosophy, and the enduring power of the poetic voice.",
    author: "Abdelselam Kemal",
    image:
      "https://images.unsplash.com/photo-1769251296969-a4c7aa0b4478?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    content: `
<p><em>O shining moon, up in the sky,</em></p>
<p>Your silver glow illuminates the night,</p>
<p>Whispering secrets to the wandering hearts,</p>
<p>And serenading dreams in gentle light.</p>


<p><strong>The night is your canvas,</strong> painted with stars,</p>
<p>Softly guiding the poet’s pen,</p>
<p>Every word a reflection of your grace,</p>
<p>Every verse a tribute to your zen.</p>
`,
  },
];
