
import { IProduct } from "../interfaces/product";
import instance from "./instance";
const { accessToken } = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : ""
export const getAllProducts = () => {
    return instance.get("/products")
}

export const removeProduct = async (_id: string | number) => {
    console.log('Token', accessToken)
    console.log("id", _id)
    return await instance.delete("/products/" + _id, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}
export const addProduct = async (product: IProduct) => {
    console.log('Token', accessToken)
    return await instance.post('/products', product, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}

export const updateProduct = async (product: IProduct) => {

    return await instance.patch(`/products/${product._id}`, product, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}
// import instance from "./instance";
// interface IProduct {
//     _id: number | string,
//     name: string,
//     price: number
// }
// const getAllProducts = () => {
//     return instance.get('/products')
// }

// const getOneProduct = (id: number) => {
//     return instance.get('/products/' + id)
// }
// const removeProduct = (_id: number | string) => {
//     return instance.delete("/products/" + _id)
// }

// const addProduct = (product: IProduct) => {
//     return instance.post('/products', product)
// }
// const updateProduct = (product: IProduct) => {
//     return instance.patch("/products/" + product._id, product)
// }

// export { getAllProducts, getOneProduct, addProduct, removeProduct, updateProduct }