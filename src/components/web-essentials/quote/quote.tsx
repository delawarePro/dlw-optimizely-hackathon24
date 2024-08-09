import React from 'react';

const WeQuote: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className = "o-wrapper", ...props }) => {
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
                <blockquote>This is a smart quote by one of our satisfied customer to give other customers
                    reassurance that we have the best products.
                </blockquote>

                <figcaption>
                    Name of customer,
                    <cite>reference</cite>
                </figcaption>
            </div>
        </figure>
    );
};

export default WeQuote;
