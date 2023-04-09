import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IProduct } from '../../../interfaces/product';
import { Space, Table, Tag } from 'antd';

import type { ColumnsType } from 'antd/es/table';
const { Column, ColumnGroup } = Table;

interface DataType {
    key: string | number;
    id: number;
    name: string;
    price: number;


}
interface IProps {
    products: IProduct[],
    onRemove: (id: number) => void
}
const ProductManagementPage = (props: IProps) => {

    const removeProduct = (id: number) => {
        props.onRemove(id)
    }
    const columns: ColumnsType<DataType> = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Product Image',
            dataIndex: 'image',
            key: 'image',
            render: (img) => <img className='tw-w-80 tw-h-48' src={img} alt="" />,
        },
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Description',
            dataIndex: 'desc',
            key: 'desc',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <button className='tw-text-white tw-bg-blue-500 tw-border tw-px-3 tw-font-medium tw-rounded-lg tw-border-blue-50 '><Link to={`/admin/products/${record.id}/update`}>Update</Link></button>
                    <button className='tw-text-white tw-bg-red-500 tw-border tw-px-3 tw-font-medium tw-rounded-lg tw-border-blue-50' onClick={() => removeProduct(record.id)}>Remove</button>
                </Space>
            ),
        },
    ];

    const data: DataType[] = props.products.map((item: IProduct) => {
        return {
            key: item.id,
            ...item
        }
    })
    return (

        <div>

            <h1 className='tw-text-3xl tw-font-bold '>Product Management Page</h1>
            {
                <div>
                    <button className='tw-border tw-p-1.5 tw-my-5 tw-font-medium tw-rounded-lg tw-border-blue-50'><Link to={'/admin/products/add'}>Add New Product</Link></button>

                    <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />


                </div>
            }

        </div >
    )
}

export default ProductManagementPage