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
        const currentProduct = props.products.find(item => item.id == Number(id))
        setProduct(currentProduct)
    }, [props])

    useEffect(() => { // khi biến product thay đổi thì sẽ chạy useEffect này
        setFields() // gọi hàm setFields để set lại giá trị cho các input
    }, [product])
    const [form] = Form.useForm();
    // khởi tạo một instance của Form và gán vào biến form
    // Instance của form là một đối tượng được tạo ra bởi Ant Design để thực hiện các chức năng của form trong React

    const setFields = () => {// hàm này để set lại giá trị cho các input
        form.setFieldsValue({ // gọi hàm setFieldsValue của instance form để set lại giá trị cho các input dựa vào giá trị của biến product
            id: product?.id,
            name: product?.name,
            price: product?.price,
            image: product?.image,
            desc: product?.desc
        })
    }
    const onFinish = (values: any) => {
        props.onUpdate(values);
        navigate("/admin/products")
    };


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
                    name="id"
                    style={{ display: 'none' }} // ẩn input này đi
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
                    rules={[{ required: true, message: 'Please input your description!' }]}
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