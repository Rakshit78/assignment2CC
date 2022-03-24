import Button from '@mui/material/Button';
export default function Nav() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: '10px',
      }}
    >
      <Button variant='contained'>1</Button>
      <Button variant='contained'>2</Button>
      <Button variant='contained'>3</Button>
      <Button variant='contained'>4</Button>
      <Button variant='contained'>5</Button>
    </div>
  );
}
