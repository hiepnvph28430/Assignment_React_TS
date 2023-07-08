import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form' //import useForm hook
import { IUser } from '../../../interfaces/user'
import { Button, Form, Input, Modal, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import { useNavigate } from 'react-router-dom';
interface IProps {
    onAdd: (user: IUser) => void
}

const AddUserPage = (props: IProps) => {

    const navigate = useNavigate()
    const onFinish = (values: any) => {


        props.onAdd(values);
        navigate("/admin/users")
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="First name"
                    name="firstName"
                // rules={[{ required: true, message: 'Please input your First name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Last name"
                    name="lastName"
                // rules={[{ required: true, message: 'Please input your Last name!' }]}
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
                        Add New User
                    </Button>
                </Form.Item>
            </Form>


            {/* <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" {...register("name")} />
                <input type="number" {...register("price")} />
                <button type="submit">Add New Product</button>
            </form> */}
        </div>
    )
}

export default AddUserPage