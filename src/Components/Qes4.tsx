import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
type Props = {
  question: any;
  navigate: any;
  ans4: any;
  marks: number;
  setmarks: any;
};
export default function Qes4(props: Props) {
  const [flag, setflag] = useState(false);
  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <div>
        <h1>{props.question.ques4}</h1>
        <p>Sample : {props.question.ans4.app1}</p>
        <p>Jample : {props.question.ans4.app2}</p>
        <p>Tample : {props.question.ans4.app3}</p>
        <p>Pample : {props.question.ans4.app4}</p>
        <br />
        <TextField
          variant='outlined'
          onChange={(e) => (props.ans4.a = e.target.value)}
        />
        <TextField
          variant='outlined'
          onChange={(e) => (props.ans4.b = e.target.value)}
        />
        <TextField
          variant='outlined'
          onChange={(e) => (props.ans4.c = e.target.value)}
        />
        <TextField
          variant='outlined'
          onChange={(e) => (props.ans4.d = e.target.value)}
        />
        <br />
        <br />
        <Button variant='contained' onClick={() => props.navigate('/q3')}>
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
              props.ans4.a === props.question.ans4.app1 &&
              props.ans4.b === props.question.ans4.app2 &&
              props.ans4.c === props.question.ans4.app3 &&
              props.ans4.d === props.question.ans4.app4
            ) {
              props.setmarks(props.marks + 1);
              setflag(true);
            }
            props.navigate('/q5');
          }}
        >
          next
        </Button>
      </div>
    </div>
  );
}
