import React, { useState } from "react";

// Define the questions and answers
const questions = [
  {
    question: "What is your name?",
    answer: "",
  },
  {
    question: "What is your favorite color?",
    answer: "",
  },
  {
    question: "What is your favorite animal?",
    answer: "",
  },
  {
    question: "What is your favorite hobby?",
    answer: "",
  },
  {
    question: "What is your favorite movie?",
    answer: "",
  },
];

// Define the form component
const Form = () => {
  // Use state to keep track of the current question index and the user input
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");

  // Handle the input change event
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Handle the form submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the answer of the current question
    questions[index].answer = input;
    
    // Move to the next question if there is any
    if (index < questions.length - 1) {
      setInput(questions[index + 1].answer)
      setIndex(index + 1);
    } else {
      // Otherwise, display the results
      alert(JSON.stringify(questions, null, 2));
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    if (index > 0) {
      setIndex(index-1);
      setInput(questions[index-1].answer);
    }
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleBack}>
      <h1>Question {index + 1}</h1>
      <p>{questions[index].question}</p>
      <input type="text" value={input} onChange={handleChange} required />
      {/* <select value={input} onChange={handleChange}>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select> */}
      <button type="reset" {...index == 0 ? "disabled" : ""}>Back</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default Form;