import React, { useState, useEffect } from "react";
import Modal from "react-modal";

interface TutorialProps {
  onClose: () => void;
}

const Tutorial: React.FC<TutorialProps> = ({ onClose }) => {
  const [dialogOpen, setDialogOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    openDialog();
  }, []);

  const openDialog = () => {
    setDialogOpen(true);
    setCurrentStep(1);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    onClose();
  };

  const onRequestClose = () => {
    closeDialog();
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      closeDialog();
    }
  };

  const totalSteps = 4;

  return (
    <Modal
      isOpen={dialogOpen}
      onRequestClose={onRequestClose}
      className="relative modal-animation bg-gray-800 rounded-lg p-2 text-center mx-auto focus:outline-none w-[700px] h-[360px]"
      overlayClassName="fixed text-white top-0 left-0 w-full h-full bg-gray-900 bg-opacity-95 flex items-center justify-center z-40"
    >
      <button
        className="absolute top-0 right-2 text-red-400 hover:text-white"
        onClick={closeDialog}
      >
        <span className="text-2xl">×</span>
      </button>

      <h2 className="title_font text-xl text-pink-500 absolute">
        {currentStep}/{totalSteps}
      </h2>

      {currentStep === 1 && (
        <div>
          <h1 className="grandient_logo text-2xl my-7 logo_font uppercase text-center">
            Boas Vindas ao HtmLogic!
          </h1>
          <p className="mx-6 text-justify font-mono text-lg text-gray-100">
            Neste jogo, você deverá solucionar uma série de desafios baseados na
            linguagem de marcação HTML.
          </p>
          <p className="mx-6 mt-7 text-justify font-mono text-lg text-gray-100">
            O jogo apresentará a você um conjunto desorganizado de linhas de
            código HTML. Sua missão é organizá-las na ordem correta para criar a
            estrutura proposta em cada nível. Cada nível possui instruções
            específicas para orientá-lo.
          </p>
        </div>
      )}
      {currentStep === 2 && (
        <div>
          <h1 className="grandient_logo text-2xl my-7 logo_font uppercase">
            Arrastando e Soltando
          </h1>
          <p className="mx-6 text-justify font-mono text-lg text-gray-100">
            Para organizar o código, basta arrastar e soltar. Você pode arrastar
            livremente uma linha para uma nova posição. Isso permitirá que você
            reorganize o código da maneira que achar melhor.
          </p>
          <p className="mx-6 text-justify mt-4 font-mono text-lg text-gray-100">
            Quando achar que o código está organizado corretamente, clique no
            botão "Próximo" no canto inferior da tela.
          </p>
        </div>
      )}

      {currentStep === 3 && (
        <div>
          <h1 className="grandient_logo text-2xl my-7 logo_font uppercase">
            Pontos de Vida
          </h1>
          <p className="mx-6 text-justify font-mono text-lg text-gray-100">
            Cada nível concluído com sucesso acrescenta
            <span className="text-green-400 text-sm logo_font"> +10HP</span> ao
            seus pontos de vida. No entanto, tome cuidado! Se a ordem estiver
            incorreta, perderá
            <span className="text-red-400 text-sm logo_font"> -10HP</span>. Se
            sua pontuação chegar a{" "}
            <span className="text-red-800 text-sm logo_font"> 0HP</span>, o jogo
            terminará.
          </p>
          <p className="mx-6 text-justify mt-4 font-mono text-lg text-gray-100">
            Fique tranquilo, pois a cada erro, o jogo fornecerá informações
            sobre quais linhas precisam de correção.
          </p>
        </div>
      )}
      {currentStep === 4 && (
        <div>
          <h1 className="grandient_logo text-2xl my-7 logo_font uppercase">
            Tutorial em Vídeo
          </h1>
          <p className="mx-6 text-justify font-mono text-lg text-gray-100">
            Ainda não entendeu? Acompanhe uma breve explicação sobre como jogar
            HtmLogic. Assista ao tutorial clicando{" "}
            <a
              className="text-purple-400 underline decoration-dotted"
              href="https://youtu.be/5CWcc7u7Vew"
              target="_blank"
              rel="noopener noreferrer"
            >
              aqui
            </a>
          </p>
        </div>
      )}
      <button
        className="bg-purple-700 font-medium hover:bg-purple-600 flex justify-center rounded w-20 p-2 absolute right-3 bottom-3 text-base"
        onClick={nextStep}
      >
        {currentStep < totalSteps ? "Próximo" : "Fechar"}
      </button>
    </Modal>
  );
};

export default Tutorial;
