let { z } = require('zod');

// create validation in register
let signupSchema = z.object({
   username: z
      .string({ required_error: "name is require" })
      .trim()
      .min(3, { message: "name must be at least 3 characters" })
      .max(222, { message: "name must not be more than 222 characters" }),
   email: z
      .string({ required_error: "Email is require" })
      .trim()
      .email({ message: "Invalid email address" })
      .min(3, { message: "name must be at least 3 characters" })
      .max(222, { message: "name must not be more than 222 characters" }),
   phone: z
      .string({ required_error: "Phone is require" })
      .trim()
      .min(10, { message: "name must be at least 10 characters" })
      .max(24, { message: "name must not be more than 20 characters" }),
   password: z
      .string({ required_error: "password is require" })
      .trim()
      .min(3, { message: "name must be at least 3 characters" })
      .max(222, { message: "name must not be more than 222 characters" }),
});

module.exports = signupSchema;
