import React, { useState, useRef, ReactNode, ChangeEvent } from 'react';
import classnames from 'classnames';
import Progress from '../Progress';
import Icon from '../Icon';
import { BaseType } from '../typing';
import axios from 'axios';
import './index.less';

export interface IUpload extends BaseType {
    onUpload: (file: File, onProgress: (progressEvent: any) => void) => Promise<string>;
    files: Array<string>;
}

export default function Upload(props: IUpload) {
    const { files, onUpload } = props;
    const uploadRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [picture, setPicture] = useState(null);

    const onUploadClick = () => {
        uploadRef.current.click();
    }

    const onUploadChange = (file: File) => {

        setLoading(true)
        setPicture({ name: file.name });

        onUpload(file, (progressEvent: any) => {
            let percent = (progressEvent.loaded / progressEvent.total * 100 | 0)
            setPicture({ ...picture, percent });
        }).then(file => {
            setLoading(false);
        })
    }

    return (
        <div className="dumbo-upload">
            {
                files.map(picture => {
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

            <input ref={uploadRef}
                type="file"
                style={{ display: 'none' }}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const file = event.target.files[0];
                    onUploadChange(file);
                }} />
        </div>
    )
}
