import React, { useState, useRef, ReactNode, ChangeEvent } from 'react';
import classnames from 'classnames';
import Progress from '../Progress';
import Icon from '../Icon';
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
    const [loading, setLoading] = useState<boolean>(false);
    const [picture, setPicture] = useState(null);
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

            <div className="dumbo-upload--item dumbo-upload--add" onClick={onUploadClick}>
                {
                    loading ?
                        <>
                            <Progress percent={picture.percent} />
                        </>
                        :
                        <>
                            <Icon name="zengjia" />
                            <div>上传</div>
                        </>
                }
            </div>

            <input ref={uploadRef} type="file" style={{ display: 'none' }} onChange={(event: ChangeEvent<HTMLInputElement>) => {
                const file = event.target.files[0];
                const formData = new FormData();
                formData.append('file', file);
                setLoading(true)
                setPicture({ name: file.name });
                axios.post('https://custom.expand.levenx.com/public/upload/git', formData, {
                    onUploadProgress: progressEvent => {
                        let percent = (progressEvent.loaded / progressEvent.total * 100 | 0)
                        console.log('complete:', percent)
                        setPicture({ ...picture, percent });
                    }
                }).then(res => {
                    const image = res.data.data.url;
                    setPictures([...pictures, image]);
                    setLoading(false)
                })
            }} />
        </div>
    )
}
