/// <reference path="../../node_modules/@types/jquery/JQuery.d.ts" />

declare namespace Swal {
    
    function fire<T>(title?: string, html?: string, icon?: SweetAlertIcon): Promise<SweetAlertResult<Awaited<T>>>;

    function fire<T>(option: SweetAlertOptions):Promise<SweetAlertResult<Awaited<T>>>;

    enum DismissReason {
        cancel, backdrop, close, esc, timer
    }

    interface SweetAlertResult<T = any> {
        readonly dismiss?: Swal.DismissReason;
        readonly isConfirmed: boolean;
        readonly isDismissed: boolean;
        readonly value?: T;
    }


    interface SweetAlertHideShowClass {
        backdrop?: string;
        icon?: string;
        popup?: string;
      }
    
      type Awaited<T> = T extends Promise<infer U> ? U : T;
    
      type SyncOrAsync<T> = T | Promise<T> | { toPromise: () => T };
    
      type ValueOrThunk<T> = T | (() => T);
    
      export type SweetAlertArrayOptions = readonly [string?, string?, SweetAlertIcon?];
    
      export type SweetAlertGrow = 'row' | 'column' | 'fullscreen' | false;
    
      export type SweetAlertHideClass = SweetAlertHideShowClass;
    
      export type SweetAlertShowClass = Readonly<SweetAlertHideShowClass>;
    
      export type SweetAlertIcon = 'success' | 'error' | 'warning' | 'info' | 'question';
    
      export type SweetAlertInput =
        'text' | 'email' | 'password' | 'number' | 'tel' | 'range' | 'textarea' | 'select' | 'radio' | 'checkbox' |
        'file' | 'url';
    
      export type SweetAlertPosition =
        'top' | 'top-start' | 'top-end' | 'top-left' | 'top-right' |
        'center' | 'center-start' | 'center-end' | 'center-left' | 'center-right' |
        'bottom' | 'bottom-start' | 'bottom-end' | 'bottom-left' | 'bottom-right';
    
      export type SweetAlertUpdatableParameters =
        | 'allowEscapeKey'
        | 'allowOutsideClick'
        | 'buttonsStyling'
        | 'cancelButtonAriaLabel'
        | 'cancelButtonColor'
        | 'cancelButtonText'
        | 'closeButtonAriaLabel'
        | 'closeButtonHtml'
        | 'confirmButtonAriaLabel'
        | 'confirmButtonColor'
        | 'confirmButtonText'
        | 'currentProgressStep'
        | 'customClass'
        | 'footer'
        | 'hideClass'
        | 'html'
        | 'icon'
        | 'imageAlt'
        | 'imageHeight'
        | 'imageUrl'
        | 'imageWidth'
        | 'onAfterClose'
        | 'onClose'
        | 'onDestroy'
        | 'progressSteps'
        | 'reverseButtons'
        | 'showCancelButton'
        | 'showCloseButton'
        | 'showConfirmButton'
        | 'text'
        | 'title'
        | 'titleText';
    
      export interface SweetAlertCustomClass {
        container?: string;
        popup?: string;
        header?: string;
        title?: string;
        closeButton?: string;
        icon?: string;
        image?: string;
        content?: string;
        input?: string;
        actions?: string;
        confirmButton?: string;
        cancelButton?: string;
        footer?: string;
      }
    
      export interface SweetAlertResult<T = any> {
        readonly dismiss?: Swal.DismissReason;
        readonly isConfirmed: boolean;
        readonly isDismissed: boolean;
        readonly value?: T;
      }

    export interface SweetAlertOptions<PreConfirmResult = any, PreConfirmCallbackValue = any> {
        /**
         * The title of the popup, as HTML.
         * It can either be added to the object under the key `title` or passed as the first parameter of `Swal.fire()`.
         *
         * @default ''
         */
        title?: string | HTMLElement | JQuery;
    
        /**
         * The title of the popup, as text. Useful to avoid HTML injection.
         *
         * @default ''
         */
        titleText?: string;
    
        /**
         * A description for the popup.
         * If `text` and `html` parameters are provided in the same time, `text` will be used.
         *
         * @default ''
         */
        text?: string;
    
        /**
         * A HTML description for the popup.
         * It can either be added to the object under the key `html` or passed as the second parameter of `Swal.fire()`.
         *
         * @default ''
         */
        html?: string | HTMLElement | JQuery;
    
