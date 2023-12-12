"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export async function addUser(formData: FormData) {


  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!name || !email || !password ) {
    throw Error("Missing required fields");
  }

  await prisma.user.create({
    data: { name, email, password, isAdmin:false  },
  });;


}
export async function addAdmin(formData: FormData) {



  const name = formData.get("name")?.toString();
  const description = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  

  if (!name || !description || !password ) {
    throw Error("Missing required fields");
  }

  await prisma.user.create({
    data: { name, description, password, isAdmin:true  },
  });


}



export async function handleGoogleSignIn() {
  const result = await signIn('google');
  // Handle Google sign-in result if needed
}


