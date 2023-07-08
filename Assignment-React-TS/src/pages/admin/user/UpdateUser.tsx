import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { IUser } from '../../../interfaces/user'
import { Button, Checkbox, Form, Input } from 'antd';
interface IProps {
    users: IUser[]
    onUpdate: (user: IUser) => void
}

const UpdateUserPage = (props: IProps) => {
    const navigate = useNavigate();

    const { id } = useParams();
    const [user, setUser] = useState<IUser>()
    useEffect(() => {
        const currentUser = props.users.find(item => item.id == Number(id))
        setUser(currentUser)
    }, [props])

    useEffect(() => { // khi biến product thay đổi thì sẽ chạy useEffect này
        setFields() // gọi hàm setFields để set lại giá trị cho các input
    }, [user])
    const [form] = Form.useForm();
    // khởi tạo một instance của Form và gán vào biến form
    // Instance của form là một đối tượng được tạo ra bởi Ant Design để thực hiện các chức năng của form trong React

    const setFields = () => {// hàm này để set lại giá trị cho các input
        form.setFieldsValue({ // gọi hàm setFieldsValue của instance form để set lại giá trị cho các input dựa vào giá trị của biến product
            id: user?.id,
            firstName: user?.firstName,
            lastName: user?.lastName,
            email: user?.email,
            password: user?.password,
            role: user?.role

        })
    }
    const onFinish = (values: any) => {
        props.onUpdate(values);
        navigate("/admin/users")
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
                    label="First name"
                    name="firstName"
                    rules={[{ required: true, message: 'Please input your First name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Last name"
                    name="lastName"
                    rules={[{ required: true, message: 'Please input your Last name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >

                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >

                    <Input />
                </Form.Item>

                <Form.Item
                    label="Role"
                    name="role"
                    rules={[{ required: true, message: 'Please input your role!' }]}
                >

                    <Input />
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" className='tw-text-white tw-bg-blue-500 tw-border tw-px-3 tw-font-medium tw-rounded-lg tw-border-blue-50 '>
                        Update User
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default UpdateUserPage