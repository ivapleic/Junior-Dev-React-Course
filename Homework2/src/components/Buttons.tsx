import Button from 'react-bootstrap/Button';

function Buttons(props:any) {
  function handleClick() {
    props.action();
  }

  return (
    <div className='change-button-div'>
      <button className="change-button" onClick={handleClick}>
        {props.sign}
      </button>
    </div>
  );
}
export default Buttons;
