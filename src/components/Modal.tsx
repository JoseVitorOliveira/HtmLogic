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
          color: "#fff",
        },
      }}
    >
      {hp <= 0 ? (
        <>
          <h2>Você Perdeu!</h2>
          <button className="border bg-white text-black" onClick={restartGame}>
            Jogar Novamente
          </button>
        </>
      ) : hasWon ? (
        <>
          <h2>Parabéns! Você Venceu!</h2>
          <button className="border bg-white text-black" onClick={restartGame}>
            Jogar Novamente
          </button>
        </>
      ) : (
        <>
          <h2>Muito Bem!</h2>
          <p>Você organizou as tags na ordem correta!</p>
          <h2>Clique abaixo para avançar para o próximo nível. +10hp</h2>
          <button className="border bg-white text-black" onClick={closeModal}>
            Close
          </button>
        </>
      )}
    </Modal>
  );
};

export default ModalComponent;
