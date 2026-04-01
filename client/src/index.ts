import { getGetTestRemoteGreetingQueryKey } from './orval/default';

console.log('[client] Test orval', {
  getTestRemoteGreeting: getGetTestRemoteGreetingQueryKey(),
});
