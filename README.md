# ts-starter

A simple typescript starting for just doing typescript things.

To get started, install your dependencies, then edit `main.ts`!

```sh
yarn install
```

To run your `main.ts` you can invoke it with

```sh
yarn start
```

## Debugging

I've included a vscode debugging launch config that should Just Work.

## Guardrails

I've included default configurations for the following tools that should play nice together:

- ESLint
- Typescipt
- Prettier

They probably need fine tuning for serious work, but they should cause alerts for common errors.

Some extra packages that are also available are:

- Dotenv
  - Read environment from a convenient `.env` file
- [Zod](https://zod.dev/)
  - An object parse that this repo uses .01% of to help safely coerce some types when reading environment variables.

## Versions

A note about versions, this repo contains some packages specific to node version v16.14.0. I'd recommend using a node version manager like [fnm](https://github.com/Schniz/fnm) or even a more general purpose version manager like [asdf](https://asdf-vm.com/) to install specific versions, and then configure your shell to automatically pick up the right version.
