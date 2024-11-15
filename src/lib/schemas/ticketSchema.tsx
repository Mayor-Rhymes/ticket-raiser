import { z } from "zod";

export const createTicketSchema = z.object({
  title: z.string().min(10, "Please enter at least 10 characters"),
  description: z.string().min(10, "Please enter at least 10 characters"),
  status: z.enum(["open", "closed", "pending"]).default("open"),
});

export const createUserSchema = z.object({
  email: z.string().email(),
  username: z.string().min(5, "Please enter at least 5 characters"),
  password: z.string().min(5, "Please enter at least 5 character"),
  department: z
    .enum([
      "MD",
      "Human Resources",
      "Information Technology",
      "MICE, Leisure and Protocol",
      "QHSE",
      "Reservation and Ticketing (B2C)",
      "SEO",
      "SMM",
      "Ticket and Reservation",
      "Visa Immigration",
      "Accounts",
      "Admin",
      "Affiliates (B2B)",
      "Business Development",
      "Graphics Design",
      "Holidays",
    ])
    .default("Accounts"),
});

export const loginUserSchema = z.object({
    username: z.string().optional(),
    email: z.string().email().optional(),
    password: z.string()
})

export const ticketSchema = z.object({
  id: z.string(),
  authorId: z.string(),
  title: z.string().min(10, "Please enter at least 10 characters"),
  description: z.string().min(10, "Please enter at least 10 characters"),
  status: z.enum(["open", "closed", "pending"]).default("open"),
  created_at: z.date(),
  updated_at: z.date(),
});

export const statusArr = ["open", "closed", "pending"];
export const departmentArr = [
  "MD",
  "Human Resources",
  "Information Technology",
  "MICE, Leisure and Protocol",
  "QHSE",
  "Reservation and Ticketing (B2C)",
  "SEO",
  "SMM",
  "Ticket and Reservation",
  "Visa Immigration",
  "Accounts",
  "Admin",
  "Affiliates (B2B)",
  "Business Development",
  "Graphics Design",
  "Holidays",
];
