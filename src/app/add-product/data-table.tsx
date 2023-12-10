"use client"
import { IProduct } from '@/models/models';
import Image from 'next/image';
import EditProduct from "@/components/EditProduct";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';


interface DataTableProps {
  products: IProduct[];
}

function DataTable({ products }: DataTableProps) {
  return (
    <div className=" ">
      <table className="table  border-white border-2">
        <thead>
          <tr className=" text-sm bg-slate-200">
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Image</th>
            <th>Price ($)</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th> Action</th>
          </tr>
        </thead>
        <tbody className="text-xs">
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>
                <Image src={product.imageUrl} alt={product.name} width={50} height={50} />
              </td>
              <td>{product.price}</td>
              <td>{product.createdAt.toString()}</td>
              <td>{product.updatedAt.toString()}</td>
              <td>
              <DropdownMenu.Root>
  <DropdownMenu.Trigger> ....</DropdownMenu.Trigger>
  <DropdownMenu.Portal>
    <DropdownMenu.Content>
      <DropdownMenu.Item><EditProduct  product={product}/></DropdownMenu.Item>
      <DropdownMenu.Separator />
      <DropdownMenu.Item>Delete</DropdownMenu.Item>
      
    </DropdownMenu.Content>
  </DropdownMenu.Portal>
</DropdownMenu.Root>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default DataTable;
