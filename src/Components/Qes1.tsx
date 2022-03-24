import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
type Props = {
  navigate: any;
  question: any;
  user: string;
  setans1: any;
};
export default function Qes1(props: Props) {
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

        <Button variant='contained' onClick={() => props.navigate('/q2')}>
          next
        </Button>
      </div>
    </div>
  );
}
