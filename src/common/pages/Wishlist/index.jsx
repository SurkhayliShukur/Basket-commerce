
import React, { useEffect, useMemo } from "react";
import { FiTrash2 } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { TbBasketCode } from "react-icons/tb";
import { MdShoppingBasket } from "react-icons/md";
import { toast } from "react-toastify";

const WishList = (props) => {
  
  const { searchQuery, setWishList, wishList, basket, sortOption, SortedProducts, setBasket, setQuantity } = props;

  const addToBasket = (productId) => {
    const addProduct = wishList.find((product) => product.id === productId);
    const existProduct = basket.find((product) => product.id === productId);
    if (addProduct) {
      if (existProduct) {
        toast.warning("Product is already exist!", {
          autoClose: 1500,
        });
      } else {
        const updatedBasket = [...basket, { ...addProduct, count: 1 }];
        setBasket(updatedBasket);
        setQuantity((prevCount) => prevCount + 1);
        localStorage.setItem("basketArray", JSON.stringify(updatedBasket));
        toast.success("Product added successfully!", {
          autoClose: 1500,
        });
      }
    } else {
      toast.error("Product not found!", {
        autoClose: 1500,
      });
    }
  };
  const removeFromWishlist = (productId) => {
    const updatedWishList = wishList.filter(
      (product) => product.id !== productId
    );
    setWishList(updatedWishList);
    localStorage.setItem("wishListArray", JSON.stringify(updatedWishList));
    toast.info("Product removed from wishlist.", {
      autoClose: 1500,
    });
  };


  useEffect(() => {
    const savedItem = localStorage.getItem("wishListArray");
    setWishList(savedItem ? JSON.parse(savedItem) : []);
}, []);

  const isExist = (productId) => {
    const existProduct = basket?.find((product) => product.id === productId);
    return existProduct;
  };

  const filteredList = wishList?.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const sortedProduct = useMemo(
    () => SortedProducts(filteredList),
    [filteredList, sortOption]
  );

  return (
    <div className="h-screen">
      {sortedProduct?.length > 0 ? (
        <div className="py-5  px-5 md:px-12 grid gap-x-16 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {sortedProduct?.map((product, index) => (
            <div className="bg-gray-800 text-gray-200 rounded-xl" key={index}>
              <img
                className="w-full mb-2 h-60 object-cover"
                src={product.images[0]}
                alt={product.title}
              />
              <div className="px-4">
                <h2 className="text-green-300 truncate">
                  {product.title}
                </h2>
                <p className="my-3 text-gray-400 truncate">
                  {product.description}
                </p>
                <p className="text-indigo-300">Category: {product.category}</p>
              </div>

              <div className="flex items-center justify-between p-4">
                <div>
                  <p className="mb-3 text-cyan-300">${product.price}</p>
                  <p className="text-indigo-300">Rating: {product.rating}</p>
                </div>

                <div className="flex items-center">
                  <div className="mr-3">
                    <button
                      onClick={() => addToBasket(product.id)}
                      className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-700 transition-all duration-500"
                    >
                      {isExist(product.id) ? (
                        <TbBasketCode className="text-2xl" />
                      ) : (
                        <MdShoppingBasket className="text-2xl" />
                      )}
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="bg-gray-300 rounded-lg py-2 px-2 md:px-3 hover:bg-gray-400 transition-all duration-500"
                  >
                    <FiTrash2 className="text-3xl text-red-700" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <h1 className="text-orange-300 text-[400px] mt-12">
            <GoHeart />
          </h1>
        </div>
      )}
    </div>
  );
};

export default WishList;
