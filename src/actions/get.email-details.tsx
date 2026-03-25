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
    return email;
  } catch (error) {
    console.log(error);
  }
};