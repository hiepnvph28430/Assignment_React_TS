import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { ICategory } from '../../../interfaces/category'
import { Button, Checkbox, Form, Input } from 'antd';
interface IProps {
    categories: ICategory[]
    onUpdate: (product: ICategory) => void
}

const UpdateCategory = (props: IProps) => {
    const navigate = useNavigate();

    const { id } = useParams();
    const [category, setCategory] = useState<ICategory>()
    useEffect(() => {
        const currentProduct = props.categories.find(item => item.id == Number(id))
        setCategory(currentProduct)
    }, [props])

    useEffect(() => { // khi biến product thay đổi thì sẽ chạy useEffect này
        setFields() // gọi hàm setFields để set lại giá trị cho các input
    }, [category])
    const [form] = Form.useForm();
    // khởi tạo một instance của Form và gán vào biến form
    // Instance của form là một đối tượng được tạo ra bởi Ant Design để thực hiện các chức năng của form trong React

    const setFields = () => {// hàm này để set lại giá trị cho các input
        form.setFieldsValue({ // gọi hàm setFieldsValue của instance form để set lại giá trị cho các input dựa vào giá trị của biến product
            id: category?.id,
            name: category?.name,

        })
    }
    const onFinish = (values: any) => {
        props.onUpdate(values);
        navigate("/admin/categories")
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



                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" className='tw-text-white tw-bg-blue-500 tw-border tw-px-3 tw-font-medium tw-rounded-lg tw-border-blue-50 '>
                        Update Category
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default UpdateCategory