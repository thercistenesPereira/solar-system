import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

function Missions() {
  return (
    <div data-testid="missions">
      <Title headline="Missões" />
      {
        missions.map((mission, index) => (
          <MissionCard
            key={ index }
            { ...mission }
          />
        ))
      }
    </div>
  );
}

export default Missions;
