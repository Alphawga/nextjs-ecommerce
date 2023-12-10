import { IProduct } from "@/models/models"
import FormSubmitButton from "./FormSubmitButton"
import { updateProduct } from "./UpdateProduct";
import * as Dialog from '@radix-ui/react-dialog';





interface EditProductProps{
    product: IProduct
}

export default function EditProduct({product}: EditProductProps) {


    
  return (
    <div>

<Dialog.Root >
      <Dialog.Trigger>Edit</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
        <h3 className="font-bold text-lg ">Edit</h3>
    <form action={updateProduct}>
        <input
          required
          name="id"
          placeholder="id"
          className="input-bordered input mb-3 w-full"
          value={product?.id}
          readOnly
        />
        <input
          required
          name="name"
          placeholder="Name"
          className="input-bordered input mb-3 w-full"
          defaultValue={product?.name}
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="textarea-bordered textarea mb-3 w-full"
          defaultValue={product?.description}
        />
        <input
          required
          name="imageUrl"
          placeholder="Image URL"
          type="url"
          className="input-bordered input mb-3 w-full"
          defaultValue={product?.imageUrl}
        />
        <input
          required
          name="price"
          placeholder="Price"
          type="number"
          className="input-bordered input mb-3 w-full"
          defaultValue={product?.price}
        />
        <FormSubmitButton className="btn-block">Update </FormSubmitButton>
      </form>
   
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>

        
    
</div>

  )
}
