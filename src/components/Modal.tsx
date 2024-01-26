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
        overlay: {
          backgroundColor: isModalOpen ? "rgba(0, 0, 0, 0.5)" : "transparent",
          backdropFilter: isModalOpen ? "blur(8px)" : "none",
        },
        content: {
          top: "50%",
          height: "185px",
          width: "500px",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          border: "none",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#1e293b",
          color: "#fff",
        },
      }}
    >
      {hp <= 0 ? (
        <>
          <div className="flex w-full">
            <h2 className="text-start mb-2 text-3xl font-bold text-[#c851ff]">
              Que pena!
            </h2>
            <h2 className="ml-auto mt-1 text-base text-red-500 font-bold uppercase logo_font">
              0HP
            </h2>
          </div>
          <p className="text-justify mt-2 text-base">
            Infelizmente sua vida chegou a 0. Clique abaixo para tentar
            novamente.
          </p>
          <div className="flex justify-end mt-[9px]">
            <button
              className="bg-[#ffffff] rounded p-1 title text-base text-black"
              onClick={restartGame}
            >
              Reiniciar
            </button>
          </div>
        </>
      ) : hasWon ? (
        <>
          <div className="flex w-full">
            <h2 className="text-start mb-2 text-3xl font-bold text-[#c851ff]">
              Parabéns!
            </h2>
            <h2 className="ml-auto mt-1 text-xl text-gray-400 font-bold uppercase logo_font">
              🥳🎉
            </h2>
          </div>
          <p className="text-justify mt-2 text-base">
            Você conseguiu passar por todos os níveis. Clique abaixo para jogar
            novamente.
          </p>
          <div className="flex justify-end mt-[9px]">
            <button
              className="border border-black bg-[#ffffff] rounded p-1 title text-base text-black"
              onClick={restartGame}
            >
              Jogar Novamente
            </button>
          </div>
        </>
      ) : (
        <>
          {/* Level Success */}
          <div className="flex w-full">
            <h2 className="text-start mb-2 text-3xl font-bold text-[#c851ff]">
              Muito Bem!
            </h2>
            <h2 className="ml-auto mt-1 text-base text-green-300 font-bold uppercase logo_font">
              +10HP
            </h2>
          </div>
          <p className="text-justify mt-2 text-base">
            Você organizou o código de forma correta. Clique abaixo para avançar
            para o próximo nível.
          </p>
          <div className="flex justify-end mt-[9px]">
            <button
              className="border border-black bg-[#ffffff] rounded p-1 title text-base text-black"
              onClick={closeModal}
            >
              Fechar
            </button>
          </div>
        </>
      )}
    </Modal>
  );
};

export default ModalComponent;
