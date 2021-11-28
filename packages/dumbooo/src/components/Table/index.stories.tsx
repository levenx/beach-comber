import React, { FunctionComponent, ComponentProps, useState } from 'react';
import Table from './index';

// control参考文档： https://xiday.com/2020/09/27/storybook/
export default {
    component: Table,
    title: 'Table'
};

export const Default: FunctionComponent<ComponentProps<typeof Table>> = ({ ...props }) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: name => <span style={{color: "red"}}>{name}</span>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
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
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <div>
                <a>Invite {record.name}</a>
                <a>Delete</a>
              </div>
            ),
          },
        ];

        const data = [
            {
              key: 0,
              name: 'John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
              tags: ['nice', 'developer'],
            },
            {
              key: 1,
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
              tags: ['loser'],
            },
            {
              key: 2,
              name: 'Joe Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
              tags: ['cool', 'teacher'],
            },
          ];

          const onSelectChange = (selectedRowKeys) => {
            console.log('selectedRowKeys changed: ', selectedRowKeys);
            setSelectedRowKeys(selectedRowKeys)
          };

          const rowSelection = {
            selectedRowKeys: selectedRowKeys,
            onChange: onSelectChange
          };

    return <div>
        <Table dataSource={data} columns={columns} rowSelection={rowSelection} {...props}/>
    </div>
}