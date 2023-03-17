import '../styles/Sposobnosti.css';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sposobnosti() {
    return(
        <>
            <h2 className="heading2">Sposobnosti</h2>
            <div className='sposobnosti'>
                <div className='sposobnost'>
                    <p className='tekst'>Programiranje u C-u:</p>
                    <ProgressBar now={100} label={`100%`}/>
                </div>
                <div className='sposobnost'>
                    <p className='tekst'>Baze podataka:</p>
                    <ProgressBar now={70} label={`70%`}/>
                </div>
                <div className='sposobnost'>
                    <p className='tekst'>Programiranje u Reactu:</p>
                    <ProgressBar now={10} label={`10%`}/>
                </div>
            </div>
        </>
    )
}
export default Sposobnosti;