# Telegram Bot + Telegram WebApp using Next.js + Tailwind CSS + TypeScript Starter and Boilerplate

<div align="center">
  <h2>🔋 teletubby</h2>
  <p>Telegram Bot with Next.js + Tailwind CSS + TypeScript starter packed with useful development features. Based on theodorusclarence/ts-nextjs-tailwind-starter </p>
  <p>Made by <a href="https://github.com/rogeliorv">@rogeliorv</a></p>
</div>

## Features

This repository is 🔋 battery packed with:

- ⚡️ Next.js 14
- ⚛️ React 18
- ✨ TypeScript
- 💨 Tailwind CSS 3 — Configured with CSS Variables to extend the **primary** color
- 💎 Pre-built Components — Components that will **automatically adapt** with your brand color
- 🃏 Jest — Configured for unit testing
- 📈 Absolute Import and Path Alias — Import components using `@/` prefix
- 📏 ESLint — Find and fix problems in your code, also will **auto sort** your imports
- 💖 Prettier — Format your code consistently
- 🐶 Husky & Lint Staged — Run scripts on your staged files before they are committed
- 🤖 Conventional Commit Lint — Make sure you & your teammates follow conventional commit
- ⏰ Release Please — Generate your changelog by activating the `release-please` workflow
- 👷 Github Actions — Lint your code on PR
- 🚘 Automatic Branch and Issue Autolink — Branch will be automatically created on issue **assign**, and auto linked on PR
- 🔥 Snippets — A collection of useful snippets
- 👀 Default Open Graph — Awesome open graph generated using [og](https://github.com/theodorusclarence/og), fork it and deploy!
- 🗺 Site Map — Automatically generate sitemap.xml
- 📦 Expansion Pack — Easily install common libraries, additional components, and configs

## Getting Started

### 1. Clone this template using one of the three ways:

1. Use this repository as template

   **Disclosure:** by using this repository as a template, there will be an attribution on your repository.

   I'll appreciate if you do, so this template can be known by others too 😄

   ![Use as template](https://user-images.githubusercontent.com/55318172/129183039-1a61e68d-dd90-4548-9489-7b3ccbb35810.png)

2. Using `create-next-app`

   ```bash
   npx create-next-app -e https://github.com/rogeliorv/teletubby project-name
   ```

3. Using `degit`

   ```bash
   npx degit rogeliorv/teletubby YOUR_APP_NAME
   ```

4. Deploy to Vercel

   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A//github.com/rogeliorv/teletubby)

### 2. Install dependencies

It is encouraged to use **yarn** so the husky hooks can work properly.

```bash
yarn install
```

### 3. Run the development server

You can start the server using this command:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/pages/index.tsx`.

### 4. Commit Message Convention

This starter is using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), it is mandatory to use it to commit changes. (Every commit message should sart with fix: chore: feat: etc)

### 5. How to use the telegram bot

- Create a new bot using the [BotFather](https://telegram.me/BotFather)
- Add your bot token as an env var in .env file to TELEGRAM_BOT_TOKEN
- Get a publicly visible URL, you can use ngrok or deploy to vercel - Once you have a public URL like: https://some.ngrok-free.app or https://teletubbybot.vercel.app add it to your NEXT_PUBLIC_APP_URL in your .env vars
- Register your webhook to telegram using (https://api.telegram.org/bot<YOUR_TOKEN>/setWebhook?url=<YOUR_URL>/api/telegramWebhook) (NOTE: Be mindful that "bot" word is prefixed to your token)
- Go to your bot and send it a message
- Click the launch button if you want to see your launched webapp within telegram
