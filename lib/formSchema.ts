import { z } from "zod"

const formSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(15, {
      message: "Username must be at most 15 characters.",
    }),
})

export default formSchema
