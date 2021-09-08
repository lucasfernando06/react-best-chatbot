import * as React from 'react';
import React__default, { useState, useEffect } from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';

function _extends$4() {
  _extends$4 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$4.apply(this, arguments);
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var propTypes = {exports: {}};

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

reactIs_development.AsyncMode = AsyncMode;
reactIs_development.ConcurrentMode = ConcurrentMode;
reactIs_development.ContextConsumer = ContextConsumer;
reactIs_development.ContextProvider = ContextProvider;
reactIs_development.Element = Element;
reactIs_development.ForwardRef = ForwardRef;
reactIs_development.Fragment = Fragment;
reactIs_development.Lazy = Lazy;
reactIs_development.Memo = Memo;
reactIs_development.Portal = Portal;
reactIs_development.Profiler = Profiler;
reactIs_development.StrictMode = StrictMode;
reactIs_development.Suspense = Suspense;
reactIs_development.isAsyncMode = isAsyncMode;
reactIs_development.isConcurrentMode = isConcurrentMode;
reactIs_development.isContextConsumer = isContextConsumer;
reactIs_development.isContextProvider = isContextProvider;
reactIs_development.isElement = isElement;
reactIs_development.isForwardRef = isForwardRef;
reactIs_development.isFragment = isFragment;
reactIs_development.isLazy = isLazy;
reactIs_development.isMemo = isMemo;
reactIs_development.isPortal = isPortal;
reactIs_development.isProfiler = isProfiler;
reactIs_development.isStrictMode = isStrictMode;
reactIs_development.isSuspense = isSuspense;
reactIs_development.isValidElementType = isValidElementType;
reactIs_development.typeOf = typeOf;
  })();
}

if (process.env.NODE_ENV === 'production') {
  reactIs.exports = reactIs_production_min;
} else {
  reactIs.exports = reactIs_development;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$3 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$3;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$2 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$2);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$1(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes$1.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactIs$1 = reactIs.exports;
var assign = objectAssign;

var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
var checkPropTypes = checkPropTypes_1;

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret$1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs$1.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = ReactPropTypesSecret_1;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs.exports;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = factoryWithThrowingShims();
}

var PropTypes = propTypes.exports;

var _extends$3 = {exports: {}};

(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;
}(_extends$3));

var _extends$2 = /*@__PURE__*/getDefaultExportFromCjs(_extends$3.exports);

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$1.apply(this, arguments);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function isValidProp(key) {
  return index(key);
}

function filterSVGProps(props) {
  return Object.keys(props).reduce(function (p, k) {
    if (isValidProp(k)) {
      p[k] = props[k];
    }

    return p;
  }, {});
}

var StyledIconBaseBase = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      iconAttrs = props.iconAttrs;
      props.iconVerticalAlign;
      var iconViewBox = props.iconViewBox,
      size = props.size,
      title = props.title,
      otherProps = _objectWithoutProperties(props, ["children", "iconAttrs", "iconVerticalAlign", "iconViewBox", "size", "title"]);

  var iconProps = _objectSpread({
    viewBox: iconViewBox,
    height: props.height !== undefined ? props.height : size,
    width: props.width !== undefined ? props.width : size,
    'aria-hidden': title == null ? 'true' : undefined,
    focusable: 'false',
    role: title != null ? 'img' : undefined
  }, iconAttrs);

  var svgProps = filterSVGProps(otherProps);
  return /*#__PURE__*/React.createElement("svg", _extends$1({}, iconProps, svgProps, {
    ref: ref
  }), title && /*#__PURE__*/React.createElement("title", {
    key: "icon-title"
  }, title), children);
});
var StyledIconBase = /*#__PURE__*/styled(StyledIconBaseBase).withConfig({
  displayName: "StyledIconBase",
  componentId: "ea9ulj-0"
})(["display:inline-block;vertical-align:", ";overflow:hidden;"], function (props) {
  return props.iconVerticalAlign;
});

var Send = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return /*#__PURE__*/React.createElement(StyledIconBase, _extends$2({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2 .01 7z"
  }));
});
Send.displayName = 'Send';

