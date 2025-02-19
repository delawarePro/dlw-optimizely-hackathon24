// Auto generated dictionary
import { ComponentTypeDictionary } from "@remkoj/optimizely-cms-react";
import componentDictionary from "./component";
import experienceDictionary from "./experience";
import nodesDictionary from "./nodes";
import nodeComponent from "./node";

// Prefix entries - if needed
prefixDictionaryEntries(componentDictionary, "Component");
prefixDictionaryEntries(experienceDictionary, "Experience");
prefixDictionaryEntries(experienceDictionary, "Page");
prefixDictionaryEntries(nodesDictionary, "Nodes");

// Build dictionary
export const cmsDictionary : ComponentTypeDictionary = [
    ...componentDictionary,
    ...experienceDictionary,
    ...nodesDictionary,
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
