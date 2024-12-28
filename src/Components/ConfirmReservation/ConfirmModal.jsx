import Modal from 'react-modal';
import './ConfirmModal.css';

Modal.setAppElement('#root'); // Set the app element for accessibility

export const ConfirmModal = ({ isOpen, onRequestClose, onConfirm }) => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Confirmation Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Reservation Confirmed</h2>
        <p>Your reservation has been successfully confirmed, please check your email.</p>
        <button onClick={onConfirm}>OK</button>
      </Modal>
    );
  };