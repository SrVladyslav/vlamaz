import { z } from 'zod'

export const contactSchema = z.object({
    name: z.string().min(3),
    email: z.email().min(1),
    service_type: z.string(),
    project_type: z.string().optional(),
    mentoring_type: z.string().optional(),
    description: z.string().max(500, { message: "Max 500 Ch." }).optional(),
    budget: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactSchema>