        /**
         * The icon of the popup.
         * SweetAlert2 comes with 5 built-in icons which will show a corresponding icon animation:
         * `'warning'`, `'error'`, `'success'`, `'info'` and `'question'`.
         * It can either be put to the object under the key `icon` or passed as the third parameter of `Swal.fire()`.
         *
         * @default undefined
         */
        icon?: SweetAlertIcon;
    
        /**
         * The custom HTML content for an icon.
         *
         * Example:
         * ```
         * Swal.fire({
         *   icon: 'error',
         *   iconHtml: '<i class="fas fa-bug"></i>'
         * })
         * ```
         *
         * @default undefined
         */
        iconHtml?: string;
    
        /**
         * The footer of the popup, as HTML.
         *
         * @default ''
         */
        footer?: string | HTMLElement | JQuery;
    
        /**
         * Whether or not SweetAlert2 should show a full screen click-to-dismiss backdrop.
         * Either a boolean value or a css background value (hex, rgb, rgba, url, etc.)
         *
         * @default true
         */
        backdrop?: boolean | string;
    
        /**
         * Whether or not an alert should be treated as a toast notification.
         * This option is normally coupled with the `position` and `timer` parameters.
         * Toasts are NEVER autofocused.
         *
         * @default false
         */
        toast?: boolean;
    
        /**
         * The container element for adding popup into (query selector only).
         *
         * @default 'body'
         */
        target?: string | HTMLElement;
    
        /**
         * Input field type, can be `'text'`, `'email'`, `'password'`, `'number'`, `'tel'`, `'range'`, `'textarea'`,
         * `'select'`, `'radio'`, `'checkbox'`, `'file'` and `'url'`.
         *
         * @default undefined
         */
        input?: SweetAlertInput;
    
        /**
         * Popup width, including paddings (`box-sizing: border-box`). Can be in px or %.
         *
         * @default undefined
         */
        width?: number | string;
    
        /**
         * Popup padding.
         *
         * @default undefined
         */
        padding?: number | string;
    
        /**
         * Popup background (CSS `background` property).
         *
         * @default undefined
         */
        background?: string;
    
        /**
         * Popup position
         *
         * @default 'center'
         */
        position?: SweetAlertPosition;
    
        /**
         * Popup grow direction
         *
         * @default false
         */
        grow?: SweetAlertGrow;
    
        /**
         * CSS classes for animations when showing a popup (fade in)
         * @default { popup: 'swal2-show', backdrop: 'swal2-backdrop-show', icon: 'swal2-icon-show', }
         */
        showClass?: SweetAlertShowClass;
    
        /**
         * CSS classes for animations when hiding a popup (fade out)
         * @default { popup: 'swal2-hide', backdrop: 'swal2-backdrop-hide', icon: 'swal2-icon-hide' }
         */
        hideClass?: SweetAlertHideClass;
    
        /**
         * A custom CSS class for the popup.
         * If a string value is provided, the classname will be applied to the popup.
         * If an object is provided, the classnames will be applied to the corresponding fields:
         *
         * Example:
         * ```
         * Swal.fire({
         *   customClass: {
         *     container: 'container-class',
         *     popup: 'popup-class',
         *     header: 'header-class',
         *     title: 'title-class',
         *     closeButton: 'close-button-class',
         *     icon: 'icon-class',
         *     image: 'image-class',
         *     content: 'content-class',
         *     input: 'input-class',
         *     actions: 'actions-class',
         *     confirmButton: 'confirm-button-class',
         *     cancelButton: 'cancel-button-class',
         *     footer: 'footer-class'
         *   }
         * })
         * ```
         *
         * @default undefined
         */
        customClass?: SweetAlertCustomClass;
    
        /**
         * Auto close timer of the popup. Set in ms (milliseconds).
         *
         * @default undefined
         */
        timer?: number;
    
        /**
         * If set to true, the timer will have a progress bar at the bottom of a popup.
         * Mostly, this feature is useful with toasts.
         *
         * @default false
         */
        timerProgressBar?: boolean;
    
        /**
         * @deprecated
         * If set to `false`, popup CSS animation will be disabled.
         *
         * @default true
         */
        animation?: ValueOrThunk<boolean>;
    
        /**
         * By default, SweetAlert2 sets html's and body's CSS `height` to `auto !important`.
         * If this behavior isn't compatible with your project's layout, set `heightAuto` to `false`.
         *
         * @default true
         */
        heightAuto?: boolean;
    
