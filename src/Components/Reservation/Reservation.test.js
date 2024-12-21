import { render, screen, fireEvent, waitFor, within } from "@testing-library/react";
import { ReservationForm } from "./ReservationForm";

//Mock fetchAPI function.

window.fetchAPI = jest.fn()

describe('ReservationForm', () => {
    beforeEach(() => {
        //Reset fetchAPI mock implementation before each test
        window.fetchAPI.mockReset();
    });
    test('render the form correctly', () => {
        render(<ReservationForm />);
        expect(screen.getByText('Book a table')).toBeInTheDocument();
        expect(screen.getByText('Choose date')).toBeInTheDocument();
        expect(screen.getByText('Choose time')).toBeInTheDocument();
        expect(screen.getByText('Number of guests')).toBeInTheDocument();
        expect(screen.getByText('Occasion')).toBeInTheDocument();
    });
    test('updates available times when a date is selected', async () => {
        const mockTimes = [
            { id: 1, time: "17:00" },
            { id: 2, time: "17:30" },
            { id: 3, time: "18:00" },
            { id: 4, time: "18:30" },
            { id: 5, time: "19:00" },
            { id: 6, time: "19:30" },
            { id: 7, time: "20:00" },
            { id: 8, time: "20:30" },
            { id: 9, time: "21:00" },
            { id: 10, time: "21:30" },
            { id: 11, time: "22:00" },
            { id: 12, time: "22:30" },
            { id: 13, time: "23:00" },
            { id: 14, time: "23:30" },
        ];

        window.fetchAPI.mockResolvedValueOnce(mockTimes);

        render(<ReservationForm />);

        const dateInput = screen.getByLabelText('Choose date');
        fireEvent.change(dateInput, { target: {value: '2023-12-21'} });

        const timeSelect = screen.getByLabelText('Choose time');

        await waitFor(() => {
            //const options = screen.getAllByRole('option', { container: timeSelect });
            const options = within(timeSelect).getAllByRole('option');
            expect(options).toHaveLength(mockTimes.length);
        });

        for (const timeObj of mockTimes) { // Use for...of for clarity
            await within(timeSelect).findByRole('option', { name: timeObj.time });
        }
    });
    test('display "No available times" if no times are available', async () => {
        window.fetchAPI.mockResolvedValueOnce([]);

        render(<ReservationForm />);

        const dateInput = screen.getByLabelText('Choose date');

        fireEvent.change(dateInput, { target: { value: '2023-12-22' } });

        // findByText waits for the element to appear
        const noAvailableTimesOption = await screen.findByText('No available times');

        // Now assertions
        expect(noAvailableTimesOption).toBeInTheDocument();
        const timeSelect = screen.getByLabelText('Choose time');
        const options = within(timeSelect).getAllByRole('option');
        expect(options).toHaveLength(1);
    });
    test('handles API error when fetching times', async () => {
        window.fetchAPI.mockRejectedValueOnce(new Error('API Error'));
    });
})