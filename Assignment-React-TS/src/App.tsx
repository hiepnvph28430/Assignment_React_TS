import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { addProduct, getAllProducts, removeProduct, updateProduct } from './api/product'
import reactLogo from './assets/react.svg'
import AdminLayoutPage from './pages/Layout/AdminLayout'
import AddProduct from './pages/admin/product/AddProduct'
import Dashboard from './pages/admin/Dashboard'
import ProductManagementPage from './pages/admin/product/ProductManagement'
import UpdateProduct from './pages/admin/product/UpdateProduct'
import HomePage from './pages/HomePage'
import ProductDetailPage from './pages/ProductDetail'
import Products from './pages/Products'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import { IProduct } from './interfaces/product'
import viteLogo from '/vite.svg'
import RootLayout from './pages/Layout/RootLayout'
import "./App.css"
import CategoryManagementPage from './pages/admin/category/CategoryManagementPage'
import AddCategoryPage from './pages/admin/category/AddCategory'
import { ICategory } from './interfaces/category'
import { addCategory, getAllCategories, removeCategory, updateCategory } from './api/category'
import UpdateCategory from './pages/admin/category/UpdateCategory'
import { IUser } from './interfaces/user'
import { addUser, getAllUsers, removeUser, updateUser } from './api/auth'
import AddUserPage from './pages/admin/user/AddUser'
import UserManagementPage from './pages/admin/user/UserManagement'
import UpdateUserPage from './pages/admin/user/UpdateUser'

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    getAllProducts().then(({ data }) => setProducts(data.docs))
  }, [])
  const onHandleRemove = async (_id: number | string) => {
    const confirm = window.confirm("Ban co muon xoa khong ?")
    if (confirm) {
      console.log("sfsds")
      await removeProduct(_id);
      console.log("aaaaaa")

    }
  }
  const onHandleAdd = (product: IProduct) => {
    console.log('add', product)
    addProduct(product).then(() => getAllProducts().then(({ data }) => setProducts(data)))
  }
  const onHandleUpdate = (product: IProduct) => {
    console.log("update", product)
    updateProduct(product).then(() => getAllProducts().then(({ data }) => setProducts(data)))
  }
  // Category
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    getAllCategories().then(({ data }) => setCategories(data.docs))
  }, [])
  const onHandleRemoveCate = (id: number) => {
    const confirm = window.confirm("Ban co muon xoa khong ?")
    if (confirm) {
      removeCategory(id).then(() => setCategories(categories.filter(category => category.id !== id)))
    }
  }
  const onHandleAddCate = (category: ICategory) => {
    addCategory(category).then(() => getAllCategories().then(({ data }) => setCategories(data)))
  }
  const onHandleUpdateCate = (category: ICategory) => {
    updateCategory(category).then(() => getAllCategories().then(({ data }) => setCategories(data)))
  }
  // User

  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    getAllUsers().then(({ data }) => setUsers(data.docs))
  }, [])
  const onHandleUser = (id: number) => {
    const confirm = window.confirm("Ban co muon xoa khong ?")
    if (confirm) {
      removeUser(id).then(() => setUsers(users.filter(user => user.id !== id)))
    }
  }
  const onHandleAddUser = (user: IUser) => {
    addUser(user).then(() => getAllUsers().then(({ data }) => setUsers(data)))
  }
  const onHandleUpdateUser = (user: IUser) => {
    updateUser(user).then(() => getAllUsers().then(({ data }) => setUsers(data)))
  }
  return (
    <div className="App">
      <Routes>

        <Route path='/'>
          <Route index element={<RootLayout products={products} />} />
          <Route path='signup' element={<Signup />} />
          <Route path='signin' element={<Signin />} />
          <Route path='test' element={<ProductDetailPage products={products} />} />
          <Route path='products'  >
            <Route index element={<Products products={products} />} />
            <Route path=':id' element={<ProductDetailPage products={products} />} />
          </Route>
        </Route>

        <Route path='admin' element={<AdminLayoutPage />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='categories'>
            <Route index element={<CategoryManagementPage categories={categories} onRemove={onHandleRemoveCate} />} />
            <Route path='add' element={<AddCategoryPage onAdd={onHandleAddCate} />} />
            <Route path=':id/update' element={<UpdateCategory onUpdate={onHandleUpdateCate} categories={categories} />} />
          </Route>
          <Route path='products'>
            <Route index element={<ProductManagementPage onRemove={onHandleRemove} />} />
            <Route path='add' element={<AddProduct onAdd={onHandleAdd} />} />
            <Route path=':id/update' element={<UpdateProduct onUpdate={onHandleUpdate} products={products} />} />
          </Route>

          <Route path='users'>
            <Route index element={<UserManagementPage users={users} onRemove={onHandleUser} />} />
            <Route path='add' element={<AddUserPage onAdd={onHandleAddUser} />} />
            <Route path=':id/update' element={<UpdateUserPage onUpdate={onHandleUpdateUser} users={users} />} />
          </Route>
        </Route>
      </Routes>

    </div>
  )
}

export default App
