'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Agenda = () => {
  const [events, setEvents] = useState([]);
  const [availability, setAvailability] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    // Fetch events from the API
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const createEvent = async () => {
    try {
      if (selectedDate && selectedTime) {
        // Check availability before creating the event
        const response = await axios.post('/api/check-availability', {
          date: selectedDate,
          time: selectedTime,
        });
        setAvailability(response.data.available);

        if (response.data.available) {
          // Create the event
          await axios.post('/api/create-event', {
            date: selectedDate,
            time: selectedTime,
          });
          // Refresh the events list
          //   fetchEvents();
        }
      }
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  const today = new Date();
  const fiveDaysAhead = new Date();
  fiveDaysAhead.setDate(today.getDate() + 15);

  return (
    <div>
      <h1>Agenda</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.date} - {event.time}
          </li>
        ))}
      </ul>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat='dd-MM-yyyy'
        placeholderText='Select a date'
        minDate={today}
        maxDate={fiveDaysAhead}
      />
      <input
        type='time'
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
      />
      <button onClick={createEvent}>Create Event</button>
      {availability && <p>Event created successfully!</p>}
    </div>
  );
};

export default Agenda;
