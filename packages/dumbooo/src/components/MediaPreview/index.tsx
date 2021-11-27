import React, { useState } from 'react';
import classnames from 'classnames';
import Icon from '../Icon';
import { BaseType } from '../typing';
import './index.less';

export interface IMediaPreview extends BaseType {
    visible: boolean;
    medias: Array<string>;
    onClose: () => void;
}

export default function MediaPreview(props: IMediaPreview) {
    const { visible, onClose, medias = [] } = props;
    const [copy, setCopy] = useState(false);

    const onDownload = (url: string) => {
        const xhr = new XMLHttpRequest();
        xhr.open('get', url);
        xhr.responseType = 'blob';
        xhr.send();
        xhr.onload = function () {
            if (this.status === 200 || this.status === 304) {
                const url = URL.createObjectURL(this.response);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = url.split('/').pop();
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }
        };
    }

    const onCopy = () => {
        const input = document.createElement('input');
        document.body.appendChild(input);
        input.setAttribute('value', medias?.[0]);
        input.select();
        if (document.execCommand('copy')) {
            document.execCommand('copy');
            console.log('复制成功');
        }
        document.body.removeChild(input);
        setCopy(true);
        setTimeout(() => {
            setCopy(false);
        }, 3000);
    }

    const operates = [
        { icon: 'download-circle', onClick: () => onDownload(medias[0]) },
        { icon: copy ? 'right-fill' : 'copy', onClick: () => onCopy() },
        { icon: 'decrease-circle', onClick: () => { } },
        { icon: 'plus-circle', onClick: () => { } },
        { icon: 'close-circle', onClick: onClose }]

    return (
        <div className={classnames("dumbo-media--preview", { 'preview': visible })}>
            <div className="media-preview--operate">
                {
                    operates.map((operate, inx) => {
                        return <Icon
                            key={inx}
                            name={operate.icon}
                            color="#fff"
                            size={24}
                            onClick={operate.onClick}
                            className="media-preview--icon" />
                    })
                }
            </div>
            {
                medias.map(media => {
                    return <img key={media} src={media} alt="" />
                })
            }
        </div>
    )
}
