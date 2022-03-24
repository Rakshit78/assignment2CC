import Button from '@mui/material/Button';
import { useState } from 'react';
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
        True:
        <input
          type='radio'
          name='select'
          value='yes'
          onChange={(e) => props.setans2(e.target.value)}
        />
        False:
        <input
          type='radio'
          name='select'
          value='no'
          onChange={(e) => props.setans2(e.target.value)}
        />
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
