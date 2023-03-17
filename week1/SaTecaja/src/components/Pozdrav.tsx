
function Pozdrav(props) {

    const godRod=()=>{
        let rez=new Date().getFullYear()-props.god;
        return rez;
    }

    return(
        <>
        {props.children}
        <h3>Pozdrav {props.ime} iz React funkcijske komponente!!!</h3>
        <p>Imate {props.god} godina.</p>
        <p>Vaša godina rođenja je {godRod()}</p>
        </>
    )
}
export default Pozdrav;