var Close = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return /*#__PURE__*/React.createElement(StyledIconBase, _extends$1({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }));
});
Close.displayName = 'Close';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var Refresh = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return /*#__PURE__*/React.createElement(StyledIconBase, _extends({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 11H7.101l.001-.009a4.956 4.956 0 0 1 .752-1.787 5.054 5.054 0 0 1 2.2-1.811c.302-.128.617-.226.938-.291a5.078 5.078 0 0 1 2.018 0 4.978 4.978 0 0 1 2.525 1.361l1.416-1.412a7.036 7.036 0 0 0-2.224-1.501 6.921 6.921 0 0 0-1.315-.408 7.079 7.079 0 0 0-2.819 0 6.94 6.94 0 0 0-1.316.409 7.04 7.04 0 0 0-3.08 2.534 6.978 6.978 0 0 0-1.054 2.505c-.028.135-.043.273-.063.41H2l4 4 4-4zm4 2h2.899l-.001.008a4.976 4.976 0 0 1-2.103 3.138 4.943 4.943 0 0 1-1.787.752 5.073 5.073 0 0 1-2.017 0 4.956 4.956 0 0 1-1.787-.752 5.072 5.072 0 0 1-.74-.61L7.05 16.95a7.032 7.032 0 0 0 2.225 1.5c.424.18.867.317 1.315.408a7.07 7.07 0 0 0 2.818 0 7.031 7.031 0 0 0 4.395-2.945 6.974 6.974 0 0 0 1.053-2.503c.027-.135.043-.273.063-.41H22l-4-4-4 4z"
  }));
});
Refresh.displayName = 'Refresh';

var ChatDotsFill = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return /*#__PURE__*/React.createElement(StyledIconBase, _extends$2({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 16 16"
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
  }));
});
ChatDotsFill.displayName = 'ChatDotsFill';

var EmojiSmile = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return /*#__PURE__*/React.createElement(StyledIconBase, _extends$2({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 16 16"
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"
  }));
});
EmojiSmile.displayName = 'EmojiSmile';

const Chat = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    box-shadow: rgb(0 0 0 / 25%) 0px 12px 24px 0px;
    border-radius: 15px;
    transition: 0.5s all ease-in-out;
    width: ${props => props.width}px;

    @media (max-width: 350px) {
        width: 280px;
    }  
`;
const ChatHeader = styled.div`
    padding: 20px;
    width: 100%; 
    background: ${props => props.theme.primaryColor};
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const ChatBody = styled.div`
    border-top: 1px solid rgb(238, 238, 238);
    padding: 20px;
    width: 100%;
    flex-grow: 1;
    background: ${props => props.theme.background};
    background-position: center;
    background-size: cover;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 6px;
    }    
    ::-webkit-scrollbar-track {
        margin: 5px;
    }            
    ::-webkit-scrollbar-thumb {
        background: #999999; 
        border-radius: 5px;      
    }         
    ::-webkit-scrollbar-thumb:hover {
        background: #d0d0d0; 
    }
`;
const ChatFooter = styled.div`
    padding: 20px;
    width: 100%;
    height: 70px;
    background: ${props => props.error ? '#F05F41' : '#fff'};
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const ChatText = styled.div`
    color: ${props => props.theme.textColor};
    font-weight: bold;
    font-size: 20px;
`;
const ChatHeaderBox = styled.div`
    display: flex;
    align-items: center;
    text-align: left;
`;
const IconsBox = styled.div`
    min-width: 50px;
`;
const ErrorMessage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: #fff;
`;
const EndMessage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: #757575;
`;
const ChatInput = styled.input`
    width: 100%;
    flex-grow: 1; 
    background: #fff;
    border: none;
    font-size: 16px;
    &:focus {
        outline: none;
        box-shadow: none;
    }
`;
const CloseIcon = styled(Close)`
    color: ${props => props.theme.textColor};
    height: 15px;
    cursor: pointer;
    :hover {
        color: ${props => props.theme.secondaryColor};
    }
`;
const SendIcon = styled(Send)`
    cursor: ${props => !props.disabled ? 'pointer' : 'inherit'};
    height: 25px;
    margin-left: 20px;
    color: ${props => props.disabled ? 'gray' : props.theme.secondaryColor};
