import { useForm } from "react-hook-form";
import updateProductApi from "../../../utils/apis/products/updateProductApi";
import { toast } from "react-toastify";

export default function UpdateProductForm({ product, onSuccess }) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      title: product.title,
      price: product.price,
      description: product.description,
    }
  });

  const handleUpdate = async (data) => {
    try {
      const result = await updateProductApi(product.id, data);
      if (result?.status === 200) {
        toast.success("Product updated successfully!");
        if (onSuccess) onSuccess(result.data);
      } else {
        toast.error("Could not update product");
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit(handleUpdate)} className="flex flex-col gap-4">
      <input {...register("title")} placeholder="Product Title" className="border p-2 rounded" />
      <input {...register("price", { valueAsNumber: true })} type="number" placeholder="Price" className="border p-2 rounded" />
      <textarea {...register("description")} placeholder="Description" className="border p-2 rounded" />
      <button type="submit" disabled={isSubmitting} className="bg-blue-500 text-white py-2 rounded">
        {isSubmitting ? "Updating..." : "Update Product"}
      </button>
    </form>
  );
}
