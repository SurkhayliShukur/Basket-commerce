import { useState } from "react";

const useAppState = () => {
  const [basket, setBasket] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [sortOption, setSortOption] = useState("");

  return {
    basket,
    setBasket,
    wishList,
    setWishList,
    searchQuery,
    setSearchQuery,
    quantity,
    setQuantity,
    sortOption,
    setSortOption,
  };
};

export default useAppState;