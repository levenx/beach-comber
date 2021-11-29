import React from 'react';
import ReactDOM from 'react-dom';
import Title from './components/title';
import './index.less';

class ClownArticle {

    constructor(options) {

    }

    render() {
        ReactDOM.render(<div>
            <Title />
        </div>,
            document.getElementById('article'));
    }

}

export default ClownArticle;