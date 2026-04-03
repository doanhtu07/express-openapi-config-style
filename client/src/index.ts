import { useMemo } from 'react';
import { demoPutUpdateGreeting, useDemoGetGreeting } from './orval/default';

class ExampleStore {
  public convertGreeting = (greeting: string | undefined): string => {
    return greeting || 'Hello, World!';
  };

  public updateGreeting = async (newGreeting: string) => {
    try {
      return await demoPutUpdateGreeting({ newGreeting });
    } catch (error) {
      console.error('Failed to update greeting:', error);
    }
  };
}

const exampleStore = new ExampleStore();

const ExampleComponent = () => {
  const { data, error, isLoading } = useDemoGetGreeting({
    query: {
      enabled: true,
    },
  });

  const greeting = data?.message;
  const convertedGreeting = useMemo(() => exampleStore.convertGreeting(greeting), [greeting]);

  // ...
};
