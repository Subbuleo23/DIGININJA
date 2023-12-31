import { StripeError } from "./index";

export interface ElementFactory {
    /**
     * Creates a new StripeJS element
     * @see https://stripe.com/docs/stripe-js/reference#elements-create
     * @param type - The type of element that should be created
     * @param options - Any options that should be used to con
     *
     * @example ```
     * const style = {
     *    base: {
     *      color: '#303238',
     *      fontSize: '16px',
     *      color: "#32325d",
     *      fontSmoothing: 'antialiased',
     *      '::placeholder': {
     *        color: '#ccc',
     *      },
     *    },
     *    invalid: {
     *      color: '#e5424d',
     *      ':focus': {
     *        color: '#303238',
     *        },
     *    },
     * };
     * const cardElement = elementCreator.create('card', {style: style})
     * ```
     *
     * @return The created element
     */
    create(
        type: ElementType,
        options: CardElementOptions | IBANElementOptions | IdealBankOptions | PaymentButtonOptions,
    ): StripeElement;
}

export interface ElementCreatorOptions {
    /**
     * Fonts that should be used for styling the element
     * @see https://stripe.com/docs/stripe-js/reference#stripe-elements
     */
    fonts?: FontCSSElement[] | FontConfigElement[] | undefined;

    /**
     * The translation that should be used for the element text
     * `auto` defaults to the browser language
     *
     * @default 'auto'
     */
    locale?:
        | "auto"
        | "da"
        | "de"
        | "en"
        | "es"
        | "fi"
        | "fr"
        | "it"
        | "ja"
        | "no"
        | "nl"
        | "sv"
        | "zh"
        | string
        | undefined;
}

export interface FontCSSElement {
    /**
     * A relative or absolute URL pointing to a CSS file with `@font-face` definitions
     * @example 'https://fonts.googleapis.com/css?family=Open+Sans'
     */
    cssSrc: string;
}

export interface FontConfigElement {
    /**
     * The name of the font family
     * @example 'Times New Roman'
     */
    family?: string | undefined;

    /**
     * A src value pointing to your custom font file.
     * @example
     * 'url(https://somewebsite.com/path/to/font.woff)'
     * 'url(path/to/font.woff)'
     */
    src?: string | undefined;

    /**
     * The style of the text
     * @default 'normal'
     */
    style?: "normal" | "italic" | "oblique" | undefined;

    /**
     * A unicode range for the font that should be used
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/unicode-range
     */
    unicodeRange?: string | undefined;

    /**
     * The weight of the font
     * NOTE: This cannot be a number!
     */
    weight?: "initial" | "inherit" | "bold" | "bolder" | "lighter" | "normal" | "revert" | "unset" | undefined;
}

// --- ELEMENT --- //
export interface StripeElement {
    /**
     * Mount the element to the DOM
     * @see https://stripe.com/docs/stripe-js/reference#element-mount
     *
     * @param element - A HTML DOM element or a CSS selector
     *
     * @example ```
     * <label for="card-element">Card</label>
     * <div id="card-element"></div>
     *
     * cardElement.mount('#card-element');
     * ```
     */
    mount(element: HTMLElement | string): void;

    /**
     * Watch for changes on the element
     * @see https://stripe.com/docs/stripe-js/reference#element-on
     *
     * @param event - What event to listen to
     * @param handler - The handler function that is called when the event fires
     */
    on(event: "blur" | "focus" | "ready", handler: () => void): void;
    on(event: "click", handler: (event: { preventDefault: () => void }) => void): void;
    on(event: "change", handler: (event: OnChange) => void): void;

    /**
     * Blur the element
     * @see https://stripe.com/docs/stripe-js/reference#other-methods
     */
    blur(): void;

    /**
     * Clear the value of the element
     */
    clear(): void;

    /**
     * Removes the Element from the DOM and destroys it
     * NOTE: a destroyed element can not be re-activated or re-mounted to the DOM
     */
    destroy(): void;

    /**
     * Give focus to the element
     */
    focus(): void;

    /**
     * Unmounts the Element from the DOM
     * Call `element.mount()` to re-attach it to the DOM
     * @see mount
     */
    unmount(): void;

    /**
     * Updates the options the Element was initialized with
     * NOTE: Updates are merged into the existing configuration
     * @param options - The options that should be used to update the element
     */
    update(options: CardElementOptions | IBANElementOptions | IdealBankOptions | PaymentButtonOptions): void;
}

/**
 * The type of element that can be created by the ElementCreator
 * @see ElementCreator
 */
export type ElementType = "card" | "cardNumber" | "cardExpiry" | "cardCvc" | "postalCode" | "paymentRequestButton";

// --- ELEMENT EVENTS --- //
export interface OnChange {
    /**
     * The type of the Element that changed.
     */
    elementType: ElementType;

    /**
     * true if the value is empty
     */
    empty: boolean;

    /**
     * true if the value is well-formed and potentially complete
     */
    complete: boolean;

    /**
     * The current validation error if any
     */
    error: StripeError;

    /**
     * The value of the element
     * @see CardElementOptions.value for more information
     * NOTE: This is only filled is the element is of a Card type
     *
     * -----
     *
     * The selected bank. Can be one of the banks listed in the
     * @see https://stripe.com/docs/sources/ideal#optional-specifying-the-customers-bank
     * NOTE: This is also filled when the element is of IdealBank type
     */
    value?: any;

    /**
     * The type of card that was used
     * @example 'visa'
     * NOTE: This is only available when the element is of Card or Cardnumber type
     */
    brand?: string | undefined;

    /**
     * The country code of the entered IBAN
     * NOTE: This is only available when the element is of IBAN type
     */
    country?: string | undefined;

