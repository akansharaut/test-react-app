import {TextField, Box}from '@material-ui/core';

const LabTabs= () => {
  return (
    <div>
    <div>New Data</div>
    <hr/>
      <Box>
      <TextField
          id="outlined-required"
          placeholder="Data Name"
          variant="outlined"
          style={{margin: '0 20px 0 0'}}
        />
        <TextField
          id="outlined-required"
          placeholder="Data Description"
          variant="outlined"
        />
      </Box>
    </div>
  );
}

export default LabTabs;