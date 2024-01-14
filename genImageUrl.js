const [_o, _t, title, tags] = process.argv;
const url = `https://adoring-jackson-1187ff.netlify.app/.netlify/functions/gen-opengraph-image?title=${encodeURIComponent(
  title,
)}&tags=${encodeURIComponent(tags)}`;
console.log(url);
