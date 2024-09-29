import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

const EstiloGlobal = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.corFundo};
    color: ${props => props.theme.corTexto};
    transition: all 0.3s ease;
    line-height: 1.6;
  }
`;

const ContainerQuiz = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  justify-content: center;

  @media (orientation: landscape) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
  }
`;

const ContainerQuestao = styled.div`
  background-color: ${props => props.theme.corFundoCartao};
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 600px;

  @media (orientation: landscape) {
    width: 45%;
  }
`;

const Botao = styled.button`
  background-color: ${props => props.theme.corBotao};
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 18px;
  margin-top: 20px;
  transition: background-color 0.3s ease, transform 0.1s ease;

  &:hover {
    background-color: ${props => props.theme.corBotaoHover};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const LabelOpcao = styled.label`
  display: block;
  margin: 15px 0;
  cursor: pointer;
  padding: 10px;
  border-radius: 6px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.corHoverOpcao};
  }
`;

const BotaoRadio = styled.input`
  margin-right: 15px;
`;

const Resultado = styled.div`
  margin-top: 25px;
  font-weight: bold;
  font-size: 20px;
  color: ${props => props.correto ? 'green' : 'red'};
`;

const AlternadorTema = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  z-index: 1000;
`;

const questoes = [
  {
    pergunta: "O que significa o termo 'responsividade' no contexto de design web?",
    opcoes: [
      "A velocidade de carregamento de um site",
      "A capacidade de um site se adaptar a diferentes tamanhos de tela",
      "A habilidade de um site responder a comandos de voz",
      "O tempo de resposta do servidor a requisições"
    ],
    respostaCorreta: 1,
    explicacao: "Responsividade refere-se à capacidade de um layout se ajustar automaticamente a diferentes tamanhos de tela, proporcionando uma boa experiência em dispositivos variados, desde smartphones até desktops."
  },
  {
    pergunta: "Qual é um princípio fundamental da usabilidade em interfaces digitais?",
    opcoes: [
      "Usar o máximo de animações possível",
      "Esconder funcionalidades para simplificar a interface",
      "Manter consistência nos elementos e padrões de interação",
      "Priorizar design sobre funcionalidade"
    ],
    respostaCorreta: 2,
    explicacao: "A consistência na interface é crucial para a usabilidade, pois ajuda os usuários a aprender e usar o sistema mais facilmente, reduzindo a curva de aprendizado e erros."
  },
  {
    pergunta: "O que significa a abordagem 'Mobile-First' no desenvolvimento web?",
    opcoes: [
      "Desenvolver apenas para dispositivos móveis",
      "Começar o design e desenvolvimento pensando primeiro em dispositivos móveis",
      "Priorizar atualizações para o aplicativo móvel antes do site",
      "Usar apenas tecnologias específicas para mobile"
    ],
    respostaCorreta: 1,
    explicacao: "Mobile-First é uma abordagem de design e desenvolvimento que prioriza a experiência em dispositivos móveis desde o início do projeto, expandindo posteriormente para telas maiores."
  },
  {
    pergunta: "Qual é a principal vantagem de usar media queries em CSS?",
    opcoes: [
      "Aumentar a velocidade de carregamento do site",
      "Melhorar o SEO do site",
      "Permitir a criação de layouts responsivos",
      "Reduzir o uso de JavaScript"
    ],
    respostaCorreta: 2,
    explicacao: "Media queries permitem aplicar estilos CSS diferentes baseados em características do dispositivo, como largura da tela, possibilitando a criação de layouts responsivos."
  },
  {
    pergunta: "O que é o conceito de 'affordance' em design de interface?",
    opcoes: [
      "O custo de desenvolvimento de uma interface",
      "A capacidade de uma interface se adaptar a diferentes idiomas",
      "As propriedades percebidas de um objeto que sugerem como ele pode ser usado",
      "A velocidade com que um usuário aprende a usar uma interface"
    ],
    respostaCorreta: 2,
    explicacao: "Affordance refere-se às características de um objeto que indicam como ele pode ser usado. Em interfaces, são pistas visuais que sugerem a funcionalidade de elementos."
  },
  {
    pergunta: "Qual é o propósito principal do teste de usabilidade?",
    opcoes: [
      "Verificar se o site funciona em diferentes navegadores",
      "Avaliar a experiência do usuário e identificar problemas de uso",
      "Testar a segurança do site contra ataques",
      "Medir a velocidade de carregamento das páginas"
    ],
    respostaCorreta: 1,
    explicacao: "Testes de usabilidade são realizados para avaliar como os usuários reais interagem com a interface, identificando problemas e áreas de melhoria na experiência do usuário."
  },
  {
    pergunta: "O que é 'design de interação' no contexto de UX/UI?",
    opcoes: [
      "O processo de criar animações para interfaces",
      "A escolha de cores e tipografia para um site",
      "O design de como os usuários interagem com um produto digital",
      "A programação de funcionalidades interativas"
    ],
    respostaCorreta: 2,
    explicacao: "Design de interação foca em criar interfaces digitais intuitivas e eficientes, considerando como os usuários interagem com o produto e como o produto responde a essas interações."
  },
  {
    pergunta: "Qual é a importância do 'contraste' em design de interfaces?",
    opcoes: [
      "Apenas para fins estéticos",
      "Melhorar a legibilidade e acessibilidade",
      "Aumentar o tempo de carregamento da página",
      "Dificultar a leitura para manter o usuário engajado"
    ],
    respostaCorreta: 1,
    explicacao: "O contraste adequado é crucial para a legibilidade e acessibilidade, ajudando todos os usuários, especialmente aqueles com deficiências visuais, a perceberem e lerem o conteúdo facilmente."
  },
  {
    pergunta: "O que é 'arquitetura de informação' em design web?",
    opcoes: [
      "O design físico dos servidores que hospedam um site",
      "A organização e estruturação do conteúdo e funcionalidades de um site",
      "O processo de compressão de imagens para melhorar o desempenho",
      "A escolha de linguagens de programação para o backend"
    ],
    respostaCorreta: 1,
    explicacao: "Arquitetura de informação refere-se à organização, estruturação e rotulagem de conteúdo em sites, aplicativos e softwares para suportar usabilidade e encontrabilidade."
  },
  {
    pergunta: "Qual é o objetivo principal do design 'minimalista' em interfaces?",
    opcoes: [
      "Usar o mínimo de cores possível",
      "Remover todas as imagens e usar apenas texto",
      "Focar no essencial, reduzindo elementos desnecessários",
      "Minimizar o tamanho do arquivo das páginas web"
    ],
    respostaCorreta: 2,
    explicacao: "O design minimalista visa simplificar a interface focando nos elementos essenciais, reduzindo a carga cognitiva do usuário e melhorando a usabilidade e a estética."
  }
];

