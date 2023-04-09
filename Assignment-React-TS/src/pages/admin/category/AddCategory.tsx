import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form' //import useForm hook
import { ICategory } from '../../../interfaces/category'
import { Button, Form, Input, Modal, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import { useNavigate } from 'react-router-dom';
interface IProps {
    onAdd: (product: ICategory) => void
}


const AddCategoryPage = (props: IProps) => {

    const navigate = useNavigate()
    const onFinish = (values: any) => {


        props.onAdd(values);
        navigate("/admin/categories")
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
                    label="Category Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your product name!' }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" className='tw-text-white tw-bg-blue-500 tw-border tw-px-3 tw-font-medium tw-rounded-lg tw-border-blue-50 '>
                        Add New Category
                    </Button>
                </Form.Item>
            </Form>



        </div>
    )
}

export default AddCategoryPage