`;
styled(EmojiSmile)`
    cursor: ${props => !props.disabled ? 'pointer' : 'inherit'};
    height: 30px;
    margin-left: 20px;
    color: ${props => props.active ? props.theme.secondaryColor : props.disabled ? 'gray' : 'orange'};
`;
const RefreshIcon = styled(Refresh)`
    cursor: pointer;
    height: 20px;
    color: ${props => props.theme.textColor};
    margin-right: 10px;
    :hover {
        color: ${props => props.theme.secondaryColor};
    }
`;

const Container$1 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: ${props => props.isUser ? 'flex-end' : 'flex-start'};
`;
const MessageAvatar = styled.img`
    width: 35px;
    height: 35px;   
    border-radius: 100%;   
    margin-right: 15px;
    box-shadow: rgb(0 0 0 / 25%) 0px 12px 24px 0px;
`;
const Message = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    max-width: 170px;
    background: ${props => !props.isUser ? props.theme.primaryColor : props.theme.secondaryColor};
    border-radius: 20px;
    border-top-left-radius: ${props => props.isUser ? '20px' : '0px'};
    border-top-right-radius: ${props => props.isUser ? '0px' : '20px'};
    margin-bottom: 10px;
    color: ${props => props.theme.textColor};
    box-shadow: rgb(0 0 0 / 25%) 0px 12px 24px 0px;
`;
const OptionsContainer = styled.div`    
    display: flex;
    flex-wrap: wrap;
    margin-left: 50px;
    margin-bottom: 10px;
`;
const Option = styled.div`    
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.primaryColor};
    border-radius: 20px;
    padding: 10px;
    margin-right: 10px;
    color: ${props => props.theme.textColor};
    cursor: pointer;
    margin-top: 10px;
    transition: 0.2s all ease-in-out;
    :hover {
        background: ${props => props.theme.secondaryColor};
    }
`;
const ShowMessage = styled.div`    
    display: flex;   
`;
const CustomComponentContainer = styled.div`    
    margin-bottom: 10px;   
`;
const CustomLoadingContainer = styled.div`    
    margin-left: ${props => props.marginLeft}px; 
`;

const dotPulseBefore = props => keyframes`
    0% {
        box-shadow: 9984px 0 0 -5px ${props.theme.secondaryColor};
    }
    30% {
        box-shadow: 9984px 0 0 2px ${props.theme.secondaryColor};
    }
    60%,
    100% {
        box-shadow: 9984px 0 0 -5px ${props.theme.secondaryColor};
    }
`;

const dotPulse = props => keyframes`
    0% {
        box-shadow: 9999px 0 0 -5px ${props.theme.secondaryColor};
    }
    30% {
        box-shadow: 9999px 0 0 2px ${props.theme.secondaryColor};
    }
    60%,
    100% {
        box-shadow: 9999px 0 0 -5px ${props.theme.secondaryColor};
    }
`;

const dotPulseAfter = props => keyframes`
    0% {
        box-shadow: 10014px 0 0 -5px ${props.theme.secondaryColor};
    }
    30% {
        box-shadow: 10014px 0 0 2px ${props.theme.secondaryColor};
    }
    60%,
    100% {
        box-shadow: 10014px 0 0 -5px ${props.theme.secondaryColor};
    }
`;

const Loading = styled.div`
    position: relative;
    left: -9999px;
    margin-left: ${props => props.marginLeft}px;
    width: 5px;
    height: 5px;
    border-radius: 5px;       
    animation: ${dotPulse} 1.5s infinite linear;
    animation-delay: .25s;
    ::before, ::after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 0;
        width: 5px;
        height: 5px;
        border-radius: 5px;      
    };
    ::before {
        animation: ${dotPulseBefore} 1.5s infinite linear;
        animation-delay: 0s;
    };
    ::after {
        animation: ${dotPulseAfter} 1.5s infinite linear;
        animation-delay: .5s;
    }
