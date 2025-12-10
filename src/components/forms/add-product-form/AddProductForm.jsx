import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import addProduct from "../../../utils/apis/products/addProduct";

const addProductSchema = z.object({
  title: z.string().min(1, "Title is required"),
  price: z.number().min(0, "Price must be >= 0"),
  description: z.string().min(1, "Description is required"),
  categoryId: z.number().min(1, "CategoryId is required"),
  images: z.array(z.string().url("Enter a valid URL")).min(1, "At least 1 image URL required"),
});

export default function AddProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(addProductSchema) });

  const handleAddProduct = async (data) => {
    try {
      const result = await addProduct(data);
      console.log(data);
      if (result?.status === 201 || result?.status === 200) {
        toast.success("Product added successfully!");

      } else {
        toast.error("Could not add product");
      }

    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleAddProduct)}
      className="flex flex-col gap-4"
    >
      <input
        {...register("title")}
        placeholder="Product Title"
        className="border p-2 rounded"
      />
      {errors.title && <p className="text-red-600">{errors.title.message}</p>}

      <input
        {...register("price", { valueAsNumber: true })}
        type="number"
        placeholder="Price"
        className="border p-2 rounded"
      />
      {errors.price && <p className="text-red-600">{errors.price.message}</p>}

      <textarea
        {...register("description")}
        placeholder="Description"
        className="border p-2 rounded"
      />
      {errors.description && <p className="text-red-600">{errors.description.message}</p>}

      <input
        {...register("categoryId", { valueAsNumber: true })}
        type="number"
        placeholder="Category ID"
        className="border p-2 rounded"
      />
      {errors.categoryId && <p className="text-red-600">{errors.categoryId.message}</p>}

      <input
        {...register("images", {
          setValueAs: (v) => v.split(",").map((url) => url.trim()),
        })}
        placeholder="Images (comma separated URLs)"
        className="border p-2 rounded"
      />
      {errors.images && <p className="text-red-600">{errors.images.message}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-green-500 text-white py-2 rounded"
      >
        {isSubmitting ? "Adding..." : "Add Product"}
      </button>
    </form>
  );
}
