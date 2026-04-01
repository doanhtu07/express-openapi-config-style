import z from 'zod';

export const GreetingRemoteResultSchema = z
  .object({
    greeting: z.string(),
  })
  .meta({ id: 'GreetingRemoteResult' });

export const GreetingResultSchema = z
  .object({
    message: z.string(),
  })
  .meta({ id: 'GreetingResult' });
