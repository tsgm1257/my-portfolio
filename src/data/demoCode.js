// src/data/demoCode.js
// Simple, copy-pasteable demos. No complex setup, no secret keys in code.
// Tools: only Git has a demo (GitHub/Vercel/Netlify/Postman = no code here).

export const demos = {
  javascript: {
    title: "JavaScript — Fetch JSON (try/catch)",
    blurb: "Basic GET request with error handling.",
    lang: "js",
    code: `async function getTodos() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3");
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Failed to load:", err.message);
  }
}
getTodos();`,
  },

  typescript: {
    title: "TypeScript — Type a function return",
    blurb: "Define an interface and return typed data.",
    lang: "ts",
    code: `interface User { id: number; name: string }
async function getUser(id: number): Promise<User | null> {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/users/\${id}\`);
  if (!res.ok) return null;
  const json = await res.json();
  // very light guard
  if (json && typeof json.id === "number" && typeof json.name === "string") {
    return { id: json.id, name: json.name };
  }
  return null;
}
getUser(1).then(console.log);`,
  },

  html: {
    title: "HTML5 — Semantic skeleton",
    blurb: "Minimal, accessible layout.",
    lang: "html",
    code: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>My Page</title>
  </head>
  <body>
    <header><nav>Brand · Links</nav></header>
    <main>
      <article>
        <h1>Hello</h1>
        <p>Welcome to my site.</p>
      </article>
    </main>
    <footer>© Your Name</footer>
  </body>
</html>`,
  },

  css: {
    title: "CSS3 — Responsive cards grid",
    blurb: "Auto-fit columns with a min width.",
    lang: "css",
    code: `.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 1rem;
}
.card { padding: 1rem; border: 1px solid #e5e7eb; border-radius: 12px; }`,
  },

  react: {
    title: "React — Controlled input",
    blurb: "Tiny component with useState.",
    lang: "jsx",
    code: `import { useState } from "react";
export default function NameInput() {
  const [name, setName] = useState("");
  return (
    <label className="flex gap-2 items-center">
      <span>Name:</span>
      <input value={name} onChange={e => setName(e.target.value)} />
    </label>
  );
}`,
  },

  redux: {
    title: "Redux Toolkit — Simple slice",
    blurb: "Create a slice and dispatch an action.",
    lang: "ts",
    code: `import { configureStore, createSlice } from "@reduxjs/toolkit";
const todos = createSlice({
  name: "todos",
  initialState: [] as { id: string; text: string }[],
  reducers: {
    add(state, action) { state.push({ id: crypto.randomUUID(), text: action.payload }); }
  }
});
export const { add } = todos.actions;
export const store = configureStore({ reducer: { todos: todos.reducer } });
// store.dispatch(add("Learn Redux Toolkit"));`,
  },

  tailwind: {
    title: "Tailwind — Simple card",
    blurb: "One element with padding/radius/shadow.",
    lang: "jsx",
    code: `<div className="p-4 md:p-6 rounded-2xl shadow border">Hello</div>`,
  },

  firebase: {
    title: "Firebase — Firestore write/read",
    blurb: "Use your own config; never commit secrets.",
    lang: "js",
    code: `import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
const app = initializeApp({ /* your web config here */ });
const db = getFirestore(app);

async function demo() {
  await setDoc(doc(db, "users", "alice"), { email: "a@a.com", createdAt: Date.now() });
  const snap = await getDoc(doc(db, "users", "alice"));
  console.log(snap.data());
}
demo();`,
  },

  node: {
    title: "Node.js — Hello server",
    blurb: "Tiny HTTP server (no frameworks).",
    lang: "js",
    code: `import http from "node:http";
const server = http.createServer((req, res) => {
  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify({ ok: true, path: req.url }));
});
server.listen(3000, () => console.log("http://localhost:3000"));`,
  },

  express: {
    title: "Express — Basic route",
    blurb: "GET endpoint with a query param.",
    lang: "js",
    code: `import express from "express";
const app = express();
app.get("/hello", (req, res) => {
  const name = String(req.query.name || "World").slice(0, 40);
  res.json({ message: \`Hello, \${name}!\` });
});
app.listen(3000, () => console.log("http://localhost:3000"));`,
  },

  mongodb: {
    title: "MongoDB — Connect & upsert",
    blurb: "Use env var for URI (never hardcode).",
    lang: "js",
    code: `import { MongoClient } from "mongodb";
const client = new MongoClient(process.env.MONGO_URL);
await client.connect();
const users = client.db("app").collection("users");
const email = "a@a.com";
const found = await users.findOne({ email });
if (!found) await users.insertOne({ email, createdAt: new Date() });
console.log(await users.findOne({ email }));`,
  },

  postgres: {
    title: "PostgreSQL — node-postgres",
    blurb: "Parameterized query (no string concat).",
    lang: "js",
    code: `import { Pool } from "pg";
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const { rows } = await pool.query("SELECT $1::text as msg", ["hello"]);
console.log(rows[0]);`,
  },

  // TOOLS — only Git has a demo by request
  git: {
    title: "Git — Branch → commit → push",
    blurb: "Common 3-step workflow.",
    lang: "sh",
    code: `git checkout -b feature/awesome
git add .
git commit -m "feat: awesome"
git push -u origin feature/awesome`,
  },
};
