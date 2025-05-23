const TeamDisplay = ({team, setTeam, fighters, setZombieFighters, money, setMoney, teamStrength, setTeamStrength, teamAgility, setTeamAgility}) => {
  const handleRemoveFighter = (fighter) => {
    setTeam(team.filter((elem) => elem.id !== fighter.id));
    setZombieFighters([...fighters, fighter]);
    setMoney(money + fighter.price);
    setTeamStrength(teamStrength - fighter.strength)
    setTeamAgility(teamAgility - fighter.agility)
  }
  return (
  <div>
    <h2>Team</h2>
    <ul>
        {team.length === 0 && <p><b>Pick some team members!</b></p>}
      {team.map((fighter) => (
        <li key={fighter.id}>
          <img src={fighter.img} />
          <p><b>{fighter.name}</b></p>
          <p>Price: {fighter.price}</p>
          <p>Strength: {fighter.strength}</p>
          <p>Agility: {fighter.agility}</p>
          <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
        </li>
      ))}
    </ul>
  </div>
  )
};

export default TeamDisplay;