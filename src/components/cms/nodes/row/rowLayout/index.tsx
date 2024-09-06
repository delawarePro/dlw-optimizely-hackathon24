import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react";
import type RowLayoutStyle from './rowLayout.opti-style.json'
import { extractSettings, type LayoutProps } from "@remkoj/optimizely-cms-react/components";

export const rowLayout : CmsLayoutComponent<LayoutProps<typeof RowLayoutStyle>> = ({ contentLink, layoutProps, children }) => {
    const cssClasses : string[] = ['vb:row','vb:row:rowLayout', 'flex'];
    const { alignment } = extractSettings(layoutProps);

    switch (alignment) {
        case 'center':
            cssClasses.push('justify-center')
            break;
        case 'end':
            cssClasses.push('justify-end')
            break;
        default:
            cssClasses.push('justify-start')
            break;
    }
    
    return (<div className={ cssClasses.join(' ') }>{ children }</div>);
}

export default rowLayout;