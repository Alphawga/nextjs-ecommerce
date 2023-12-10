"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { DialogClose } from "@radix-ui/react-dialog";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { IProduct } from "@/models/models";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db/prisma";



async function DeleteProduct(id:string) {
    "use server";
  
    const session = await getServerSession(authOptions);
  
    if (!session) {
      redirect("/api/auth/signin?callbackUrl=/manage-product");
    }
  
    await prisma.product.delete({
     where:{id}
    });
  
   
  }


export const columns: ColumnDef<IProduct>[] = [
  {
    accessorKey: "name",
    header: "Building  Name",
  },
  {
    accessorKey: "createdAt",
    header: "Date Added",
    cell: ({ row }) => {
      return <span>{new Date(row.original.createdAt).toLocaleDateString()}</span>
  }
},
{
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      const client = row.original;

      return (
        <div className="flex flex-col">
          {client.description}
        </div>
      );
    },
  }, 
    {
    accessorKey: "imageUrl",
    header: "Image Url",
  }, 
    {
    accessorKey: "price",
    header: "Price ($)",
  }, 
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const product = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent >
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Dialog>
                <DialogTrigger >  <span className="cursor-pointer text-sm mx-2 hover:font-semibold">Edit </span></DialogTrigger>

                <DialogContent className="w-1/3 sm:w-full">
                  <DialogHeader className="flex text-start mb-5">
                    <DialogTitle className="text-2xl">Edit Building Details</DialogTitle>
                    <DialogClose/>
                  </DialogHeader>
                 <h2>Oya oo</h2>
                </DialogContent>
              </Dialog>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
            <Button variant="destructive" className="w-full" onClick={() => DeleteProduct(product.id)}> Delete</Button>
            </DropdownMenuItem>

          </DropdownMenuContent>
        </DropdownMenu>

      );
    },
  },
];
