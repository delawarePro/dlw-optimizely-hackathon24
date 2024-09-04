import React from 'react';

interface WeRichTextProps extends React.HTMLAttributes<HTMLElement> {
    content: string;
}

const WeRichText: React.FC<WeRichTextProps> = ({ className = "o-wrapper", content, ...props }) => {
    return React.createElement(
        'we-richtext',
        {className, ...props},
        <div dangerouslySetInnerHTML={{__html: content}}></div>
    );
};

export default WeRichText;
