import React, { ReactNode, useState } from 'react';
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
    rowKey?: string | Function;
    loading?: boolean;
    rowSelection?: object;
    scroll?: object;
    showHeader?: boolean;
}

export default function Table(props: ITable) {
    const { showHeader = true, bordered = false, rowClassName, dataSource, rowKey, columns, rowSelection } = props;
    let selectedRowKeys = [];
    let onChange = null;
    if (rowSelection?.selectedRowKeys) {
        selectedRowKeys = rowSelection?.selectedRowKeys;
        onChange = rowSelection?.onChange;
    }
    return (
        <div className="dumbo-table-content">
            <table className="dumbo-table" style={{ border: bordered && '1px solid #ddd' }}>
                {showHeader && <thead className="dumbo-table-thead">
                    <tr>
                        <td>
                            <input type="checkbox" onClick={(e) => {
                                if (e.target.checked) {
                                    onChange?.(dataSource)
                                } else {
                                    onChange?.([])
                                };
                            }} />
                        </td>
                        {columns.map((item) => <th className="dumbo-table-cell">{item.title}</th>)}
                    </tr>
                </thead>}
                <tbody className="dumbo-table-tbody">
                    {dataSource.map((rowItem: any, inx) => {
                        const isSelected = selectedRowKeys?.some((item) => item.key === inx);
                        return (
                            <tr className={rowClassName} key={typeof rowKey === 'string' ? rowKey : rowKey?.()} style={{ background: isSelected && '#e6f7ff' }} >
                                <td>
                                    <input type="checkbox" checked={isSelected} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        if (e.target.checked) {
                                            selectedRowKeys?.push(rowItem)
                                            onChange?.([...selectedRowKeys])
                                        } else {
                                            onChange?.(selectedRowKeys.filter((item) => item.key !== inx))
                                        };
                                    }} />
                                </td>
                                {columns.map((item: any) => (<td key={item.dataIndex} className="dumbo-table-cell">{item.render?.(rowItem[item.key], rowItem) || rowItem[item.key]}</td>))}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}