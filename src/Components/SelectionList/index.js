import React, { useState } from "react";


import { List } from "../ConsultorsList/style";
import { Container } from "./style";
import StatusProject from "../StatusProject"

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const SelectionList = () => {
    var situacao;
    const [status, setStatus] = useState('');

    // eslint-disable-next-line
    const [age, setAge] = React.useState('');

    console.log(situacao)
    console.log(status)

  
  const handleChange = (event) => {
    setStatus(event.target.value);
    setAge(event.target.value);
  };


  return (
    <Container>
      <div style={{padding: '30px', marginLeft:'10px'}}>
      <FormControl sx={{ m: 1, width: 120}} style={{ width: "40%"}}>
        <InputLabel id="demo-simple-select-helper-label">Status do Projeto</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={status}
          label="Status"
          onChange={handleChange}
          autoWidth
        >
          <MenuItem value="">
            <em>Status do Projeto</em>
          </MenuItem>
          <MenuItem value={10}>Aprovados</MenuItem>
          <MenuItem value={20}>Analise</MenuItem>
          <MenuItem value={30}>Recusados</MenuItem>
          <MenuItem value={40}>Arquivado</MenuItem>
        </Select>
        <FormHelperText></FormHelperText>
      </FormControl>
    
      </div>
     <List>
      {status === 10 ? <StatusProject id={"Aprovado"} /> : null }
      {status === 20 ? <StatusProject id={"Analise"} /> : null }
      {status === 30 ? <StatusProject id={"Recusado"} /> : null }
      {status === 40 ? <StatusProject id={"Arquivado"} /> : null }
      </List>
    </Container>
  );
};

export default SelectionList;
