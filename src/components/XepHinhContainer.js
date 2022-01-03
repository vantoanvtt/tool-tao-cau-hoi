import React,{ useContext } from 'react';
import { 
    OutlinedInput, 
    FormControl, 
    InputLabel, 
    Button,
    FormHelperText
    } from '@mui/material';
import QuestionContext from '../context/QuestionContext';

export default function XepHinhContainer({question}) {
    const [description, setDescription] = React.useState(question == null?'': question.description);
    const [imageId, setImageId] = React.useState(question == null?'': question.imageId);

    const [validate, setValidate] = React.useState(true);

    const questionContext = useContext(QuestionContext);

    const handleChange = (event, setValue) => {
        setValue(event.target.value);
    }; 

    var checkImage = (imageId) => {
        let check = false;
        fetch(`https://hcloud.trealet.com/apps_dev/btl/nhom08/lib/api/api.php?id=ạdaskjfjsdak`)
        .then((response) => response.json())
        .then((data) => {
            if(data) {
                check = true;
            }
            console.log(data);
            // if(question != null) {
            //     questionContext.deleteQuestion(question.id)
            // }
            //     questionContext.addQuestion({
            //         id: Date.now().toString(),
            //         type: questionContext.type,
            //         desc: description,
            //         image_id: imageId,
            //     });
                
        })
        .catch((err) => {check = false})
        return check;
    }
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
                        error={!validate}
                        aria-describedby="component-error-text"
                    />
                    <FormHelperText id="component-error-text">{validate?null : 'id ảnh không tồn tại hoặc không hợp lệ'}</FormHelperText>
                </FormControl>
                <Button 
                    variant="contained" 
                    onClick={() => {
                        if (parseInt(imageId)) {
                            fetch(`https://hcloud.trealet.com/apps_dev/btl/nhom08/lib/api/api.php?id=${imageId}`)
                            .then((response) => response.json())
                            .then((data) => {
                                if(data.path == null) {
                                    setValidate(false);
                                } else {
                                    setValidate(true);
                                    if(question != null) {
                                        questionContext.deleteQuestion(question.id)
                                    }
                                        questionContext.addQuestion({
                                            id: Date.now().toString(),
                                            type: questionContext.type,
                                            desc: description,
                                            image_id: imageId,
                                        });
                                }
                                    
                            })
                            .catch((err) => console.log(err))
                        } else {
                            setValidate(false);
                        }
                       
                        
                        }}
                >
                Tạo câu hỏi
                </Button>
        </div>
    );
}