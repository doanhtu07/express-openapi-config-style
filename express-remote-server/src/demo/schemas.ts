import z from 'zod';

export const GreetingResultSchema = z
  .object({
    greeting: z.string(),
  })
  .meta({ id: 'GreetingResult' });
