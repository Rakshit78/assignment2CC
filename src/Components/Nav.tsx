import Button from '@mui/material/Button';
type Props = {
  navigate: any;
};
export default function Nav(props: Props) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: '10px',
      }}
    >
      <Button variant='contained' onClick={() => props.navigate('/q1')}>
        1
      </Button>
      <Button variant='contained' onClick={() => props.navigate('/q2')}>
        2
      </Button>
      <Button variant='contained' onClick={() => props.navigate('/q3')}>
        3
      </Button>
      <Button variant='contained' onClick={() => props.navigate('/q4')}>
        4
      </Button>
      <Button variant='contained' onClick={() => props.navigate('/q5')}>
        5
      </Button>
    </div>
  );
}