`;

const scrollToBottom = () => {
  const element = document.getElementById('lf-chat-body');

  if (element) {
    element.scrollTo({
      top: element.scrollHeight,
      behavior: 'smooth'
    });
  }
};

const MessageContainer = ({
  message,
  answers,
  setIsDisabled,
  handleAnswer,
  triggerNext,
  loadingComponent
}) => {
  const {
    src,
    isUser,
    content,
    component,
    receiveInput,
    delay,
    options,
    fetch
  } = message;
  const [showing, setShowing] = useState(isUser);
  const [disableOptions, setDisableOptions] = useState(false);
  const [fetchResult, setFetchResult] = useState({});
  const {
    content: CustomComponent,
    bubble = true
  } = component || {};

  const fetchApi = async () => {
    try {
      const result = await fetch();
      setFetchResult(result);
    } catch (err) {
      console.error(err);
    }
  };

  const configureFlow = () => {
    setShowing(true);

    if (receiveInput || options) {
      if (!options) setIsDisabled(false);
    } else triggerNext();

    scrollToBottom();
  };

  useEffect(() => {
    const sync = async () => {
      if (!showing) {
        if (fetch) {
          await fetchApi();
          configureFlow();
        } else {
          setTimeout(() => {
            configureFlow();
          }, delay);
        }
      }

      scrollToBottom();
    };

    sync();
  });

  const callHandleAnswer = option => {
    handleAnswer(option);
    setDisableOptions(true);
  };

  const renderCustomComponent = () => /*#__PURE__*/React__default.createElement(CustomComponent, {
    answers: answers,
    fetchResult: fetchResult
  });

  return /*#__PURE__*/React__default.createElement(Container$1, {
    isUser: isUser
  }, !showing ? loadingComponent ? /*#__PURE__*/React__default.createElement(CustomLoadingContainer, {
    marginLeft: !src ? 50 : 0
  }, loadingComponent) : /*#__PURE__*/React__default.createElement(Loading, {
    marginLeft: !src ? 70 : 20
  }) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(ShowMessage, {
    className: "lf-show-message"
  }, src ? /*#__PURE__*/React__default.createElement(MessageAvatar, {
    alt: "Bot Avatar",
    src: src
  }) : /*#__PURE__*/React__default.createElement("div", {
    style: {
      marginLeft: 50
    }
  }), bubble ? (content || CustomComponent) && /*#__PURE__*/React__default.createElement(Message, {
    isUser: isUser
  }, content, CustomComponent && renderCustomComponent()) : CustomComponent && /*#__PURE__*/React__default.createElement(CustomComponentContainer, null, renderCustomComponent())), options && !disableOptions && /*#__PURE__*/React__default.createElement(OptionsContainer, {
    className: "lf-show-message"
  }, options.map(option => /*#__PURE__*/React__default.createElement(Option, {
    key: option.value,
    onClick: () => callHandleAnswer(option)
  }, option.content)))));
};

const Bot$1 = ({
  handleResetChat,
  toggleOpen,
  options,
  style,
  steps
}) => {
  const {
    header,
    botAvatarSrc,
    sendMessage,
    endContent,
    messageDelay,
    sendingMessageCallback,
    endingCallback,
    sendComponent,
    loadingComponent
  } = options;
  const {
    width,
    positionStyles
  } = style;
  const initial = steps ? steps[0] : {};
  const [value, setValue] = useState('');
  const [actualStep, setActualStep] = useState(initial);
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [end, setEnd] = useState(false);
  const [answers, setAnswers] = useState({
    values: {},
    timeInMs: {}
  });
  const [startTime, setStartTime] = useState(new Date());
  const [messages, setMessages] = useState([]);

  const delay = customDelay => {
    return customDelay ? customDelay : messageDelay;
  };

  const calculateTimeMs = () => {
    const endTime = new Date();
    const timeDiff = endTime - startTime;
    setStartTime(new Date());
    return timeDiff;
  };

  useEffect(() => {
    handleBotMessage(actualStep);
  }, [actualStep]);
  useEffect(() => {
    if (actualStep && actualStep.end) {
      setTimeout(() => {
        setEnd(true);
        endingCallback(answers, toggleOpen, handleResetChat);
      }, delay(actualStep.delay));
    }
  }, [messages]);

  const handleChange = value => {
    setValue(value);
  };

  const handleBotMessage = newMessage => {
    setMessages(prev => [...prev, newMessage]);
  };

  const handleAnswer = (option = null) => {
    setIsDisabled(true);
    const newValue = option ? option : value;
    const newMessage = {
      isUser: true,
      content: option ? newValue.content : newValue
    };

    if (actualStep && actualStep.validator) {
      const result = actualStep.validator(value);

      if (result) {
        setError(result);
        setTimeout(() => {
          setIsDisabled(false);
          setError(null);
        }, 2000);
        return;
      }
    }

    setAnswers({ ...answers,
      values: { ...answers.values,
        [actualStep && actualStep.id]: option ? {
          content: newValue.content,
          value: newValue.value
        } : newValue
      },
      timeInMs: { ...answers.timeInMs,
        [actualStep && actualStep.id]: calculateTimeMs()
      }
    });
    const newArray = [...messages, newMessage];
    handleChange('');
    setMessages(newArray);
    triggerNext(option ? option.goTo : actualStep && actualStep.goTo);
    sendingMessageCallback(answers, toggleOpen);
  };

  const triggerNext = (goTo = null) => {
    const target = goTo ? goTo : actualStep && actualStep.goTo;
    setTimeout(() => {
      const nextStep = steps && steps.find(x => x.id === target);
      if (nextStep) setActualStep(nextStep);
    }, messageDelay);
  };

  const lastIsBot = index => {
    const lastMessage = messages[index - 1];
    return !lastMessage ? false : !lastMessage.isUser;
  };

  const renderMessage = (message, index) => /*#__PURE__*/React__default.createElement(MessageContainer, {
    message: { ...message,
      src: !message.isUser ? !lastIsBot(index) ? botAvatarSrc : null : null,
      delay: delay(message.delay)
    },
    loadingComponent: loadingComponent,
    answers: answers,
    handleAnswer: handleAnswer,
    triggerNext: triggerNext,
    setIsDisabled: setIsDisabled
  });

  const disableSend = () => {
    return isDisabled || !value || value === '';
  };

  return /*#__PURE__*/React__default.createElement(Chat, {
    style: positionStyles,
    width: width
  }, /*#__PURE__*/React__default.createElement(ChatHeader, null, /*#__PURE__*/React__default.createElement(ChatHeaderBox, null, /*#__PURE__*/React__default.createElement(ChatText, null, header)), /*#__PURE__*/React__default.createElement(IconsBox, null, /*#__PURE__*/React__default.createElement(RefreshIcon, {
    onClick: handleResetChat
  }), /*#__PURE__*/React__default.createElement(CloseIcon, {
    onClick: toggleOpen
  }))), /*#__PURE__*/React__default.createElement(ChatBody, {
    id: "lf-chat-body"
  }, messages && messages.length > 0 && messages.map((message, index) => /*#__PURE__*/React__default.createElement("div", {
    key: message.id
  }, renderMessage(message, index)))), /*#__PURE__*/React__default.createElement(ChatFooter, {
    error: error
  }, end ? /*#__PURE__*/React__default.createElement(EndMessage, null, endContent) : !error ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(ChatInput, {
    autoFocus: true,
    value: error ? error : value,
    onKeyDown: e => e.key === 'Enter' && handleAnswer(),
    onChange: e => handleChange(e.target.value),
    disabled: isDisabled,
    placeholder: sendMessage
  }), !error && /*#__PURE__*/React__default.createElement("div", {
    onClick: () => !disableSend() ? handleAnswer() : {}
  }, sendComponent ? sendComponent : /*#__PURE__*/React__default.createElement(SendIcon, {
    disabled: disableSend()
  }))) : /*#__PURE__*/React__default.createElement(ErrorMessage, null, error)));
};

const ChatClick = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: ${props => props.theme.primaryColor};    
    border-radius: 100%;
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 25%) 0px 12px 24px 0px;
`;
const ChatIcon = styled(ChatDotsFill)`
  cursor: pointer;
  height: 20px;
  color: ${props => props.theme.textColor};    
`;

