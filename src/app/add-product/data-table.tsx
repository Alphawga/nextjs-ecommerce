"use client"
import { IProduct } from '@/models/models';
import Image from 'next/image';
import EditProduct from "@/components/EditProduct";
import { deteleProduct } from '@/components/DeleteProduct';


interface DataTableProps {
  products: IProduct[];
}

function DataTable({ products }: DataTableProps) {
  return (
    <div className=" ">
      <table className="table  border-white border-2">
        <thead>
          <tr className=" text-sm bg-slate-200 m-1">
            <th className='m-1'>ID</th>
            <th className='m-1'>Name</th>
            <th className='m-1'>Description</th>
            <th className='m-1'>Image</th>
            <th className='m-1'>Price ($)</th>
            <th className='m-1'>Created At</th>
            <th className='m-1'>Updated At</th>
            <th className='m-1'> Edit</th>
            <th className='m-1'> Delete</th>
          </tr>
        </thead>
        <tbody className="text-xs">
          {products.map((product) => (
            <tr key={product.id} >
              <td className='m-1'>{product.id}</td>
              <td className='m-1'>{product.name}</td>
              <td className='m-1'>{product.description}</td>
              <td className='m-1'>
                <Image src={product.imageUrl} alt={product.name} width={50} height={50} />
              </td>
              <td className='m-1'>{product.price}</td>
              <td className='m-1'>{product.createdAt.toString()}</td>
              <td className='m-1'>{product.updatedAt.toString()}</td>
              <td className='m-1'> <EditProduct  product={product}/> </td>
              <td className='m-1'> <button className="btn btn-sm sm:btn-sm md:btn-sm lg:btn-sm my-2" onClick={() => deteleProduct(product.id)}>Delete</button> </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default DataTable;
