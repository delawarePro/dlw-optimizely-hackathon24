// Auto generated dictionary
import { ComponentTypeDictionary } from "@remkoj/optimizely-cms-react";
import elementDictionary from "./element";
import experienceDictionary from "./experience";
import nodeComponent from "./node";

// Prefix entries - if needed
prefixDictionaryEntries(elementDictionary, "Element");
prefixDictionaryEntries(elementDictionary, "Component");
prefixDictionaryEntries(experienceDictionary, "Experience");
prefixDictionaryEntries(experienceDictionary, "Page");

// Build dictionary
export const cmsDictionary : ComponentTypeDictionary = [
    ...elementDictionary,
    ...experienceDictionary,
    { 
        type: "Node", 
        component: nodeComponent 
    }
];

// Export dictionary
export default cmsDictionary;

// Helper functions
function prefixDictionaryEntries(list: ComponentTypeDictionary, prefix: string) : ComponentTypeDictionary
{
    list.forEach((component, idx, dictionary) => {
        dictionary[idx].type = typeof component.type == 'string' ? prefix + "/" + component.type : [ prefix, ...component.type ]
    });
    return list;
}