const IconContainer = ({
  style
}) => {
  const {
    positionStyles
  } = style;
  return /*#__PURE__*/React__default.createElement(ChatClick, {
    style: positionStyles
  }, /*#__PURE__*/React__default.createElement(ChatIcon, null));
};

const Bot = ({
  options,
  style,
  steps
}) => {
  const {
    open: visible,
    hidden,
    openingCallback,
    closingCallback,
    buttonComponent,
    openInSeconds
  } = options;
  const [key, setKey] = useState(1);
  const [init, setInit] = useState(visible);
  const [open, setOpen] = useState(visible);
  useEffect(() => {
    if (!open && openInSeconds) {
      setTimeout(() => {
        setOpen(true);
      }, 1000 * openInSeconds);
    }
  }, []);
  useEffect(() => {
    if (open) {
      openingCallback();
      if (!init) setInit(true);
    } else if (init) closingCallback();
  }, [open]);

  const handleResetChat = () => {
    setKey(key + 1);
  };

  const toggleOpen = () => {
    setOpen(prev => !prev);
  };

  return hidden ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: open ? 'lf-chat-visible' : 'lf-chat-hidden'
  }, init && /*#__PURE__*/React__default.createElement(Bot$1, {
    key: key,
    style: style,
    options: options,
    steps: steps,
    handleResetChat: handleResetChat,
    toggleOpen: toggleOpen
  })), /*#__PURE__*/React__default.createElement("div", {
    className: !open ? 'lf-chat-visible' : 'lf-chat-hidden',
    onClick: toggleOpen
  }, buttonComponent ? /*#__PURE__*/React__default.createElement("div", {
    style: { ...style.positionStyles
    }
  }, buttonComponent) : /*#__PURE__*/React__default.createElement(IconContainer, {
    toggleOpen: toggleOpen,
    style: style
  })));
};

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAAXNSR0IArs4c6QAAAT1JREFUWEdjZNj8/w/DIAGMo47BEROjIYMriY6GDMUh4yjCwOggxMD4H2YSIwOcCRf6z8BYf4vhH7klBVHRZCzAwHjGhoEJnyVXPzMwaPMyMDTdYvhProOIckyjGgNTnRoDIz7HgBwRLMnASImDqOqYlc8Z/q8yYmAi10FUdQwoerR4GRjJdRDVHQOKSnIdRBPHkOsgqjoGnNfRsnyIBAPT2ufE5TCqOYZQTiMmuw99x4DKFEKlLHK5RGxBSFbIEDIcvZAkpB5RwxDR7MRmOMgAWPBgK5rpFjKEoghdni4hg81R2OowmjsGW1bFVaHS3DGwNIOeXugeMoMqzQyoY4hp6eFzoMkRhn9nPxAuKIkq9EAWwdrApIbKgXcM//e/IewQSB1LRKFHqgPIVT/qGIr7TeQGPSn6RqNpSEQTACEdF/0ez+KWAAAAAElFTkSuQmCC";