    /**
     * The financial institution that services the account whose IBAN was entered into the Element.
     * NOTE: This is only available when the element is of IBAN type
     */
    bankName: string;
}

// --- CARD ELEMENT --- //
export interface CardElementOptions extends BaseOptions {
    /**
     * A pre-filled value
     * NOTE: Sensitive card information (card number, CVC, and expiration date) cannot be pre-filled
     * @see placeholder
     *
     * @example {postalCode: '94110'}
     */
    value?: any;

    /**
     * Whether or not to hide the postal code
     * NOTE: If you are already collecting a full billing address or postal code elsewhere, set this to `true`
     * @default false
     */
    hidePostalCode?: boolean | undefined;

    /**
     * Appearance of the icon in the Element
     */
    iconStyle?: "solid" | "default" | undefined;

    /**
     * A placeholder text
     * NOTE: This is only available for `cardNumber`, `cardExpiry` & `cardCvc` elements
     */
    placeholder?: string | undefined;
}

// --- IBAN ELEMENT --- //
export interface IBANElementOptions extends BaseOptions {
    /**
     * Specify the list of countries or country-groups whose IBANs you want to allow
     */
    supportedCountries?: string[] | undefined;

    /**
     * Customize the country and format of the placeholder IBAN
     * @default 'DE"
     */
    placeholderCountry?: string | undefined;

    /**
     * Appearance of the icon in the Element
     */
    iconStyle?: "solid" | "default" | undefined;
}

// --- IDEAL ELEMENT --- //
export interface IdealBankOptions extends BaseOptions {
    /**
     * A pre-filled value for the Element. Can be one of the banks listed in the
     * @see https://stripe.com/docs/sources/ideal#optional-specifying-the-customers-bank
     *
     * @example 'abn_amro'
     */
    value?: string | undefined;
}

// --- PAYMENT BUTTON ELEMENT --- //
export interface PaymentButtonOptions {
    paymentRequest: any;

    /**
     * Set custom class names on the container DOM element when the Stripe Element is in a
     * particular state.
     */
    classes?: {
        base?: string | undefined; /** @default StripeElement */
        complete?: string | undefined; /** @default StripeElement--complete */
        focus: string; /** @default StripeElement--focus */
        invalid: string; /** @default StripeElement--invalid */
    } | undefined;

    style?: {
        base?: PaymentRequestButtonStyle | undefined;
        complete?: PaymentRequestButtonStyle | undefined;
        empty?: PaymentRequestButtonStyle | undefined;
        invalid?: PaymentRequestButtonStyle | undefined;
        paymentRequestButton?: PaymentRequestButtonStyle | undefined;
    } | undefined;
}

export interface PaymentRequestButtonStyle {
    /**
     * The type of button that should be shown
     * @default 'default'
     */
    type?: "default" | "donate" | "buy" | undefined;

    /**
     * The theme of the button that should be used
     * @default 'dark'
     */
    theme?: "dark" | "light" | "light-outline" | undefined;

    /**
     * The height of the button
     * @example '25px'
     */
    height?: string | undefined;
}

// --- BASE OPTIONS FOR ELEMENTS --- //
/**
 * @deprecated Do not use this interface. This is only here to minimize code duplication
 */
export interface BaseOptions {
    /**
     * Set custom class names on the container DOM element when the Stripe Element is in a
     * particular state.
     */
    classes?: {
        base?: string | undefined; /** @default StripeElement */
        complete?: string | undefined; /** @default StripeElement--complete */
        empty?: string | undefined; /** @default StripeElement--empty */
        focus?: string | undefined; /** @default StripeElement--focus */
        invalid?: string | undefined; /** @default StripeElement--invalid */
        webkitAutofill?: string | undefined; /** @default StripeElement--webkit-autofill */
    } | undefined;

    /**
     * Customize appearance using CSS properties
     */
    style?: {
        base?: StyleAttributes | undefined;
        complete?: StyleAttributes | undefined;
        empty?: StyleAttributes | undefined;
        invalid?: StyleAttributes | undefined;
    } | undefined;

    /**
     * Whether or not the icon should be hidden
     * @default false
     */
    hideIcon?: boolean | undefined;

    /**
     * Whether or not the input is disabled
     * @default false
     */
    disabled?: boolean | undefined;
}

/**
 * Styling settings for a Stripe Element
 */
export interface StyleAttributes {
    color?: string | undefined;
    fontFamily?: string | undefined;
    fontSize?: string | undefined;
    fontSmoothing?: string | undefined;
    fontStyle?: string | undefined;
    fontVariant?: any;
    iconColor?: string | undefined;
    lineHeight?: string | undefined;
    letterSpacing?: string | undefined;

    /**
     * Align text inside the element
     * NOTE: Only available for the `cardNumber`, `cardExpiry`, and `cardCvc` Elements
     */
    textAlign?: string | undefined;
    "::-ms-clear"?: MSClearAttributes | undefined;

    /**
     * Add padding to the element
     * NOTE: Only available for the `idealBank` Element
     */
    padding?: string | undefined;

    textDecoration?: string | undefined;
    textShadow?: string | undefined;
    textTransform?: string | undefined;
    ":hover"?: StyleAttributes | undefined;
    ":focus"?: StyleAttributes | undefined;
    "::placeholder"?: StyleAttributes | undefined;
    "::selection"?: StyleAttributes | undefined;
    ":-webkit-autofill"?: StyleAttributes | undefined;
    ":disabled"?: StyleAttributes | undefined;
}

export interface MSClearAttributes extends StyleAttributes {
    display?: string | undefined;
}
