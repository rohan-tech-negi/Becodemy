"use server"

import Email from "@/models/EmailModel"
import { connectDb } from "@/shared/libs/db"

export const getEmails = async ({
  newsLetterOwnerId,
}: {
  newsLetterOwnerId: string;
}) => {
  try {
    await connectDb();
    const emails = await Email.find({ newsLetterOwnerId });
    if (emails) {
      return JSON.parse(JSON.stringify(emails));
    }
  } catch (error) {
    console.log(error);
  }
};