const defaultOptions = {
  header: /*#__PURE__*/React__default.createElement("span", null, "\uD83E\uDC85 API bot"),
  sendMessage: 'Type in your message...',
  endContent: /*#__PURE__*/React__default.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, "Thank you for using ", /*#__PURE__*/React__default.createElement("span", {
    style: {
      color: '#F652A0'
    }
  }, "\u2764"), /*#__PURE__*/React__default.createElement("div", {
    style: {
      fontSize: 12,
      marginTop: 5
    }
  }, "\xA9 2021 ", /*#__PURE__*/React__default.createElement("strong", null, "Lucas Fernando"), ".  All rights reserved.")),
  botAvatarSrc: img,
  open: false,
  hidden: false,
  messageDelay: 1000,
  openingCallback: () => {},
  closingCallback: () => {},
  endingCallback: (answers, toggleOpen, refresh) => {
    const value = answers && answers.values['redirectUser'] && answers.values['redirectUser'].value;

    if (value === 2) {
      setTimeout(() => {
        toggleOpen();
        refresh();
      }, 2000);
    } else {
      setTimeout(() => {
        toggleOpen();
        refresh();
        window.open("https://github.com/lucasfernando06/react-best-chatbot", "_blank");
      }, 5000);
    }
  },
  sendingMessageCallback: () => {}
};
const defaultSteps = [{
  id: 'redirectUser',
  content: /*#__PURE__*/React__default.createElement("span", null, "Welcome, human! Want to learn about my ", /*#__PURE__*/React__default.createElement("strong", null, "\"props\""), "?"),
  options: [{
    content: /*#__PURE__*/React__default.createElement("div", null, "\uD83E\uDD13 Yes"),
    value: 1,
    goTo: 2
  }, {
    content: /*#__PURE__*/React__default.createElement("div", null, "\uD83D\uDE10 No"),
    value: 2,
    goTo: 3
  }]
}, {
  id: 2,
  content: /*#__PURE__*/React__default.createElement("div", null, "Ok... You're going to be redirected in 5 seconds! See ya!"),
  end: true
}, {
  id: 3,
  content: /*#__PURE__*/React__default.createElement("div", null, "Hummm..."),
  goTo: 4
}, {
  id: 4,
  content: /*#__PURE__*/React__default.createElement("div", null, "Ok, See ya!"),
  end: true
}];

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "*{box-sizing:border-box}.lf-chat-visible{display:block;animation:fade .5s linear}.lf-chat-hidden{display:none}.lf-chat-hidden,.lf-show-message{animation:fade .5s linear}@keyframes fade{0%{opacity:0}to{opacity:1}}";
styleInject(css_248z);

