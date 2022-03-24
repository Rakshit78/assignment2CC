import Button from '@mui/material/Button';
type Props = {
  question: any;
  navigate: any;
  ans3: any;
};
export default function Qes3(props: Props) {
  return (
    <div style={{ display: 'grid', placeItems: 'canter' }}>
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
        <Button variant='contained' onClick={() => props.navigate('/q4')}>
          next
        </Button>
      </div>
    </div>
  );
}
