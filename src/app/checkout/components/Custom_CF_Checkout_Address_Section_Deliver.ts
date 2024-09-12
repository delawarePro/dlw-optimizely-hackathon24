import { html } from "lit";
import { Dlw_CF_Checkout_Address_Section } from "@delawarepro/dlw-commerce-flows";

export class Custom_CF_Checkout_Address_Section_Delivery extends Dlw_CF_Checkout_Address_Section {
    constructor() {
        super();
    }

    renderFormFields() {
        return html`
            <fieldset class="cf-checkout-address-section__fieldset">
                <legend class="cf-checkout-address-section__legend">
                    Personal info
                </legend>
                <div class="cf-checkout-address-section__personal">
                    ${super.renderField("firstName", "given-name")}
                    ${super.renderField("lastName", "family-name")}
                    ${super.renderField("email", "email")}
                </div>
            </fieldset>
            <fieldset class="cf-checkout-address-section__fieldset">
                <legend class="cf-checkout-address-section__legend">
                    Company
                </legend>
                <div class="cf-checkout-address-section__company">
                    ${super.renderField("companyName", "organization")}
                </div>
            </fieldset>
            <fieldset class="cf-checkout-address-section__fieldset">
                <legend class="cf-checkout-address-section__legend">
                    Location
                </legend>
                <div class="cf-checkout-address-section__location">
                    ${this.renderField("city", "address-level2")}
                    ${this.renderField("countryCode", "country")}
                </div>
            </fieldset>
            `;
    }
}