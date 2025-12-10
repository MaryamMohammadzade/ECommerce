import { useState } from "react";
import AddProductModal from "../modals/add-product-modal"
import AddProductForm from "../forms/add-product-form"

const CreateProductButton = () => {
     const [openModal, setOpenModal] = useState(false);
  return (
    <div className="flex flex-col gap-4">
       <h3 className="text-[1.2rem] font-semibold p-0 m-0">Create New product</h3>

     <button className="w-full cursor-pointer bg-green-500 text-white py-2 px-4 rounded mb-4"
        onClick={() => setOpenModal(true)}>
        Add Product
      </button>

      {openModal &&   
        <AddProductModal onClose={() => setOpenModal(false)}>
          <AddProductForm onSuccess={(newProduct) => {
            console.log("New Product:", newProduct);
            setOpenModal(false); 
          }} />
        </AddProductModal>
      }
    
    </div>
  )
}

export default CreateProductButton