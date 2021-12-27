import * as React from 'react';
import { Input, 
    OutlinedInput, 
    Box, 
    Tab, 
    FormControl, 
    Select, 
    MenuItem, 
    InputLabel, 
    TextField,
    Button
    } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import './Main.css';
import QuestionItem from '../components/QuestionItem';

export default function Main() {
    const [tabIndex, setTabIndex] = React.useState("firstAnswer");
    const [type, setType] = React.useState('');
    const [question, setQuestion] = React.useState('');
    const [suggestion, setSuggestion] = React.useState('');
    const [answer, setAnswer] = React.useState();
    const [firstAnswer, setFirstAnswer] = React.useState('');
    const [secondAnswer, setSecondAnswer] = React.useState('');
    const [thirdAnswer, setThirdAnswer] = React.useState('');
    const [fourthAnswer, setFourthAnswer] = React.useState('');
    const [questionList, setQuestionList] = React.useState([]);

    const handleChange = (event, setValue) => {
        setValue(event.target.value);
    }; 

    const handleChangeTab = (event, newTabIndex) => {
        setTabIndex(newTabIndex);
    };

    function addQuestion() {
        let cquestion = {
            id: Date.now().toString(),
            type: type,
            question: question,
            suggestion: suggestion,
            answer: answer,
            firstAnswer: firstAnswer,
            secondAnswer: secondAnswer,
            thirdAnswer: thirdAnswer,
            fourthAnswer: fourthAnswer,
        }
        
        let newQuestionList = [...questionList, cquestion];
        console.log(newQuestionList);
        setQuestionList(newQuestionList);
    }

    function deleteQuestion(id) {
        console.log('tap delete')
        let cQuestionList = [...questionList].fill(question => question.id != id);
        setQuestionList(cQuestionList);
    }
    return (
        <div className="container">
            <div className="create-question-container">
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Chọn loại câu hỏi</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={type}
                        label="Loại câu hỏi"
                        onChange={(event) => handleChange(event, setType)}
                    >
                        <MenuItem value={'trac_nghiem'}>Trắc nghiệm</MenuItem>
                        <MenuItem value={'xep_hinh'}>Xếp hình</MenuItem>
                        <MenuItem value={'scan'}>Scan</MenuItem>
                    </Select>
                </FormControl>


                <FormControl>
                    <InputLabel htmlFor="component-outlined">Câu hỏi</InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        value={question}
                        onChange={(event) => handleChange(event, setQuestion)}
                        label="Name"
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
                        label="Name"
                        multiline
                        rows={2}
                        
                    />
                </FormControl>
            
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={tabIndex}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChangeTab} aria-label="lab API tabs example">
                                <Tab label="Câu trả lời 1" value="firstAnswer" />
                                <Tab label="Câu trả lời 2" value="secondAnswer" />
                                <Tab label="Câu trả lời 3" value="thirdAnswer" />
                                <Tab label="Câu trả lời 4" value="fourthAnswer" />
                               
                            </TabList>
                        </Box>
                        <TabPanel value="firstAnswer">
                            <TextField
                                value={firstAnswer}
                                onChange={(event) => handleChange(event, setFirstAnswer)}
                                multiline
                                rows={2}
                                className='text-field-style'
                            />
                        </TabPanel>
                        <TabPanel value="secondAnswer">
                            <TextField
                                value={secondAnswer}
                                onChange={(event) => handleChange(event, setSecondAnswer)}
                                multiline
                                rows={2}
                                className='text-field-style'
                            />
                        </TabPanel>
                        <TabPanel value="thirdAnswer">
                            <TextField
                                value={thirdAnswer}
                                onChange={(event) => handleChange(event, setThirdAnswer)}
                                multiline
                                rows={2}
                                className='text-field-style'
                            />
                        </TabPanel>
                        <TabPanel value="fourthAnswer">
                            <TextField
                                value={fourthAnswer}
                                onChange={(event) => handleChange(event, setFourthAnswer)}
                                multiline
                                rows={2}
                                className='text-field-style'
                            />
                        </TabPanel>
                    </TabContext>
                </Box>
                <FormControl fullWidth>
                    <InputLabel id="answer-select">Chọn câu trả lời</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="answer-select"
                        value={answer}
                        label="Câu trả lời"
                        onChange={(event) => handleChange(event, setAnswer)}
                    >
                        <MenuItem value={1}>Câu số 1</MenuItem>
                        <MenuItem value={2}>Câu số 2</MenuItem>
                        <MenuItem value={3}>câu số 3</MenuItem>
                        <MenuItem value={4}>câu số 4</MenuItem>
                    </Select>
                </FormControl>
                <Button 
                    variant="contained" 
                    onClick={() => {
                                addQuestion();
                            }}
                >
                Tạo câu hỏi
                </Button>
            </div>
            <div className='question-management-container'>
                {questionList.map(
                    (question) => 
                <QuestionItem 
                    item={question} 
                    onTapDeleteIcon={deleteQuestion(question.id)} 
                />)} 
            </div>
        </div>
    );
}
