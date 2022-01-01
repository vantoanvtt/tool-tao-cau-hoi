import React, { useEffect, useState, useRef } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button  } from '@mui/material';
import { Box } from '@mui/material';



export const SetItem = ()=> {

    const layers =JSON.parse(localStorage.getItem('layers')).tiles
    const [filter, setFilter]= useState([]);
    const featureSet = new Set();

    useEffect(()=>{
        console.log(featureSet);
        console.log(JSON.stringify([...featureSet]));
        
    },[[...featureSet]])

    useEffect(()=>{
        if(layers) {
            const mySet1 = new Set();
            for (let i in layers) {
                mySet1.add(`${layers[i].x}-${layers[i].y}`)
            }
            setFilter([...mySet1])
        }
    },[])


  return (
    <Box>
      <Box sx={{m:2}}><h2>Cài đặt tính năng</h2></Box>
      {
          filter && filter.map((pos, index) => {
            return <Item pos={pos} key={index} featureSet={featureSet}/>
          })
      }
      <Button variant="contained" sx={{m:2}}>Hoàn tất</Button>
    </Box>
  );
}

const Item = ({pos, featureSet}) => {

    const [feature, setFeature] = React.useState('');
    const layers =JSON.parse(localStorage.getItem('layers')).tiles

    const getSymbol = (pos) => {
        for (let i in layers) {
            if (`${layers[i].x}-${layers[i].y}` == pos) return [layers[i].tileSymbol, layers[i].tilesetIdx]
        }
    }

  const handleChange = (e) => {
    setFeature(e.target.value);
    const [tileSymbol, tileSetIdx] = getSymbol(pos);
    const tempObj = {
        tileSymbol: tileSymbol,
        tileSetIdx: tileSetIdx,
        effect: e.target.value
    }
    featureSet.add(JSON.stringify(tempObj));
    localStorage.setItem("feature", JSON.stringify([...featureSet]));
  };

  return (
    <Box sx={{ minWidth: 120, m:2 }}>
    <ItemImg keys={pos}/>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tính năng</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={feature}
          label="Tính năng"
          onChange={handleChange}
        >
          <MenuItem value={'foward 3'}>Tịnh tiến</MenuItem>
          <MenuItem value={'back_forward 3'}>Lùi</MenuItem>
          <MenuItem value={'tele 3'}>Dịch chuyển tiến</MenuItem>
          <MenuItem value={'tele -3'}>Dịch chuyển lùi</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

const ItemImg = ({keys}) => {
    const canvasRef = useRef();
    useEffect(() => {
        const img = new Image();
        img.src = 'https://i.ibb.co/KzSwmBv/ztwPZOI.png'
        img.onload = () => {

            if(keys) {
                let ctx = canvasRef.current.getContext("2d");
                ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                const size_of_crop = 32;
                // const layerCur = arrLayer[nameLayer];
                        const positionX = Number(keys.split("-")[0]);
                        const positionY = Number(keys.split("-")[1]);
        
                        ctx.drawImage(
                            img,
                            positionX * 32,
                            positionY * 32,
                            size_of_crop,
                            size_of_crop,
                            0,
                            0,
                            size_of_crop,
                            size_of_crop
                        );
            }
        }
    },[keys])
    return (
        <canvas ref={canvasRef} width={32} height={32}></canvas>
    );
}
