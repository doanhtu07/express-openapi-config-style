# Express + OpenAPI Demo

This is a demo project showcasing how to use Express + Zod + OpenAPI

It sets up a way to define API routes declaratively

We have two servers to demonstrate how this approach could be use to write either a proxy endpoint or a local endpoint

## Step 1. Build route-toolkit

```bash
cd route-toolkit
pnpm install
pnpm dev
```

## Step 2. Build demo server (http://localhost:3000)

```bash
cd express-server
pnpm install
pnpm copy-env
pnpm dev
```

## Step 3. Build remote demo server (http://localhost:4000)

```bash
cd express-remote-server
pnpm install
pnpm copy-env
pnpm dev
```

## Step 4. Test the endpoints

- http://localhost:3000/test-remote
- http://localhost:4000/greeting

## Step 5. Create OpenAPI spec

```bash
cd express-server
pnpm openapi
```

This will generate an OpenAPI spec file at `express-server/openapi.json`

## Step 6. Generate client code from OpenAPI spec

Copy the generated `openapi.json` to the `client` directory (put into `scripts`), then run:

```bash
cd client
pnpm install
pnpm copy-env
pnpm orval
```

It will generate client code at `src/orval/` directory

It generates things like:

- Types: `interface GreetingResult`
- Fetch functions: `getTestRemoteGreeting`
- React query hooks: `useGetTestRemoteGreeting`
