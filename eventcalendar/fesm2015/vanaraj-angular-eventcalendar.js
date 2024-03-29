import { ɵɵdefineInjectable, Injectable, EventEmitter, Component, ViewEncapsulation, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class EventcalendarService {
    constructor() { }
}
EventcalendarService.ɵprov = ɵɵdefineInjectable({ factory: function EventcalendarService_Factory() { return new EventcalendarService(); }, token: EventcalendarService, providedIn: "root" });
EventcalendarService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
EventcalendarService.ctorParameters = () => [];

class EventcalendarComponent {
    constructor() {
        this.options = {};
        this.addEvent = new EventEmitter();
        this.updateEvent = new EventEmitter();
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
    ngOnInit() {
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
        const d = new Date();
        const day = d.getDate();
        const month = d.getMonth();
        const year = d.getFullYear();
        for (let i = 1; i <= 12; i++) {
            var dt = new Date(year, month, day);
            dt.setMonth(dt.getMonth() + (6 - (12 - i)));
            const monthLists = document.createElement('a');
            monthLists.setAttribute('data-id', (6 - (12 - i)).toString());
            monthLists.innerText =
                dt.toLocaleDateString('en-us', { month: 'short' }) + ', ' + year;
            monthLists.addEventListener('click', (e) => {
                this.getSelectMonth(e);
            });
            (_a = document.querySelector('.ec-dropdown-content')) === null || _a === void 0 ? void 0 : _a.appendChild(monthLists);
        }
    }
    eventCalendar() {
        var _a, _b, _c;
        const dt = new Date();
        if (this.gotoMonth !== 0) {
            dt.setMonth(new Date().getMonth() + this.gotoMonth);
        }
        const day = dt.getDate();
        const month = dt.getMonth();
        const year = dt.getFullYear();
        const numberOfDaysInMonth = new Date(year, month + 1, 0).getDate();
        const numberOfDaysInPrevMonth = new Date(year, month, 0).getDate();
        const firstDayOfMonth = new Date(year, month, 1);
        const findNameOfDay = firstDayOfMonth.toLocaleDateString('en-us', {
            weekday: 'long',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        });
        this.currentMonth =
            dt.toLocaleDateString('en-us', { month: 'short' }) + ', ' + year;
        const paddingDays = this.weekdaysLong.indexOf(findNameOfDay.split(', ')[0]);
        const prevMonthsRemainingDays = numberOfDaysInPrevMonth - paddingDays + 1;
        const nextMonthsRemainingDays = 42 - (paddingDays + numberOfDaysInMonth);
        var remove = document.querySelector('.ec-dates');
        while (remove === null || remove === void 0 ? void 0 : remove.lastElementChild) {
            remove.removeChild(remove.lastElementChild);
        }
        if (paddingDays !== 0) {
            for (let i = prevMonthsRemainingDays; i <= numberOfDaysInPrevMonth; i++) {
                const parent = document.createElement('div');
                parent.classList.add('ec-dt');
                const child = document.createElement('div');
                child.classList.add('ec-dt-child', 'ec-dt-disable');
                child.setAttribute('data-dt', `${year}-${month}-${i}`);
                child.innerText = i.toString();
                parent.appendChild(child);
                (_a = document.querySelector('.ec-dates')) === null || _a === void 0 ? void 0 : _a.appendChild(parent);
            }
        }
        for (let i = 1; i <= numberOfDaysInMonth; i++) {
            const parent = document.createElement('div');
            parent.classList.add('ec-dt');
            const child = document.createElement('div');
            child.classList.add('ec-dt-child');
            child.setAttribute('data-dt', `${year}-${month + 1}-${i}`);
            const date = document.createElement('div');
            date.classList.add('ec-date');
            date.style.order = '1';
            date.innerText = i.toString();
            child.appendChild(date);
            const dayString = `${year}-${month + 1}-${i}`;
            const more = document.createElement('div');
            this.events.filter((e, i) => new Date(dayString).getTime() >= new Date(e.startDate).getTime() &&
                new Date(dayString).getTime() <= new Date(e.endDate).getTime()
                ? (child.appendChild(this.createNavigationBar(e, i)),
                    this.count > 3
                        ? (more.classList.add('ec-more'),
                            (more.innerText = '+' + (this.count - 3).toString() + ' more'),
                            more.setAttribute('data-dt', dayString),
                            more.addEventListener('click', function () {
                                showMore();
                            }, {
                                once: true,
                            }))
                        : null)
                : null);
            const showMore = () => {
                this.filterEvent = [];
                this.acutalEvent = [];
                this.displayDate = new Date(year, month, i).toLocaleDateString('en-us', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                });
                this.events.filter((f, i) => new Date(dayString).getTime() >= new Date(f.startDate).getTime() &&
                    new Date(dayString).getTime() <= new Date(f.endDate).getTime()
                    ? this.acutalEvent.push(f)
                    : '');
                this.filterEvent = [...new Set(this.acutalEvent)];
                console.log(this.filterEvent);
                this.dayString = dayString;
                this.openMoreModal = true;
            };
            child.appendChild(more);
            this.count = 0;
            parent.appendChild(child);
            (_b = document.querySelector('.ec-dates')) === null || _b === void 0 ? void 0 : _b.appendChild(parent);
        }
        for (let i = 1; i <= nextMonthsRemainingDays; i++) {
            const parent = document.createElement('div');
            parent.classList.add('ec-dt');
            const child = document.createElement('div');
            child.classList.add('ec-dt-child', 'ec-dt-disable');
            child.setAttribute('data-dt', `${year}-${month + 2}-${i}`);
            child.innerText = i.toString();
            parent.appendChild(child);
            (_c = document.querySelector('.ec-dates')) === null || _c === void 0 ? void 0 : _c.appendChild(parent);
        }
    }
    createNavigationBar(e, i) {
        this.count = this.count + 1;
        if (this.count <= 3) {
            return this.gridNavigationBar(e, true, i);
        }
        else {
            return this.gridNavigationBar(e, false, i);
        }
    }
    gridNavigationBar(e, toggle, i) {
        const eventBar = document.createElement('div');
        eventBar.style.backgroundColor = e.background;
        if (toggle) {
            eventBar.classList.add('ec-event-title');
        }
        else {
            eventBar.classList.add('ec-event-title', 'ec-extra');
        }
        eventBar.style.order = i + 2;
        eventBar.addEventListener('click', () => {
            console.log(e);
            this.selectEvent(e);
        });
        const img = document.createElement('img');
        if (this.showEventProfilePicture) {
            if (e.thumbnail) {
                img.setAttribute('src', e.thumbnail);
            }
            else {
                img.setAttribute('src', `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAAAB3RJTUUH5QgWAggMDbRxXgAABvlJREFUaN7lWH9QVNcVPucBYYGEFhCWfQ/exSakWQwo+x6EakBlJmbAyQhRCVahalQ6VjT4Y5rYRht10jrarFrTCbTS8UfSiAaMDYSaqoMiAReIiFaUWlgURdcaC6JL3d3TP/A97DqJyu66k+n337nvvPOd89173zv3IngYwr9itkqGF16ATY5cyM3Ph24IwLPp6dCN6yA0Olp1fBG2Q3xXF+hBQ+mHDuEx7imcuGPHRWNHS2P78eOeyg/dHVAURTE+PiTEdgpf9U8pKUE9VMBX06bd5xgDb0L4tWuq3Qm/AcuIEUPKAQOZCIJhM0Xu2eP7BYyxrS4oMKMZW/DGDU8JMvzCq8VqSdLphHTxhBzb1iYIjMkykfBb0SF93NEhmMWFSWPnz+d7+d6ki2Fhzu8r44qfUCi2y1s6O9U4d+MyYpQ0PTLS2/WqkAySQTL4+fFmsVpeWV+vJMz/QuyWVpWXa1/SvpSwISjoUeMq7wkmsVreXVGhCuEjdsiHvvxS4fV2/cCHiifk2EWL1AQr2R65/siRuLK4sriyJ55wNb4SRyhkuXJaba0q8CY2P2nkwoVeLh9RXarZLE/eZrdH10bXJm0dNcrdTFFFUUWSIT5e4VG2ltdK58sYJU0fM0adkV+L70gHamo8zStsZu/Ia48eVVdc68h5hoiEhOHG44adyToA8n/uOdX2g79z+XV1nhaAGmAVJB47ptof03+4Tr3+8QuwE/bTmZAQ1f4laGjg6689LQCU02zIu35dtXNoKqWGhj52ATCDFgEN/cdxPlbhrYgIT9ePEqyC97Va1f43PYvjrl597ALQD7nPMPvkSXUgATLpkwkTPC0ApOFMaLyH56r9tI/lnjweN4RdbLxUfvq0+jHUiD+RQ8aNczePLiF6tmFWaqrK8ynbII9qbXU17vC/AXfhGA/zIHLdOsXGP2InbSspCc14Zktye3Cwq/GVONx07gA3qbhYfXAcW8E0xOtlIApT2U6pbv9+544ten30+sSxPP+oEaOKoopSLgiCc4cp7BA3yLP27VN4Xc3c1z0CEFnzNYc1r8ycqZlr3ThQWVkJC3ACLEpNddyG97jtbW38IXGzdHjrVh8TWX1+V15ubbQ23lzb1qZE8P/I/6Ogn+v1jqPc7x3LsrPpQwywNRQW4lgogANPPklG2kCmmpoB/4BqzYi8PIXX5alzjwBDUFrXG/v6pwcGrlkDH0AkiUuWoB40OFejeWhJz4CVSq1WaKSVcMRo1C0P3w6lq1c3NTc1NzXfueOufN0ugDOEQqEwuT0qijJ8D9pzX3sN9NCHI9PT4SQshjOiqDomwBbQd3VBGEyl7IMHudV29Evbvfui8aKxPrq729N5/t/CwyuA4wbP7xERthexAn+g1RJzLHGkhod/Y0JmbjN31GLxraVs+ueVK2Y0o2nPlSuDT13f8x4SAJHvFbMM706eDBbM5P6Uk4NPw1/pL5MngwCNOGv4rSp0g0y7rl+n8/AyvlJZCeFU5ZhTVnYpuGtf88rKSleFGbYASmOCmzCRa9+4EfPwPbAnJ6sOfaCDU7dvQz/9GapaWqAezoKlp4ea8Dx1WCwQD0mQc0/irWCCMkQMpFt4KiIC5sA0mKvVQhDOgMzRo+EpuAzPBwQo7lRHxTCpoYGqKZaqly+/XHDh6abm2lr3TOi3gK9icZK0bJlQyN6WvrLZ1P/zs8xf+ryuTnctpkBqmzJFV6wrlqTAQFf5lDi6YkaSlJWl9Bcq7908+F72hvTh0qWeK/ycuFi6ajSqxL8SP5FO9/byCYzkWbm5HlfeWZgLbKdUN2OGkofaIt/N021EQk7MFDmxoEAl+ID5y+GXL0cOsJTEvuGfw92FyDniW8ntcXHC+2K39I+eHnWC/iCK8mcLFrgcmP9CPCMvHhgQXmcl8t6+Pp6xXDktMdHbhTtDVyxWS5LBILzM3pJX3Lyp5D24de65uHlY3HcbO5p9LvNFRd4u9EHgJ4rb5bUrVqgr9jibKGv37n3oAMqlppDM0uSfOhx8FzPKJe3tAADjyddNZwfPQb2m38UmyTHnzyt1KCva2f++47A9FCWHJjsbusEMjYh4Ft6g4m3bAABq0GbzdoEPgnJWwIXQCz2lpUodPpcQHCVZWQ8UAJdhCuRnZCg2vYsnMauiwtuFPSrsFgC7pbxcHcgEDQQP1fWNAsD3aSmuj42F5+HHMLG//9LhztGNbw9uge8SevzN9c/MPXcOvgc/gsBbt8CX5tGM2Fhnv//Z0+PJ1xes+Lf+0rAwyqWZUGW383msSY757gkAANBhAqA7NBt0fn64H9/EmsEziPItq0GbzakV5ji+hX0q/+zECcyExdAQH+/tItwFWgNGqjGZLr1ufrUpKCVlcNTh+C/vOPlTIrnxTAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wOC0yMlQwMjowODoxMSswMDowMFjfVIYAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDgtMjJUMDI6MDg6MTErMDA6MDApguw6AAAAAElFTkSuQmCC`);
            }
            eventBar.appendChild(img);
        }
        const title = document.createElement('div');
        title.innerText = e.title;
        title.setAttribute('title', e.title);
        eventBar.appendChild(title);
        return eventBar;
    }
    addUnavailable() {
        this.isAddShown = true;
        this.isEditShown = false;
    }
    eventTitle(e) {
        this.eventName = e.target.value;
    }
    eventStartDate(e) {
        let start = e.target.value;
        let sd = new Date(start);
        this.startDate =
            sd.getFullYear() + '-' + (sd.getMonth() + 1) + '-' + sd.getDate();
    }
    eventEndDate(e) {
        let end = e.target.value;
        let ed = new Date(end);
        this.endDate =
            ed.getFullYear() + '-' + (ed.getMonth() + 1) + '-' + ed.getDate();
    }
    addNewEvent(e) {
        e.preventDefault();
        let newEvent = {
            title: this.eventName,
            startDate: this.startDate,
            endDate: this.endDate,
        };
        console.log(newEvent);
        this.addEvent.emit(newEvent);
        this.cancel();
    }
    selectEvent(e) {
        this.isAddShown = false;
        this.openMoreModal = false;
        this.isEditShown = true;
        let s = new Date(e.startDate);
        let start = s.getFullYear() + '-' + (s.getMonth() + 1) + '-' + s.getDate();
        let ed = new Date(e.endDate);
        let end = ed.getFullYear() + '-' + (ed.getMonth() + 1) + '-' + ed.getDate();
        this.eventID = e.id;
        this.eventName = e.title;
        this.startDate = new Date(start);
        this.endDate = new Date(end);
    }
    update(e) {
        e.preventDefault();
        let s = new Date(this.startDate);
        let start = s.getFullYear() + '-' + (s.getMonth() + 1) + '-' + s.getDate();
        let ed = new Date(this.endDate);
        let end = ed.getFullYear() + '-' + (ed.getMonth() + 1) + '-' + ed.getDate();
        let event = {
            id: this.eventID,
            title: this.eventName,
            startDate: start,
            endDate: end,
        };
        console.log(event);
        this.updateEvent.emit(event);
        this.cancel();
    }
    previousMonth() {
        this.gotoMonth = this.gotoMonth - 1;
        this.eventCalendar();
    }
    nextMonth() {
        this.gotoMonth = this.gotoMonth + 1;
        this.eventCalendar();
    }
    getSelectMonth(e) {
        var s = e.target.getAttribute('data-id');
        this.gotoMonth = parseInt(s);
        this.eventCalendar();
    }
    closeMoreModal() {
        this.openMoreModal = false;
        this.eventCalendar();
    }
    cancel() {
        this.isAddShown = false;
        this.isEditShown = false;
    }
}
EventcalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'angular-eventcalendar',
                template: "<div class=\"ec-container\">\r\n    <!-- Header -->\r\n    <div class=\"ec-header\">\r\n        <div class=\"ec-header-left\">\r\n            <div class=\"ec-title\">{{title}}</div>\r\n            <div class=\"ec-dropdown-wrap\">\r\n                <div class=\"ec-dropdown\">\r\n                    <div class=\"ec-dropbtn\">\r\n                        <span class=\"ec-display\" [ngStyle]=\"{'color': btnPrimaryBgColor}\">{{currentMonth}}</span>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"ec-shift\">\r\n                <span (click)=\"previousMonth()\">\r\n                    <svg width=\"8\" height=\"14\" viewBox=\"0 0 8 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                        <path d=\"M7 1L1.70711 6.29289C1.31658 6.68342 1.31658 7.31658 1.70711 7.70711L7 13\"\r\n                            [attr.stroke]=\"btnPrimaryBgColor\" stroke-width=\"2\" stroke-linecap=\"round\" />\r\n                    </svg>\r\n                </span>\r\n                <span (click)=\"nextMonth()\">\r\n                    <svg width=\"8\" height=\"14\" viewBox=\"0 0 8 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                        <path d=\"M1 13L6.29289 7.70711C6.68342 7.31658 6.68342 6.68342 6.29289 6.29289L1 1\"\r\n                            [attr.stroke]=\"btnPrimaryBgColor\" stroke-width=\"2\" stroke-linecap=\"round\" />\r\n                    </svg>\r\n                </span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ec-header-right\">\r\n            <button class=\"ec-event-btn\" (click)=\"addUnavailable()\"\r\n                [ngStyle]=\"{'background-color': btnPrimaryBgColor, 'color': btnPrimaryFontColor}\">Add New\r\n                Events</button>\r\n        </div>\r\n    </div>\r\n    <!-- EOD Header -->\r\n\r\n    <!-- Weekends -->\r\n    <div class=\"ec-weeks\">\r\n        <div *ngFor=\"let day of weekdaysShort\" class=\"ec-weekday\">{{day}}</div>\r\n    </div>\r\n    <!-- EOD Weekends -->\r\n\r\n    <!-- Week Dates -->\r\n    <div id=\"ec-dates\" class=\"ec-dates\"></div>\r\n    <!-- EOD Week Dates -->\r\n\r\n    <div class=\"ec-more-modal\" *ngIf=\"openMoreModal\">\r\n        <div class='ec-more-dialog'>\r\n            <div class='ec-more-content'>\r\n                <div class=\"ce-more-close\" (click)=\"closeMoreModal()\">\r\n                    <img\r\n                        src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAAAB3RJTUUH5QgWAhMLOuYvZwAAAmxJREFUSMetlE1oE1EUhe+bJFpdKQmmzksyMQlVu5BKprbWhRkrEtAqFgRBcSFSUQwarAZxrZiFKEUXZuOmiBAsFqxEGjIlFX9QaAON1UymJkYjEUuLgmIyneembxYtIb93O3e+c7jn3Qt4D3fUHYtGcafth3txasoatAZ39rAsNLkol+pQXYYcAxPsaG2FPOpE+zs61AfIyYyIYrOMUA7lUh1yFXqQz2xmkKy06Ba8XvIaLsFAOg3/0GV0qK1NvYYI45+YsPgt/u4cxrUKb9q35UzXI7NZxcxzZnB8nHKhn0ThVDa7dBgGdTN9fdoP2Id9uySLhf3C3eFDkoQxx/E8IZix3XKHU6lqjVBhPMztdY8kkxrHZ5P4oUzGTDjSRez2soB6jdQrjCoZIVf0DlUURbQb7kLI5YLv5BwJSBK6qBYM3YJQTBh+k0lFMZxWJaUlFoMAZNDN9nY6amUIuXQ+j6eAsugtymSqNkCLve48wv+xWsGrYBgQRXQcxuCj0wlryW3yLJXSGpczJo/hIGyTZYjov0FIEPI35NH363O5Wt9Q9dHUmvGK0lfbWEqu+YvelUqGuPqUmIrFVeO7D0/I5mLRoF8qoK+lUrXcihGs2mM66iBshZ9zcxooAJ/A5HDQaJizRFb7BSEXyAWmXuXz5fhMuQ8V9/gEvNB97u2FWf06+ODxaNk3ekfqXSf6WNlJ7jx/Mp2u+Y40fEDqNdIs4bqNsL9sD/lwIkEb2GHuAG+XZW3/GyzNyDJXM2K0vXSPTk8jPMaF+TfxOCzAPZI3GsmsfgPyer1NOyArjKDtyiKJRCKwES4gdn7+P/vCu2q6rSdSAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA4LTIyVDAyOjE5OjExKzAwOjAwdpPgeAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wOC0yMlQwMjoxOToxMSswMDowMAfOWMQAAAAASUVORK5CYII=\" />\r\n                </div>\r\n                <div class='ec-more-header'>\r\n                    <div>Events on</div>\r\n                    <div>\r\n                        {{displayDate}}\r\n                    </div>\r\n                </div>\r\n                <div class='ec-more-lists'>\r\n                    <div *ngFor=\"let f of filterEvent\" class=\"ec-more-list\">\r\n                        <div class=\"ec-more-pro\" [ngStyle]=\"{'background-color': f.background}\"\r\n                            (click)=\"selectEvent(f)\">\r\n                            <div *ngIf=\"showEventProfilePicture\">\r\n                                <img *ngIf=\"f.thumbnail\" src=\"{{f.thumbnail}}\" />\r\n\r\n                                <img *ngIf=\"f.thumbnail === '' || f.thumbnail === 'undefined'\"\r\n                                    src=\"data:image/png;base64,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\" />\r\n                            </div>\r\n                            <div>\r\n                                <div>{{f.title}}</div>\r\n                                <div>{{f.startDate | date: 'MM/dd/yyyy'}} - {{f.endDate | date: 'MM/dd/yyyy'}}</div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"isAddShown\">\r\n    <form class=\"ec-popup\">\r\n        <div class=\"ec-modal\">\r\n            <div class=\"ec-box\">\r\n                <div class=\"tt\">Add New Event</div>\r\n                <div class=\"dd\">\r\n                    <div>\r\n                        <div>Title</div>\r\n                        <div class=\"form-group ec-select-icon\">\r\n                            <input type=\"text\" class=\"form-control\" value=\"{{eventName}}\"\r\n                                (keyup)=\"eventTitle($event)\" />\r\n                        </div>\r\n                    </div>\r\n                    <div>\r\n                        <div>Dates</div>\r\n                        <div class=\"form-group ec-dates\">\r\n                            <div><input type=\"date\" class=\"form-control custom-date\" [valueAsDate]=\"startDate\"\r\n                                    (change)=\"eventStartDate($event)\" />\r\n                            </div>\r\n                            <div><input type=\"date\" class=\"form-control custom-date\" [valueAsDate]=\"endDate\"\r\n                                    (change)=\"eventEndDate($event)\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"cc form-group\">\r\n                    <button class=\"btn blue-btn\" (click)=\"addNewEvent($event)\">Save</button>\r\n                    <button class=\"btn grey-btn\" (click)=\"cancel()\">Cancel</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<div *ngIf=\"isEditShown\">\r\n    <form class=\"ec-popup\">\r\n        <div class=\"ec-modal\">\r\n            <div class=\"ec-box\">\r\n                <div class=\"tt\">Edit Event</div>\r\n                <div class=\"dd\">\r\n                    <div>\r\n                        <div>Title</div>\r\n                        <div class=\"form-group ec-select-icon\">\r\n                            <input type=\"text\" class=\"form-control\" value=\"{{eventName}}\" disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div>\r\n                        <div>Dates</div>\r\n                        <div class=\"form-group ec-dates\">\r\n                            <div><input type=\"date\" class=\"form-control custom-date\" [valueAsDate]=\"startDate\"\r\n                                    (change)=\"eventStartDate($event)\" />\r\n                            </div>\r\n                            <div><input type=\"date\" class=\"form-control custom-date\" [valueAsDate]=\"endDate\"\r\n                                    (change)=\"eventEndDate($event)\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"cc form-group\">\r\n                    <button class=\"btn blue-btn\" (click)=\"update($event)\">Update</button>\r\n                    <button class=\"btn grey-btn\" (click)=\"cancel()\">Cancel</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: ["body{font-family:Open Sans,sans-serif;font-size:14px;color:#1b1f34;background-color:#f3f3f3;padding:40px}.ec-container{width:100%;margin:0 auto}.ec-container .ec-header{display:flex;justify-content:space-between;align-items:center}.ec-header .ec-header-left{display:flex;justify-content:flex-start;align-items:center}.ec-header .ec-header-left>div{padding-right:24px}.ec-header .ec-header-left .ec-title{color:#1b1f34;font-size:28px;line-height:36px;font-weight:700;padding-right:46px}.ec-header .ec-header-left .ec-dropdown-wrap{line-height:32px;border-right:1px solid #bbbfce}.ec-header .ec-header-left .ec-dropdown-wrap .ec-dropdown{position:relative;display:inline-block;cursor:pointer}.ec-header .ec-header-left .ec-dropdown-wrap .ec-dropbtn{color:#1b1f34;width:80px;font-size:16px;border:none;font-weight:700;display:flex;justify-content:flex-start;align-items:center}.ec-dropdown-content{display:none;position:absolute;background-color:#fff;min-width:112px;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);z-index:1}.ec-dropdown-content a{color:#777f9d;font-size:14px;padding:8px 28px 8px 15px;text-decoration:none;display:block;border-bottom:1px solid #ececec}.ec-dropdown-content a:hover{color:#7466f5;background-color:#f1f0fe}.ec-dropdown:hover .ec-dropdown-content{display:block}.ec-header .ec-header-left .ec-shift{padding-left:9px;line-height:11px}.ec-header .ec-header-left .ec-shift>span{display:inline-block;padding:0 15px;cursor:pointer}.ec-header-right .ec-event-btn{color:#fff;font-family:Open Sans,sans-serif;font-size:14px;line-height:16px;font-weight:600;background:#7466f5;border:none;padding:10px 15px;border-radius:4px;cursor:pointer}.ec-container .ec-weeks{display:flex;justify-content:space-around;align-items:center;margin-top:50px}.ec-container .ec-weeks .ec-weekday{width:14.28%;padding:0 32px;text-align:right;color:#777f9d;text-transform:uppercase;font-weight:700}.ec-container .ec-dates{display:flex;flex-wrap:wrap;margin-top:12px}.ec-container .ec-dates .ec-dt{width:14.28%;border:1px solid #e7e8ed;box-sizing:border-box}.ec-container .ec-dates .ec-dt>div{display:flex;flex-direction:column;color:#1b1f34;height:120px;background:#fff;font-size:14px;font-weight:400;padding:12px;text-align:right;position:relative}.ec-container .ec-dates .ec-dt .ec-dt-child .ec-event-title{cursor:pointer;color:#1b1f34;font-size:10px;line-height:14px;font-weight:600;text-align:left;padding:2px 3px;border-radius:4px;display:flex;justify-content:flex-start;align-items:center;margin-bottom:3px;z-index:2}.ec-container .ec-dates .ec-dt .ec-dt-child .ec-extra{display:none}.ec-container .ec-dates .ec-dt .ec-dt-child .ec-event-title>img{margin-right:5px;width:16px;height:16px;border-radius:2px}.ec-container .ec-dates .ec-dt .ec-dt-child .ec-event-title>div{width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ec-container .ec-dates .ec-dt .ec-dt-child .ec-date{padding-right:20px;margin-bottom:10px}.ec-container .ec-dates .ec-dt .ec-dt-child .ec-more{position:absolute;top:7px;left:12px;font-size:12px;font-weight:600;padding:4px 8px;background-color:#1b1f34;color:#fff;border-radius:4px;cursor:pointer}.ec-container .ec-dates .ec-dt>.ec-dt-disable{color:#c7c7c7}.ec-container .ec-more-modal{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(81,72,170,.5);z-index:2;display:flex;justify-content:flex-end;align-items:flex-start}.ec-container .ec-more-modal .ec-more-dialog .ce-more-close{position:absolute;top:16px;right:20px;cursor:pointer}.ec-container .ec-more-modal .ec-more-dialog{width:300px;height:100%;background-color:#fff;overflow:hidden;padding:30px 20px;box-sizing:border-box}.ec-container .ec-more-modal .ec-more-dialog .ec-more-header{display:flex;flex-direction:column;margin-bottom:30px;margin-top:30px}.ec-container .ec-more-modal .ec-more-dialog .ec-more-header>div:first-child{color:#777f9d;font-size:14px;font-weight:600}.ec-container .ec-more-modal .ec-more-dialog .ec-more-header>div:last-child{color:#1b1f34;font-size:24px;font-weight:700}.ec-container .ec-more-modal .ec-more-dialog::-webkit-scrollbar{width:2px}.ec-container .ec-more-modal .ec-more-dialog::-webkit-scrollbar-track{box-shadow:inset 0 0 2px grey;border-radius:5px}.ec-container .ec-more-modal .ec-more-dialog::-webkit-scrollbar-thumb{background:#5148aa;border-radius:5px}.ec-container .ec-more-modal .ec-more-dialog::-webkit-scrollbar-thumb:hover{background:#5148aa}.ec-container .ec-more-modal .ec-more-dialog .ec-more-lists .ec-more-list{margin-bottom:10px}.ec-container .ec-more-modal .ec-more-dialog .ec-more-lists .ec-more-list .ec-more-pro{display:flex;justify-content:flex-start;align-items:flex-start;padding:6px;border-radius:4px;cursor:pointer}.ec-container .ec-more-modal .ec-more-dialog .ec-more-lists .ec-more-list .ec-more-pro>div{color:#1b1f34;font-size:12px;line-height:12px;font-weight:600}.ec-container .ec-more-modal .ec-more-dialog .ec-more-lists .ec-more-list .ec-more-pro>div:first-child{margin-right:5px}.ec-container .ec-more-modal .ec-more-dialog .ec-more-lists .ec-more-list .ec-more-pro>div:first-child img{width:26px}.ec-container .ec-more-modal .ec-more-dialog .ec-more-lists .ec-more-list .ec-more-pro>div:last-child>div:first-child{margin-bottom:2px;white-space:nowrap;width:200px;overflow:hidden;text-overflow:ellipsis;line-height:14px;text-transform:capitalize}.ec-container .ec-more-modal .ec-more-dialog .ec-more-lists .ec-more-list .ec-more-pro>div:last-child>div:last-child{color:#777f9d;font-size:10px;line-height:12px}.ec-popup{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(81,72,170,.8);z-index:99}.ec-popup>.ec-modal{display:flex;justify-content:center;align-items:center;height:100%}.ec-popup>.ec-modal>.ec-box{width:440px;background-color:#fff;border-radius:6px;padding:30px}.ec-box>.tt{color:#1b1f34;font-size:18px;line-height:18px;font-weight:700;margin-bottom:30px}.ec-box>.bb{display:flex;justify-content:space-between;align-items:center;margin-bottom:15px}.ec-box>.bb>button{width:48%;cursor:pointer;color:#1b1f34;font-size:14px;line-height:18px;padding:9px 7.5px;outline:none;border-radius:6px}.ec-box>.bb>button:first-child{border:1px solid #f1f0fe;background:#f1f0fe;margin-right:10px}.ec-box>.bb>button.active:first-child{border:1px solid #b3abfa}.ec-box>.bb>button:last-child{border:1px solid #edf7fe;background:#edf7fe}.ec-box>.bb>button.active:last-child{border:1px solid #9dd3f8}.ec-box>.cc{display:flex;margin-top:50px;margin-bottom:0}.ec-box>.cc>button{cursor:pointer;padding:7px 12px;font-size:14px;font-weight:700}.ec-box>.cc>.blue-btn{background-color:#5148aa;color:#fff;margin-right:10px}.ec-box>.cc>.grey-btn{background-color:#e7e8ed;color:#777f9d;border:none;border-radius:4px}.ec-box>.dd>div{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}.ec-box>.dd>div>div:last-child{width:294px;margin-bottom:0}.ec-box>.dd input,.ec-box>.dd select,.ec-time>div>input{font-size:12px;height:40px;padding:4px 10px}.ec-dates{display:flex;justify-content:space-between;align-items:center}.ec-dates .custom-date{width:142px}"]
            },] }
];
EventcalendarComponent.ctorParameters = () => [];
EventcalendarComponent.propDecorators = {
    options: [{ type: Input }],
    addEvent: [{ type: Output }],
    updateEvent: [{ type: Output }]
};

class EventcalendarModule {
}
EventcalendarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EventcalendarComponent],
                imports: [CommonModule],
                exports: [EventcalendarComponent],
            },] }
];

/*
 * Public API Surface of eventcalendar
 */

/**
 * Generated bundle index. Do not edit.
 */

export { EventcalendarComponent, EventcalendarModule, EventcalendarService };
//# sourceMappingURL=vanaraj-angular-eventcalendar.js.map
