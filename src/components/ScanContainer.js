import React,{ useContext } from 'react';
import {  
    OutlinedInput, 
    FormControl, 
    InputLabel, 
    Button,
    } from '@mui/material';
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

export default function ScanContainer({question}) {
    const [description, setDescription] = React.useState(question == null?'': question.description);
    const [suggestion, setSuggestion] = React.useState(question == null?'': question.suggestion);
    const [answer, setAnswer] = React.useState(question == null?'': question.correct_answer);
    const [openDialog, setOpenDialog] = React.useState(false);

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
                        if (description == '' || suggestion == '' || answer == '') {
                            setOpenDialog(true);
                        } else {
                            if(question != null) {
                                questionContext.deleteQuestion(question.id)
                            }
                                questionContext.addQuestion({
                                    id: Date.now().toString(),
                                    type: questionContext.type,
                                    desc: description,
                                    suggest: suggestion,
                                    correct_answer: answer, 
                                });
                        }
                        
                            }}
                >
                Tạo câu hỏi
                </Button>
                <BootstrapDialog
                    onClose={() => {setOpenDialog(false)}}
                    aria-labelledby="customized-dialog-title"
                    open={openDialog}
                >
                    <DialogContent dividers>
                    <Typography gutterBottom>
                    Bạn cần nhập đủ trường
                    </Typography>
                    </DialogContent>
                    <DialogActions>
                    <Button autoFocus onClick={() => {setOpenDialog(false)}}>
                    Ok
                    </Button>
                    </DialogActions>
                </BootstrapDialog>

        </div>
    );
}