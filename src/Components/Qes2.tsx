import Button from '@mui/material/Button';
type Props = {
  navigate: any;
  question: any;
  setans2: any;
};

export default function Qes2(props: Props) {
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
        <Button variant='contained' onClick={() => props.navigate('/q3')}>
          next
        </Button>
      </div>
    </div>
  );
}
