import { OnInit, EventEmitter } from '@angular/core';
export declare class EventcalendarComponent implements OnInit {
    options: any;
    addEvent: EventEmitter<any>;
    updateEvent: EventEmitter<any>;
    gotoMonth: number;
    count: number;
    events: Array<any>;
    acutalEvent: Array<any>;
    filterEvent: Array<any>;
    isEventClicked: boolean;
    openMoreModal: boolean;
    currentMonth: string;
    navMonths: any;
    dayString: any;
    displayDate: any;
    weekdaysShort: Array<String>;
    weekdaysLong: Array<String>;
    title: string;
    btnPrimaryBgColor: string;
    btnPrimaryFontColor: string;
    showEventProfilePicture: boolean;
    isAddShown: boolean;
    isEditShown: boolean;
    eventID: any;
    eventName: any;
    startDate: any;
    endDate: any;
    constructor();
    ngOnInit(): void;
    eventCalendar(): void;
    createNavigationBar(e: any, i: any): HTMLDivElement;
    gridNavigationBar(e: any, toggle: any, i: any): HTMLDivElement;
    addUnavailable(): void;
    eventTitle(e: any): void;
    eventStartDate(e: any): void;
    eventEndDate(e: any): void;
    addNewEvent(e: any): void;
    selectEvent(e: any): void;
    update(e: any): void;
    previousMonth(): void;
    nextMonth(): void;
    getSelectMonth(e: any): void;
    closeMoreModal(): void;
    cancel(): void;
}
//# sourceMappingURL=eventcalendar.component.d.ts.map