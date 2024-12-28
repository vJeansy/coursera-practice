import './ConfirmReservation.css';
import { ConfirmModal } from './ConfirmModal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ConfirmReservation = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleSubmitButton = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    }

    const handleConfirm = () => {
        setIsModalOpen(false);
        navigate('/Reservation');
    }
    return (
        <div className="reservation-container">
        <div className='reser'>
        <h2>Confirm reservation</h2>
        <form className='reservation-form' onSubmit={handleSubmitButton}>
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="fname" placeholder="Your name" required min={2} />
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lname" placeholder="Your name" required min={2} />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your email" required />
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" placeholder="Your phone number" required />
            <input className='submit-form-btn' type="submit" value="Confirm reservation"></input>
        </form>
        </div>
                <ConfirmModal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                onConfirm={handleConfirm}
              />
              </div>
    );
};