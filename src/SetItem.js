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
import {getLayers} from './tilemap-editor';

export default function SetItem() {
    var layers = getLayers;
    return (
    <div>
          <Button 
                variant="contained" 
                onClick={() => {console.log(layers)}}
        >
        Test
        </Button>
    </div>
    );
}
