import Button from '@mui/material/Button';
import { useState } from 'react';
type Props = {
  question: any;
  navigate: any;
  ans3: any;
  marks: number;
  setmarks: any;
};
export default function Qes3(props: Props) {
  const [flag, setflag] = useState(false);
  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <div>
        <h1>{props.question.ques3}</h1>
        abcd:
        <input
          type='checkbox'
          value='yes'
          onChange={(e) => {
            props.ans3.a = e.target.value;
          }}
          name='select'
        />
        xyz:
        <input
          type='checkbox'
          value='no'
          onChange={(e) => {
            props.ans3.a = e.target.value;
          }}
          name='select'
        />
        BHA:
        <input
          type='checkbox'
          value='no'
          onChange={(e) => {
            props.ans3.b = e.target.value;
          }}
          name='select'
        />
        KAR:
        <input
          type='checkbox'
          value='yes'
          onChange={(e) => {
            props.ans3.b = e.target.value;
          }}
          name='select'
        />
        <br />
        <br />
        <Button variant='contained' onClick={() => props.navigate('/q2')}>
          prev
        </Button>
        <Button
          variant='contained'
          onClick={() => {
            if (flag) {
              props.setmarks(props.marks - 1);
              setflag(false);
            }
            if (
              props.question.ans3.ans1 === props.ans3.a &&
              props.question.ans3.b === props.ans3.b
            ) {
              props.setmarks(props.marks + 1);
              setflag(true);
            }
            props.navigate('/q4');
          }}
        >
          next
        </Button>
      </div>
    </div>
  );
}
