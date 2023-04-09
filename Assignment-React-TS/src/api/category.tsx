
import instance from "./instance";
interface IProduct {
    id: number,
    name: string,

}
const getAllCategories = () => {
    return instance.get('/categories')
}

const getOneCategory = (id: number) => {
    return instance.get('/categories/' + id)
}
const removeCategory = (id: number) => {
    return instance.delete("/categories/" + id)
}

const addCategory = (product: IProduct) => {
    return instance.post('/categories', product)
}
const updateCategory = (product: IProduct) => {
    return instance.patch("/categories/" + product.id, product)
}

export { getAllCategories, getOneCategory, removeCategory, addCategory, updateCategory }