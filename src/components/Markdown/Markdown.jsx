import React from 'react';
import marked from 'marked';

import './styles.scss';

export default function Markdown({ text }) {
    const obj = { __html: marked(text) };
    return <div dangerouslySetInnerHTML={obj} className='markdown'></div>;
}
