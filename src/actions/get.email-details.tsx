"use server"

import Email from "@/models/EmailModel";
import { connectDb } from "@/shared/libs/db";





export const GetEmailDetails = async ({
  title,
  newsLetterOwnerId,
}: {
  title: string;
  newsLetterOwnerId: string;
}) => {
  try {
    await connectDb();
    const email = await Email.findOne({
      title,
      newsLetterOwnerId,
    });
    if (email) {
      return JSON.parse(JSON.stringify(email));
    }
  } catch (error) {
    console.log(error);
  }
};