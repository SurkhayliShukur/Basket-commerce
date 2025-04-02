import { useEffect } from 'react';
import { Home, Products, NotFound, Basket, Wishlist,Detail } from './common/pages';
import { Routes, Route } from 'react-router-dom';
import Navbar from './common/components/Navbar';
import { ROUTER } from './constant/router';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useGetProducts from './common/hooks/GetProducts';
import useAppState from './common/hooks/AppState';

function App() {

  const { data, loading, fetchProducts } = useGetProducts();
  const {
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
  } = useAppState();



  const SortedProducts = (arr) => {
    let sortedProducts = [...arr];
    if (sortOption === "a-z") {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "z-a") {
      sortedProducts.sort((b, a) => b.title.localeCompare(a.title));
    } else if (sortOption === "low-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    return sortedProducts;
  };

  const updateProductCount = () => {
    const total = basket.reduce((total, product) => total + product.count, 0);
    const roundedTotal = Math.round(total);
    setQuantity(roundedTotal);
  };

  useEffect(() => {
    const savedBasketString = localStorage.getItem("basketArray");
    const savedWishListString = localStorage.getItem("wishListArray");

    if (savedBasketString) {
      const savedBasket = JSON.parse(savedBasketString);
      setBasket(savedBasket);
      setQuantity(savedBasket.length);
    }
    if (savedWishListString) {
      const savedWishList = JSON.parse(savedWishListString);
      setWishList(savedWishList);
    }
  }, [setBasket, setWishList]);

  useEffect(() => {
    updateProductCount();
    localStorage.setItem("basketArray", JSON.stringify(basket));
  }, [basket]);


  return (
    <>
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortOption={sortOption}
        setSortOption={setSortOption}
        quantity={quantity}
        wishList={wishList}
      />
      <Routes>
        <Route path={ROUTER.Home} element={<Home />} />
        <Route
          path={ROUTER.Products} element={<Products
            data={data}
            loading={loading}
            searchQuery={searchQuery}
            fetchProducts={fetchProducts}
            SortedProducts={SortedProducts}
            sortOption={sortOption}
            basket={basket}
            setBasket={setBasket}
            setQuantity={setQuantity}
            wishList={wishList}
            setWishList={setWishList}

          />} />
        <Route path={ROUTER.Basket} element={<Basket
          basket={basket}
          setBasket={setBasket}
          searchQuery={searchQuery}
          setQuantity={setQuantity}
          SortedProducts={SortedProducts}
          sortOption={sortOption}
        />} />
        <Route path={ROUTER.Wishlist} element={<Wishlist
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          wishList={wishList}
          setWishList={setWishList}
          basket={basket}
          sortOption={sortOption}
          SortedProducts={SortedProducts}
          setBasket={setBasket}
          setQuantity={setQuantity}
        />} />
        <Route path={ROUTER.Detail + "/:id"} element = {<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
