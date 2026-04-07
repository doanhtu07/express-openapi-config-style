import { defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
  input: './scripts/openapi.json',
  output: {
    postProcess: ['prettier'],
    path: './src/heyapi',
  },
  plugins: [
    '@tanstack/react-query',
    {
      name: '@hey-api/client-axios',
      runtimeConfigPath: '../api/heyapi-client.ts', // MUST be relative to output.path
    },
  ],
})
