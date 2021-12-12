import React, { useState, useEffect, useMemo } from 'react';
import classnames from 'classnames';
import { marked } from 'marked';
import './index.less';

interface PreviewProps {
    onClose: () => void;
    title: string;
    content: string;
}

export default function Preview(props: PreviewProps) {
    const { onClose, title, content } = props;
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 0);
    }, [])

    const article = useMemo(() => {
        return marked(content)
    }, [content]);

    return (
        <div className={classnames("grouper-preview", { "grouper-preview--visible": visible })}>
            <div className="grouper-preview__title">
                <span className="title">{title}</span>
                <span className="close" onClick={() => {
                    setVisible(false);
                    setTimeout(() => {
                        onClose()
                    }, 300);
                }}>x</span>
            </div>
            <div className="grouper-preview__content" dangerouslySetInnerHTML={{ __html: article }} />
        </div>
    )
}
