"use server";
import * as AWS from "aws-sdk";
import * as nodemailer from "nodemailer";

interface Props {
  userEmail: string[];
  subject: string;
  content: string;
}

