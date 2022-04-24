
/**
 * @license
 * author: Stefan Jelner
 * css-custom-properties-watch v0.0.1
 * Released under the ISC license.
 * 
 * See 
 */

var CSSCustomPropertiesWatch = (function () {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  /******************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  /* global Reflect, Promise */
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function (resolve) {
        resolve(value);
      });
    }

    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }

      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }

      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }

      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
        f,
        y,
        t,
        g;
    return g = {
      next: verb(0),
      "throw": verb(1),
      "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
      return this;
    }), g;

    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }

    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");

      while (_) {
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      }

      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  }
  function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
      next: function next() {
        if (o && i >= o.length) o = void 0;
        return {
          value: o && o[i++],
          done: !o
        };
      }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;

    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
        ar.push(r.value);
      }
    } catch (error) {
      e = {
        error: error
      };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }

    return ar;
  }
  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
  }
  function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
  }
  function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
      return this;
    }, i;

    function verb(n) {
      if (g[n]) i[n] = function (v) {
        return new Promise(function (a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
    }

    function resume(n, v) {
      try {
        step(g[n](v));
      } catch (e) {
        settle(q[0][3], e);
      }
    }

    function step(r) {
      r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }

    function fulfill(value) {
      resume("next", value);
    }

    function reject(value) {
      resume("throw", value);
    }

    function settle(f, v) {
      if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
  }
  function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator],
        i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
      return this;
    }, i);

    function verb(n) {
      i[n] = o[n] && function (v) {
        return new Promise(function (resolve, reject) {
          v = o[n](v), settle(resolve, reject, v.done, v.value);
        });
      };
    }

    function settle(resolve, reject, d, v) {
      Promise.resolve(v).then(function (v) {
        resolve({
          value: v,
          done: d
        });
      }, reject);
    }
  }

  function isFunction(value) {
    return typeof value === 'function';
  }

  function createErrorClass(createImpl) {
    var _super = function _super(instance) {
      Error.call(instance);
      instance.stack = new Error().stack;
    };

    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
  }

  var UnsubscriptionError = createErrorClass(function (_super) {
    return function UnsubscriptionErrorImpl(errors) {
      _super(this);

      this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
        return i + 1 + ") " + err.toString();
      }).join('\n  ') : '';
      this.name = 'UnsubscriptionError';
      this.errors = errors;
    };
  });

  function arrRemove(arr, item) {
    if (arr) {
      var index = arr.indexOf(item);
      0 <= index && arr.splice(index, 1);
    }
  }

  var Subscription = function () {
    function Subscription(initialTeardown) {
      this.initialTeardown = initialTeardown;
      this.closed = false;
      this._parentage = null;
      this._finalizers = null;
    }

    Subscription.prototype.unsubscribe = function () {
      var e_1, _a, e_2, _b;

      var errors;

      if (!this.closed) {
        this.closed = true;
        var _parentage = this._parentage;

        if (_parentage) {
          this._parentage = null;

          if (Array.isArray(_parentage)) {
            try {
              for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                var parent_1 = _parentage_1_1.value;
                parent_1.remove(this);
              }
            } catch (e_1_1) {
              e_1 = {
                error: e_1_1
              };
            } finally {
              try {
                if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1["return"])) _a.call(_parentage_1);
              } finally {
                if (e_1) throw e_1.error;
              }
            }
          } else {
            _parentage.remove(this);
          }
        }

        var initialFinalizer = this.initialTeardown;

        if (isFunction(initialFinalizer)) {
          try {
            initialFinalizer();
          } catch (e) {
            errors = e instanceof UnsubscriptionError ? e.errors : [e];
          }
        }

        var _finalizers = this._finalizers;

        if (_finalizers) {
          this._finalizers = null;

          try {
            for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
              var finalizer = _finalizers_1_1.value;

              try {
                execFinalizer(finalizer);
              } catch (err) {
                errors = errors !== null && errors !== void 0 ? errors : [];

                if (err instanceof UnsubscriptionError) {
                  errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                } else {
                  errors.push(err);
                }
              }
            }
          } catch (e_2_1) {
            e_2 = {
              error: e_2_1
            };
          } finally {
            try {
              if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1["return"])) _b.call(_finalizers_1);
            } finally {
              if (e_2) throw e_2.error;
            }
          }
        }

        if (errors) {
          throw new UnsubscriptionError(errors);
        }
      }
    };

    Subscription.prototype.add = function (teardown) {
      var _a;

      if (teardown && teardown !== this) {
        if (this.closed) {
          execFinalizer(teardown);
        } else {
          if (teardown instanceof Subscription) {
            if (teardown.closed || teardown._hasParent(this)) {
              return;
            }

            teardown._addParent(this);
          }

          (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
        }
      }
    };

    Subscription.prototype._hasParent = function (parent) {
      var _parentage = this._parentage;
      return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
    };

    Subscription.prototype._addParent = function (parent) {
      var _parentage = this._parentage;
      this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };

    Subscription.prototype._removeParent = function (parent) {
      var _parentage = this._parentage;

      if (_parentage === parent) {
        this._parentage = null;
      } else if (Array.isArray(_parentage)) {
        arrRemove(_parentage, parent);
      }
    };

    Subscription.prototype.remove = function (teardown) {
      var _finalizers = this._finalizers;
      _finalizers && arrRemove(_finalizers, teardown);

      if (teardown instanceof Subscription) {
        teardown._removeParent(this);
      }
    };

    Subscription.EMPTY = function () {
      var empty = new Subscription();
      empty.closed = true;
      return empty;
    }();

    return Subscription;
  }();
  var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
  function isSubscription(value) {
    return value instanceof Subscription || value && 'closed' in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
  }

  function execFinalizer(finalizer) {
    if (isFunction(finalizer)) {
      finalizer();
    } else {
      finalizer.unsubscribe();
    }
  }

  var config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false
  };

  var timeoutProvider = {
    setTimeout: function (_setTimeout) {
      function setTimeout(_x, _x2) {
        return _setTimeout.apply(this, arguments);
      }

      setTimeout.toString = function () {
        return _setTimeout.toString();
      };

      return setTimeout;
    }(function (handler, timeout) {
      var args = [];

      for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
      }

      var delegate = timeoutProvider.delegate;

      if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
        return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
      }

      return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    }),
    clearTimeout: function (_clearTimeout) {
      function clearTimeout(_x3) {
        return _clearTimeout.apply(this, arguments);
      }

      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };

      return clearTimeout;
    }(function (handle) {
      var delegate = timeoutProvider.delegate;
      return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    }),
    delegate: undefined
  };

  function reportUnhandledError(err) {
    timeoutProvider.setTimeout(function () {

      {
        throw err;
      }
    });
  }

  function noop() {}

  function errorContext(cb) {
    {
      cb();
    }
  }

  var Subscriber = function (_super) {
    __extends(Subscriber, _super);

    function Subscriber(destination) {
      var _this = _super.call(this) || this;

      _this.isStopped = false;

      if (destination) {
        _this.destination = destination;

        if (isSubscription(destination)) {
          destination.add(_this);
        }
      } else {
        _this.destination = EMPTY_OBSERVER;
      }

      return _this;
    }

    Subscriber.create = function (next, error, complete) {
      return new SafeSubscriber(next, error, complete);
    };

    Subscriber.prototype.next = function (value) {
      if (this.isStopped) ; else {
        this._next(value);
      }
    };

    Subscriber.prototype.error = function (err) {
      if (this.isStopped) ; else {
        this.isStopped = true;

        this._error(err);
      }
    };

    Subscriber.prototype.complete = function () {
      if (this.isStopped) ; else {
        this.isStopped = true;

        this._complete();
      }
    };

    Subscriber.prototype.unsubscribe = function () {
      if (!this.closed) {
        this.isStopped = true;

        _super.prototype.unsubscribe.call(this);

        this.destination = null;
      }
    };

    Subscriber.prototype._next = function (value) {
      this.destination.next(value);
    };

    Subscriber.prototype._error = function (err) {
      try {
        this.destination.error(err);
      } finally {
        this.unsubscribe();
      }
    };

    Subscriber.prototype._complete = function () {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    };

    return Subscriber;
  }(Subscription);
  var _bind = Function.prototype.bind;

  function bind(fn, thisArg) {
    return _bind.call(fn, thisArg);
  }

  var ConsumerObserver = function () {
    function ConsumerObserver(partialObserver) {
      this.partialObserver = partialObserver;
    }

    ConsumerObserver.prototype.next = function (value) {
      var partialObserver = this.partialObserver;

      if (partialObserver.next) {
        try {
          partialObserver.next(value);
        } catch (error) {
          handleUnhandledError(error);
        }
      }
    };

    ConsumerObserver.prototype.error = function (err) {
      var partialObserver = this.partialObserver;

      if (partialObserver.error) {
        try {
          partialObserver.error(err);
        } catch (error) {
          handleUnhandledError(error);
        }
      } else {
        handleUnhandledError(err);
      }
    };

    ConsumerObserver.prototype.complete = function () {
      var partialObserver = this.partialObserver;

      if (partialObserver.complete) {
        try {
          partialObserver.complete();
        } catch (error) {
          handleUnhandledError(error);
        }
      }
    };

    return ConsumerObserver;
  }();

  var SafeSubscriber = function (_super) {
    __extends(SafeSubscriber, _super);

    function SafeSubscriber(observerOrNext, error, complete) {
      var _this = _super.call(this) || this;

      var partialObserver;

      if (isFunction(observerOrNext) || !observerOrNext) {
        partialObserver = {
          next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined,
          error: error !== null && error !== void 0 ? error : undefined,
          complete: complete !== null && complete !== void 0 ? complete : undefined
        };
      } else {
        var context_1;

        if (_this && config.useDeprecatedNextContext) {
          context_1 = Object.create(observerOrNext);

          context_1.unsubscribe = function () {
            return _this.unsubscribe();
          };

          partialObserver = {
            next: observerOrNext.next && bind(observerOrNext.next, context_1),
            error: observerOrNext.error && bind(observerOrNext.error, context_1),
            complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
          };
        } else {
          partialObserver = observerOrNext;
        }
      }

      _this.destination = new ConsumerObserver(partialObserver);
      return _this;
    }

    return SafeSubscriber;
  }(Subscriber);

  function handleUnhandledError(error) {
    {
      reportUnhandledError(error);
    }
  }

  function defaultErrorHandler(err) {
    throw err;
  }

  var EMPTY_OBSERVER = {
    closed: true,
    next: noop,
    error: defaultErrorHandler,
    complete: noop
  };

  var observable = function () {
    return typeof Symbol === 'function' && Symbol.observable || '@@observable';
  }();

  function identity(x) {
    return x;
  }

  function pipeFromArray(fns) {
    if (fns.length === 0) {
      return identity;
    }

    if (fns.length === 1) {
      return fns[0];
    }

    return function piped(input) {
      return fns.reduce(function (prev, fn) {
        return fn(prev);
      }, input);
    };
  }

  var Observable = function () {
    function Observable(subscribe) {
      if (subscribe) {
        this._subscribe = subscribe;
      }
    }

    Observable.prototype.lift = function (operator) {
      var observable = new Observable();
      observable.source = this;
      observable.operator = operator;
      return observable;
    };

    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
      var _this = this;

      var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
      errorContext(function () {
        var _a = _this,
            operator = _a.operator,
            source = _a.source;
        subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
      });
      return subscriber;
    };

    Observable.prototype._trySubscribe = function (sink) {
      try {
        return this._subscribe(sink);
      } catch (err) {
        sink.error(err);
      }
    };

    Observable.prototype.forEach = function (_next, promiseCtor) {
      var _this = this;

      promiseCtor = getPromiseCtor(promiseCtor);
      return new promiseCtor(function (resolve, reject) {
        var subscriber = new SafeSubscriber({
          next: function next(value) {
            try {
              _next(value);
            } catch (err) {
              reject(err);
              subscriber.unsubscribe();
            }
          },
          error: reject,
          complete: resolve
        });

        _this.subscribe(subscriber);
      });
    };

    Observable.prototype._subscribe = function (subscriber) {
      var _a;

      return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };

    Observable.prototype[observable] = function () {
      return this;
    };

    Observable.prototype.pipe = function () {
      var operations = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        operations[_i] = arguments[_i];
      }

      return pipeFromArray(operations)(this);
    };

    Observable.prototype.toPromise = function (promiseCtor) {
      var _this = this;

      promiseCtor = getPromiseCtor(promiseCtor);
      return new promiseCtor(function (resolve, reject) {
        var value;

        _this.subscribe(function (x) {
          return value = x;
        }, function (err) {
          return reject(err);
        }, function () {
          return resolve(value);
        });
      });
    };

    Observable.create = function (subscribe) {
      return new Observable(subscribe);
    };

    return Observable;
  }();

  function getPromiseCtor(promiseCtor) {
    var _a;

    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
  }

  function isObserver(value) {
    return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
  }

  function isSubscriber(value) {
    return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
  }

  function hasLift(source) {
    return isFunction(source === null || source === void 0 ? void 0 : source.lift);
  }
  function operate(init) {
    return function (source) {
      if (hasLift(source)) {
        return source.lift(function (liftedSource) {
          try {
            return init(liftedSource, this);
          } catch (err) {
            this.error(err);
          }
        });
      }

      throw new TypeError('Unable to lift unknown Observable type');
    };
  }

  function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
  }

  var OperatorSubscriber = function (_super) {
    __extends(OperatorSubscriber, _super);

    function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
      var _this = _super.call(this, destination) || this;

      _this.onFinalize = onFinalize;
      _this.shouldUnsubscribe = shouldUnsubscribe;
      _this._next = onNext ? function (value) {
        try {
          onNext(value);
        } catch (err) {
          destination.error(err);
        }
      } : _super.prototype._next;
      _this._error = onError ? function (err) {
        try {
          onError(err);
        } catch (err) {
          destination.error(err);
        } finally {
          this.unsubscribe();
        }
      } : _super.prototype._error;
      _this._complete = onComplete ? function () {
        try {
          onComplete();
        } catch (err) {
          destination.error(err);
        } finally {
          this.unsubscribe();
        }
      } : _super.prototype._complete;
      return _this;
    }

    OperatorSubscriber.prototype.unsubscribe = function () {
      var _a;

      if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
        var closed_1 = this.closed;

        _super.prototype.unsubscribe.call(this);

        !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
      }
    };

    return OperatorSubscriber;
  }(Subscriber);

  var ObjectUnsubscribedError = createErrorClass(function (_super) {
    return function ObjectUnsubscribedErrorImpl() {
      _super(this);

      this.name = 'ObjectUnsubscribedError';
      this.message = 'object unsubscribed';
    };
  });

  var Subject = function (_super) {
    __extends(Subject, _super);

    function Subject() {
      var _this = _super.call(this) || this;

      _this.closed = false;
      _this.currentObservers = null;
      _this.observers = [];
      _this.isStopped = false;
      _this.hasError = false;
      _this.thrownError = null;
      return _this;
    }

    Subject.prototype.lift = function (operator) {
      var subject = new AnonymousSubject(this, this);
      subject.operator = operator;
      return subject;
    };

    Subject.prototype._throwIfClosed = function () {
      if (this.closed) {
        throw new ObjectUnsubscribedError();
      }
    };

    Subject.prototype.next = function (value) {
      var _this = this;

      errorContext(function () {
        var e_1, _a;

        _this._throwIfClosed();

        if (!_this.isStopped) {
          if (!_this.currentObservers) {
            _this.currentObservers = Array.from(_this.observers);
          }

          try {
            for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
              var observer = _c.value;
              observer.next(value);
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        }
      });
    };

    Subject.prototype.error = function (err) {
      var _this = this;

      errorContext(function () {
        _this._throwIfClosed();

        if (!_this.isStopped) {
          _this.hasError = _this.isStopped = true;
          _this.thrownError = err;
          var observers = _this.observers;

          while (observers.length) {
            observers.shift().error(err);
          }
        }
      });
    };

    Subject.prototype.complete = function () {
      var _this = this;

      errorContext(function () {
        _this._throwIfClosed();

        if (!_this.isStopped) {
          _this.isStopped = true;
          var observers = _this.observers;

          while (observers.length) {
            observers.shift().complete();
          }
        }
      });
    };

    Subject.prototype.unsubscribe = function () {
      this.isStopped = this.closed = true;
      this.observers = this.currentObservers = null;
    };

    Object.defineProperty(Subject.prototype, "observed", {
      get: function get() {
        var _a;

        return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
      },
      enumerable: false,
      configurable: true
    });

    Subject.prototype._trySubscribe = function (subscriber) {
      this._throwIfClosed();

      return _super.prototype._trySubscribe.call(this, subscriber);
    };

    Subject.prototype._subscribe = function (subscriber) {
      this._throwIfClosed();

      this._checkFinalizedStatuses(subscriber);

      return this._innerSubscribe(subscriber);
    };

    Subject.prototype._innerSubscribe = function (subscriber) {
      var _this = this;

      var _a = this,
          hasError = _a.hasError,
          isStopped = _a.isStopped,
          observers = _a.observers;

      if (hasError || isStopped) {
        return EMPTY_SUBSCRIPTION;
      }

      this.currentObservers = null;
      observers.push(subscriber);
      return new Subscription(function () {
        _this.currentObservers = null;
        arrRemove(observers, subscriber);
      });
    };

    Subject.prototype._checkFinalizedStatuses = function (subscriber) {
      var _a = this,
          hasError = _a.hasError,
          thrownError = _a.thrownError,
          isStopped = _a.isStopped;

      if (hasError) {
        subscriber.error(thrownError);
      } else if (isStopped) {
        subscriber.complete();
      }
    };

    Subject.prototype.asObservable = function () {
      var observable = new Observable();
      observable.source = this;
      return observable;
    };

    Subject.create = function (destination, source) {
      return new AnonymousSubject(destination, source);
    };

    return Subject;
  }(Observable);

  var AnonymousSubject = function (_super) {
    __extends(AnonymousSubject, _super);

    function AnonymousSubject(destination, source) {
      var _this = _super.call(this) || this;

      _this.destination = destination;
      _this.source = source;
      return _this;
    }

    AnonymousSubject.prototype.next = function (value) {
      var _a, _b;

      (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    };

    AnonymousSubject.prototype.error = function (err) {
      var _a, _b;

      (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
    };

    AnonymousSubject.prototype.complete = function () {
      var _a, _b;

      (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
    };

    AnonymousSubject.prototype._subscribe = function (subscriber) {
      var _a, _b;

      return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
    };

    return AnonymousSubject;
  }(Subject);

  var BehaviorSubject = function (_super) {
    __extends(BehaviorSubject, _super);

    function BehaviorSubject(_value) {
      var _this = _super.call(this) || this;

      _this._value = _value;
      return _this;
    }

    Object.defineProperty(BehaviorSubject.prototype, "value", {
      get: function get() {
        return this.getValue();
      },
      enumerable: false,
      configurable: true
    });

    BehaviorSubject.prototype._subscribe = function (subscriber) {
      var subscription = _super.prototype._subscribe.call(this, subscriber);

      !subscription.closed && subscriber.next(this._value);
      return subscription;
    };

    BehaviorSubject.prototype.getValue = function () {
      var _a = this,
          hasError = _a.hasError,
          thrownError = _a.thrownError,
          _value = _a._value;

      if (hasError) {
        throw thrownError;
      }

      this._throwIfClosed();

      return _value;
    };

    BehaviorSubject.prototype.next = function (value) {
      _super.prototype.next.call(this, this._value = value);
    };

    return BehaviorSubject;
  }(Subject);

  function last(arr) {
    return arr[arr.length - 1];
  }

  function popResultSelector(args) {
    return isFunction(last(args)) ? args.pop() : undefined;
  }

  var isArrayLike = function isArrayLike(x) {
    return x && typeof x.length === 'number' && typeof x !== 'function';
  };

  function isPromise(value) {
    return isFunction(value === null || value === void 0 ? void 0 : value.then);
  }

  function isInteropObservable(input) {
    return isFunction(input[observable]);
  }

  function isAsyncIterable(obj) {
    return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
  }

  function createInvalidObservableTypeError(input) {
    return new TypeError("You provided " + (input !== null && _typeof(input) === 'object' ? 'an invalid object' : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
  }

  function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
      return '@@iterator';
    }

    return Symbol.iterator;
  }
  var iterator = getSymbolIterator();

  function isIterable(input) {
    return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
  }

  function readableStreamLikeToAsyncGenerator(readableStream) {
    return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
      var reader, _a, value, done;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            reader = readableStream.getReader();
            _b.label = 1;

          case 1:
            _b.trys.push([1,, 9, 10]);

            _b.label = 2;

          case 2:
            return [4, __await(reader.read())];

          case 3:
            _a = _b.sent(), value = _a.value, done = _a.done;
            if (!done) return [3, 5];
            return [4, __await(void 0)];

          case 4:
            return [2, _b.sent()];

          case 5:
            return [4, __await(value)];

          case 6:
            return [4, _b.sent()];

          case 7:
            _b.sent();

            return [3, 2];

          case 8:
            return [3, 10];

          case 9:
            reader.releaseLock();
            return [7];

          case 10:
            return [2];
        }
      });
    });
  }
  function isReadableStreamLike(obj) {
    return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
  }

  function innerFrom(input) {
    if (input instanceof Observable) {
      return input;
    }

    if (input != null) {
      if (isInteropObservable(input)) {
        return fromInteropObservable(input);
      }

      if (isArrayLike(input)) {
        return fromArrayLike(input);
      }

      if (isPromise(input)) {
        return fromPromise(input);
      }

      if (isAsyncIterable(input)) {
        return fromAsyncIterable(input);
      }

      if (isIterable(input)) {
        return fromIterable(input);
      }

      if (isReadableStreamLike(input)) {
        return fromReadableStreamLike(input);
      }
    }

    throw createInvalidObservableTypeError(input);
  }
  function fromInteropObservable(obj) {
    return new Observable(function (subscriber) {
      var obs = obj[observable]();

      if (isFunction(obs.subscribe)) {
        return obs.subscribe(subscriber);
      }

      throw new TypeError('Provided object does not correctly implement Symbol.observable');
    });
  }
  function fromArrayLike(array) {
    return new Observable(function (subscriber) {
      for (var i = 0; i < array.length && !subscriber.closed; i++) {
        subscriber.next(array[i]);
      }

      subscriber.complete();
    });
  }
  function fromPromise(promise) {
    return new Observable(function (subscriber) {
      promise.then(function (value) {
        if (!subscriber.closed) {
          subscriber.next(value);
          subscriber.complete();
        }
      }, function (err) {
        return subscriber.error(err);
      }).then(null, reportUnhandledError);
    });
  }
  function fromIterable(iterable) {
    return new Observable(function (subscriber) {
      var e_1, _a;

      try {
        for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
          var value = iterable_1_1.value;
          subscriber.next(value);

          if (subscriber.closed) {
            return;
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1["return"])) _a.call(iterable_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      subscriber.complete();
    });
  }
  function fromAsyncIterable(asyncIterable) {
    return new Observable(function (subscriber) {
      process(asyncIterable, subscriber)["catch"](function (err) {
        return subscriber.error(err);
      });
    });
  }
  function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
  }

  function process(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;

    var e_2, _a;

    return __awaiter(this, void 0, void 0, function () {
      var value, e_2_1;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _b.trys.push([0, 5, 6, 11]);

            asyncIterable_1 = __asyncValues(asyncIterable);
            _b.label = 1;

          case 1:
            return [4, asyncIterable_1.next()];

          case 2:
            if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
            value = asyncIterable_1_1.value;
            subscriber.next(value);

            if (subscriber.closed) {
              return [2];
            }

            _b.label = 3;

          case 3:
            return [3, 1];

          case 4:
            return [3, 11];

          case 5:
            e_2_1 = _b.sent();
            e_2 = {
              error: e_2_1
            };
            return [3, 11];

          case 6:
            _b.trys.push([6,, 9, 10]);

            if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1["return"]))) return [3, 8];
            return [4, _a.call(asyncIterable_1)];

          case 7:
            _b.sent();

            _b.label = 8;

          case 8:
            return [3, 10];

          case 9:
            if (e_2) throw e_2.error;
            return [7];

          case 10:
            return [7];

          case 11:
            subscriber.complete();
            return [2];
        }
      });
    });
  }

  function takeUntil(notifier) {
    return operate(function (source, subscriber) {
      innerFrom(notifier).subscribe(createOperatorSubscriber(subscriber, function () {
        return subscriber.complete();
      }, noop));
      !subscriber.closed && source.subscribe(subscriber);
    });
  }

  function withLatestFrom() {
    var inputs = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      inputs[_i] = arguments[_i];
    }

    var project = popResultSelector(inputs);
    return operate(function (source, subscriber) {
      var len = inputs.length;
      var otherValues = new Array(len);
      var hasValue = inputs.map(function () {
        return false;
      });
      var ready = false;

      var _loop_1 = function _loop_1(i) {
        innerFrom(inputs[i]).subscribe(createOperatorSubscriber(subscriber, function (value) {
          otherValues[i] = value;

          if (!ready && !hasValue[i]) {
            hasValue[i] = true;
            (ready = hasValue.every(identity)) && (hasValue = null);
          }
        }, noop));
      };

      for (var i = 0; i < len; i++) {
        _loop_1(i);
      }

      source.subscribe(createOperatorSubscriber(subscriber, function (value) {
        if (ready) {
          var values = __spreadArray([value], __read(otherValues));

          subscriber.next(project ? project.apply(void 0, __spreadArray([], __read(values))) : values);
        }
      }));
    });
  }

  var CSSCustomPropertiesWatch =
  /** @class */
  function () {
    /**
     * Constructor. Only does the monkey patching.
     */
    function CSSCustomPropertiesWatch() {
      // Holds the original setProperty()-method.
      this._originalSetProperty = CSSStyleDeclaration.prototype.setProperty; // Array of all watchers.

      this._watchers = [];
      CSSStyleDeclaration.prototype.setProperty = this._setProperty(this);
    }
    /**
     * Adds a watcher RxJS Subject to an element, to watch for changes on CSS custom properties.
     *
     * @param $el The element to watch for changes on CSS custom properties. Default is :root.
     * @returns The watcher RxJS Subject
     */


    CSSCustomPropertiesWatch.prototype.watch$ = function ($el) {
      var _this = this;

      if ($el === void 0) {
        $el = document.documentElement;
      }

      var watcherMatch = this._getWatcherMatch($el.style);

      if (watcherMatch === null) {
        var unsubscriber$ = new Subject();
        var subject$ = new Subject().pipe(takeUntil(unsubscriber$));
        var ignoreNext$_1 = new BehaviorSubject(false);
        var newWatcher_1 = {
          cssStyleDeclaration: $el.style,
          ignoreNext$: ignoreNext$_1,
          subject$: subject$,
          unsubscriber$: unsubscriber$
        };
        this._watchers = this._watchers.concat(newWatcher_1);
        subject$.pipe(withLatestFrom(ignoreNext$_1)).subscribe(function (_a) {
          var args = _a[0],
              ignoreNext = _a[1];

          if (ignoreNext === false) {
            _this._setPropertyCheck(newWatcher_1, args, false);
          } else {
            ignoreNext$_1.next(false);
          }
        });
        return subject$;
      }

      return watcherMatch.watcher.subject$;
    };
    /**
     * Unwatches a former watched element. Also removes all subscribers.
     *
     * @param $el The element to unwatch. Default is :root.
     * @returns Whether the element was watched before and the watcher has been removed or not
     */


    CSSCustomPropertiesWatch.prototype.unwatch = function ($el) {
      if ($el === void 0) {
        $el = document.documentElement;
      }

      var watcherMatch = this._getWatcherMatch($el.style);

      if (watcherMatch !== null) {
        // quit all subscriptions
        watcherMatch.watcher.unsubscriber$.next();
        watcherMatch.watcher.unsubscriber$.complete(); // remove watcher from list

        this._watchers = this._watchers.slice(0, watcherMatch.i).concat(this._watchers.slice(watcherMatch.i + 1));
        return true;
      }

      return false;
    };
    /**
     * Returns a monkey patched setProperty()-method with both scopes, the context of this class and the context
     * of the CSSStyleDeclaration.
     *
     * @param context The context of this class
     * @returns A monkey patched setProperty()-method
     */


    CSSCustomPropertiesWatch.prototype._setProperty = function (context) {
      return function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        if (this && args[0].slice(0, 2) === '--') {
          var watcherMatch = context._getWatcherMatch(this);

          if (watcherMatch !== null) {
            context._setPropertyCheck.apply(context, [watcherMatch.watcher, args, true]);

            return;
          }
        }

        context._originalSetProperty.apply(this, args);
      };
    };
    /**
     * Finally sets the CSS custom property with the original setProperty()-method and additionally checks
     * whether it is necessary to do so and whether it has any effect. (Because the user might provide an
     * invalid data, which causes the browser to ignore it or - with the new registerProperty()-method - provide
     * a fallback value.)
     *
     * @param watcher The watcher related to the CSSStyleDeclaration
     * @param args The original arguments
     * @param next Whether to call next() on the RxJS Subject after everything has been done
     */


    CSSCustomPropertiesWatch.prototype._setPropertyCheck = function (watcher, args, next) {
      var oldValue = watcher.cssStyleDeclaration.getPropertyValue(args[0]); // only do something if the values are not the same.

      if (args[1] !== oldValue) {
        this._originalSetProperty.apply(watcher.cssStyleDeclaration, args);

        var newValue = watcher.cssStyleDeclaration.getPropertyValue(args[0]); // sometimes changing a property to an invalid value can lead to the initial value being
        // set, which can be the old value. then nothing should be done.

        if (newValue !== oldValue && next === true) {
          // make sure _setPropertyCheck() is not called twice because of the subscription
          watcher.ignoreNext$.next(true);
          watcher.subject$.next(args.slice(0, 1).concat(newValue, args.slice(2)));
        } // if the new value is not the one which should have been set, then something went wrong, so we
        // throw an exception here.


        if (newValue !== args[1]) {
          throw new Error("Error: \"".concat(args[0], "\" could not be set to \"").concat(args[1], "\", because its syntax might be invalid, inspite it was set to \"").concat(newValue, "\"."));
        }
      }
    };
    /**
     * Finds the related watcher for a given CSSStyleDeclaration.
     *
     * @param cssStyleDeclaration A given CSSStyleDeclaration to find the related watcher for.
     * @returns The related watcher for a given CSSStyleDeclaration
     */


    CSSCustomPropertiesWatch.prototype._getWatcherMatch = function (cssStyleDeclaration) {
      return this._watchers.reduce(function (watcherMatch, watcher, i) {
        if (watcher.cssStyleDeclaration === cssStyleDeclaration) {
          return {
            i: i,
            watcher: watcher
          };
        }

        return watcherMatch;
      }, null);
    };

    return CSSCustomPropertiesWatch;
  }();

  return CSSCustomPropertiesWatch;

})();
