export const IdRepository = {
  operationIds: {
    getGreeting: 'DemoGetGreeting',
    updateGreeting: 'DemoPutUpdateGreeting',
  },
  schemaIds: {
    getGreetingResult: 'DemoGetGreetingResultSchema',
    putGreetingBody: 'DemoPutUpdateGreetingBodySchema',
    putGreetingResult: 'DemoPutUpdateGreetingResultSchema',
  },
} as const;
