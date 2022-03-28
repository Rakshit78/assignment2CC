import Button from '@mui/material/Button';
import { useState } from 'react';
import { RadioGroup, Radio } from '@mui/material';
import FormLabelControl from '@mui/material/FormControlLabel';
type Props = {
  navigate: any;
  question: any;
  setans2: any;
  marks: number;
  setmarks: any;
  ans2: string;
};

export default function Qes2(props: Props) {
  const [flag, setflag] = useState(false);
  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <div>
        <h1>{props.question.ques2}</h1>
        <RadioGroup>
          <FormLabelControl
            label='True'
            control={<Radio onChange={(e) => props.setans2(e.target.value)} />}
            value='yes'
          />
          <FormLabelControl
            label='False'
            control={<Radio onChange={(e) => props.setans2(e.target.value)} />}
            value='no'
          />
        </RadioGroup>
        <br />
        <br />
        <Button variant='contained' onClick={() => props.navigate('/q1')}>
          prev
        </Button>
        <Button
          variant='contained'
          onClick={() => {
            if (flag) {
              props.setmarks(props.marks - 1);
              setflag(false);
            }
            if (props.question.ans2 === props.ans2) {
              props.setmarks(props.marks + 1);
              setflag(true);
            }
            props.navigate('/q3');
          }}
        >
          next
        </Button>
      </div>
    </div>
  );
}
