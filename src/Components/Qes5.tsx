import Button from '@mui/material/Button';
type Props = {
  navigate: any;
  question: any;
  setans5: any;
  marks: number;
  calculatemarks: any;
  setnavvisible: any;
};
export default function Qes5(props: Props) {
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
          props.calculatemarks();
          props.setnavvisible(false);
          props.navigate('/res');
        }}
      >
        Submit
      </Button>
    </div>
  );
}
