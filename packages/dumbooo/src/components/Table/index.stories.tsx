import React, { FunctionComponent, ComponentProps } from 'react';
import Table from './index';

// control参考文档： https://xiday.com/2020/09/27/storybook/
export default {
    component: Table,
    title: 'Table'
};

export const Default: FunctionComponent<ComponentProps<typeof Table>> = ({ ...props }) => {
    console.log('--->', props)
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
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
              key: '1',
              name: 'John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
              tags: ['nice', 'developer'],
            },
            {
              key: '2',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
              tags: ['loser'],
            },
            {
              key: '3',
              name: 'Joe Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
              tags: ['cool', 'teacher'],
            },
          ];

    return <div>
        <Table dataSource={data} columns={columns} rowKey="key" />
    </div>
}