import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { IProduct } from '../../../interfaces/product'
import { Button, Checkbox, Form, Input } from 'antd';
interface IProps {
    products: IProduct[]
    onUpdate: (product: IProduct) => void
}

const UpdateProduct = (props: IProps) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState<IProduct>()
    useEffect(() => {
        const currentProduct = props.products.find(item => item._id == String(id))
        setProduct(currentProduct)
    }, [props])
    useEffect(() => {

        setFields()
    }, [product])
    const [form] = Form.useForm();
    const setFields = () => {
        form.setFieldsValue({
            _id: product?._id,
            name: product?.name,
            image: product?.image,
            price: product?.price,
            desc: product?.desc,
            categoryId: product?.categoryId
        })
    }
    const onFinish = (values: any) => {
        props.onUpdate(values);
        console.log("value", values)
        // navigate("/admin/products")
    }

    return (
        <div>
            <Form

                form={form}
                style={{ maxWidth: 600 }}
                onFinish={onFinish}
            >
                {/* đoạn này cần truyền cả id vào form khi submit để lấy được giá trị id truyền lên component App */}
                <Form.Item
                    label=""
                    name="_id"
                    // style={{ display: 'none' }} // ẩn input này đi
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your productname!' }]}
                >

                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your price!' }]}
                >
                    <Input />
                </Form.Item>

                <img src="" alt="" />
                <Form.Item
                    label="Product Image"
                    name="image"
                    rules={[{ required: true, message: 'Please input your image!' }]}

                >

                    <Input />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="desc"

                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Category"
                    name="categoryId"
                    rules={[{ required: true, message: 'Please input your productname!' }]}
                >

                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" className='tw-text-white tw-bg-blue-500 tw-border tw-px-3 tw-font-medium tw-rounded-lg tw-border-blue-50 '>
                        Update Product
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default UpdateProduct