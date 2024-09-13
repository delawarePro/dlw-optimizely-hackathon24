

import { NextResponse, type NextRequest } from 'next/server';
import { verifyAccess, type ApiData, FlagDefinitionsType } from '@vercel/flags';
import { OptimizelyConfig } from "@optimizely/optimizely-sdk";
import { createInstance } from '@optimizely/optimizely-sdk/dist/optimizely.lite.min.js'

export async function GET(request: NextRequest) {
    const access = await verifyAccess(request.headers.get('Authorization'));
    if (!access) return NextResponse.json(null, { status: 401 });

    // load datafile
    const resp = await fetch('https://cdn.optimizely.com/datafiles/5MhHhxZ6yiwMtSeEtXQrp.json');
    const datafile = await resp.json();
    
    const optimizelyClient : any  = createInstance({
        datafile
    });

    // fetch all feature flags from Optimizely
    var enabledFeatures = optimizelyClient.getEnabledFeatures("user"); // TODO return user id from request

    var definitions: FlagDefinitionsType = {};

    enabledFeatures.forEach(feature => {
        // const featureVariables = optimizelyClient.getFeatureVariables(feature);

        const optlyConfig = optimizelyClient.getOptimizelyConfig();
        const featureMap = optlyConfig.featuresMap[feature];
        
        const options = Object.keys(featureMap.variablesMap).map(key => ({
            value: featureMap.variablesMap[key].value,
            label: key,
        }));
        
        definitions[feature] = {
            description: `${feature}`,
            origin: `https://origin/#${feature}`,
            options: options,
        };
    });

    const apiData: ApiData = {
        definitions: definitions,
    };

    return NextResponse.json(apiData);
}