import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient("mongodb+srv://qurbanihaat:4C4osEAyUOQuKt6n@cluster0.13q78mq.mongodb.net/?appName=Cluster0");
const db = client.db("qurbanihaat");

export const auth = betterAuth({
    database: mongodbAdapter(db, {    
    client
  }),
  emailAndPassword: { 
    enabled: true, 
  },
});