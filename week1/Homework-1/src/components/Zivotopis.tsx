import '../styles/Zivotopis.css';
import OpciPodaci from './OpciPodaci';
import SlikaIme from "./SlikaIme";
import Sposobnosti from './Sposobnosti';

function Zivotopis() {
    return(
        <div className="mainCard">
            <SlikaIme />
            <OpciPodaci />
            <Sposobnosti />
        </div>
    )
}
export default Zivotopis;