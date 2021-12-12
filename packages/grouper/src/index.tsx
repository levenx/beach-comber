import React from 'react';
import ReactDOM from 'react-dom';
import Preview from '@/components/preview';

export interface GrouperDocConfig {
    root?: HTMLElement;
    title?: string;
    content?: string;
}

export default class GrouperDoc {

    config;

    root;

    constructor(config: GrouperDocConfig) {
        this.config = config;
    }

    destory() {
        ReactDOM.unmountComponentAtNode(this.root);
    }

    render(config: GrouperDocConfig) {
        const { title, content, root } = config;
        let div = root;
        if (!root) {
            div = document.createElement('div');
            document.body.appendChild(div);
        }
        this.root = div;
        const App = <Preview onClose={this.destory.bind(this)} title={title} content={content} />;
        ReactDOM.render(App, div)
    }

}
