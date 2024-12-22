import { useState, useEffect } from 'react';
import { fetchAPI } from '../../Utils/api';


export const ReservationForm = () => {
    // State for available times and selected date
    const [availableTimes, setAvailableTimes] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [loading, setLoading] = useState(false);  // To handle loading state
    const [selectedTime, setSelectedTime] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [occasion, setOccasion] = useState('Select an occasion');

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

    // Handlers for form fileds
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);  // Update the selected date
    };

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value)
    };

    const handleGuestsChange = (event) => {
        setSelectedTime(parseInt(event.target.value, 10))
    };

    const handleOccasionChange  = (event) => {
        setSelectedTime(event.target.value)
    };

    //clearForm
    const clearForm = () => {
        setSelectedDate('');
        setAvailableTimes([]);
        setSelectedTime('');
        setNumberOfGuests(1);
        setOccasion('Birthday');
        setLoading(false);
    }

    //handle submitButton
    const handleSubmitButton = (e) => {
        e.preventDefault();
        if (!selectedDate) {
            alert("Please select a date.");
            return;
        }
        if (!selectedTime) {
            alert("Please select a time.");
            return;
        }
        if (availableTimes.length === 0 || selectedTime === "No available times") {
            alert("Please choose a valid time.");
            return;
        }
        if (numberOfGuests < 1) {
            alert("Please enter at least 1 guest.");
            return;
        }

                // Combine the selected date and time
                const [hours, minutes] = selectedTime.split(':').map(Number);
                const reservationDateTime = new Date(selectedDate);
                reservationDateTime.setHours(hours, minutes);

                // Get current PC time
                const currentDateTime = new Date();

                if (reservationDateTime <= currentDateTime) {
                    alert("Please select a valid time.");
                    return;
                }

        alert("Your reservation has been received!");
        clearForm();
    }

    return (
        <form className='reservation-form' onSubmit={handleSubmitButton}>
            <h2>Book a table</h2>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={selectedDate}
                onChange={handleDateChange}
                required
            />
            <label htmlFor="res-time">Choose time</label>
            <select
            id="res-time"
            value={selectedTime}
            onChange={handleTimeChange}
            required>
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
            <input
            type="number"
            id="guests"
            value={numberOfGuests}
            onChange={handleGuestsChange}
            min="1"
            max="10"
            required />
            <label htmlFor="occasion">Occasion</label>
            <select
            id="occasion"
            value={occasion}
            onChange={handleOccasionChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input
            type="submit"
            value="Make Your reservation"
            data-testid="submit-form" />
        </form>
    );
};