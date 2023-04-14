function TeamInfo(props:any) {
  return (
    <div className="teams">
      {props.clubName === "PSG" ? (
        <div className="team-img">
          <img src="src\assets\psg.png" />
          <h3>PSG</h3>
        </div>
      ) : props.clubName === "Chelsea" ? (
        <div className="team-img">
          <img src="src\assets\chelsea.png" />
          <h3>CHELSEA</h3>
        </div>
      ) : null}
    </div>
  );
}
export default TeamInfo;
