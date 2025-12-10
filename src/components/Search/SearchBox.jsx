import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";

export default function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // 500ms delay
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

 useEffect(() => {
    const query = new URLSearchParams();
    if (debouncedSearchTerm) query.set("title", debouncedSearchTerm);
    navigate(`/products?${query.toString()}`);
  }, [debouncedSearchTerm, navigate]);

  return (
    <div className="flex flex-col gap-3">
    <h3 className="text-[1.2rem] font-semibold p-0 m-0">Filters</h3>  
      <input
        type="text"
        placeholder="Search Product..."
        value={searchTerm}
        onChange={handleChange}
        className="border rounded p-2 w-full mb-4"
      />
    </div>
  );
}
