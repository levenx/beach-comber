import React, { ReactNode } from 'react';
import classnames from 'classnames';
import { BaseType } from '../typing';
import './index.less';

export interface ITable {
    /**
     * 是否展示外边框和列边框
     * @default true
     */
    bordered?: boolean;
    /**
     * 自定义行类名
     */
    rowClassName?: string;
    columns: any;
    dataSource: any[];
    rowKey: string | Function;
    loading?: boolean;
    rowSelection?: object;
    scroll?: object;
    showHeader?: boolean;
}

export default function Table(props: ITable) {
    const { showHeader = true, bordered = true, dataSource, rowKey, columns } = props;
    console.log(columns, dataSource)
    return (
        <div className="dumbo-table-content">
            <table className="dumbo-table">
                {showHeader && <thead className="dumbo-table-thead">
                    <tr>
                        {columns.map((item) => <th className="dumbo-table-cell">{item.title}</th>)}
                    </tr>
                </thead>}
                <tbody className="dumbo-table-tbody">
                    {dataSource.map((rowitem: any) => {
                        return (
                            <tr>
                                {columns.map((item: any) => (<td key={item.dataIndex} className="dumbo-table-cell">{item.render?.(rowitem[item.key], rowitem) || rowitem[item.key]}</td>))}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
