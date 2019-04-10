"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PrimaryButton;
exports.IconButton = IconButton;
exports.RoundIconButton = RoundIconButton;
exports.RoundSpinnerButton = RoundSpinnerButton;
exports.TextIconButton = TextIconButton;
exports.LoadingTextButton = LoadingTextButton;
exports.SuccessButton = SuccessButton;
exports.DangerButton = DangerButton;

var _react = _interopRequireDefault(require("react"));

require("./primary-button.css");

require("material-icons/iconfont/material-icons.css");

var _ShouldRender = _interopRequireDefault(require("../../utils/ShouldRender"));

var _Spinner = _interopRequireDefault(require("../Spinner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**

 * @name PrimaryButton

 * @description Renders a HTML Button element

 * @param {{className: string, addclass?: string, width: number, height: number, text?: string, children?: JSX.Element, onClick?: function}} props

 * ### Props

 * Props includes all HTML button props, e.g:

 * * `className`: The default class of the button.

 * * `addclass`: Add extra class styles to overwrite default class.

 * * `width`: Width of the button.

 * * `height`: Height of the button.

 * * `onClick`: onclick event function of the button.

 * ### Example

    ```html

        <PrimaryButton

            addclass="override-default-style" 

            text="Without Children"

            width={200} 

            height={40} 

            onClick={e => console.log(e.target)}

        />



        <PrimaryButton

            addclass="override-default-style" 

            width={200} 

            height={40} 

            onClick={e => console.log(e.target)}

        >

            With Children

        </PrimaryButton>

    ```

 */
function PrimaryButton(props) {
  var className = "".concat(props.className || 'primary-button', " ").concat(props.addclass || '');

  var style = _objectSpread({
    width: props.width,
    height: props.height
  }, props.style);

  return _react.default.createElement("button", _extends({}, props, {
    style: style,
    className: className
  }), props.children || props.text);
}
/**

 * @name IconButton

 * @extends PrimaryButton

 * @description Inserts an Icon from the Material-icon library into a `PrimaryButton`.

 * @param {{className: string, addclass?: string, width: number, height: number, icon?: string, children?: JSX.Element, onClick?: function}} props

 * ### Props

 * Props includes all HTML button props, e.g:

 * * `className`: The default class of the button.

 * * `addclass`: Add extra class styles to overwrite default class.

 * * `icon`: Name of material-icon;

 * * `iconStyle`: Inline styles for icon;

 * * `width`: Width of the button.

 * * `height`: Height of the button.

 * * `onClick`: onclick event function of the button.

 * ### Example

 ```html

        <IconButton

            addclass="override-default-style" 

            width={200} 

            height={40} 

            icon="add"

            onClick={e => console.log(e.target)}

        />



        <IconButton

            addclass="override-default-style" 

            width={200} 

            height={40} 

            onClick={e => console.log(e.target)}

        >

            <img src="https://fireflies.ai/img/header.png" alt="logo" />

        </IconButton

 ```

 */


function IconButton(props) {
  var className = "".concat(props.className || 'icon-button', " ").concat(props.addclass || '');
  return _react.default.createElement(PrimaryButton, _extends({
    className: className
  }, props), _react.default.createElement(_ShouldRender.default, {
    if: props.icon
  }, _react.default.createElement("i", {
    style: props.iconStyle
  }, props.icon)), _react.default.createElement(_ShouldRender.default, {
    if: !props.icon && props.children
  }, props.children));
}
/**

 * @name RoundIconButton

 * @extends IconButton

 * @description Renders a round `IconButton`.

 * @param {{className: string, addclass?: string, width: number, height: number, icon?: string, iconStyle?: {}, children?: JSX.Element, onClick?: function}} props

 * ### Props

 * Props includes all HTML button props, e.g:

 * * `className`: The default class of the button.

 * * `addclass`: Add extra class styles to overwrite default class.

 * * `icon`: Name of material-icon;

 * * `iconStyle`: Inline CSS styles for icon;

 * * `width`: Width of the button.

 * * `height`: Height of the button.

 * * `onClick`: onclick event function of the button.

 * ### Example

    ```html

        <RoundIconButton 

            width={200} 

            height={40} 

            icon="add" 

            onClick={e => console.log(e.target)}

        />

    ```

 */


function RoundIconButton(props) {
  var icon = props.icon;
  var className = "".concat(props.className || 'circle-icon-button', " ").concat(props.addclass || '');
  return _react.default.createElement(IconButton, _extends({}, props, {
    className: className,
    icon: icon
  }));
}
/**

 * @name RoundSpinnerButton

 * @extends IconButton

 * @description Renders a `Spinner` component into an `IconButton`.

 * @param {{className: string, addclass?: string, width: number, height: number, spinnerSize: number, spinnerColor?: string, spinnerColors?: [string], spinnerDuration?: string, spinnerDepth?: number, onClick?: function}} props

 * ### Props

 * Props includes all HTML button props, e.g:

 * * `spinnerSize`: The size of the width and height of the `Spinner`.

 * * `spinnerColor`: A single color for the `Spinner`.

 * * `spinnerColors`: An array of color hex strings for the `Spinner`. It overides `spinnerColor`.

 * * `spinnerDuration`: The duration of a complete revolution of the `Spinner` in seconds.

 * * `spinnerDepth`: The thickness of the `Spinner`.

 * * `className`: The default class of the button.

 * * `addclass`: Add extra class styles to overwrite default class.

 * * `width`: Width of the button.

 * * `height`: Height of the button.

 * * `onClick`: onclick event function of the button.

 * ### Example

    ```html

        <RoundSpinnerButton 

            addclass="override-default-style"

            spinnerColors={['#3b73ff', '#5cb85c', '#d9534f', '#910ac7']} 

            spinnerSize={25} 

            onClick={e => console.log(e.target)}

        />

    ```

*/


function RoundSpinnerButton(props) {
  var className = "".concat(props.className || 'circle-icon-button', " ").concat(props.addclass || '');
  return _react.default.createElement(IconButton, _extends({}, props, {
    className: className
  }), _react.default.createElement("div", null, _react.default.createElement(_Spinner.default, {
    size: props.spinnerSize,
    color: props.spinnerColor,
    colors: props.spinnerColors,
    duration: props.spinnerDuration,
    thickness: props.spinnerDepth
  })));
}
/**

 * @name TextIconButton

 * @extends PrimaryButton

 * @description Renders an icon and a text into an `PrimaryButton`.

 * @param {{className: string, addclass?: string, width: number, height: number, text: string, textStyle: {}, icon: string, iconStyle: {}, onClick?: function}} props

 * ### Props

 * Props includes all HTML button props, e.g:

 * * `className`: The default class of the button.

 * * `addclass`: Add extra class styles to overwrite default class.

 * * `width`: Width of the button.

 * * `height`: Height of the button.

 * * `text`: Text in the button.

 * * `textStyle`: Inline CSS style for button text.

 * * `icon`: Name of material-icon.

 * * `iconStyle`: Inline CSS style for icon.

 * * `onClick`: onclick event function of the button.

 * ### Example

    ```html

        <TextIconButton addclass="rect-add-button" icon="add" text="Add" {...props} />

    ```

 */


function TextIconButton(props) {
  var className = props.className || 'text-icon-button';
  var style = {
    width: props.width,
    height: props.height
  };
  return _react.default.createElement(PrimaryButton, _extends({}, props, {
    className: className,
    style: style
  }), _react.default.createElement("i", {
    style: props.iconStyle
  }, props.icon), _react.default.createElement("span", {
    style: props.textStyle
  }, props.text));
}
/**

 * @name LoadingTextButton

 * @extends PrimaryButton

 * @description Renders a `Spinner` component and a text node into a `PrimaryButton`.

 * @param {{className: string, addclass?: string, width: number, height: number, spinnerSize: number, spinnerColor?: string, spinnerColors?: [string], spinnerDuration?: string, spinnerDepth?: number, text: string, textStyle: {}, onClick?: function}} props

 * ### Props

 * Props includes all HTML button props, e.g:

 * * `spinnerSize`: The size of the width and height of the `Spinner`.

 * * `spinnerColor`: A single color for the `Spinner`.

 * * `spinnerColors`: An array of color hex strings for the `Spinner`. It overides `spinnerColor`.

 * * `spinnerDuration`: The duration of a complete revolution of the `Spinner` in seconds.

 * * `spinnerDepth`: The thickness of the `Spinner`.

 * * `className`: The default class of the button.

 * * `addclass`: Add extra class styles to overwrite default class.

 * * `width`: Width of the button.

 * * `height`: Height of the button.

 * * `text`: Text in the button.

 * * `textStyle`: Inline CSS style for button text.

 * * `onClick`: onclick event function of the button.

 * ### Example

    ```html

        <LoadingTextButton spinnerSize={12} />

    ```

*/


function LoadingTextButton(props) {
  var text = props.text || 'Loading';
  var style = {
    width: props.width,
    height: props.height
  };
  return _react.default.createElement(PrimaryButton, _extends({}, props, {
    className: "loading-text-button",
    style: style
  }), _react.default.createElement(_Spinner.default, {
    size: props.spinnerSize,
    color: props.spinnerColor,
    colors: props.spinnerColors,
    duration: props.spinnerDuration,
    thickness: props.spinnerDepth
  }), _react.default.createElement("span", {
    style: props.textStyle
  }, text));
}
/**

 * @name SuccessButton

 * @extends TextIconButton

 * @description Renders a _check_ icon and a _success_ text into a `TextIconButton`.

 * @param {{className: string, addclass?: string, width: number, height: number, text?: string, textStyle?: {}, icon?: string, iconStyle?: {}, onClick?: function}} props

 * ### Props

 * Props includes all HTML button props, e.g:

 * * `className`: The default class of the button.

 * * `addclass`: Add extra class styles to overwrite default class.

 * * `width`: Width of the button.

 * * `height`: Height of the button.

 * * `text`: Text in the button.

 * * `textStyle`: Inline CSS style for button text.

 * * `icon`: Name of material-icon.

 * * `iconStyle`: Inline CSS style for icon.

 * * `onClick`: onclick event function of the button.

 * ### Example

    ```html

        <SuccessButton />

    ```

 */


function SuccessButton(props) {
  var text = props.text || 'Success';
  var icon = props.icon || 'check';
  return _react.default.createElement(TextIconButton, _extends({
    className: "success-button",
    icon: icon,
    text: text
  }, props));
}
/**

 * @name DangerButton

 * @extends TextIconButton

 * @description Renders a _close_ icon and a _Danger_ text into a `TextIconButton`.

 * @param {{className: string, addclass?: string, width: number, height: number, text?: string, textStyle?: {}, icon: string, iconStyle: {}, onClick?: function}} props

 * ### Props

 * Props includes all HTML button props, e.g:

 * * `className`: The default class of the button.

 * * `addclass`: Add extra class styles to overwrite default class.

 * * `width`: Width of the button.

 * * `height`: Height of the button.

 * * `text`: Text in the button.

 * * `textStyle`: Inline CSS style for button text.

 * * `icon`: Name of material-icon.

 * * `iconStyle`: Inline CSS style for icon.

 * * `onClick`: onclick event function of the button.

 * ### Example

    ```html

    <SuccessButton />

    ```

 */


function DangerButton(props) {
  var text = props.text || 'Danger';
  var icon = props.icon || 'close';
  return _react.default.createElement(TextIconButton, _extends({
    className: "danger-button",
    icon: icon,
    text: text
  }, props));
}

//# sourceMappingURL=index.js.map