import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react";
import { extractSettings } from "@remkoj/optimizely-cms-react/components";

export const rowLayout : CmsLayoutComponent<{}> = ({ contentLink, layoutProps, children }) => {
    const cssClasses : string[] = ['vb:row','vb:row:rowLayout', 'flex'];
    const layout = extractSettings(layoutProps);

    switch (layout.alignment) {
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