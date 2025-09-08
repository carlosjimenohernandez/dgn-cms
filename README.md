# dgn-cms

DGN Content Management System.

## Links

- Online app at:
   - [https://carlosjimenohernandez.github.io/dgn-cms/src/app/docs/](https://carlosjimenohernandez.github.io/dgn-cms/src/app/docs/)
- Server app documentation at:
   - [https://github.com/carlosjimenohernandez/restomatic](https://github.com/carlosjimenohernandez/restomatic)
- Client app documentation at:
   - [https://github.com/carlosjimenohernandez/lsw-one](https://github.com/carlosjimenohernandez/lsw-one)

## What is this?

DGN stands for DGN and nothing else. A good prefix for the components.

It is based on:

  - The server: [`@carlosjimenohernandez/restomatic`](https://github.com/carlosjimenohernandez/restomatic)
  - The client: [`@carlosjimenohernandez/lsw-one`](https://github.com/carlosjimenohernandez/lsw-one)

## Installation

```sh
npm i -g @carlosjimenohernandez/dgn-cms
npx dgn init .
```

## Development

As this is the mix of 2 source codes, you have server-side development and client-side development.

### Server-side development

```sh
npm run dev
```

### Client-side development

```sh
cd src/app
npm run code
```