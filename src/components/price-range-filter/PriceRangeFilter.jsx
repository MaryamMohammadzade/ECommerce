import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function PriceRangeFilter() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // مقدار اولیه از URL بگیریم یا مقدار پیشفرض
  const initialMin = searchParams.get("price_min") ? Number(searchParams.get("price_min")) : 1;
  const initialMax = searchParams.get("price_max") ? Number(searchParams.get("price_max")) : 2000;

  const [priceRange, setPriceRange] = useState([initialMin, initialMax]);

  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const applyFilter = () => {
    const title = searchParams.get("title") || "";
    const query = new URLSearchParams();
    if (title) query.set("title", title);
    query.set("price_min", priceRange[0]);
    query.set("price_max", priceRange[1]);
    navigate(`/products?${query.toString()}`);
  };

  return (
    <Box className="mb-6">
      <h3 className="text-[1.2rem] font-semibold  my-4">Price Range</h3>
      <Slider
        value={priceRange}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={1}
        max={2000}
        step={1}
      />
      <Box display="flex" justifyContent="flex-end" mt={1}>
        <Button variant="contained" color="primary" onClick={applyFilter}>
          Apply
        </Button>
      </Box>
    </Box>
  );
}
