import Modal from "react-modal";

interface ModalProps {
  isModalOpen: boolean;
  hp: number;
  hasWon: boolean;
  closeModal: () => void;
  restartGame: () => void;
}

const ModalComponent = ({
  isModalOpen,
  hp,
  hasWon,
  closeModal,
  restartGame,
}: ModalProps) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
      contentLabel="Modal"
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#000",
        },
      }}
    >
      {hp <= 0 ? (
        <>
          <h2>You Lost!</h2>
          <button onClick={restartGame}>Play Again</button>
        </>
      ) : hasWon ? (
        <>
          <h2>Congratulations! You Win!</h2>
          <button onClick={restartGame}>Play Again</button>
        </>
      ) : (
        <>
          <h2>Success!</h2>
          <p>
            The order is correct! Click below to advance to the next level.
            +10hp
          </p>
          <button className="border" onClick={closeModal}>
            Close
          </button>
        </>
      )}
    </Modal>
  );
};

export default ModalComponent;
