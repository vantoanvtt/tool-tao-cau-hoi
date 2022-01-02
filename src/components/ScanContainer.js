import React,{ useContext } from 'react';
import {  
    OutlinedInput, 
    FormControl, 
    InputLabel, 
    Button,
    } from '@mui/material';
import QuestionContext from '../context/QuestionContext';

export default function ScanContainer({question}) {
    const [description, setDescription] = React.useState(question == null?'': question.description);
    const [suggestion, setSuggestion] = React.useState(question == null?'': question.suggestion);
    const [answer, setAnswer] = React.useState(question == null?'': question.correct_answer);

    const questionContext = useContext(QuestionContext);

    const handleChange = (event, setValue) => {
        setValue(event.target.value);
    }; 

    return (
        <div 
        className='container' 
        style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: 330,
            paddingTop: 30,
            paddingBottom: 30,
        }}>
              <FormControl>
                    <InputLabel htmlFor="component-outlined">Mô tả</InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        value={description}
                        onChange={(event) => handleChange(event, setDescription)}
                        label="Description"
                        multiline
                        rows={2}
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="component-outlined">Gợi ý</InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        value={suggestion}
                        onChange={(event) => handleChange(event, setSuggestion)}
                        label="Image Id"
                        multiline
                        rows={2}
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="component-outlined">Đáp án đúng</InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        value={answer}
                        onChange={(event) => handleChange(event, setAnswer)}
                        label="Image Id"
                        multiline
                        rows={1}
                    />
                </FormControl>
                <Button 
                    variant="contained" 
                    onClick={() => {
                        if(question != null) {
                            questionContext.deleteQuestion(question.id)
                        }
                            questionContext.addQuestion({
                                id: Date.now().toString(),
                                type: questionContext.type,
                                description: description,
                                suggestion: suggestion,
                                correct_answer: answer, 
                            });
                            }}
                >
                Tạo câu hỏi
                </Button>

        </div>
    );
}