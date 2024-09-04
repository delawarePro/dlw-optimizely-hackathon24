import React from 'react';

interface WeQuoteProps extends React.HTMLAttributes<HTMLElement> {
    author: string;
    reference: string;
    quote: string;
}

const WeQuote: React.FC<WeQuoteProps> = ({ className = "o-wrapper", author, reference, quote, ...props }) => {
    return React.createElement(
        'we-quote',
        {className, ...props},
        <figure className="we-quote__container">
            <div className="we-quote__media">
                <img className="o-fit" loading="lazy" width="100" height="100"
                     src="assets/media/placeholders/placeholder-1-1.png" alt="the testimony image"/>
            </div>


            <svg className="c-quote__start" aria-hidden="true">
                <use href="assets/svg/symbols.svg#Quote"></use>
            </svg>


            <div className="we-quote__body">
                <blockquote dangerouslySetInnerHTML={{__html: quote}}></blockquote>

                <figcaption>
                    {author}
                </figcaption>
            </div>
        </figure>
    );
};

export default WeQuote;
