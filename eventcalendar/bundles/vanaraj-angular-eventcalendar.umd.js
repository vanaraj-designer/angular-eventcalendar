(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@vanaraj/angular-eventcalendar', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.vanaraj = global.vanaraj || {}, global.vanaraj['angular-eventcalendar'] = {}), global.ng.core, global.ng.common));
}(this, (function (exports, i0, common) { 'use strict';

    var EventcalendarService = /** @class */ (function () {
        function EventcalendarService() {
        }
        return EventcalendarService;
    }());
    EventcalendarService.ɵprov = i0.ɵɵdefineInjectable({ factory: function EventcalendarService_Factory() { return new EventcalendarService(); }, token: EventcalendarService, providedIn: "root" });
    EventcalendarService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    EventcalendarService.ctorParameters = function () { return []; };

    /*! *****************************************************************************
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
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
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
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
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
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var EventcalendarComponent = /** @class */ (function () {
        function EventcalendarComponent() {
            this.options = {};
            this.addEvent = new i0.EventEmitter();
            this.updateEvent = new i0.EventEmitter();
            this.gotoMonth = 0;
            this.count = 0;
            this.events = [];
            this.acutalEvent = [];
            this.filterEvent = [];
            this.isEventClicked = false;
            this.openMoreModal = false;
            this.currentMonth = '';
            this.displayDate = '';
            this.weekdaysShort = [];
            this.weekdaysLong = [];
            this.title = '';
            this.btnPrimaryBgColor = '';
            this.btnPrimaryFontColor = '';
            this.showEventProfilePicture = true;
            this.isAddShown = false;
            this.isEditShown = false;
            this.eventID = '';
            this.eventName = '';
            this.startDate = '';
            this.endDate = '';
        }
        EventcalendarComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            this.events = this.options.events || [];
            this.title =
                this.options.title === '' || this.options.title === undefined
                    ? 'My Calendar'
                    : this.options.title;
            this.btnPrimaryBgColor =
                this.options.btnPrimaryBgColor === '' ||
                    this.options.btnPrimaryBgColor === undefined
                    ? '#7466f5'
                    : this.options.btnPrimaryBgColor;
            this.btnPrimaryFontColor =
                this.options.btnPrimaryFontColor === '' ||
                    this.options.btnPrimaryFontColor === undefined
                    ? '#fff'
                    : this.options.btnPrimaryFontColor;
            this.showEventProfilePicture =
                this.options.showEventProfilePicture === false ? false : true;
            this.weekdaysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            this.weekdaysLong = [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
            ];
            this.eventCalendar();
            var d = new Date();
            var day = d.getDate();
            var month = d.getMonth();
            var year = d.getFullYear();
            for (var i = 1; i <= 12; i++) {
                var dt = new Date(year, month, day);
                dt.setMonth(dt.getMonth() + (6 - (12 - i)));
                var monthLists = document.createElement('a');
                monthLists.setAttribute('data-id', (6 - (12 - i)).toString());
                monthLists.innerText =
                    dt.toLocaleDateString('en-us', { month: 'short' }) + ', ' + year;
                monthLists.addEventListener('click', function (e) {
                    _this.getSelectMonth(e);
                });
                (_a = document.querySelector('.ec-dropdown-content')) === null || _a === void 0 ? void 0 : _a.appendChild(monthLists);
            }
        };
        EventcalendarComponent.prototype.eventCalendar = function () {
            var _this = this;
            var _a, _b, _c;
            var dt = new Date();
            if (this.gotoMonth !== 0) {
                dt.setMonth(new Date().getMonth() + this.gotoMonth);
            }
            var day = dt.getDate();
            var month = dt.getMonth();
            var year = dt.getFullYear();
            var numberOfDaysInMonth = new Date(year, month + 1, 0).getDate();
            var numberOfDaysInPrevMonth = new Date(year, month, 0).getDate();
            var firstDayOfMonth = new Date(year, month, 1);
            var findNameOfDay = firstDayOfMonth.toLocaleDateString('en-us', {
                weekday: 'long',
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
            });
            this.currentMonth =
                dt.toLocaleDateString('en-us', { month: 'short' }) + ', ' + year;
            var paddingDays = this.weekdaysLong.indexOf(findNameOfDay.split(', ')[0]);
            var prevMonthsRemainingDays = numberOfDaysInPrevMonth - paddingDays + 1;
            var nextMonthsRemainingDays = 42 - (paddingDays + numberOfDaysInMonth);
            var remove = document.querySelector('.ec-dates');
            while (remove === null || remove === void 0 ? void 0 : remove.lastElementChild) {
                remove.removeChild(remove.lastElementChild);
            }
            if (paddingDays !== 0) {
                for (var i = prevMonthsRemainingDays; i <= numberOfDaysInPrevMonth; i++) {
                    var parent = document.createElement('div');
                    parent.classList.add('ec-dt');
                    var child = document.createElement('div');
                    child.classList.add('ec-dt-child', 'ec-dt-disable');
                    child.setAttribute('data-dt', year + "-" + month + "-" + i);
                    child.innerText = i.toString();
                    parent.appendChild(child);
                    (_a = document.querySelector('.ec-dates')) === null || _a === void 0 ? void 0 : _a.appendChild(parent);
                }
            }
            var _loop_1 = function (i) {
                var parent = document.createElement('div');
                parent.classList.add('ec-dt');
                var child = document.createElement('div');
                child.classList.add('ec-dt-child');
                child.setAttribute('data-dt', year + "-" + (month + 1) + "-" + i);
                var date = document.createElement('div');
                date.classList.add('ec-date');
                date.style.order = '1';
                date.innerText = i.toString();
                child.appendChild(date);
                var dayString = year + "-" + (month + 1) + "-" + i;
                var more = document.createElement('div');
                this_1.events.filter(function (e, i) { return new Date(dayString).getTime() >= new Date(e.startDate).getTime() &&
                    new Date(dayString).getTime() <= new Date(e.endDate).getTime()
                    ? (child.appendChild(_this.createNavigationBar(e, i)),
                        _this.count > 3
                            ? (more.classList.add('ec-more'),
                                (more.innerText = '+' + (_this.count - 3).toString() + ' more'),
                                more.setAttribute('data-dt', dayString),
                                more.addEventListener('click', function () {
                                    showMore();
                                }, {
                                    once: true,
                                }))
                            : null)
                    : null; });
                var showMore = function () {
                    _this.filterEvent = [];
                    _this.acutalEvent = [];
                    _this.displayDate = new Date(year, month, i).toLocaleDateString('en-us', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                    });
                    _this.events.filter(function (f, i) { return new Date(dayString).getTime() >= new Date(f.startDate).getTime() &&
                        new Date(dayString).getTime() <= new Date(f.endDate).getTime()
                        ? _this.acutalEvent.push(f)
                        : ''; });
                    _this.filterEvent = __spread(new Set(_this.acutalEvent));
                    console.log(_this.filterEvent);
                    _this.dayString = dayString;
                    _this.openMoreModal = true;
                };
                child.appendChild(more);
                this_1.count = 0;
                parent.appendChild(child);
                (_b = document.querySelector('.ec-dates')) === null || _b === void 0 ? void 0 : _b.appendChild(parent);
            };
            var this_1 = this;
            for (var i = 1; i <= numberOfDaysInMonth; i++) {
                _loop_1(i);
            }
            for (var i = 1; i <= nextMonthsRemainingDays; i++) {
                var parent = document.createElement('div');
                parent.classList.add('ec-dt');
                var child = document.createElement('div');
                child.classList.add('ec-dt-child', 'ec-dt-disable');
                child.setAttribute('data-dt', year + "-" + (month + 2) + "-" + i);
                child.innerText = i.toString();
                parent.appendChild(child);
                (_c = document.querySelector('.ec-dates')) === null || _c === void 0 ? void 0 : _c.appendChild(parent);
            }
        };
        EventcalendarComponent.prototype.createNavigationBar = function (e, i) {
            this.count = this.count + 1;
            if (this.count <= 3) {
                return this.gridNavigationBar(e, true, i);
            }
            else {
                return this.gridNavigationBar(e, false, i);
            }
        };
        EventcalendarComponent.prototype.gridNavigationBar = function (e, toggle, i) {
            var _this = this;
            var eventBar = document.createElement('div');
            eventBar.style.backgroundColor = e.background;
            if (toggle) {
                eventBar.classList.add('ec-event-title');
            }
            else {
                eventBar.classList.add('ec-event-title', 'ec-extra');
            }
            eventBar.style.order = i + 2;
            eventBar.addEventListener('click', function () {
                console.log(e);
                _this.selectEvent(e);
            });
            var img = document.createElement('img');
            if (this.showEventProfilePicture) {
                if (e.thumbnail) {
                    img.setAttribute('src', e.thumbnail);
                }
                else {
                    img.setAttribute('src', "data:image/png;base64,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");
                }
                eventBar.appendChild(img);
            }
            var title = document.createElement('div');
            title.innerText = e.title;
            title.setAttribute('title', e.title);
            eventBar.appendChild(title);
            return eventBar;
        };
        EventcalendarComponent.prototype.addUnavailable = function () {
            this.isAddShown = true;
            this.isEditShown = false;
        };
        EventcalendarComponent.prototype.eventTitle = function (e) {
            this.eventName = e.target.value;
        };
        EventcalendarComponent.prototype.eventStartDate = function (e) {
            var start = e.target.value;
            var sd = new Date(start);
            this.startDate =
                sd.getFullYear() + '-' + (sd.getMonth() + 1) + '-' + sd.getDate();
        };
        EventcalendarComponent.prototype.eventEndDate = function (e) {
            var end = e.target.value;
            var ed = new Date(end);
            this.endDate =
                ed.getFullYear() + '-' + (ed.getMonth() + 1) + '-' + ed.getDate();
        };
        EventcalendarComponent.prototype.addNewEvent = function (e) {
            e.preventDefault();
            var newEvent = {
                title: this.eventName,
                startDate: this.startDate,
                endDate: this.endDate,
            };
            console.log(newEvent);
            this.addEvent.emit(newEvent);
            this.cancel();
        };
        EventcalendarComponent.prototype.selectEvent = function (e) {
            this.isAddShown = false;
            this.openMoreModal = false;
            this.isEditShown = true;
            var s = new Date(e.startDate);
            var start = s.getFullYear() + '-' + (s.getMonth() + 1) + '-' + s.getDate();
            var ed = new Date(e.endDate);
            var end = ed.getFullYear() + '-' + (ed.getMonth() + 1) + '-' + ed.getDate();
            this.eventID = e.id;
            this.eventName = e.title;
            this.startDate = new Date(start);
            this.endDate = new Date(end);
        };
        EventcalendarComponent.prototype.update = function (e) {
            e.preventDefault();
            var s = new Date(this.startDate);
            var start = s.getFullYear() + '-' + (s.getMonth() + 1) + '-' + s.getDate();
            var ed = new Date(this.endDate);
            var end = ed.getFullYear() + '-' + (ed.getMonth() + 1) + '-' + ed.getDate();
            var event = {
                id: this.eventID,
                title: this.eventName,
                startDate: start,
                endDate: end,
            };
            console.log(event);
            this.updateEvent.emit(event);
            this.cancel();
        };
        EventcalendarComponent.prototype.previousMonth = function () {
            this.gotoMonth = this.gotoMonth - 1;
            this.eventCalendar();
        };
        EventcalendarComponent.prototype.nextMonth = function () {
            this.gotoMonth = this.gotoMonth + 1;
            this.eventCalendar();
        };
        EventcalendarComponent.prototype.getSelectMonth = function (e) {
            var s = e.target.getAttribute('data-id');
            this.gotoMonth = parseInt(s);
            this.eventCalendar();
        };
        EventcalendarComponent.prototype.closeMoreModal = function () {
            this.openMoreModal = false;
            this.eventCalendar();
        };
        EventcalendarComponent.prototype.cancel = function () {
            this.isAddShown = false;
            this.isEditShown = false;
        };
        return EventcalendarComponent;
    }());
    EventcalendarComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'angular-eventcalendar',
                    template: "<div class=\"ec-container\">\r\n    <!-- Header -->\r\n    <div class=\"ec-header\">\r\n        <div class=\"ec-header-left\">\r\n            <div class=\"ec-title\">{{title}}</div>\r\n            <div class=\"ec-dropdown-wrap\">\r\n                <div class=\"ec-dropdown\">\r\n                    <div class=\"ec-dropbtn\">\r\n                        <span class=\"ec-display\" [ngStyle]=\"{'color': btnPrimaryBgColor}\">{{currentMonth}}</span>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"ec-shift\">\r\n                <span (click)=\"previousMonth()\">\r\n                    <svg width=\"8\" height=\"14\" viewBox=\"0 0 8 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                        <path d=\"M7 1L1.70711 6.29289C1.31658 6.68342 1.31658 7.31658 1.70711 7.70711L7 13\"\r\n                            [attr.stroke]=\"btnPrimaryBgColor\" stroke-width=\"2\" stroke-linecap=\"round\" />\r\n                    </svg>\r\n                </span>\r\n                <span (click)=\"nextMonth()\">\r\n                    <svg width=\"8\" height=\"14\" viewBox=\"0 0 8 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                        <path d=\"M1 13L6.29289 7.70711C6.68342 7.31658 6.68342 6.68342 6.29289 6.29289L1 1\"\r\n                            [attr.stroke]=\"btnPrimaryBgColor\" stroke-width=\"2\" stroke-linecap=\"round\" />\r\n                    </svg>\r\n                </span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ec-header-right\">\r\n            <button class=\"ec-event-btn\" (click)=\"addUnavailable()\"\r\n                [ngStyle]=\"{'background-color': btnPrimaryBgColor, 'color': btnPrimaryFontColor}\">Add New\r\n                Events</button>\r\n        </div>\r\n    </div>\r\n    <!-- EOD Header -->\r\n\r\n    <!-- Weekends -->\r\n    <div class=\"ec-weeks\">\r\n        <div *ngFor=\"let day of weekdaysShort\" class=\"ec-weekday\">{{day}}</div>\r\n    </div>\r\n    <!-- EOD Weekends -->\r\n\r\n    <!-- Week Dates -->\r\n    <div id=\"ec-dates\" class=\"ec-dates\"></div>\r\n    <!-- EOD Week Dates -->\r\n\r\n    <div class=\"ec-more-modal\" *ngIf=\"openMoreModal\">\r\n        <div class='ec-more-dialog'>\r\n            <div class='ec-more-content'>\r\n                <div class=\"ce-more-close\" (click)=\"closeMoreModal()\">\r\n                    <img\r\n                        src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAAAB3RJTUUH5QgWAhMLOuYvZwAAAmxJREFUSMetlE1oE1EUhe+bJFpdKQmmzksyMQlVu5BKprbWhRkrEtAqFgRBcSFSUQwarAZxrZiFKEUXZuOmiBAsFqxEGjIlFX9QaAON1UymJkYjEUuLgmIyneembxYtIb93O3e+c7jn3Qt4D3fUHYtGcafth3txasoatAZ39rAsNLkol+pQXYYcAxPsaG2FPOpE+zs61AfIyYyIYrOMUA7lUh1yFXqQz2xmkKy06Ba8XvIaLsFAOg3/0GV0qK1NvYYI45+YsPgt/u4cxrUKb9q35UzXI7NZxcxzZnB8nHKhn0ThVDa7dBgGdTN9fdoP2Id9uySLhf3C3eFDkoQxx/E8IZix3XKHU6lqjVBhPMztdY8kkxrHZ5P4oUzGTDjSRez2soB6jdQrjCoZIVf0DlUURbQb7kLI5YLv5BwJSBK6qBYM3YJQTBh+k0lFMZxWJaUlFoMAZNDN9nY6amUIuXQ+j6eAsugtymSqNkCLve48wv+xWsGrYBgQRXQcxuCj0wlryW3yLJXSGpczJo/hIGyTZYjov0FIEPI35NH363O5Wt9Q9dHUmvGK0lfbWEqu+YvelUqGuPqUmIrFVeO7D0/I5mLRoF8qoK+lUrXcihGs2mM66iBshZ9zcxooAJ/A5HDQaJizRFb7BSEXyAWmXuXz5fhMuQ8V9/gEvNB97u2FWf06+ODxaNk3ekfqXSf6WNlJ7jx/Mp2u+Y40fEDqNdIs4bqNsL9sD/lwIkEb2GHuAG+XZW3/GyzNyDJXM2K0vXSPTk8jPMaF+TfxOCzAPZI3GsmsfgPyer1NOyArjKDtyiKJRCKwES4gdn7+P/vCu2q6rSdSAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA4LTIyVDAyOjE5OjExKzAwOjAwdpPgeAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wOC0yMlQwMjoxOToxMSswMDowMAfOWMQAAAAASUVORK5CYII=\" />\r\n                </div>\r\n                <div class='ec-more-header'>\r\n                    <div>Events on</div>\r\n                    <div>\r\n                        {{displayDate}}\r\n                    </div>\r\n                </div>\r\n                <div class='ec-more-lists'>\r\n                    <div *ngFor=\"let f of filterEvent\" class=\"ec-more-list\">\r\n                        <div class=\"ec-more-pro\" [ngStyle]=\"{'background-color': f.background}\"\r\n                            (click)=\"selectEvent(f)\">\r\n                            <div *ngIf=\"showEventProfilePicture\">\r\n                                <img *ngIf=\"f.thumbnail\" src=\"{{f.thumbnail}}\" />\r\n\r\n                                <img *ngIf=\"f.thumbnail === '' || f.thumbnail === 'undefined'\"\r\n                                    src=\"data:image/png;base64,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\" />\r\n                            </div>\r\n                            <div>\r\n                                <div>{{f.title}}</div>\r\n                                <div>{{f.startDate | date: 'MM/dd/yyyy'}} - {{f.endDate | date: 'MM/dd/yyyy'}}</div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"isAddShown\">\r\n    <form class=\"ec-popup\">\r\n        <div class=\"ec-modal\">\r\n            <div class=\"ec-box\">\r\n                <div class=\"tt\">Add New Event</div>\r\n                <div class=\"dd\">\r\n                    <div>\r\n                        <div>Title</div>\r\n                        <div class=\"form-group ec-select-icon\">\r\n                            <input type=\"text\" class=\"form-control\" value=\"{{eventName}}\"\r\n                                (keyup)=\"eventTitle($event)\" />\r\n                        </div>\r\n                    </div>\r\n                    <div>\r\n                        <div>Dates</div>\r\n                        <div class=\"form-group ec-dates\">\r\n                            <div><input type=\"date\" class=\"form-control custom-date\" [valueAsDate]=\"startDate\"\r\n                                    (change)=\"eventStartDate($event)\" />\r\n                            </div>\r\n                            <div><input type=\"date\" class=\"form-control custom-date\" [valueAsDate]=\"endDate\"\r\n                                    (change)=\"eventEndDate($event)\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"cc form-group\">\r\n                    <button class=\"btn blue-btn\" (click)=\"addNewEvent($event)\">Save</button>\r\n                    <button class=\"btn grey-btn\" (click)=\"cancel()\">Cancel</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<div *ngIf=\"isEditShown\">\r\n    <form class=\"ec-popup\">\r\n        <div class=\"ec-modal\">\r\n            <div class=\"ec-box\">\r\n                <div class=\"tt\">Edit Event</div>\r\n                <div class=\"dd\">\r\n                    <div>\r\n                        <div>Title</div>\r\n                        <div class=\"form-group ec-select-icon\">\r\n                            <input type=\"text\" class=\"form-control\" value=\"{{eventName}}\" disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div>\r\n                        <div>Dates</div>\r\n                        <div class=\"form-group ec-dates\">\r\n                            <div><input type=\"date\" class=\"form-control custom-date\" [valueAsDate]=\"startDate\"\r\n                                    (change)=\"eventStartDate($event)\" />\r\n                            </div>\r\n                            <div><input type=\"date\" class=\"form-control custom-date\" [valueAsDate]=\"endDate\"\r\n                                    (change)=\"eventEndDate($event)\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"cc form-group\">\r\n                    <button class=\"btn blue-btn\" (click)=\"update($event)\">Update</button>\r\n                    <button class=\"btn grey-btn\" (click)=\"cancel()\">Cancel</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>",
                    encapsulation: i0.ViewEncapsulation.None,
                    styles: ["body{font-family:Open Sans,sans-serif;font-size:14px;color:#1b1f34;background-color:#f3f3f3;padding:40px}.ec-container{width:100%;margin:0 auto}.ec-container .ec-header{display:flex;justify-content:space-between;align-items:center}.ec-header .ec-header-left{display:flex;justify-content:flex-start;align-items:center}.ec-header .ec-header-left>div{padding-right:24px}.ec-header .ec-header-left .ec-title{color:#1b1f34;font-size:28px;line-height:36px;font-weight:700;padding-right:46px}.ec-header .ec-header-left .ec-dropdown-wrap{line-height:32px;border-right:1px solid #bbbfce}.ec-header .ec-header-left .ec-dropdown-wrap .ec-dropdown{position:relative;display:inline-block;cursor:pointer}.ec-header .ec-header-left .ec-dropdown-wrap .ec-dropbtn{color:#1b1f34;width:80px;font-size:16px;border:none;font-weight:700;display:flex;justify-content:flex-start;align-items:center}.ec-dropdown-content{display:none;position:absolute;background-color:#fff;min-width:112px;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);z-index:1}.ec-dropdown-content a{color:#777f9d;font-size:14px;padding:8px 28px 8px 15px;text-decoration:none;display:block;border-bottom:1px solid #ececec}.ec-dropdown-content a:hover{color:#7466f5;background-color:#f1f0fe}.ec-dropdown:hover .ec-dropdown-content{display:block}.ec-header .ec-header-left .ec-shift{padding-left:9px;line-height:11px}.ec-header .ec-header-left .ec-shift>span{display:inline-block;padding:0 15px;cursor:pointer}.ec-header-right .ec-event-btn{color:#fff;font-family:Open Sans,sans-serif;font-size:14px;line-height:16px;font-weight:600;background:#7466f5;border:none;padding:10px 15px;border-radius:4px;cursor:pointer}.ec-container .ec-weeks{display:flex;justify-content:space-around;align-items:center;margin-top:50px}.ec-container .ec-weeks .ec-weekday{width:14.28%;padding:0 32px;text-align:right;color:#777f9d;text-transform:uppercase;font-weight:700}.ec-container .ec-dates{display:flex;flex-wrap:wrap;margin-top:12px}.ec-container .ec-dates .ec-dt{width:14.28%;border:1px solid #e7e8ed;box-sizing:border-box}.ec-container .ec-dates .ec-dt>div{display:flex;flex-direction:column;color:#1b1f34;height:120px;background:#fff;font-size:14px;font-weight:400;padding:12px;text-align:right;position:relative}.ec-container .ec-dates .ec-dt .ec-dt-child .ec-event-title{cursor:pointer;color:#1b1f34;font-size:10px;line-height:14px;font-weight:600;text-align:left;padding:2px 3px;border-radius:4px;display:flex;justify-content:flex-start;align-items:center;margin-bottom:3px;z-index:2}.ec-container .ec-dates .ec-dt .ec-dt-child .ec-extra{display:none}.ec-container .ec-dates .ec-dt .ec-dt-child .ec-event-title>img{margin-right:5px;width:16px;height:16px;border-radius:2px}.ec-container .ec-dates .ec-dt .ec-dt-child .ec-event-title>div{width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ec-container .ec-dates .ec-dt .ec-dt-child .ec-date{padding-right:20px;margin-bottom:10px}.ec-container .ec-dates .ec-dt .ec-dt-child .ec-more{position:absolute;top:7px;left:12px;font-size:12px;font-weight:600;padding:4px 8px;background-color:#1b1f34;color:#fff;border-radius:4px;cursor:pointer}.ec-container .ec-dates .ec-dt>.ec-dt-disable{color:#c7c7c7}.ec-container .ec-more-modal{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(81,72,170,.5);z-index:2;display:flex;justify-content:flex-end;align-items:flex-start}.ec-container .ec-more-modal .ec-more-dialog .ce-more-close{position:absolute;top:16px;right:20px;cursor:pointer}.ec-container .ec-more-modal .ec-more-dialog{width:300px;height:100%;background-color:#fff;overflow:hidden;padding:30px 20px;box-sizing:border-box}.ec-container .ec-more-modal .ec-more-dialog .ec-more-header{display:flex;flex-direction:column;margin-bottom:30px;margin-top:30px}.ec-container .ec-more-modal .ec-more-dialog .ec-more-header>div:first-child{color:#777f9d;font-size:14px;font-weight:600}.ec-container .ec-more-modal .ec-more-dialog .ec-more-header>div:last-child{color:#1b1f34;font-size:24px;font-weight:700}.ec-container .ec-more-modal .ec-more-dialog::-webkit-scrollbar{width:2px}.ec-container .ec-more-modal .ec-more-dialog::-webkit-scrollbar-track{box-shadow:inset 0 0 2px grey;border-radius:5px}.ec-container .ec-more-modal .ec-more-dialog::-webkit-scrollbar-thumb{background:#5148aa;border-radius:5px}.ec-container .ec-more-modal .ec-more-dialog::-webkit-scrollbar-thumb:hover{background:#5148aa}.ec-container .ec-more-modal .ec-more-dialog .ec-more-lists .ec-more-list{margin-bottom:10px}.ec-container .ec-more-modal .ec-more-dialog .ec-more-lists .ec-more-list .ec-more-pro{display:flex;justify-content:flex-start;align-items:flex-start;padding:6px;border-radius:4px;cursor:pointer}.ec-container .ec-more-modal .ec-more-dialog .ec-more-lists .ec-more-list .ec-more-pro>div{color:#1b1f34;font-size:12px;line-height:12px;font-weight:600}.ec-container .ec-more-modal .ec-more-dialog .ec-more-lists .ec-more-list .ec-more-pro>div:first-child{margin-right:5px}.ec-container .ec-more-modal .ec-more-dialog .ec-more-lists .ec-more-list .ec-more-pro>div:first-child img{width:26px}.ec-container .ec-more-modal .ec-more-dialog .ec-more-lists .ec-more-list .ec-more-pro>div:last-child>div:first-child{margin-bottom:2px;white-space:nowrap;width:200px;overflow:hidden;text-overflow:ellipsis;line-height:14px;text-transform:capitalize}.ec-container .ec-more-modal .ec-more-dialog .ec-more-lists .ec-more-list .ec-more-pro>div:last-child>div:last-child{color:#777f9d;font-size:10px;line-height:12px}.ec-popup{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(81,72,170,.8);z-index:99}.ec-popup>.ec-modal{display:flex;justify-content:center;align-items:center;height:100%}.ec-popup>.ec-modal>.ec-box{width:440px;background-color:#fff;border-radius:6px;padding:30px}.ec-box>.tt{color:#1b1f34;font-size:18px;line-height:18px;font-weight:700;margin-bottom:30px}.ec-box>.bb{display:flex;justify-content:space-between;align-items:center;margin-bottom:15px}.ec-box>.bb>button{width:48%;cursor:pointer;color:#1b1f34;font-size:14px;line-height:18px;padding:9px 7.5px;outline:none;border-radius:6px}.ec-box>.bb>button:first-child{border:1px solid #f1f0fe;background:#f1f0fe;margin-right:10px}.ec-box>.bb>button.active:first-child{border:1px solid #b3abfa}.ec-box>.bb>button:last-child{border:1px solid #edf7fe;background:#edf7fe}.ec-box>.bb>button.active:last-child{border:1px solid #9dd3f8}.ec-box>.cc{display:flex;margin-top:50px;margin-bottom:0}.ec-box>.cc>button{cursor:pointer;padding:7px 12px;font-size:14px;font-weight:700}.ec-box>.cc>.blue-btn{background-color:#5148aa;color:#fff;margin-right:10px}.ec-box>.cc>.grey-btn{background-color:#e7e8ed;color:#777f9d;border:none;border-radius:4px}.ec-box>.dd>div{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}.ec-box>.dd>div>div:last-child{width:294px;margin-bottom:0}.ec-box>.dd input,.ec-box>.dd select,.ec-time>div>input{font-size:12px;height:40px;padding:4px 10px}.ec-dates{display:flex;justify-content:space-between;align-items:center}.ec-dates .custom-date{width:142px}"]
                },] }
    ];
    EventcalendarComponent.ctorParameters = function () { return []; };
    EventcalendarComponent.propDecorators = {
        options: [{ type: i0.Input }],
        addEvent: [{ type: i0.Output }],
        updateEvent: [{ type: i0.Output }]
    };

    var EventcalendarModule = /** @class */ (function () {
        function EventcalendarModule() {
        }
        return EventcalendarModule;
    }());
    EventcalendarModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [EventcalendarComponent],
                    imports: [common.CommonModule],
                    exports: [EventcalendarComponent],
                },] }
    ];

    /*
     * Public API Surface of eventcalendar
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.EventcalendarComponent = EventcalendarComponent;
    exports.EventcalendarModule = EventcalendarModule;
    exports.EventcalendarService = EventcalendarService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=vanaraj-angular-eventcalendar.umd.js.map
