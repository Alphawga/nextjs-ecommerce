"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export async function deteleProduct(id:string) {
    
  
    const session = await getServerSession(authOptions);
  
    if (!session) {
      redirect("/api/auth/signin?callbackUrl=/add-product");
    }

  

  await prisma.product.delete({where:{id} });

}