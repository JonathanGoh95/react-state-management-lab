import ZombieImage from "./ZombieImage";

const TeamDisplay = ({team, setTeam, fighters, setZombieFighters, money, setMoney, teamStrength, setTeamStrength, teamAgility, setTeamAgility}) => {
  const handleRemoveFighter = (fighter) => {
    setTeam(team.filter((elem) => elem.id !== fighter.id)); // Removes the Selected Fighter from the Team Array
    setZombieFighters([...fighters, fighter]);              // Puts the fighter back in the Zombie Fighters Array
    setMoney(money + fighter.price);                        // Increment the money back based on the price of the fighter
    setTeamStrength(teamStrength - fighter.strength)        // Deduct the Team Strength accordingly
    setTeamAgility(teamAgility - fighter.agility)           // Deduct the Team Agility accordingly
  }

  return (
  <>
    <h2>Team</h2>
    {team.length === 0 && <h3>Pick some team members!</h3>}
    <ul>
      {team.map((fighter) => (
        <li key={fighter.id}>
          <ZombieImage img={fighter.img}/>
          <p><b>{fighter.name}</b></p>
          <p>Price: {fighter.price}</p>
          <p>Strength: {fighter.strength}</p>
          <p>Agility: {fighter.agility}</p>
          <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
        </li>
      ))}
    </ul>
  </>
  )
};

export default TeamDisplay;