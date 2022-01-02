import React,{ useContext } from 'react';
import { 
    OutlinedInput, 
    FormControl, 
    InputLabel, 
    Button,
    } from '@mui/material';
import QuestionContext from '../context/QuestionContext';

export default function XepHinhContainer({question}) {
    const [description, setDescription] = React.useState(question == null?'': question.description);
    const [imageId, setImageId] = React.useState(question == null?'': question.imageId);

    const questionContext = useContext(QuestionContext);

    const handleChange = (event, setValue) => {
        setValue(event.target.value);
    }; 

    return (
        <div className='container' style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: 220,
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
                    <InputLabel htmlFor="component-outlined">ID của ảnh</InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        value={imageId}
                        onChange={(event) => handleChange(event, setImageId)}
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
                                desc: description,
                                image_id: imageId,
                            });
                            }}
                >
                Tạo câu hỏi
                </Button>
        </div>
    );
}