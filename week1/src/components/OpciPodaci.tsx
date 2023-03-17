import '../styles/OpciPodaci.css';

function OpciPodaci() {
    return(
        <>
        <h2 className="heading1">Opći podaci</h2>
         <div className="opciPodaci">
             <div className="pojmovi">
                <p>Datum Rođenja:</p>
                <p>Adresa:</p>
                <p>Kontakt:</p>
             </div>
             <div className="podaci">
                 <p>3.travnja, 2002.</p>
                 <p>Vukovarska 1, Split</p>
                 <p>095 555 1234</p>
             </div>
         </div>
         </>

    )
}
export default OpciPodaci;