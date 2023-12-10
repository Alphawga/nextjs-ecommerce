"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export async function updateProduct(formData: FormData) {
    
  
    const session = await getServerSession(authOptions);
  
    if (!session) {
      redirect("/api/auth/signin?callbackUrl=/add-product");
    }
  
    const id = formData.get("id")?.toString();
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const imageUrl = formData.get("imageUrl")?.toString();
    const price = Number(formData.get("price") || 0);
  

    await prisma.product.update({where:{id},
      data: { name, description, imageUrl, price },
    });
}