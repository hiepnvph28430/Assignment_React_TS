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

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    getAllProducts().then(({ data }) => setProducts(data))
  }, [])
  const onHandleRemove = (id: number) => {
    const confirm = window.confirm("Ban co muon xoa khong ?")
    if (confirm) {
      removeProduct(id).then(() => setProducts(products.filter(product => product.id !== id)))
    }
  }
  const onHandleAdd = (product: IProduct) => {
    addProduct(product).then(() => getAllProducts().then(({ data }) => setProducts(data)))
  }
  const onHandleUpdate = (product: IProduct) => {
    updateProduct(product).then(() => getAllProducts().then(({ data }) => setProducts(data)))
  }
  // Category
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    getAllCategories().then(({ data }) => setCategories(data))
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
            <Route index element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />
            <Route path='add' element={<AddProduct onAdd={onHandleAdd} />} />
            <Route path=':id/update' element={<UpdateProduct onUpdate={onHandleUpdate} products={products} />} />
          </Route>
        </Route>
      </Routes>

    </div>
  )
}

export default App