        /**
         * If set to `false`, the user can't dismiss the popup by clicking outside it.
         * You can also pass a custom function returning a boolean value, e.g. if you want
         * to disable outside clicks for the loading state of a popup.
         *
         * @default true
         */
        allowOutsideClick?: ValueOrThunk<boolean>;
    
        /**
         * If set to `false`, the user can't dismiss the popup by pressing the Escape key.
         * You can also pass a custom function returning a boolean value, e.g. if you want
         * to disable the escape key for the loading state of a popup.
         *
         * @default true
         */
        allowEscapeKey?: ValueOrThunk<boolean>;
    
        /**
         * If set to `false`, the user can't confirm the popup by pressing the Enter or Space keys,
         * unless they manually focus the confirm button.
         * You can also pass a custom function returning a boolean value.
         *
         * @default true
         */
        allowEnterKey?: ValueOrThunk<boolean>;
    
        /**
         * If set to `false`, SweetAlert2 will allow keydown events propagation to the document.
         *
         * @default true
         */
        stopKeydownPropagation?: boolean;
    
        /**
         * Useful for those who are using SweetAlert2 along with Bootstrap modals.
         * By default keydownListenerCapture is `false` which means when a user hits `Esc`,
         * both SweetAlert2 and Bootstrap modals will be closed.
         * Set `keydownListenerCapture` to `true` to fix that behavior.
         *
         * @default false
         */
        keydownListenerCapture?: boolean;
    
        /**
         * If set to `false`, the "Confirm" button will not be shown.
         * It can be useful when you're using custom HTML description.
         *
         * @default true
         */
        showConfirmButton?: boolean;
    
        /**
         * If set to `true`, the "Cancel" button will be shown, which the user can click on to dismiss the popup.
         *
         * @default false
         */
        showCancelButton?: boolean;
    
        /**
         * Use this to change the text on the "Confirm" button.
         *
         * @default 'OK'
         */
        confirmButtonText?: string;
    
        /**
         * Use this to change the text on the "Cancel" button.
         *
         * @default 'Cancel'
         */
        cancelButtonText?: string;
    
        /**
         * Use this to change the background color of the "Confirm" button (must be a HEX value).
         *
         * @default undefined
         */
        confirmButtonColor?: string;
    
        /**
         * Use this to change the background color of the "Cancel" button (must be a HEX value).
         *
         * @default undefined
         */
        cancelButtonColor?: string;
    
        /**
         * Use this to change the `aria-label` for the "Confirm" button.
         *
         * @default ''
         */
        confirmButtonAriaLabel?: string;
    
        /**
         * Use this to change the `aria-label` for the "Cancel" button.
         *
         * @default ''
         */
        cancelButtonAriaLabel?: string;
    
        /**
         * Whether to apply the default SweetAlert2 styling to buttons.
         * If you want to use your own classes (e.g. Bootstrap classes) set this parameter to false.
         *
         * @default true
         */
        buttonsStyling?: boolean;
    
        /**
         * Set to true if you want to invert default buttons positions.
         *
         * @default false
         */
        reverseButtons?: boolean;
    
        /**
         * Set to `false` if you want to focus the first element in tab order instead of the "Confirm" button by default.
         *
         * @default true
         */
        focusConfirm?: boolean;
    
        /**
         * Set to `true` if you want to focus the "Cancel" button by default.
         *
         * @default false
         */
        focusCancel?: boolean;
    
        /**
         * Set to `true` to show close button.
         *
         * @default false
         */
        showCloseButton?: boolean;
    
        /**
         * Use this to change the content of the close button.
         *
         * @default '&times;'
         */
        closeButtonHtml?: string;
    
        /**
         * Use this to change the `aria-label` for the close button.
         *
         * @default 'Close this dialog'
         */
        closeButtonAriaLabel?: string;
    
        /**
         * Set to true to disable buttons and show that something is loading. Useful for AJAX requests.
         *
         * @default false
         */
        showLoaderOnConfirm?: boolean;
    
        /**
         * Function to execute before confirm, may be async (Promise-returning) or sync.
         *
         * Example:
         * ```
         * Swal.fire({
         *   title: 'Multiple inputs',
         *   html:
         *     '<input id="swal-input1" class="swal2-input">' +
         *     '<input id="swal-input2" class="swal2-input">',
         *   focusConfirm: false,
         *   preConfirm: () => [
         *     document.querySelector('#swal-input1').value,
         *     document.querySelector('#swal-input2').value
         *   ]
         * }).then(result => Swal.fire(JSON.stringify(result));
         * ```
         *
         * @default undefined
         */
        preConfirm?(inputValue: PreConfirmCallbackValue): PreConfirmResult;
    
