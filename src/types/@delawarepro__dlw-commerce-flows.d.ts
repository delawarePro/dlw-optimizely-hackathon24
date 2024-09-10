// src/types/@delawarepro__dlw-commerce-flows.d.ts
declare module '@delawarepro/dlw-commerce-flows' {
    export class Dlw_CF_Checkout_Address_Section {
        renderField(fieldName: string, autoComplete: string): any;
        renderLocationFields(): any;
    }
    
    export class Dlw_CommerceFlows {
        static initialize(cfConfig: any, customComponents: any): void;
        static initializeCartSummaryComponents(): void;
    }
}