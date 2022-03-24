import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
type Props = {
  navigate: any;
  question: any;
  user: string;
  setans1: any;
  ans1: any;
  setmarks: any;
  marks: number;
};
export default function Qes1(props: Props) {
  const [flag, setflag] = useState(false);
  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <div>
        <h1>{props.question.ques1}</h1>
        <br />
        <TextField
          onChange={(event) => {
            props.setans1(event.target.value);
          }}
        />
        <br />
        <br />

        <Button
          variant='contained'
          onClick={() => {
            if (flag) {
              props.setmarks(props.marks - 1);
              setflag(false);
            }
            if (props.question.ans1 === props.ans1) {
              props.setmarks(props.marks + 1);
              setflag(true);
            }
            props.navigate('/q2');
          }}
        >
          next
        </Button>
      </div>
    </div>
  );
}
