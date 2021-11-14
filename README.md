# Licensephobia - Don't be afraid of software licenses anymore!

[Licensephobia](https://licensephobia.com) is a tool that let's you easily search for NPM (and soon pip) packages to view the licenses. You can also upload your package files and see what restrictions apply to your project.

Licensephobia is still in an alpha phase!

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.


## About Licensephobia

The Frontend is built with [SvelteKit](https://github.com/sveltejs/kit).
