import { useState, useEffect } from 'react';
import { fetchAPI } from '../../Utils/api';


export const ReservationForm = () => {
    // State for available times and selected date
    const [availableTimes, setAvailableTimes] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [loading, setLoading] = useState(false);  // To handle loading state

    // Fetch available times when the component mounts or when selectedDate changes
useEffect(() => {
    if (selectedDate) {
        setLoading(true);
            // Convert the string date to a Date object
            const dateObject = new Date(selectedDate);
            // Use the Date object in fetchAPI
            try {
                const times = fetchAPI(dateObject);
                setAvailableTimes(times);
            } catch (error) {
                console.error("Error fetching times:", error);
                setAvailableTimes([]);
            } finally {
                setLoading(false);
            }
        }
    }, [selectedDate]);

    // Handle date change
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);  // Update the selected date
    };

    return (
        <form>
            <h2>Book a table</h2>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                onChange={handleDateChange}
            />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time">
                {loading ? (
                    <option>Loading...</option>  // Show loading state while fetching
                ) : availableTimes.length > 0 ? (
                    availableTimes.map((time, index) => (
                        <option key={index} value={time}>
                            {time}
                        </option>
                    ))
                ) : (
                    <option>No available times</option>  // Show this if no times are available
                )}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    );
};