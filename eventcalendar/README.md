# Angular - Event Calendar

The **Angular - Event Calendar** is a lightweight and developer-friendly _Angular_ library where you can `add`, `edit` and `view` the events.

# Installation

```javascript
npm install @vanaraj/angular-eventcalendar

```

Then, import the `EventcalendarModule` module in your app.module.ts

```javascript
import { EventcalendarModule } from '@vanaraj/angular-eventcalendar';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    EventcalendarModule, // import the module here
  ],
  providers: [],
  bootstrap: [AppComponent],
})

```

# Usage

```html
<angular-eventcalendar
  [options]="calendarOptions"
  (addEvent)="addNewEventHandler($event)"
  (updateEvent)="updateEventHandler($event)"
></angular-eventcalendar>
```

# User guide

**_1. Options_**

```javascript
this.calendarOptions = {
  title: "My Calendar", // Main title
  btnPrimaryBgColor: "#7466f5", // Primary button background color
  btnPrimaryFontColor: "#fff", // Primary button font color
  btnSecondaryBgColor: "#6c757d", // Secondary button background color
  btnSecondaryFontColor: "#000", // Secondary button font color
  showEventProfilePicture: true, // Default is true, true - shows the profile pic, false - hides the profile pic
  events: data, // Actual events data
};
```

### Event - JSON

The events data should be following JSON format

```javascript
const data = [
  {
    id: "1",
    title: "Event 1",
    startDate: "2021-8-1",
    endDate: "2021-8-15",
    background: "#F1F0FE", // Highlights the event bar
    thumbnail: "../../assets/images/photo1.png", // local path or https link
  },
  {
    id: "2",
    title: "Event 2",
    startDate: "2021-8-20",
    endDate: "2021-8-24",
    background: "#FDE7E7", // Highlights the event bar
    thumbnail: "../../assets/images/photo2.png", // local path or https link
  },
];
```

**_2. addEvent_**

```javascript
addNewEventHandler(event: object) {
    console.log('New Event', event); // Returns new event object
}
```

**_3. updateEvent_**

```javascript
updateEventHandler(event: object) {
    console.log('Updated event', event); // Returns updated event object
}
```
