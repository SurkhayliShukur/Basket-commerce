import { useState, useEffect } from "react";
import { getProducts } from "../../services/Request";

const useGetProducts = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await getProducts();
            setData(response.products);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return { data, fetchProducts, loading };
}

export default useGetProducts;