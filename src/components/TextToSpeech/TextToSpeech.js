import { useEffect } from 'react';

function TextToSpeech() {
    useEffect(() => {
        const text = 'O projeto Visually Impaired Map é uma iniciativa dedicada a auxiliar pessoas com deficiência visual a chegarem a locais específicos. Por meio de um aplicativo para smartphones, os usuários podem indicar o destino desejado por comando de voz, e o app traçará a rota até lá. Utilizando o alto-falante do dispositivo, o aplicativo fornecerá instruções verbais para o usuário indicando quando seguir em frente, virar à esquerda, virar à direita ou voltar, conforme necessário.';

        const utterance = new SpeechSynthesisUtterance(text);

        utterance.onerror = (event) => {
            console.error("Erro na síntese de fala:", event.error);
        };

        const timeoutId = setTimeout(() => {
            if (!window.speechSynthesis.speaking) {
                window.speechSynthesis.speak(utterance);
            }
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
            window.speechSynthesis.cancel(); 
        };
    }, []);

    return null; 
}

export default TextToSpeech; 


