
        const questions = [
            {
                image: 'https://github.com/kleysonRenato/Site/blob/main/pastaimagens/imagens%20de%20phishing/imagensquiz1.png?raw=true',
                question: "Esta imagem é um exemplo de phishing. Qual elemento nela indica ser uma tentativa de golpe?",
                options: [
                    "A presença do logo do banco, indicando legitimidade.",
                    "A mensagem 'Urgent Security Update' e o pedido de login em uma URL suspeita.",
                    "O design moderno da página de login.",
                    "O cadeado na barra de endereço.",
                    "A opção 'NOW WOW'."
                ],
                correctAnswer: "A mensagem 'Urgent Security Update' e o pedido de login em uma URL suspeita."
            },
            {
                image: 'https://github.com/kleysonRenato/Site/blob/main/pastaimagens/imagens%20de%20phishing/imagemphishing.jpg?raw=true',
                question: "O que é phishing?",
                options: [
                    "Um tipo de ataque cibernético que tenta enganar vítimas para obter informações confidenciais.",
                    "Um software para otimizar o desempenho do computador.",
                    "Um sistema de criptografia de dados.",
                    "Um tipo de vírus que apaga arquivos do disco rígido.",
                    "Um método para acelerar a conexão com a internet."
                ],
                correctAnswer: "Um tipo de ataque cibernético que tenta enganar vítimas para obter informações confidenciais.",
            },
            {
                image: 'https://github.com/kleysonRenato/Site/blob/main/pastaimagens/imagens%20de%20phishing/imagemphishing.jpg?raw=true',
                question: "Qual característica é um sinal comum de um e-mail de phishing?",
                options: [
                    "Gramática e ortografia perfeitas.",
                    "Solicitação urgente de informações pessoais ou financeiras.",
                    "Uso de logos oficiais e verificados da empresa.",
                    "Remetente conhecido e confiável.",
                    "Links que levam diretamente para o site oficial."
                ],
                correctAnswer: "Solicitação urgente de informações pessoais ou financeiras.",
            },
            {
                question: "Você recebe um e-mail do 'Banco X' pedindo para clicar em um link para 'atualizar seus dados de segurança'. O que você deve fazer?",
                options: [
                    "Clicar no link imediatamente para evitar problemas.",
                    "Responder ao e-mail pedindo mais informações.",
                    "Ignorar o e-mail e deletá-lo.",
                    "Entrar em contato com o banco diretamente por um canal oficial (telefone, site oficial) para verificar a solicitação.",
                    "Compartilhar o e-mail com amigos para avisá-los."
                ],
                correctAnswer: "Entrar em contato com o banco diretamente por um canal oficial (telefone, site oficial) para verificar a solicitação.",
                image: null
            },
            {
                question: "Um site com 'https://' em seu endereço garante que ele é 100% seguro contra phishing?",
                options: [
                    "Sim, HTTPS significa que o site é impenetrável.",
                    "Não, HTTPS apenas indica que a conexão é criptografada, mas o conteúdo ainda pode ser malicioso.",
                    "Apenas se o cadeado estiver verde.",
                    "Sim, é a garantia máxima de segurança.",
                    "Não, mas apenas para sites de compras."
                ],
                correctAnswer: "Não, HTTPS apenas indica que a conexão é criptografada, mas o conteúdo ainda pode ser malicioso.",
                image: null
            },
            {
                question: "Qual o melhor método para verificar a autenticidade de um link suspeito?",
                options: [
                    "Clicar nele rapidamente e fechar se parecer estranho.",
                    "Copiar o link e colá-lo em um documento de texto para inspecionar a URL real antes de clicar.",
                    "Passar o mouse sobre ele e olhar a URL na barra de status do navegador (sem clicar).",
                    "Compartilhar o link com um amigo para que ele clique primeiro.",
                    "Usar um encurtador de URL."
                ],
                correctAnswer: "Passar o mouse sobre ele e olhar a URL na barra de status do navegador (sem clicar).",
                image: null
            },
            {
                question: "O que significa 'smishing'?",
                options: [
                    "Phishing realizado através de chamadas telefônicas.",
                    "Phishing que utiliza redes sociais.",
                    "Phishing realizado através de mensagens de texto (SMS).",
                    "Phishing que mira em CEOs de empresas.",
                    "Phishing para roubo de senhas de Wi-Fi."
                ],
                correctAnswer: "Phishing realizado através de mensagens de texto (SMS).",
                image: null
            },
            {
                question: "Você deve compartilhar suas senhas ou informações de login por e-mail ou mensagens?",
                options: [
                    "Sim, se a solicitação vier de uma empresa conhecida.",
                    "Nunca, nenhuma empresa legítima pedirá senhas por esses meios.",
                    "Apenas se o e-mail for criptografado.",
                    "Sim, se for para o suporte técnico.",
                    "Apenas se a solicitação for urgente."
                ],
                correctAnswer: "Nunca, nenhuma empresa legítima pedirá senhas por esses meios.",
                image: null
            },
            {
                question: "Qual ferramenta pode ajudar a proteger suas contas contra phishing mesmo que sua senha seja comprometida?",
                options: [
                    "Um antivírus básico.",
                    "Firewall do sistema operacional.",
                    "Autenticação de dois fatores (2FA).",
                    "VPN (Rede Privada Virtual).",
                    "Um adblocker no navegador."
                ],
                correctAnswer: "Autenticação de dois fatores (2FA).",
                image: null
            },
            {
                question: "Ao receber uma notificação de 'tentativa de login suspeita' que você não reconhece, qual a melhor ação?",
                options: [
                    "Clicar no link da notificação para ver os detalhes.",
                    "Mudar sua senha imediatamente através do site oficial do serviço ou aplicativo.",
                    "Ignorar, pois pode ser um erro do sistema.",
                    "Compartilhar a notificação em redes sociais para alertar amigos.",
                    "Responder à notificação pedindo para parar."
                ],
                correctAnswer: "Mudar sua senha imediatamente através do site oficial do serviço ou aplicativo.",
                image: null
            },
            {
                question: "O que é 'spear phishing'?",
                options: [
                    "Um ataque de phishing genérico enviado para milhões de pessoas.",
                    "Um ataque de phishing altamente direcionado a indivíduos ou organizações específicas.",
                    "Phishing que usa iscas de peixe.",
                    "Phishing sem o uso de e-mail.",
                    "Phishing que ocorre apenas em celulares."
                ],
                correctAnswer: "Um ataque de phishing altamente direcionado a indivíduos ou organizações específicas.",
                image: null
            },
            {
                question: "Um site solicita que você baixe um 'plugin de segurança essencial' para continuar. O que você deve suspeitar?",
                options: [
                    "Que é uma atualização de segurança legítima.",
                    "Que o site está tentando instalar malware ou software indesejado.",
                    "Que seu navegador está desatualizado.",
                    "Que é uma medida padrão de todos os sites seguros.",
                    "Que seu antivírus está bloqueando indevidamente."
                ],
                correctAnswer: "Que o site está tentando instalar malware ou software indesejado.",
                image: null
            },
            {
                question: "Qual destas extensões de arquivo é mais suspeita em um anexo de e-mail inesperado?",
                options: [
                    ".pdf",
                    ".docx",
                    ".txt",
                    ".exe",
                    ".jpg"
                ],
                correctAnswer: ".exe",
                image: null
            },
            {
                question: "Se você acidentalmente clicou em um link de phishing, qual a primeira coisa que você deve fazer?",
                options: [
                    "Inserir suas credenciais para ver o que acontece.",
                    "Fechar a janela do navegador imediatamente e desconectar-se da internet.",
                    "Tentar navegar para outras páginas do site.",
                    "Reiniciar o computador.",
                    "Compartilhar o link com outros para que eles testem."
                ],
                correctAnswer: "Fechar a janela do navegador imediatamente e desconectar-se da internet.",
                image: null
            },
            {
                question: "Recebo um SMS de um número desconhecido, que diz 'Seu pacote está retido, clique para liberar'. Qual é a melhor atitude?",
                options: [
                    "Clicar no link, pois meu pacote pode estar realmente retido.",
                    "Ignorar a mensagem e bloquear o número.",
                    "Ligar para a empresa de entregas usando um número de contato oficial para verificar o status do pacote.",
                    "Responder 'STOP' para parar de receber mensagens.",
                    "Encaminhar para a polícia cibernética."
                ],
                correctAnswer: "Ligar para a empresa de entregas usando um número de contato oficial para verificar o status do pacote.",
                image: null
            },
            {
                question: "O que é mais seguro para fazer login em serviços online?",
                options: [
                    "Clicar em um link de e-mail.",
                    "Usar o mesmo navegador para tudo.",
                    "Digitar o endereço do site diretamente na barra de URL ou usar um favorito confiável.",
                    "Usar Wi-Fi público sem proteção.",
                    "Salvar todas as senhas no navegador."
                ],
                correctAnswer: "Digitar o endereço do site diretamente na barra de URL ou usar um favorito confiável.",
                image: null
            }
        ];

        let currentQuestionIndex = 0;
        let score = 0;
        let answeredThisQuestion = false;

        const questionTextElement = document.getElementById('question-text');
        const optionsContainer = document.getElementById('options-container');
        const scoreElement = document.getElementById('score');
        const currentQuestionNumberElement = document.getElementById('current-question-number');
        const totalQuestionsElement = document.getElementById('total-questions');
        const nextButton = document.getElementById('next-button');
        const feedbackMessage = document.getElementById('feedback-message');
        const quizScreen = document.getElementById('quiz-screen');
        const endScreen = document.getElementById('end-screen');
        const finalScoreElement = document.getElementById('final-score');
        const maxScoreElement = document.getElementById('max-score');
        const restartButton = document.getElementById('restart-button');
        const questionImageElement = document.getElementById('question-image');

        totalQuestionsElement.textContent = questions.length;
        maxScoreElement.textContent = questions.length;

        function loadQuestion() {
            answeredThisQuestion = false;
            nextButton.classList.add('hidden');
            feedbackMessage.textContent = '';
            feedbackMessage.classList.remove('acerto', 'erro');
            optionsContainer.innerHTML = '';

            if (currentQuestionIndex < questions.length) {
                const currentQuestion = questions[currentQuestionIndex];
                currentQuestionNumberElement.textContent = currentQuestionIndex + 1;
                questionTextElement.textContent = currentQuestion.question;

                if (currentQuestion.image) {
                    questionImageElement.src = currentQuestion.image;
                    questionImageElement.style.display = 'block';
                } else {
                    questionImageElement.src = '';
                    questionImageElement.style.display = 'none';
                }

                currentQuestion.options.forEach(option => {
                    const button = document.createElement('button');
                    button.textContent = option;
                    button.classList.add('option-button');
                    button.addEventListener('click', () => selectOption(button, option, currentQuestion.correctAnswer));
                    optionsContainer.appendChild(button);
                });
            } else {
                showEndScreen();
            }
        }

        function selectOption(selectedButton, selectedAnswer, correctAnswer) {
            if (answeredThisQuestion) return;
            answeredThisQuestion = true;

            const allOptionButtons = optionsContainer.querySelectorAll('.option-button');
            allOptionButtons.forEach(button => {
                button.classList.add('disabled');
                if (button.textContent === correctAnswer) {
                    button.classList.add('correct');
                } else if (button === selectedButton) {
                    button.classList.add('incorrect');
                }
            });

            if (selectedAnswer === correctAnswer) {
                score++;
                feedbackMessage.textContent = 'Correto! 🎉';
                feedbackMessage.classList.remove('erro');
                feedbackMessage.classList.add('acerto');
            } else {
                feedbackMessage.textContent = 'Errado. A resposta correta era: ' + correctAnswer;
                feedbackMessage.classList.remove('acerto');
                feedbackMessage.classList.add('erro');
            }
            scoreElement.textContent = `Pontuação: ${score}`;
            nextButton.classList.remove('hidden');
        }

        function showEndScreen() {
            quizScreen.style.display = 'none';
            endScreen.style.display = 'block';
            finalScoreElement.textContent = score;
        }

        function restartQuiz() {
            currentQuestionIndex = 0;
            score = 0;
            scoreElement.textContent = `Pontuação: ${score}`;
            quizScreen.style.display = 'block';
            endScreen.style.display = 'none';
            loadQuestion();
        }

        nextButton.addEventListener('click', () => {
            currentQuestionIndex++;
            loadQuestion();
        });

        restartButton.addEventListener('click', restartQuiz);

        loadQuestion();
