
document.localization.config = {
    translate: function (key, defaultValue) {
        if (key.startsWith('invalidInput'))
            return translateInputValidationMessage(defaultValue)

        var dict = document.localization.locale === 'nl'
            ? translationsNl
            : translationsEn;
        if (!dict)
            return defaultValue;

        var tr = dict[key];
        if (!tr) {
            if (key.startsWith('contact.address') || key.startsWith('delivery.details.address') || key.startsWith('payment.details.address')) {
                key = key.replace('contact.address', 'address').replace('delivery.details.address', 'address').replace('payment.details.address', 'address')
                tr = dict[key];
                if (tr)
                    return tr;
            }

            console.log(key);
            return `<${key}>`;
        }

        return tr;
    }
};

document.localization.numberFormattingConfig = {
    initializer: (callback) => { 
        let toggles = document.querySelectorAll(".js-toggleLanguage");
        if (!toggles || toggles.length == 0)
            return;
            
        toggles.forEach(toggle => toggle.addEventListener('click', e => {
            document.localization.locale = e.target.getAttribute('data-lang');
            callback();
        }));
    },
    format: (number, currency, formatString) => {
        let culture = document.localization.locale === 'nl' ? 'nl-BE' : 'en-US';
        let formatterNumber = new Intl.NumberFormat(culture, { style: 'currency', currency: currency }).format(number);
        return html`<span>${formatterNumber}</span>`;
    }
};


