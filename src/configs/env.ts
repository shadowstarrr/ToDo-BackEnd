import { z } from 'zod';

export const envSchema = z.object({
    PORT: z.number({ coerce: true }).optional()
});

type EnvSchema = z.infer<typeof envSchema>;

declare global {
    namespace NodeJS {
        interface ProcessEnv extends EnvSchema {}
    }
}