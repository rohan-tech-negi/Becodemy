"use server";

import Subscriber from "@/models/subscriber.model";
// import Subscriber from "@/models/subscriber.model";
import { connectDb } from "@/shared/libs/db";

export const getSubscribers = async ({
  newsLetterOwnerId,
}: {
  newsLetterOwnerId: string;
}) => {
  try {
    await connectDb();

    const subscribers = await Subscriber.find({
      newsLetterOwnerId,
    });
    return JSON.parse(JSON.stringify(subscribers));
  } catch (error) {
    console.log(error);
    return { error: "An error occurred while fetching subscribers." };
  }
};