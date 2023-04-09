
// import { IProduct } from "../interfaces/product";
// import instance from "./instance";
// const { accessToken } = JSON.parse(localStorage.getItem('user')!);
// export const getProducts = () => {
//     return instance.get("/products")
// }

// export const removeProduct = (id: string | number) => {
//     console.log('Token', accessToken)
//     return instance.delete("/products/" + id, {
//         headers: {
//             Authorization: `Bearer ${accessToken}`
//         }
//     })
// }
// export const addProduct = (product: IProduct) => {
//     return instance.post('/products', product, {
//         headers: {
//             Authorization: `Bearer ${accessToken}`
//         }
//     })
// }

// export const updateProduct = (product: IProduct) => {
//     return instance.patch(`/products/${product._id}`, product, {
//         headers: {
//             Authorization: `Bearer ${accessToken}`
//         }
//     })
// }
import instance from "./instance";
interface IProduct {
    id: number,
    name: string,
    price: number
}
const getAllProducts = () => {
    return instance.get('/products')
}

const getOneProduct = (id: number) => {
    return instance.get('/products/' + id)
}
const removeProduct = (id: number) => {
    return instance.delete("/products/" + id)
}

const addProduct = (product: IProduct) => {
    return instance.post('/products', product)
}
const updateProduct = (product: IProduct) => {
    return instance.patch("/products/" + product.id, product)
}

export { getAllProducts, getOneProduct, addProduct, removeProduct, updateProduct }