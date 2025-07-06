// biology.js

const biologyQuestions = [
  {
    question: "Which plant leaves are eaten by silk worm?",
    options: ["Mulberry leaves", "Banana leaves", "Lotus leaves", "Mango leaves"],
    answer: "Mulberry leaves"
  },
  {
    question: "Which gland is known as emergency gland?",
    options: ["Pituitary gland", "Adrenal gland", "Gonads", "Pancreas"],
    answer: "Adrenal gland"
  },
  {
    question: "Which part of brain maintains the balance of body?",
    options: ["Cerebellum", "Cerebrum", "Medulla oblongata", "Spinal cord"],
    answer: "Cerebellum"
  },
  {
    question: "Which gland is called mixed gland?",
    options: ["Pancreas", "Gonad", "Adrenal", "Thyroid"],
    answer: "Pancreas"
  },
  {
    question: "How many chambers are there in human heart?",
    options: ["2", "3", "4", "5"],
    answer: "4"
  },
  {
    question: "Which disease is caused by lack of RBC?",
    options: ["Leukaemia", "Blood cancer", "Anemia", "None of the above"],
    answer: "Anemia"
  },
  {
    question: "What is the normal blood pressure in adult human?",
    options: ["120/80 mmHg", "130/90 mmHg", "100/70 mmHg", "160 mmHg"],
    answer: "120/80 mmHg"
  },
  {
    question: "What is the number of chromosomes in human beings?",
    options: ["16", "26", "36", "46"],
    answer: "46"
  },
  {
    question: "Which fertilization is common in frog?",
    options: ["Internal", "External", "Both", "None of the above"],
    answer: "External"
  },
  {
    question: "Who is the father of genetics?",
    options: ["Gregor Mendel", "Newton", "Pascal", "None of the above"],
    answer: "Gregor Mendel"
  },
  {
    question: "What is the phenotype ratio in second law of Mendelism?",
    options: ["3:1", "2:1", "1:2:1", "9:3:3:1"],
    answer: "9:3:3:1"
  },
  {
    question: "Which gas depletes the ozone layer?",
    options: ["CFCs", "Oxygen", "Carbon dioxide", "Carbon monoxide"],
    answer: "CFCs"
  },
  {
    question: "The rearing of honey bee is called",
    options: ["Apiculture", "Sericulture", "Melittology", "Pisciculture"],
    answer: "Apiculture"
  },
  {
    question: "The major duty of Drone bee is to:",
    options: ["Feed larva", "Fertilize the queen", "Lay eggs", "Gather nectar"],
    answer: "Fertilize the queen"
  },
  {
    question: "The junction between two adjacent neuron is called",
    options: ["Dendrite", "Synapse", "Axon", "Impulse"],
    answer: "Synapse"
  },
  {
    question: "The number of pairs of nerves which arises from the spinal cord is",
    options: ["21 pairs", "31 pairs", "41 pairs", "51 pairs"],
    answer: "31 pairs"
  },
  {
    question: "In man, the life cycle of erythrocyte is about:",
    options: ["30 days", "120 days", "20 days", "365 days"],
    answer: "120 days"
  },
  {
    question: "The contracted phase of heart is called",
    options: ["Systole", "Diastole", "Pulse", "Heartbeat"],
    answer: "Systole"
  },
  {
    question: "Grafting is most useful in",
    options: ["Dicots", "Monocots", "Pteridophytes", "Bryophytes"],
    answer: "Dicots"
  },
  {
    question: "The ultimate source of variation is",
    options: ["Natural selection", "Mutation", "Sexual reproduction", "None of the above"],
    answer: "Mutation"
  },
  {
    question: "Father of genetics is",
    options: ["Morgan", "Mendel", "Darwin", "Lamark"],
    answer: "Mendel"
  },
  {
    question: "Sudden inheritable change is called",
    options: ["Recombination", "Mutation", "Natural selection", "Segregation"],
    answer: "Mutation"
  },
  {
    question: "The science of heredity is known as",
    options: ["Biology", "Genetics", "Embryology", "Biochemistry"],
    answer: "Genetics"
  },
  {
    question: "Which of the following is not an air pollutant?",
    options: ["Sewage", "Fertilizer", "Fly ash", "Pesticide"],
    answer: "Sewage"
  },
  {
    question: "Stock and scion are involved in the artificial propagation method known as",
    options: ["Tissue culture", "Layering", "Grafting", "Cutting"],
    answer: "Grafting"
  },
  {
    question: "In Amoeba common mode of multiplication is:",
    options: ["Binary fission", "Multiple fission", "Sporulation", "Budding"],
    answer: "Binary fission"
  },
  {
    question: "The number of chromosomes in sugar cane is",
    options: ["20 pairs", "30 pairs", "40 pairs", "50 pairs"],
    answer: "40 pairs"
  },
  {
    question: "The valve present between the right atrium and the right ventricle is the",
    options: ["Tricuspid valve", "Bicuspid valve", "Semi-lunar valve", "Mitral valve"],
    answer: "Tricuspid valve"
  },
  {
    question: "Motor nerve carries the message to",
    options: ["Sensory organ", "Spinal cord", "Effector organ", "Brain"],
    answer: "Effector organ"
  }
];

// Randomize questions order
biologyQuestions.sort(() => Math.random() - 0.5);
