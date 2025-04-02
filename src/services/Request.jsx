import axios from 'axios';

const Api = axios.create({
    baseURL: "https://dummyjson.com/products"
})

export const getProducts = async () => {
    try {
        const response = await Api.get();
        if (response.status !== 200) {
            throw new Error("Error fetching products")
        }
        else {
            return response.data;
        }
    }
    catch (error) {
        console.log(error)
    }
}
export const getSingleProducts = async (id) => {
    try {
        const response = await Api.get("/" + id);
        if (response.status !== 200) {
            throw new Error("Error fetching products")
        }
        else {
            return response.data;
        }
    }
    catch (error) {
        console.log(error)
    }
}
