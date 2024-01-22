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
        </div>
      )}
      {currentStep === 3 && (
        <div>
          <h1 className="grandient_logo text-2xl my-7 logo_font uppercase">
            Objetivo e Preview
          </h1>
          <p className="mx-6 text-justify font-mono text-lg text-gray-100">
            O Objetivo fornece uma visão antecipada do código HTML que você deve
            criar. Este é o ponto de chegada, a meta que você deseja atingir.
          </p>
          <p className="mx-6 text-justify mt-4 font-mono text-lg text-gray-100">
            A Preview oferece uma visão atualizada do estado do seu código.
            Mostrando a compilação do código à medida que você o organiza. Use a
            Preview como um guia visual, comparando-a com o Objetivo para
            garantir que você esteja no caminho certo.
          </p>
        </div>
      )}
      {currentStep === 4 && (
        <div>
          <h1 className="grandient_logo text-2xl my-7 logo_font uppercase">
            Barra de Vida
          </h1>
          <p className="mx-6 text-justify font-mono text-lg text-gray-100">
            Cada nível concluído com sucesso acrescenta pontos de vida (
            <span className="text-green-400">+10HP</span>) à sua pontuação
            total. No entanto, tome cuidado! Se a ordem estiver incorreta,
            perderá pontos de vida (<span className="text-red-400">-10HP</span>
            ). Se sua pontuação chegar a 0HP, o jogo terminará.
          </p>
          <p className="mx-6 text-justify mt-4 font-mono text-lg text-gray-100">
            Fique tranquilo, pois a cada erro, o jogo fornecerá informações
            sobre quais linhas precisam de correção.
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
