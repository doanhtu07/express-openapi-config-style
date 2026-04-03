export const DemoLocalEndpoints = {
  getGreeting: '/demo/v1/get-greeting',
  updateGreeting: '/demo/v1/update-greeting',
} as const;

export const DemoRemoteEndpoints = {
  greeting: '/greeting',
} as const;
