import * as React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import './Questionitem.css';

export default function QuestionItem({item, onTapDeleteIcon, onTapEditIcon}) {
    function getLable(type) {
        if(type == 'trac_nghiem') return 'Trắc nghiệm';
        else if(type == 'xep_hinh') return 'Xếp hình';
        else return 'Scan';
    }

    function getContent(type) {
        if(type == 'trac_nghiem') return item.question;
        else if(type == 'xep_hinh') return item.description;
        else return item.description;
    }
    return (
        <div className='question-item-container'>
            <p className='text-content'>{getContent(item.type)}</p>
            <div className='right-group'>
                <div className='icon-group'>
                    <EditIcon onClick={() => {onTapEditIcon()}}/>
                    <DeleteOutlineIcon onClick={() => {onTapDeleteIcon()}}/>
                </div>
                
                <div className='lable1'> 
                    <span>{getLable(item.type)}</span>
                </div>
            </div>
        </div>
    );
}