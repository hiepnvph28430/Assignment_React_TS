import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IUser } from '../../../interfaces/user';
import { Space, Table, Tag } from 'antd';

import type { ColumnsType } from 'antd/es/table';
const { Column, ColumnGroup } = Table;

interface DataType {
    key: string | number;
    id: number;
    email: string;
    password: string;
    role: string


}
interface IProps {
    users: IUser[],
    onRemove: (id: number) => void
}
const UserManagementPage = (props: IProps) => {

    const removeUser = (id: number) => {
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
            title: 'First name',
            dataIndex: 'firstName',
            key: 'firstName',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Last name',
            dataIndex: 'lastName',
            key: 'lastName',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Password',
            dataIndex: 'password',
            key: 'password',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <button className='tw-text-white tw-bg-blue-500 tw-border tw-px-3 tw-font-medium tw-rounded-lg tw-border-blue-50 '><Link to={`/admin/users/${record.id}/update`}>Update</Link></button>
                    <button className='tw-text-white tw-bg-red-500 tw-border tw-px-3 tw-font-medium tw-rounded-lg tw-border-blue-50' onClick={() => removeUser(record.id)}>Remove</button>
                </Space>
            ),
        },
    ];

    const data: DataType[] = props.users.map((item: IUser) => {
        return {
            key: item.id,
            ...item
        }
    })
    return (

        <div>

            <h1 className='tw-text-3xl tw-font-bold '>User Management Page</h1>
            {
                <div>
                    <button className='tw-border tw-p-1.5 tw-my-5 tw-font-medium tw-rounded-lg tw-border-blue-50'><Link to={'/admin/users/add'}>Add New User</Link></button>

                    <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />


                </div>
            }

        </div >
    )
}

export default UserManagementPage