import Button from '@mui/material/Button';
import { FormControlLabel, RadioGroup } from '@mui/material';
import { Radio } from '@mui/material';
import { TextField } from '@mui/material';
import { useState } from 'react';

type Props = {
  setsubject: any;
  setuser: any;
  user: any;
  navigate: any;
  setnavvisible: any;
};
export default function Home(props: Props) {
  const [disable, setdisable] = useState(true);
  return (
    <div
      style={{
        display: 'grid',
        placeItems: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <h1>Test</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.navigate('/q1');
        }}
        style={{
          background: '#e5e5e5',
          width: '300px',
          padding: '30px',
          height: '600px',
          borderRadius: '4px',
        }}
      >
        {/* name */}
        <TextField
          id='outlined basic '
          value={props.user}
          onChange={(e) => {
            props.setuser(e.target.value);
            setdisable(false);
            if (e.target.value.length === 0) {
              setdisable(true);
            }
          }}
        />
        <br />
        {/* genger */}
        <h5>Gender</h5>
        <RadioGroup>
          <FormControlLabel
            value='female'
            control={<Radio />}
            label='female'
            name='gender'
          />
          <FormControlLabel
            value='male'
            control={<Radio />}
            label='male'
            name='gender'
          />
        </RadioGroup>
        <br />
        <br />
        {/* subject */}
        <h5>Subject</h5>
        <RadioGroup>
          <FormControlLabel
            value='male'
            control={
              <Radio
                onChange={(e) => {
                  props.setsubject(e.target.value);
                }}
              />
            }
            label='js'
            name='subject'
          />
          <FormControlLabel
            value='female'
            control={
              <Radio
                onChange={(e) => {
                  props.setsubject(e.target.value);
                }}
              />
            }
            label='java'
            name='subject'
          />
          <FormControlLabel
            value='male'
            control={
              <Radio
                onChange={(e) => {
                  props.setsubject(e.target.value);
                }}
              />
            }
            label='Englist'
            name='subject'
          />
        </RadioGroup>
        <br />
        <br />
        <Button
          type='submit'
          variant='contained'
          disabled={disable}
          onClick={() => {
            props.setnavvisible(true);
            props.navigate('./q1');
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
