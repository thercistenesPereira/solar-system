import { MissionType } from '../types/missionType';
import '../style/missionCard.css';

function MissionCard({ name, year, country, destination }: MissionType) {
  return (
    <div data-testid="mission-card" className="mission_card">
      <p
        data-testid="mission-name"
        className="title_card_mission"
      >
        { name.toUpperCase() }
      </p>
      <hr />
      <span className="card_info">
        <div className="container_year_country">
          <p data-testid="mission-year">
            { `🗓️ ${year}` }
          </p>
          <p data-testid="mission-country">{ ` 📍 ${country}` }</p>
        </div>
        <p data-testid="mission-destination">{ `🚩 ${destination}` }</p>
      </span>
    </div>
  );
}

export default MissionCard;
