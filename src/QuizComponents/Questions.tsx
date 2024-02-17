import React from "react";

interface AnswerOption {
  answerText: string;
  isCorrect: boolean;
  explanation?: string;
}

interface Question {
  questionText: string;
  answerOptions: AnswerOption[];
}

const questions: Question[] = [
  {
    questionText: 'Ubiquitous',
    answerOptions: [
      { answerText: 'A. Extreme behaviour', isCorrect: false },
      { answerText: 'B. Recovery', isCorrect: false },
      { answerText: 'C. Lasting', isCorrect: false },
      {
        answerText: 'D. Found everywhere',
        isCorrect: true,
        explanation: 'The word ubiquitous comes from the Latin word ubique, meaning "everywhere." It describes something that is present or happening everywhere or in many places at the same time. For example, mobile phones are ubiquitous in today´s society, as they are accessible almost everywhere and by almost everyone.'
      },
    ],
  },
  {
    questionText: 'Mellifluous',
    answerOptions: [
      { answerText: 'A. Baking product', isCorrect: false },
      { answerText: 'B. A type of illness', isCorrect: false },
      {
        answerText: 'C. Pleasant to hear',
        isCorrect: true,
        explanation: 'The word "mellifluous" comes from the Latin words "mel" (honey) and "fluere" (to flow). It describes something that is sweetly or smoothly flowing, like the sound of a honeyed voice or a melodic piece of music. The word can also be used to describe something that is sweetly spoken or written.'
      },
      { answerText: 'D. Surrender', isCorrect: false },
    ],
  },
  {
    questionText: 'Ephemeral',
    answerOptions: [
      { answerText: 'A. Found everywhere', isCorrect: false },
      { answerText: 'B. Lasting for a very short time', isCorrect: true,
      explanation: 'The word ephemeral comes from the Greek word "ephēmeros", meaning "lasting a day." It describes something that lasts for a very short time. Ephemeral things are often beautiful and fleeting, like butterflies, snowflakes, or dreams.' },
      { answerText: 'C. Study of the mid', isCorrect: false },
      { answerText: 'D. A plant', isCorrect: false },
    ],
  },
  {
    questionText: 'Pernicious',
    answerOptions: [
      { answerText: 'A. Able to withstand or recover quickly from difficult conditions', isCorrect: false },
      { answerText: 'B. A collection of objects', isCorrect: false },
      {
        answerText: 'C. Having a harmful effect, especially in a gradual or subtle way.',
        isCorrect: true,
        explanation: 'The word pernicious comes from the Latin word "pernicies", meaning "ruin" or "destruction." It describes something that is highly injurious or destructive. Pernicious things can be physical, such as diseases, or they can be metaphorical, such as ideas or behaviors.'
      },
      { answerText: 'D. The theory of knowledge', isCorrect: false },
    ],
  },
  {
    questionText: 'Resilient',
    answerOptions: [
      { answerText: 'A. Able to withstand or recover quickly from difficult conditions.', isCorrect: true,
      explanation: 'The word resilient comes from the Latin word "resilire", meaning "to spring back." It describes the ability to withstand or recover quickly from difficult or challenging conditions. Resilience is a key quality in individuals, communities, and organizations. It allows us to cope with setbacks, learn from our mistakes, and bounce back from adversity.'
      },
      { answerText: 'B. The ability to be easily bent without breaking', isCorrect: false },
      { answerText: 'C. Cover from ', isCorrect: false },
      { answerText: 'D. The ability to adapt to difficult conditions', isCorrect: false },
    ],
  },
  {
    questionText: 'Aforementioned',
    answerOptions: [
      { answerText: 'A. Mentioned earlier or previously.', isCorrect: true,
      explanation: 'It is often used in legal and formal writing to avoid repeating the same word or phrase multiple times. For example, you might say "The aforementioned company has been operating in the United States for over 50 years" instead of saying "The company that I mentioned earlier has been operating in the United States for over 50 years.'
      },
      { answerText: 'B. Showing deep affection', isCorrect: false },
      { answerText: 'C. The quality of being kind, tender, or mild-mannered. ', isCorrect: false },
      { answerText: 'D. The complete set of genetic material of any living thing', isCorrect: false },
    ],
  },
  {
    questionText: 'To contaminate',
    answerOptions: [
      { answerText: 'A. Discover after a deliberate search.', isCorrect: false },
      { answerText: 'B. The exercise of power or influence over someone or something, or the state of being so controlled.', isCorrect: false },
      { answerText: 'C. Be in a strong enough position to have or secure.', isCorrect: false },
      { answerText: 'D. To make something impure or unfit for use by introducing something harmful.', isCorrect: true,
      explanation: 'To contaminate is to make something impure or unfit for use by introducing something harmful. The word "contaminate" can be used to describe a wide range of things, from polluting water with chemicals to spreading disease with germs.'
      }
    ],
  },
  {
    questionText: 'Tacit',
    answerOptions: [
      { answerText: 'A. Cause to act dishonestly in return for money or personal gain.', isCorrect: false },
      { answerText: 'B. Understood or implied without being stated. ', isCorrect: true,
      explanation: 'The agreement was tacit, based on a shared understanding between the two parties.'
      },
      { answerText: 'C. Persuade or cause (someone) to do something.', isCorrect: false },
      { answerText: 'D. Collect plants, fruits, etc., for food.', isCorrect: false }
    ],
  },
  {
    questionText: 'Quandary',
    answerOptions: [
      { answerText: 'A. Source of minerals', isCorrect: false },
      { answerText: 'B. State of perplexity or uncertainty. ', isCorrect: true,
      explanation: 'A quandary is a state of perplexity or uncertainty, especially as to what to do in a difficult situation. It is a situation in which there is no clear or easy answer, and the person involved is unsure of what to do.'
      },
      { answerText: 'C. Wide-reaching  ', isCorrect: false },
      { answerText: 'D. Get, acquire, or secure (something).', isCorrect: false }
    ],
  },
  {
    questionText: 'Inquiry',
    answerOptions: [
      { answerText: 'A. A significant amount of something', isCorrect: false },
      { answerText: 'B. An outer piece of timber sawn from a log', isCorrect: false },
      { answerText: 'C. Small mass of bones and feathers regurgitated by a bird of prey.', isCorrect: false },
      { answerText: 'D. A request for information ', isCorrect: true,
      explanation: ' An inquiry is a question or request for information that is made to someone or something. For example, you might make an inquiry about the price of a product or the availability of a service.'
      }
    ],
  }
];

export default questions;
