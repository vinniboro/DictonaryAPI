import React from "react";


interface bookmark {
    word: string;
    explanation: string;
    date: string; 
  }
  

  const vincentBookmark: bookmark[] = [
    {
    word: 'Ubiquitous',
    explanation: 'The word ubiquitous comes from the Latin word ubique, meaning "everywhere." It describes something that is present or happening everywhere or in many places at the same time. For example, mobile phones are ubiquitous in today´s society, as they are accessible almost everywhere and by almost everyone.',
    date: "2024.02.01"
    },
    {
        word: 'Mellifluous',
        explanation: 'The word "mellifluous" comes from the Latin words "mel" (honey) and "fluere" (to flow). It describes something that is sweetly or smoothly flowing, like the sound of a honeyed voice or a melodic piece of music. The word can also be used to describe something that is sweetly spoken or written.',
        date: "2024.02.01"
    }, 
    {
        word: "Ephemeral",
        explanation: 'The word ephemeral comes from the Greek word "ephēmeros", meaning "lasting a day." It describes something that lasts for a very short time. Ephemeral things are often beautiful and fleeting, like butterflies, snowflakes, or dreams.',
        date: "2024.02.08"
    }
  ]


  export default vincentBookmark;
