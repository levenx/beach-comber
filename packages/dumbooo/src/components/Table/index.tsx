import React, { ReactNode, useState } from 'react';
import classnames from 'classnames';
import { BaseType } from '../typing';
import './index.less';

interface rowSelectionType {
    selectedRowKeys: any[];
    onChange: (params: any) => void;
}

interface scrollType {
    scrollToFirstRowOnChange?: boolean;
    x?: string | number | true;
    y?: string | number | true;
}

export interface TableColumnProps<Item> {
    key: any;
    dataIndex: keyof Item;
    title?: string;
    width?: number;
    render?: (value: Item[keyof Item], item: Item) => ReactNode;
}

export interface TableProps<Data> {
    /**
     * 是否展示外边框和列边框
     * @default true
     */
    bordered?: boolean;
    /**
     * 自定义行类名
     */
    rowClassName?: string;
    columns: Array<TableColumnProps<Data>>;
    dataSource: Data[];
    /**
     * 行key
     */
    rowKey?: string | Function;

    loading?: boolean;
    /**
     * 多选模式
     */
    rowSelection?: rowSelectionType;
    /**
     * 是否滚动
     */
    scroll?: scrollType;
    /**
     * 是否展示表头
     * @default true
     */
    showHeader?: boolean;
}

export default function Table<T>(props: TableProps<T>) {
    const { showHeader = true, bordered = false, rowClassName, dataSource = [], rowKey, columns = [], rowSelection, scroll } = props;
    const { selectedRowKeys, onChange } = rowSelection || {};
    const isScroll = scroll?.x || scroll?.y;
    const colList = columns.filter((item) => item.width);
    return (
        <div className="dumbo-table-content">
            <div className="dumbo-table-header">
                <table className="dumbo-table-header" style={{ border: bordered && '1px solid #ddd' }}>
                    <colgroup>
                        {colList.map((item) => {
                            return <col style={{ width: `${item.width}px` }}></col>
                        })}
                    </colgroup>
                    {showHeader && <thead className="dumbo-table-thead" style={{ overflow: isScroll && 'hidden' }}>
                        <tr>
                            {selectedRowKeys && <td>
                                <input type="checkbox" onChange={(e) => {
                                    if (e.target.checked) {
                                        onChange?.(dataSource)
                                    } else {
                                        onChange?.([])
                                    };
                                }} />
                            </td>}
                            {columns.map((item) => <th className="dumbo-table-cell" key={item.key} >{item.title}</th>)}
                        </tr>
                    </thead>}
                </table>
            </div>
            <div className="dumbo-table-body" style={{ overflowY: isScroll ? 'scroll' : 'auto', maxHeight: `${scroll?.y}` }}>
                <table>
                    <colgroup>
                        {colList.map((item) => {
                            return <col style={{ width: `${item.width}px` }}></col>
                        })}
                    </colgroup>
                    <tbody className="dumbo-table-tbody">
                        {dataSource.map((rowItem, inx) => {
                            const isSelected = selectedRowKeys?.some((item) => item.key === inx);
                            return (
                                <tr className={rowClassName} key={typeof rowKey === 'string' ? rowKey : rowKey?.()} style={{ background: isSelected && '#e6f7ff' }} >
                                    {selectedRowKeys && <td>
                                        <input type="checkbox" checked={isSelected} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            if (e.target.checked) {
                                                selectedRowKeys?.push(rowItem)
                                                onChange?.([...selectedRowKeys])
                                            } else {
                                                onChange?.(selectedRowKeys.filter((item) => item.key !== inx))
                                            };
                                        }} />
                                    </td>}
                                    {columns.map((item) => (<td key={item.key} className="dumbo-table-cell">{item.render?.(rowItem[item.key], rowItem) || rowItem[item.key]}</td>))}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}