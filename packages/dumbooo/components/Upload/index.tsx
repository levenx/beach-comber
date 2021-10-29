import React, { useRef, ReactNode, ChangeEvent } from 'react';
import classnames from 'classnames';
import { BaseType } from '../typing';
import axios from 'axios';
import './index.less';

export interface IButton extends BaseType {
    block?: boolean;
    size?: 'large' | 'middle' | 'small';
    type?: 'default' | 'primary' | 'danger' | 'dashed' | 'text' | 'link';
    shape?: 'default' | 'circle' | 'round';
    loading?: boolean;
    disabled?: boolean;
}

export default function Upload(props: IButton) {
    const { type = "default", block, shape, disabled, children, onClick, } = props;
    const uploadRef = useRef<HTMLInputElement>(null);

    const onUploadClick = () => {
        uploadRef.current.click();
    }

    return (
        <div>
            <div onClick={onUploadClick}>上传</div>
            <input ref={uploadRef} type="file" style={{ display: 'none' }} onChange={(event: ChangeEvent<HTMLInputElement>) => {
                const files = event.target.files;
                const formData = new FormData();
                formData.append('smfile', files[0]);

                axios.post('https://sm.ms/api/v2/upload', formData, { headers: { 'Authorization': 'qHBehsTVcfRaaOMjfPYcZ8C1jxnIa0S7' } }).then(res=>{
                    debugger
                })
            }} />
        </div>
    )
}
