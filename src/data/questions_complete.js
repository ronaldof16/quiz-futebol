const data = [
    {
      category: "Times Brasileiros",
      questions: [
        {
          question: "Qual time tem a maior torcida do Brasil?",
          options: ["São Paulo", "Corinthians", "Flamengo", "Palmeiras"],
          answer: "Flamengo",
          tip: "Time de coração do ex-jogador zico",
        },
        {
          question: "Qual time tem mais títulos do mundial de clubes da FIFA?",
          options: ["Flamengo", "Cruzeiro", "Santos", "São Paulo"],
          answer: "São Paulo",
          tip: "É um time Paulista"
        },
        {
          question: "O maior campeão da copa do Brasil é o:",
          options: ["Cruzeiro", "Grêmio", "Fluminense", "Palmeiras"],
          answer: "Cruzeiro",
          tip: "Time que Ronaldo fenômeno comprou"
        },
        {
          question: "Qual time nunca foi rebaixado para a série B do campeonato brasileiro?",
          options: ["Internacional", "Vasco", "Corinthians", "São Paulo"],
          answer: "São Paulo",
          tip: "Tem o maior estádio particular do Brasil"
        },
        {
          question: "O time que mais participou da taça Libertadores da América é o:",
          options: ["Palmeiras", "São Paulo", "Grêmio", "Flamengo"],
          answer: "Palmeiras",
          tip: "Sua camisa é verde"
        },
      ],
    },
    {
      category: "Times Internacionais",
      questions: [
        {
          question: "Qual time da Argentina tem mais títulos nacionais?",
          options: ["Boca Juniors", "River Plate", "Independiente", "Estudiantes"],
          answer: "River Plate",
          tip: "Monumental de Núñez é o nome do seu estádio"
        },
        {
          question: "Em que time Cristiano Ronaldo não jogou?:",
          options: ["Manchester United", "Manchester City", "Sporting", "Juventus"],
          answer: "Manchester City",
          tip: "É um time da Inglaterra"
        },
        {
          question: "Qual o time que Ronaldinho Gaúcho jogava antes de ir para o Barcelona?",
          options: ["PSG", "Ajax", "Lyon", "PSV"],
          answer: "PSG",
          tip: "Tem sua sede em Paris"
        },
        {
          question: "Em qual time da Europa Neymar foi jogar quando saiu do Santos?",
          options: ["Real Madrid", "PSG", "Barcelona", "Chelsea"],
          answer: "Barcelona",
          tip: "Time que Messi mais jogou"
        },
        {
          question: "Em qual time italiano Adriano imperador fez sucesso?",
          options: ["Roma", "Juventus", "Inter de Milão", "Milan"],
          answer: "Inter de Milão",
          tip: "É sediado na cidade de Milão"
        }
      ],
    },
    {
      category: "Seleção Brasileira",
      questions: [
        {
          question: "Quem é o maior artilheiro da seleção brasileira?",
          options: [
            "Pelé",
            "Ronaldo fenômeno",
            "Neymar",
            "Romário",
          ],
          answer: "Neymar",
          tip: "Jogou ao lado de Messi no Barcelona"
        },
        {
          question: "Em que ano o Brasil conquistou a primeira copa do mundo?",
          options: ["1954", "l958", "1962", "1966"],
          answer: "1958",
          tip: "Foi na década de 50"
        },
        {
          question: "Qual é o jogador que mais jogou pela seleção brasileira?",
          options: ["Cafu", "Roberto Carlos", "Pelé", "Taffarel"],
          answer: "Cafu",
          tip: "Jogava de lateral direito"
        },
        {
          question: "Qual foi o jogador mais jovem a marcar um gol pela seleção brasileira?",
          options: ["Pelé", "Neymar", "Ronaldo fenômeno", "Ronaldinho Gaúcho"],
          answer: "Pelé",
          tip: "É considerado o rei do futebol"
        },
        {
          question: "Em qual país a seleção conquistou a copa de 1970?",
          options: ["Inglaterra", "Estados Unidos", "México", "Portugal"],
          answer: "México",
          tip: "Onde o império asteca se instalou"
        },
      ],
    },
    {
      category: "Champions League",
      questions: [
        {
          question: "Quem é o maior campeão da champions league?",
          options: ["Milan", "Barcelona", "Bayern de Munique", "Real Madrid"],
          answer: "Real Madrid",
          tip: "Já foi conhecido como galáticos"
        },
        {
          question: "Quem é o maior artilheiro da história da champions league?",
          options: ["Messi", "Cristano Ronaldo", "Lewandowski", "Van Nistelrooy"],
          answer: "Cristiano Ronaldo",
          tip: "É português"
        },
        {
          question: "Qual time ainda não conquistou uma champions league?",
          options: ["Porto", "Juventus", "Chelsea", "PSG"],
          answer: "PSG",
          tip: "Time francês"
        },
        {
          question: "Qual jogador brasileiro fez mais gols na história da Champions league?",
          options: ["Kaká", "Neymar", "Rivaldo", "Jardel"],
          answer: "Neymar",
          tip: "Aina está em atividade"
        },
        {
          question: "Quem é o técnico que tem mais títulos da champions league?",
          options: ["Carlo Ancelotti", "Zinedine Zidane", "Pep Guardiola", "Alex Ferguson"],
          answer: "Carlo Ancelotti",
          tip: "Foi campeão com o Milan e com o Real Madrid"
        }
      ]
    },
    {
      category: "Copa do Mundo",
      questions: [
        {
          question: "Quantas vezes o Brasil ganhou a copa do mundo?",
          options: ["5", "4", "6", "3"],
          answer: "5",
          tip: "O Brasil é pentacampeão"
        },
        {
          question: "O maior artilheiro de todas as copas do mundo é:",
          options: ["Ronaldo fenômeno", "Miroslav Kolse", "Messi", "Pelé"],
          answer: "Miroslav Klose",
          tip: "Jogou pela Alemanha"
        },
        {
          question: "Quem foi o jogador mais jovem a marcar um gol em uma copa do mundo?",
          options: ["Gavi", "Pelé", "Michael Owen", "Ronaldinho Gaúcho"],
          answer: "Pelé",
          tip: "É o maior jogador de todos os tempos"
        },
        {
          question: "Quem é o jogador com maior números de partidas em copas do mundo?",
          options: ["Messi", "Pelé", "Lothar Matthäus", "Cafu"],
          answer: "Messi",
          tip: "É Argentino"
        },
        {
          question: "Qual seleção ainda não ganhou uma copa do mundo?",
          options: ["Inglaterra", "Uruguai", "Portugal", "Espanha"],
          answer: "Portugal",
          tip: "Seleção de Cristiano Ronaldo"
        }
      ]
    },
    {
      category: "Futebol Feminino",
      questions: [
        {
          question: "Qual seleção que mais ganhou a copa do mundo feminina?",
          options: ["Alemanha", "Japão", "Noruega", "Estados Unidos"],
          answer: "Estados Unidos",
          tip: "É um país da américa"
        },
        {
          question: "A maior artilheira da história da seleção brasileira feminina é:",
          options: ["Cristiane", "Marta", "Formiga", "Debinha"],
          answer: "Marta",
          tip: "É considerada rainha do futebol feminino"
        },
        {
          question: "Quem é o time com mais títulos do campeonato brasileiro de futebol feminino?",
          options: ["Corinthians","Ferroviária", "Santos", "Flamengo"],
          answer: "Corinthians",
          tip: "Seu estádio é a Neo Química Arena"
        },
        {
          question: "Onde aconteceu o primeiro jogo de futebol feminino da história?",
          options: ["Inglaterra", "Estados Unidos", "Escócia", "Brasil"],
          answer: "Escócia",
          tip: "País que inventou o golfe"
        },
        {
          question: "O time que mais ganhou achampions league feminina é o:",
          options: ["Barcelona", "Lyon", "Frankfurt", "Arsenal"],
          answer: "Lyon",
          tip: "Time que Juninho Pernambucano fez história"
        }
      ]
    }
  ];
  
  export default data;