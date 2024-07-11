import '../style/mission.css';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

function Missions() {
  return (
    <section data-testid="missions" className="mission_container">
      <Title headline="Missões" />
      <div className="mission_card_container">
        {
          missions.map((mission, index) => (
            <MissionCard
              key={ index }
              { ...mission }
            />
          ))
        }
      </div>
    </section>
  );
}

export default Missions;
