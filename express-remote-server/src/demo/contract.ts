export const DemoContract = {
  operationIds: {
    getGreeting: 'DemoGetGreeting',
    putGreeting: 'DemoPutGreeting',
  },
  schemaIds: {
    getGreetingResult: 'DemoGetGreetingResultSchema',
    putGreetingBody: 'DemoPutGreetingBodySchema',
    putGreetingResult: 'DemoPutGreetingResultSchema',
  },
} as const;
