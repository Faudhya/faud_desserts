import axios from "axios";

export const getList = async () => {
    try {
        let data = await axios.get("http:localhost:2000/products");
        return data;
    } catch (error) {}
};
