import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { IProduct } from '@/models/models';
import Image from 'next/image';


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
              <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1"><DotsHorizontalIcon className="h-4 w-4" /></div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a><label htmlFor="my_modal_6" className="btn text-right">Add Building</label>
              <input type="checkbox" id="my_modal_6" className="modal-toggle" />
              </a></li>
              
              <li><a>delete</a></li>
            </ul>
          </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default DataTable;
