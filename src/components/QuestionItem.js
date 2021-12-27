import * as React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import './Questionitem.css';

export default function QuestionItem({item, onTapDeleteIcon, onTapEditIcon}) {
    return (
        <div className='question-item-container'>
            <p>{item.question}</p>
            <div className='icon-group'>
                <EditIcon onClick={onTapEditIcon}/>
                <DeleteOutlineIcon onClick={onTapDeleteIcon}/>
            </div>
            
        </div>
    );
}