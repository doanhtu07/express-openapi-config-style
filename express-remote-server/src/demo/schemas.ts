import z from 'zod';
import { DemoContract } from './contract.js';

export const GetGreetingResultSchema = z
  .object({
    greeting: z.string(),
  })
  .meta({ id: DemoContract.schemaIds.getGreetingResult });

export const PutGreetingBodySchema = z
  .object({
    newGreeting: z.string(),
  })
  .meta({ id: DemoContract.schemaIds.putGreetingBody });

export const PutGreetingResultSchema = z
  .object({
    greeting: z.string(),
  })
  .meta({ id: DemoContract.schemaIds.putGreetingResult });