const styleDefault = {
  primaryColor: '#4C5270',
  secondaryColor: '#F652A0',
  textColor: '#fff',
  background: '#f0f0f0',
  positionStyles: {
    position: 'fixed',
    bottom: 20,
    right: 20
  },
  width: 330
};
const optionsDefault = {
  header: 'Bot',
  sendMessage: 'Type in your message...',
  endContent: 'End...',
  useExample: false,
  useEmoji: true,
  botAvatarSrc: img,
  messageDelay: 1000,
  openingCallback: () => {},
  closingCallback: () => {},
  endingCallback: () => {},
  sendingMessageCallback: () => {}
};

const Container = ({
  style = {},
  options = {},
  steps
}) => {
  const theme = { ...styleDefault,
    ...style
  };
  const config = { ...optionsDefault,
    ...options
  };
  const componentProps = {
    options: options && options.useExample ? defaultOptions : config,
    steps: options && options.useExample ? defaultSteps : steps
  };
  return /*#__PURE__*/React__default.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React__default.createElement(Bot, _extends$4({
    style: theme
  }, componentProps)));
};

Container.propTypes = {
  style: PropTypes.shape({
    primaryColor: PropTypes.string,
    secondaryColor: PropTypes.string,
    textColor: PropTypes.string,
    background: PropTypes.string,
    positionStyles: PropTypes.object,
    width: PropTypes.number
  }),
  options: PropTypes.shape({
    useExample: PropTypes.bool,
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    sendMessage: PropTypes.string,
    endContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    botAvatarSrc: PropTypes.string,
    open: PropTypes.bool,
    openInSeconds: PropTypes.number,
    hidden: PropTypes.bool,
    messageDelay: PropTypes.number,
    sendComponent: PropTypes.element,
    buttonComponent: PropTypes.element,
    loadingComponent: PropTypes.element,
    openingCallback: PropTypes.func,
    closingCallback: PropTypes.func,
    endingCallback: PropTypes.func,
    sendingMessageCallback: PropTypes.func
  }),
  steps: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    content: PropTypes.string,
    receiveInput: PropTypes.bool,
    delay: PropTypes.number,
    fetch: PropTypes.func,
    component: PropTypes.shape({
      content: PropTypes.element.isRequired,
      buble: PropTypes.bool
    }),
    options: PropTypes.arrayOf(PropTypes.shape({
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      value: PropTypes.number.isRequired,
      goTo: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    })),
    goTo: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    validator: PropTypes.func,
    end: PropTypes.bool
  })).isRequired
};

export default Container;
//# sourceMappingURL=index.esm.js.map
