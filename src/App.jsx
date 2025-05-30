// src/App.jsx
import { useState } from "react";
import ZombieFighters  from "./components/ZombieFighters";
import TeamStats from "./components/TeamStats";
import TeamDisplay from "./components/TeamDisplay";
import './App.css'


const App = () => {

const [team,setTeam] = useState([])
const [money,setMoney] = useState(100)
const [teamStrength,setTeamStrength] = useState(0)
const [teamAgility,setTeamAgility] = useState(0)
const [zombieFighters,setZombieFighters] = useState([
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
]
)

  return (
    <>
    <h1>Zombie Fighters</h1>
    <TeamStats money={money} team={team} teamStrength={teamStrength} teamAgility={teamAgility}/>
    <TeamDisplay team={team} setTeam={setTeam} fighters={zombieFighters} setZombieFighters={setZombieFighters} money={money} setMoney={setMoney} teamStrength={teamStrength} teamAgility={teamAgility} setTeamStrength={setTeamStrength} setTeamAgility={setTeamAgility}/>
    <h2>Fighters</h2>
    <section>
      {zombieFighters.map((fighter) => (<ZombieFighters key={fighter.id} {...fighter} fighters={zombieFighters} team={team} setTeam={setTeam} setZombieFighters={setZombieFighters} money={money} setMoney={setMoney} teamStrength={teamStrength} teamAgility={teamAgility} setTeamStrength={setTeamStrength} setTeamAgility={setTeamAgility}/>))}
    </section>
    </>
  );
}

export default App
