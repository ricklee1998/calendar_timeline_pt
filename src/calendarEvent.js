import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

class CalendarEvent extends Component {
    render() {
        return (
            <div className="App">
                <FullCalendar
                    defaultView="dayGridMonth"
                    plugins={[ dayGridPlugin ]}
                    events={[
                      { title: 'event 1', date: '2025-04-01' },
                      { title: 'event 2', date: '2025-04-02' },
                      { title: 'event 3', start: '2025-04-11', end: '2025-04-14' },
                    ]}
                />
            </div>
        );
    }
}
export default CalendarEvent;