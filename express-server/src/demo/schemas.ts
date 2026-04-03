import z from 'zod';
import { IdRepository } from './id-repository.js';

// For remote stuff that will get converted to another schema, no need for id, since we won't really use it on client
export const DemoGetGreetingRemoteResultSchema = z.object({
  greeting: z.string(),
});

export const DemoGetGreetingResultSchema = z
  .object({
    message: z.string(),
  })
  .meta({
    id: IdRepository.schemaIds.getGreetingResult,
  });

export const DemoPutUpdateGreetingBodySchema = z
  .object({
    newGreeting: z.string(),
  })
  .meta({
    id: IdRepository.schemaIds.putGreetingBody,
  });

export const DemoPutUpdateGreetingResultSchema = z
  .object({
    greeting: z.string(),
  })
  .meta({
    id: IdRepository.schemaIds.putGreetingResult,
  });
