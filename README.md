# auth-react-spa
A minimal React app using Vite with npm (no TypeScript or Redux unless you want to add it later).

```text
 a minimal React app using Vite with npm (no TypeScript or Redux unless you want to add it later). This is the fastest 
 and cleanest modern dev setup — perfect for prototyping or starting a real-world frontend project.
```

✅ Step-by-Step: Set Up a React + Vite Project with NPM

1️⃣ Install Node.js (if not yet installed)

👉 Go to https://nodejs.org and install the LTS version (recommended).

You should now have:

```shell
node -v
npm -v
```

2️⃣ Create a New Vite + React App
```shell
npm create vite@latest
Then answer the prompts:

Project name: my-react-app

Framework: React

Variant: JavaScript
```
3️⃣ Go into the project folder and install dependencies
```shell
cd my-react-app
npm install
```
This will install all dependencies defined in package.json using NPM.

4️⃣ Start the Dev Server
```shell
npm run dev
```
You’ll see something like:
```shell
arduino


VITE v4.x  ready in 300ms
```
➜  Local:   http://localhost:5173/
Open that URL in your browser 🎉

5️⃣ Project Structure Overview

my-react-app/

├── public/

│   └── favicon.svg

├── src/

│   ├── App.jsx         ← main component

│   ├── index.css       ← global styles

│   └── main.jsx        ← entry point

├── index.html          ← main HTML file

├── package.json

├── vite.config.js      ← Vite config

6️⃣ Modify App.jsx
Open src/App.jsx and start hacking 😎
```js
function App() {
return (
<div style={{ padding: 40 }}>
<h1>Hello, React + Vite!</h1>
<button onClick={() => alert("Let's build something cool!")}>
Click Me
</button>
</div>
);
}

export default App;
```

7️⃣ Optional: Add ESLint + Prettier (Clean Code Setup)

```shell
npm install --save-dev eslint prettier eslint-plugin-react
npx eslint --init
```
Choose: React / JavaScript modules / Browser

Style guide: Airbnb or your preference

(You can skip this if you want a minimal setup.)

🧰 Bonus: Useful Dev Tools to Consider Later

Tool | Use

react-router-dom | Routing between pages

axios | API requests

zustand or redux | State management (if needed)

tailwindcss | Utility-first styling

dotenv | Use .env files for env variables

✅ Summary
To recap, here are the commands you need from scratch:

```shell
npm create vite@latest
cd my-react-app
npm install
npm run dev
```


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
