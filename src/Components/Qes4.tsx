import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
type Props = {
  question: any;
  navigate: any;
  ans4: any;
};
export default function Qes4(props: Props) {
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
        <Button variant='contained' onClick={() => props.navigate('/q5')}>
          next
        </Button>
      </div>
    </div>
  );
}
