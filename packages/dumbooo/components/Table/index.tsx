import React, { ReactNode } from 'react';
import classnames from 'classnames';
import { BaseType } from '../typing';
import './index.less';

export interface ITable {
    /**
     * 是否展示外边框和列边框
     * @Default true
     */
    bordered?: boolean;
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
                                {columns.map((item: any) => (<td className="dumbo-table-cell">{item.render || rowitem[item.key]}</td>))}
                            </tr>
                        )
                    })}
                    {/* <tr>
                        <td className="dumbo-table-cell">单元格</td>
                        <td className="dumbo-table-cell">单元格</td>
                        <td className="dumbo-table-cell">单元格</td>
                        <td className="dumbo-table-cell">单元格</td>
                    </tr>
                    <tr>
                        <td className="dumbo-table-cell">单元格</td>
                        <td className="dumbo-table-cell">单元格</td>
                        <td className="dumbo-table-cell">单元格</td>
                        <td className="dumbo-table-cell">单元格</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}
