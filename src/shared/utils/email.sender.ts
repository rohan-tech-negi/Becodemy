"use server";
import * as AWS from "aws-sdk";
import * as nodemailer from "nodemailer";

interface Props {
  userEmail: string[];
  subject: string;
  content: string;
}

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: "ap-south-1"
})

AWS.config.getCredentials(function(error){
  if(error){
    console.log(error.stack)
  }
})

const ses = new AWS.SES({
  apiVersion:"2010-12-01"
})


}