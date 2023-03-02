import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const BasicSelect = ({data}) => {
  const [piiFlag, setPiiFlag] = React.useState('');

  const handleChange = (event) => {
    setPiiFlag(event.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={data}
          value={piiFlag}
          onChange={handleChange}
          style={{height: '35px', width: '80px'}}
        >
          <MenuItem value={'Yes'}>Yes</MenuItem>
          <MenuItem value={'No'}>No</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default BasicSelect;
