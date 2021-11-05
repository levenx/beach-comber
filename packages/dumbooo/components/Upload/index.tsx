import React, { useState, useRef, ReactNode, ChangeEvent } from 'react';
import classnames from 'classnames';
import Progress from '../Progress';
import Icon from '../Icon';
import { BaseType } from '../typing';
import './index.less';

export interface IUpload extends BaseType {
    onUpload: (file: File, onProgress: (progressEvent: any) => void) => Promise<string>;
    files: Array<string>;
    mode: 'modal' | 'default';
    onItemClick: (image: string) => void;
}

export default function Upload(props: IUpload) {
    const { files, onUpload, mode = "default", onItemClick } = props;
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

    const onImageClick = (file: string) => {
        if (mode) {
            onItemClick(file);
        }
    }

    return (
        <div className="dumbo-upload">
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

            {
                files.map(picture => {
                    return <div className="dumbo-upload--item" onClick={() => onImageClick(picture)}>
                        <img src={picture} />
                    </div>
                })
            }
            
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
