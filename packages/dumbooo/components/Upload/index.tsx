import React, { useState, useRef, ReactNode, ChangeEvent } from 'react';
import classnames from 'classnames';
import Progress from '../Progress';
import Icon from '../Icon';
import { BaseType } from '../typing';
import './index.less';

export interface IUpload extends BaseType {
    onUpload: (file: File, onProgress: (progressEvent: ProgressEvent) => void) => Promise<string>;
    files: Array<string>;
    mode?: 'modal' | 'default';
    onImageClick?: (image: string) => void;
}

export default function Upload(props: IUpload) {
    const { files = [], onUpload, mode = "default", onImageClick } = props;
    const uploadRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [picture, setPicture] = useState(null);

    const onUploadClick = () => {
        uploadRef.current.click();
    }

    const onUploadChange = (file: File) => {

        setLoading(true)
        setPicture({ name: file.name });

        onUpload(file, (progressEvent: ProgressEvent) => {
            let percent = (progressEvent.loaded / progressEvent.total * 100 | 0)
            setPicture({ ...picture, percent });
        }).then(file => {
            setLoading(false);
        })
    }

    const onClick = (file: string) => {
        if (mode) {
            onImageClick(file);
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
                            <Icon name="plus" size={32} color="#876d6d"/>
                        </>
                }
            </div>

            {
                files.map(picture => {
                    return <div className="dumbo-upload--item" onClick={() => onClick(picture)}>
                        <img src={picture} />
                    </div>
                })
            }

            <input ref={uploadRef}
                type="file"
                style={{ display: 'none' }}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const file = event.target.files?.[0];
                    if (file) {
                        onUploadChange(file);
                    }
                }} />
        </div>
    )
}
