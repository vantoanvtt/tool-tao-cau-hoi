import React, { createContext, useEffect, useState } from 'react';
const QuestionContext = createContext();
// Provide Context
export const QuestionProvider = ({ children }) => {
  const [questionList, setQuestionList] = useState([]);
  const [type, setType] = React.useState('trac_nghiem');

  useEffect(()=>{
    localStorage.setItem('question-list', questionList);
  },[questionList])


    function addQuestion(currentQuestion) {
        let newQuestionList = [...questionList, currentQuestion];
        console.log(newQuestionList);
        setQuestionList(newQuestionList);
    }

    function deleteQuestion(id) {
      let cQuestionList = [...questionList].filter(question => question.id != id);
      setQuestionList(cQuestionList);
  }

  return (
    <QuestionContext.Provider 
    value={{
      questionList,
      setQuestionList,
      addQuestion,
      deleteQuestion,
      type,
      setType,
    }}>
      {children}
    </QuestionContext.Provider>
  )
}

export default QuestionContext;
