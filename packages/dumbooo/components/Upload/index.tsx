import React, { useState, useRef, ReactNode, ChangeEvent } from 'react';
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
    const [pictures, setPictures] = useState<Array<string>>([]);

    const onUploadClick = () => {
        uploadRef.current.click();
    }

    return (
        <div className="dumbo-upload">
            {
                pictures.map(picture => {
                    return <div className="dumbo-upload--item">
                        <img src={picture} />
                    </div>
                })
            }
            <div className="dumbo-upload--item">
                <div onClick={onUploadClick}>上传</div>
            </div>

            <input ref={uploadRef} type="file" style={{ display: 'none' }} onChange={(event: ChangeEvent<HTMLInputElement>) => {
                const files = event.target.files;
                const formData = new FormData();
                formData.append('file', files[0]);
                axios.post('http://localhost:8810/public/upload/git', formData,).then(res => {
                    const image = res.data.data.url;
                    setPictures([...pictures, image]);
                })
            }} />
        </div>
    )
}
