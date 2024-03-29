import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export const registerSchema = loginSchema.extend({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  surname: z.string().min(2, {
    message: "Surname must be at least 2 characters.",
  }),
});

export const rentSchema = z.object({
  startDate: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  endDate: z.string().min(2, {
    message: "Surname must be at least 2 characters.",
  }),
});
