import Button from '@mui/material/Button';
import { useState } from 'react';
type Props = {
  navigate: any;
  question: any;
  setans5: any;
  marks: number;
  setnavvisible: any;
  setmarks: any;
};
export default function Qes5(props: Props) {
  const [flag, setflag] = useState(false);
  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <div>
        <h1>{props.question.ques5}</h1>
        <button
          onClick={() => props.setans5('yes')}
          style={{ marginRight: '10px' }}
        >
          yes
        </button>
        <button
          onClick={() => props.setans5('no')}
          style={{ marginRight: '10px' }}
        >
          no
        </button>
        <button
          onClick={() => props.setans5('no')}
          style={{ marginRight: '10px' }}
        >
          dont know
        </button>
        <button
          onClick={() => props.setans5('no')}
          style={{ marginRight: '10px' }}
        >
          jsx
        </button>
      </div>
      <br />
      <br />
      <Button
        variant='contained'
        onClick={() => {
          if (flag) {
            props.setmarks(props.marks - 1);
            setflag(false);
          }
          if (props.setans5 === props.question.ans5) {
            props.setmarks(props.marks + 1);
            setflag(true);
          }
          //====
          props.setnavvisible(false);
          props.navigate('/res');
        }}
      >
        Submit
      </Button>
    </div>
  );
}
