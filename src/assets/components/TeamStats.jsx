const TeamStats = ({money, teamStrength, teamAgility}) => {
    return(<div className = 'teamStats'>
        <h3>Money: {money}</h3>
        <h3>Team Strength: {teamStrength}</h3>
        <h3>Team Agility: {teamAgility}</h3>
    </div>)
}

export default TeamStats