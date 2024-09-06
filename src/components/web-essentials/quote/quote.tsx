import React from 'react';

interface WeQuoteProps extends React.HTMLAttributes<HTMLElement> {
    author: string;
    quote: string;
}

const WeQuote: React.FC<WeQuoteProps> = ({ className = "o-wrapper", author, quote, ...props }) => {
    return React.createElement(
        'we-quote',
        {className, ...props},

        <section className="isolate overflow-hidden bg-white px-6 lg:px-8">
            <div className="relative mx-auto max-w-2xl py-24 sm:py-32 lg:max-w-4xl">
                <div
                    className="absolute left-1/2 top-0 -z-10 h-[50rem] w-[90rem] -translate-x-1/2 bg-[radial-gradient(50%_100%_at_top,theme(colors.indigo.100),white)] opacity-20 lg:left-36"></div>
                <div
                    className="absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-20 md:mr-0 lg:right-full lg:-mr-36 lg:origin-center"></div>
                <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
                    <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
                        <blockquote className="text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                            <p dangerouslySetInnerHTML={{__html: quote}}></p>
                        </blockquote>
                    </div>
                    <div className="col-end-1 w-16 lg:row-span-4 lg:w-72">
                        <img className="rounded-xl bg-indigo-50 lg:rounded-3xl"
                             src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=576&h=576&q=80"
                             alt=""/>
                    </div>
                    <figcaption className="text-base lg:col-start-1 lg:row-start-3">
                        <div className="font-semibold text-gray-900">{author}</div>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
        ;
};

export default WeQuote;
