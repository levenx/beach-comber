import React, { FunctionComponent, ComponentProps, useState } from 'react';
import Table, { TableColumnProps } from './index';

// control参考文档： https://xiday.com/2020/09/27/storybook/
export default {
  component: Table,
  title: 'Table「表格」'
};

export interface Data {
  key: number;
  name: string;
  age: number;
  address: string;
  tags: string[]
}

export const Default: FunctionComponent<ComponentProps<typeof Table>> = ({ ...props }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const columns: TableColumnProps<Data>[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 150,
      render: name => <span style={{ color: "red" }}>{name}</span>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: 100,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: 200,
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <div color={color} key={tag}>
                {tag.toUpperCase()}
              </div>
            );
          })}
        </>
      ),
    },
    {
      key: 'action',
      dataIndex: 'key',
      title: 'Action',
      render: (text, record) => (
        <div>
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </div>
      ),
    },
  ];



  const dataSource: Data[] = [];

  for (let i = 0; i < 15; i++) {
    dataSource.push({
      key: i,
      name: 'John Brown' + i,
      age: 18 + i,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    })
  }

  const onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys)
  };

  const rowSelection = {
    selectedRowKeys: selectedRowKeys,
    onChange: onSelectChange
  };

  return <div>
    <Table<Data> dataSource={dataSource} columns={columns} rowSelection={rowSelection} scroll={{ y: '350px' }} />
  </div>
}