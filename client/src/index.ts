import { useMemo } from 'react';
import {
  demoPutUpdateGreeting,
  getDemoGetGreetingQueryKey,
  useDemoGetGreeting,
} from './orval/default';
import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

// MARK: Store

class ExampleStore {
  public convertGreeting = (greeting: string | undefined): string => {
    return greeting || 'Hello, World!';
  };

  public updateGreeting = async (newGreeting: string) => {
    try {
      const result = await demoPutUpdateGreeting({ newGreeting });
      await queryClient.invalidateQueries({ queryKey: getDemoGetGreetingQueryKey() });
    } catch (error) {
      console.error('Failed to update greeting:', error);
    }
  };
}

const exampleStore = new ExampleStore();

// MARK: Component

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
