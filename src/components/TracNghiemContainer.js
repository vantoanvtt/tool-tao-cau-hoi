import React,{ useContext } from 'react';
import {  
    OutlinedInput, 
    Box, 
    Tab, 
    FormControl, 
    Select, 
    MenuItem, 
    InputLabel, 
    TextField,
    Button,
    } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import QuestionContext from '../context/QuestionContext';
import {Dialog, DialogTitle, DialogContent,  DialogActions, Typography} from '@mui/material';
import { styled } from '@mui/material/styles';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

export default function TracNghiemContainer({question}) {
    const [questionA, setQuestionA] = React.useState(question == null?'': question.question);
    const [suggestion, setSuggestion] = React.useState(question == null?'': question.suggestion);
    const [answer, setAnswer] = React.useState(question == null? 0 : question.answer);
    const [firstAnswer, setFirstAnswer] = React.useState(question == null?'': question.selects[0]);
    const [secondAnswer, setSecondAnswer] = React.useState(question == null?'': question.selects[1]);
    const [thirdAnswer, setThirdAnswer] = React.useState(question == null?'': question.selects[2]);
    const [fourthAnswer, setFourthAnswer] = React.useState(question == null?'': question.selects[3]);
    const [tabIndex, setTabIndex] = React.useState("firstAnswer");
    const [openDialog, setopenDialog] = React.useState(false);


    const questionContext = useContext(QuestionContext);

    const handleChange = (event, setValue) => {
        setValue(event.target.value);
    }; 

    const handleChangeTab = (event, newTabIndex) => {
        setTabIndex(newTabIndex);
    };


    return (
        <div className='container' style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            paddingTop: 30,
            paddingBottom: 30,
        }}>
               <FormControl>
                    <InputLabel htmlFor="component-outlined">C??u h???i</InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        value={questionA}
                        onChange={(event) => handleChange(event, setQuestionA)}
                        label="Name"
                        multiline
                        rows={2}
                    />
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="component-outlined">G???i ??</InputLabel>
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
                                <Tab label="C??u tr??? l???i 1" value="firstAnswer" />
                                <Tab label="C??u tr??? l???i 2" value="secondAnswer" />
                                <Tab label="C??u tr??? l???i 3" value="thirdAnswer" />
                                <Tab label="C??u tr??? l???i 4" value="fourthAnswer" />
                               
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
                    <InputLabel id="answer-select">Ch???n c??u tr??? l???i</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="answer-select"
                        value={answer}
                        label="C??u tr??? l???i"
                        onChange={(event) => handleChange(event, setAnswer)}
                    >
                        <MenuItem value={0}>C??u s??? 1</MenuItem>
                        <MenuItem value={1}>C??u s??? 2</MenuItem>
                        <MenuItem value={2}>C??u s??? 3</MenuItem>
                        <MenuItem value={3}>C??u s??? 4</MenuItem>
                    </Select>
                </FormControl>
                <Button 
                    variant="contained" 
                    onClick={() => {
                        if(question == '' || firstAnswer == '' || secondAnswer == '' || thirdAnswer == ''|| fourthAnswer == '') {
                            setopenDialog(true);
                        } else {
                            if(question != null) {
                                questionContext.deleteQuestion(question.id);
                            }
                                questionContext.addQuestion({
                                    id: Date.now().toString(),
                                    type: questionContext.type,
                                    question: questionA,
                                    suggest: suggestion,
                                    answer: answer,
                                    selects: [firstAnswer, secondAnswer, thirdAnswer, fourthAnswer]
                                });
                        }
                      
                            }}
                >
                T???o c??u h???i
                </Button>
                <BootstrapDialog
                    onClose={() => {setopenDialog(false)}}
                    aria-labelledby="customized-dialog-title"
                    open={openDialog}
                >
                    <DialogContent dividers>
                    <Typography gutterBottom>
                    B???n c???n nh???p ????? tr?????ng
                    </Typography>
                    </DialogContent>
                    <DialogActions>
                    <Button autoFocus onClick={() => {setopenDialog(false)}}>
                    Ok
                    </Button>
                    </DialogActions>
                </BootstrapDialog>
        </div>
    );
}