var translationsEn = {
    'specify': 'Specify',
    'numberOfResults': 'results',
    'showMore': 'Show more',
    'showLess': 'Show less',
    'filters': 'Filters',
    'closeFacets': 'Close facets',
    'grid': 'Grid',
    'list': 'List',
    'page': 'Page',
    'next': 'Next',
    'previous': 'Previous',
    'sortOn': 'Sort on',
    'removeAllFilters': 'Verwijder filters',
    'addToCart': 'Add to cart',
    'addToWishlist': 'Add to wishlist',

    'cart': 'Cart',
    'wishlist-cart': 'Wishlist',

    'addedToCartPopUpTitle': 'The product has been added to your cart',
    'addedToCartPopUpContinueShopping': 'continue shopping',
    'addedToCartPopUpOrderCart': 'Order',

    'loadingCheckout': 'Your pokemon transport is being processed. Please wait for the confirmation...',
    'checkoutStep-cart': 'Cart',
    'checkoutStep-login': 'Login',
    'checkoutStep-contact': 'Contact information',
    'checkoutStep-delivery': 'Delivery method',
    'checkoutStep-payment': 'Payment method',
    'checkoutStep-paymentredirect': 'Payment',
    'checkoutStep-confirmationredirect': 'Confirmation',

    'cfPricingTitle': 'Totals',
    'cfPricingInclVat': 'incl. VAT',
    'cfPricingDeliveryCost': 'Delivery cost',
    'cfPricingPaymentCost': 'Payment cost',
    'cfPricingGrandTotal': 'Total',
    'cfPricingDiscount': 'Discount',
    'cfPricingSubtotal': 'Subtotal',

    'login.noAccountTitle': 'No login yet?',
    'login.noAccountDescription': 'No problem!',
    'login.withAccountTitle': 'Do you have credentials?',
    'login.withAccountDescription': 'Description about how our login provider is on an external page, and implemented by Microsoft, to maximize security.',
    'login.createAccount': 'Create your login',
    'login.redirectToLoginProvider': 'Login',
    'login.proceedAnonymously': 'Continue anonymously',

    'reverseToStep-login': 'Return to login step',

    'stepHeading-contact': 'Contact information',
    'stepTitle-contact': 'Your personal information',
    'stepDescription-contact': 'Description about contact information',

    'checkout-form.legendLocation': 'Location:',
    'checkout-form.legendPersonal': 'Personal info:',
    'checkout-form.legendCompany': 'Company info:',

    'address.salutationInputLabel': 'Salutation:',
    'address.firstNameInputLabel': 'First name:',
    'address.lastNameInputLabel': 'Last name:',
    'address.phoneNumberInputLabel': 'Phone number:',
    'address.emailInputLabel': 'Email address:',
    'address.companyNameInputLabel': 'Company name:',
    'address.vatNumberInputLabel': 'VAT number:',
    'address.streetInputLabel': 'Street:',
    'address.streetNumberInputLabel': 'Street number:',
    'address.numberAdditionInputLabel': 'Street number addition:',
    'address.cityInputLabel': 'City:',
    'address.postalCodeInputLabel': 'Postal code:',
    'address.regionInputLabel': 'Region:',
    'address.countryCodeInputLabel': 'Country:',
    'address.salutation-M': 'Mr.',
    'address.salutation-F': 'Ms.',
    'address.countryCode-BE': 'Belgium',
    'address.countryCode-EN': 'United Kingdom',
    'address.countryCode-NL': 'Netherlands, the',
    'address.countryCode-noValue': ' -- select an option -- ',
    'address.changeSelectedAddressClosed': 'More options',
    'address.changeSelectedAddressOpened': 'Done',
    'address.otherAddress': 'Other address',
    'contact.address.otherAddress': 'Something else:',

    'proceedToStep-delivery': 'Proceed to delivery options',
    'reverseToStep-contact': 'Return to contact information',

    'stepHeading-delivery': 'Delivery options',
    'stepTitle-delivery': 'Where can we deliver?',
    'stepDescription-delivery': 'Description about delivery',

    'delivery.details.methodCode-homeDelivery': 'Deliver to address',
    'delivery.details.methodCode-pickUpPoint': 'Pick-up in store',
    'delivery.details.methodCode-collect': 'Collect from warehouse',
    'delivery.details.methodDescription-homeDelivery': 'Have your order delivered to any address.',
    'delivery.details.methodDescription-pickUpPoint': 'Come pick up your order when it best suits you.',
    'delivery.details.methodDescription-collect': 'Come pick up your order from our warehouse.',

    'proceedToStep-payment': 'Proceed to payment options',

    'free': 'Free',
    'heading-payment': 'Payment options',
    'stepTitle-payment': 'I choose my payment option',
    'description-payment': 'Description about payment',
    'payment.details.methodCodeInputLabel': 'Choose payment option',
    'payment.details.methodCode': 'Payment Method',
    'payment.details.methodCode-bancontact': 'Bancontact',
    'payment.details.methodCode-creditcard': 'Creditcard',
    'payment.details.methodCode-paypal': 'Paypal',
    'payment.details.needsInvoiceInputLabel': 'Need invoice?',
    'payment.details.needsInvoice-true': 'Yes',
    'paymentChangeBillingAddress': 'Change billing address',

    'proceedToStep-paymentredirect': 'Proceed to PaymentRedirect',
    'reverseToStep-delivery': 'Return to delivery options',

    'loadingPaymentRedirect': 'You will be redirected shortly.',

    'confirmationStepTitle': 'Your order has been placed!',
    'confirmationStepOrderNumberIs': 'The ordernumber is ',



    'loadingCart': 'Your cart is being loaded...',
    'emptyCart': 'Your cart is empty!',

    'checkoutStep-cart': 'Cart',
    'checkoutStep-login': 'Login',
    'checkoutStep-contact': 'Contact information',
    'checkoutStep-delivery': 'Delivery method',
    'checkoutStep-payment': 'Payment method',
    'checkoutStep-paymentredirect': 'Payment',
    'checkoutStep-confirmationredirect': 'Confirmation',

    'cart': 'Cart',
    'wishlist-cart': 'Wishlist',
    
    'removeLineFromCart': 'Remove',
    'removeAllLinesFromCart': 'Remove all lines',

    'cfPricingTitle': 'Totals',
    'cfPricingInclVat': 'incl. VAT',
    'cfPricingGrandTotal': 'Total',
    'cfPricingDiscount': 'Discount',
    'cfPricingSubtotal': 'Subtotal',
    
    'cfVouchersTitle': 'Add a voucher',
    'cfVouchersInputMessage': 'If you have a voucher code, enter it here!',
    'cfVouchersInputFieldPlaceholder': 'e.g. 123456',
    'cfVouchersApplyInput': 'Apply voucher',
    'cfVouchersRemoveVoucher': 'Remove',

    'importCartLines-textExplanation': 'Simply copy and paste item records from your csv file into the field below',
    'importCartLines-textFormatExampleTitle': 'Format example:',
    'importCartLines-textFormatExampleColumns': 'SKU; Quantity;',
    'importCartLines-textFormatExampleLine': '14330; 5;',
    'importCartLines-resetButtonText': 'Reset',
    'importCartLines-addToCartButtonText': 'Add to cart',
    'importCartLines-replaceCartButton': 'Replace cart',
    'importCartLines-textTitle': 'Import cart lines',
    'importCartLines-fileUploadTitle': 'Import cart by file upload',
    'importCartLines-chooseAFileLabel': 'Choose a file',
    'importCartLines-dragAFileLabel': 'or drag it here',
    'importCartLines-fileUploadExplanation': 'Drag the .csv with your orders inside the box below to add the items in your basket',
    'importCartLines-fileFormatExampleTitle': 'Format example:',
    'importCartLines-fileFormatExampleColumns': 'SKU; Quantity;',
    'importCartLines-fileFormatExampleLine': '14330; 5;',
    'importCartLines-fileDragZoneText': 'Drop file here',
    'importCartLines-selectedFileLabel': 'Selected file:',
    'importCartLines-generalError': 'An error occured while trying to import your order lines. Please try again later or contact support.',
    'importCartLines-loading': 'Your cart lines are loading...',
    'addToCart': 'Add to cart',
    'wishlist-addToCart': 'Add to wishlist',

    'cart': 'Cart',
    'wishlist-cart': 'Wishlist',

    'addedToCartPopUpTitle': 'The product has been added to your cart',
    'addedToCartPopUpContinueShopping': 'continue shopping',
    'addedToCartPopUpOrderCart': 'Order',

    'wishlist-addedToCartPopUpTitle': 'The product has been added to your wishlist',
    'wishlist-addedToCartPopUpContinueShopping': 'continue shopping',
    'wishlist-addedToCartPopUpOrderCart': 'View wishlist',

    'wishlist-removeFromCart' : 'Remove from wishlist',

    'quantityTooLowErrorMessage': 'This quantity is below the minimum allowed',
    'quantityTooHighErrorMessage': 'This quantity is above the maximum available',
    'quantityInvalidForQuantityStepErrorMessage': 'This quantity is invalid',
    
    'VariantSelectorGeneralError': 'The product variants could not be loaded',

    'priceErrorMessage': 'Price unavailable',
    'priceLoadingMessage': 'Loading price...',
    'loadingCart': 'Je wishlist wordt opgehaald.',
    'emptyCart': 'Je wishlist is leeg!',

    'cart': 'Mandje',
    'wishlist-cart': 'Wishlist',
    
    'removeLineFromCart': 'Verwijder',
    'removeAllLinesFromCart': 'Verwijder alles',

    'cfPricingTitle': 'Totalen',
    'cfPricingInclVat': 'incl. btw',
    'cfPricingGrandTotal': 'Totaal',
    'cfPricingDiscount': 'Korting',
    'cfPricingSubtotal': 'Subtotaal'
};