import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import FormControllable from '@mui/material/FormControlLabel';
import CheckBox from '@mui/material/Checkbox';
type Props = {
  question: any;
  navigate: any;
  ans3: any;
  marks: number;
  setmarks: any;
  setans3: any;
};
export default function Qes3(props: Props) {
  const [flag, setflag] = useState(false);
  useEffect(() => {}, [props.ans3]);
  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <div>
        <h1>{props.question.ques3}</h1>
        <FormControllable
          label='abcd:'
          control={
            <CheckBox
              onChange={(e) => {
                props.setans3({ a: e.target.value, b: props.ans3.b });
                console.log(props.ans3);
              }}
            />
          }
          value='yes'
        />
        <FormControllable
          label='xyz:'
          control={
            <CheckBox
              onChange={(e) => {
                props.setans3({ a: e.target.value, b: props.ans3.b });
                console.log(props.ans3);
              }}
            />
          }
          value='no'
        />
        <FormControllable
          label='xyz:'
          control={
            <CheckBox
              onChange={(e) => {
                props.setans3({ a: props.ans3.a, b: e.target.value });
                console.log(props.ans3);
              }}
            />
          }
          value='yes'
        />
        <FormControllable
          label='xyz:'
          control={
            <CheckBox
              onChange={(e) => {
                props.setans3({ a: e.target.value, b: props.ans3.b });
                console.log(props.ans3);
              }}
            />
          }
          value='no'
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