        /**
         * Add an image to the popup. Should contain a string with the path or URL to the image.
         *
         * @default undefined
         */
        imageUrl?: string;
    
        /**
         * If imageUrl is set, you can specify imageWidth to describes image width in px.
         *
         * @default undefined
         */
        imageWidth?: number;
    
        /**
         * If imageUrl is set, you can specify imageHeight to describes image height in px.
         *
         * @default undefined
         */
        imageHeight?: number;
    
        /**
         * An alternative text for the custom image icon.
         *
         * @default ''
         */
        imageAlt?: string;
    
        /**
         * Input field placeholder.
         *
         * @default ''
         */
        inputPlaceholder?: string;
    
        /**
         * Input field initial value.
         *
         * @default ''
         */
        inputValue?: SyncOrAsync<string>;
    
        /**
         * If the `input` parameter is set to `'select'` or `'radio'`, you can provide options.
         * Object keys will represent options values, object values will represent options text values.
         * @default {}
         */
        inputOptions?: SyncOrAsync<ReadonlyMap<string, string> | Record<string, any>>;
    
        /**
         * Automatically remove whitespaces from both ends of a result string.
         * Set this parameter to `false` to disable auto-trimming.
         *
         * @default true
         */
        inputAutoTrim?: boolean;
    
        /**
         * HTML input attributes (e.g. `min`, `max`, `step`, `accept`), that are added to the input field.
         *
         * Example:
         * ```
         * Swal.fire({
         *   title: 'Select a file',
         *   input: 'file',
         *   inputAttributes: {
         *     accept: 'image/*'
         *   }
         * })
         * ```
         *
         * @default {}
         */
        inputAttributes?: Record<string, string>;
    
        /**
         * Validator for input field, may be async (Promise-returning) or sync.
         *
         * Example:
         * ```
         * Swal.fire({
         *   title: 'Select color',
         *   input: 'radio',
         *   inputValidator: result => !result && 'You need to select something!'
         * })
         * ```
         *
         * @default undefined
         */
        inputValidator?(inputValue: string): SyncOrAsync<string | null>;
    
        /**
         * A custom validation message for default validators (email, url).
         *
         * Example:
         * ```
         * Swal.fire({
         *   input: 'email',
         *   validationMessage: 'Adresse e-mail invalide'
         * })
         * ```
         *
         * @default undefined
         */
        validationMessage?: string;
    
        /**
         * Progress steps, useful for popup queues.
         *
         * @default []
         */
        progressSteps?: readonly string[];
    
        /**
         * Current active progress step.
         *
         * @default undefined
         */
        currentProgressStep?: string;
    
        /**
         * Distance between progress steps.
         *
         * @default undefined
         */
        progressStepsDistance?: string;
    
        /**
         * Function to run when popup built, but not shown yet. Provides popup DOM element as the first argument.
         *
         * @default undefined
         */
        onBeforeOpen?(popup: HTMLElement): void;
    
        /**
         * Function to run when popup opens, provides popup DOM element as the first argument.
         *
         * @default undefined
         */
        onOpen?(popup: HTMLElement): void;
    
        /**
         * Function to run after popup DOM has been updated.
         * Typically, this will happen after `Swal.fire()` or `Swal.update()`.
         * If you want to perform changes in the popup's DOM, that survive `Swal.update()`, `onRender` is a good place.
         *
         * @default undefined
         */
        onRender?(popup: HTMLElement): void;
    
        /**
         * Function to run when popup closes by user interaction (and not by another popup), provides popup DOM element
         * as the first argument.
         *
         * @default undefined
         */
        onClose?(popup: HTMLElement): void;
    
        /**
         * Function to run after popup has been disposed by user interaction (and not by another popup).
         *
         * @default undefined
         */
        onAfterClose?(): void;
    
        /**
         * Function to run after popup has been destroyed either by user interaction or by another popup.
         *
         * @default undefined
         */
        onDestroy?(): void;
    
        /**
         * Set to `false` to disable body padding adjustment when scrollbar is present.
         *
         * @default true
         */
        scrollbarPadding?: boolean;
      }
}