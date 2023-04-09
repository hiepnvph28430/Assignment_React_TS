import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ICategory } from '../../../interfaces/category';
import { Space, Table, Tag } from 'antd';

import type { ColumnsType } from 'antd/es/table';


interface DataType {
    key: string | number;
    id: number;
    name: string;


}
interface IProps {
    categories: ICategory[],
    onRemove: (id: number) => void
}
const CategoryManagementPage = (props: IProps) => {

    const removeCategory = (id: number) => {
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
            title: 'Category Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <p>{text}</p>,
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <button className='tw-text-white tw-bg-blue-500 tw-border tw-px-3 tw-font-medium tw-rounded-lg tw-border-blue-50 '><Link to={`/admin/categories/${record.id}/update`}>Update</Link></button>
                    <button className='tw-text-white tw-bg-red-500 tw-border tw-px-3 tw-font-medium tw-rounded-lg tw-border-blue-50' onClick={() => removeCategory(record.id)}>Remove</button>
                </Space>
            ),
        },
    ];

    const data: DataType[] = props.categories.map((item: ICategory) => {
        return {
            key: item.id,
            ...item
        }
    })
    return (

        <div>

            <h1 className='tw-text-3xl tw-font-bold '>Category Management Page</h1>
            {
                <div>
                    <button className='tw-border tw-p-1.5 tw-my-5 tw-font-medium tw-rounded-lg tw-border-blue-50'><Link to={'/admin/categories/add'}>Add New Category</Link></button>

                    <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />


                </div>
            }

        </div >
    )
}

export default CategoryManagementPage