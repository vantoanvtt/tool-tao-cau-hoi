import React,{ useContext } from 'react';
import { 
    FormControl, 
    Select, 
    MenuItem, 
    InputLabel, 
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
    } from '@mui/material';
import './Main.css';
import QuestionItem from '../components/QuestionItem';
import QuestionContext from '../context/QuestionContext';
import XepHinhContainer from '../components/XepHinhContainer';
import TracNghiemContainer from '../components/TracNghiemContainer';
import ScanContainer from '../components/ScanContainer';

export default function Main() {

    const [openDialog, setOpenDialog] = React.useState(false);
    const [idSelected, setIdSelected] = React.useState('');
    const [currentQuestion, setCurrentQuestion] = React.useState(null);

    const questionContext = useContext(QuestionContext);
    //console.log(questionContext)

    const handleChange = (event, setValue) => {
        setValue(event.target.value);
    }; 

    const handleClickOpen = () => {
      setOpenDialog(true);
    };
  
    const handleClose = () => {
      setOpenDialog(false);
    };

    function RenderTypeContainer({question}) {
        if (questionContext.type == 'trac_nghiem') return <TracNghiemContainer  question={question}/>
        else if (questionContext.type == 'xep_hinh') return <XepHinhContainer question={question}/>
        else return <ScanContainer question={question} />
    }

    return (
        <div className="container">
            <div className="create-question-container">
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Chọn loại câu hỏi</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={questionContext.type}
                        label="Loại câu hỏi"
                        onChange={(event) => {
                            handleChange(event, questionContext.setType)
                            setCurrentQuestion(null);
                        }}
                    >
                        <MenuItem value={'trac_nghiem'}>Trắc nghiệm</MenuItem>
                        <MenuItem value={'xep_hinh'}>Xếp hình</MenuItem>
                        <MenuItem value={'scan'}>Scan</MenuItem>
                    </Select>
                </FormControl>
                <RenderTypeContainer question={currentQuestion}/>
            </div>
            <div className='question-management-container'>
                {questionContext.questionList.map(
                    (question) => 
                <QuestionItem 
                    item={question} 
                    onTapDeleteIcon={() => {
                        handleClickOpen();
                        setIdSelected(question.id);
                    }} 
                    onTapEditIcon={() => {
                        console.log('edittttttttdnakjfhsdahf')
                        
                        questionContext.setType(question.type);
                        
                        setCurrentQuestion(question);
                        setIdSelected(question.id);
                    }} 
                />)} 
            </div>
            <Dialog
                open={openDialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Xóa câu hỏi"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    Bạn có muốn xóa câu hỏi này không?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Đóng</Button>
                    <Button onClick={() => {
                            questionContext.deleteQuestion(idSelected);
                            handleClose(); 
                        }} autoFocus>
                        Đồng ý
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