const temaClaro = {
  corFundo: '#f5f5f5',
  corFundoCartao: '#ffffff',
  corTexto: '#333333',
  corBotao: '#0077cc',
  corBotaoHover: '#005fa3',
  corHoverOpcao: '#e6f2ff'
};

const temaEscuro = {
  corFundo: '#222222',
  corFundoCartao: '#333333',
  corTexto: '#ffffff',
  corBotao: '#4a90e2',
  corBotaoHover: '#357abd',
  corHoverOpcao: '#444444'
};

const Quiz = () => {
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [pontuacao, setPontuacao] = useState(0);
  const [temaEscuroAtivo, setTemaEscuroAtivo] = useState(false);

  const confirmarResposta = () => {
    if (opcaoSelecionada === questoes[questaoAtual].respostaCorreta) {
      setPontuacao(pontuacao + 1);
    }
    setMostrarResultado(true);
  };

  const proximaQuestao = () => {
    setOpcaoSelecionada(null);
    setMostrarResultado(false);
    if (questaoAtual < questoes.length - 1) {
      setQuestaoAtual(questaoAtual + 1);
    } else {
      setQuestaoAtual(questoes.length);
    }
  };

  const alternarTema = () => {
    setTemaEscuroAtivo(!temaEscuroAtivo);
  };

  return (
    <ThemeProvider theme={temaEscuroAtivo ? temaEscuro : temaClaro}>
      <EstiloGlobal />
      <ContainerQuiz>
        <AlternadorTema onClick={alternarTema}>
          {temaEscuroAtivo ? '☀️' : '🌙'}
        </AlternadorTema>
        {questaoAtual < questoes.length ? (
          <ContainerQuestao>
            <h2>{questoes[questaoAtual].pergunta}</h2>
            {questoes[questaoAtual].opcoes.map((opcao, index) => (
              <LabelOpcao key={index}>
                <BotaoRadio
                  type="radio"
                  name="opcao"
                  value={index}
                  checked={opcaoSelecionada === index}
                  onChange={() => setOpcaoSelecionada(index)}
                />
                {opcao}
              </LabelOpcao>
            ))}
            {!mostrarResultado ? (
              <Botao onClick={confirmarResposta} disabled={opcaoSelecionada === null}>
                Confirmar Resposta
              </Botao>
            ) : (
              <>
                <Resultado correto={opcaoSelecionada === questoes[questaoAtual].respostaCorreta}>
                  {opcaoSelecionada === questoes[questaoAtual].respostaCorreta ? "Correto!" : "Incorreto!"}
                </Resultado>
                <p>{questoes[questaoAtual].explicacao}</p>
                <Botao onClick={proximaQuestao}>
                  {questaoAtual < questoes.length - 1 ? "Próxima Pergunta" : "Ver Pontuação Final"}
                </Botao>
              </>
            )}
          </ContainerQuestao>
        ) : (
          <ContainerQuestao>
            <h2>Quiz Concluído!</h2>
            <p>Sua pontuação: {pontuacao} de {questoes.length}</p>
          </ContainerQuestao>
        )}
      </ContainerQuiz>
    </ThemeProvider>
  );
};

export default Quiz;