import React from 'react';
import Image from "@/components/shared/cms-image";

import { getServerContext } from '@remkoj/optimizely-cms-react/rsc'
import { CmsEditable } from '@remkoj/optimizely-cms-react/rsc'
import { RichText } from '@remkoj/optimizely-cms-react/components'

import { ContentLinkWithLocale, InlineContentLinkWithLocale } from "@remkoj/optimizely-graph-client";

interface WeQuoteProps extends React.HTMLAttributes<HTMLElement> {
    contentLink: ContentLinkWithLocale | InlineContentLinkWithLocale;
    author: string;
    image: any;
    quote: string;
}

const { factory } = getServerContext();

const WeQuote: React.FC<WeQuoteProps> = ({ className = "o-wrapper", contentLink, author, image, quote, ...props }) => {
    return React.createElement(
        'we-quote',
        {className, ...props},

        <CmsEditable as="blockquote" cmsId={ contentLink.key }>
        
            <section className="isolate overflow-hidden px-6 lg:px-8">
                <div className="relative mx-auto max-w-2xl py-24 sm:py-32 lg:max-w-4xl">
                    <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
                        <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
                            <RichText as="blockquote" className="text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9"
                                      text={quote?.json} factory={factory} cmsFieldName={"Text"} />
                        </div>
                        <div className="col-end-1 w-16 lg:row-span-4 lg:w-72">
                            <Image src={ image } height={100} width={100} alt={""} className="rounded-xl bg-indigo-50 lg:rounded-3xl" />
                        </div>
                        <figcaption className="text-base lg:col-start-1 lg:row-start-3">
                            <div className="font-semibold text-gray-900">{author}</div>
                        </figcaption>
                    </figure>
                </div>
            </section>

        </CmsEditable>
    )
        ;
};

export default WeQuote;
