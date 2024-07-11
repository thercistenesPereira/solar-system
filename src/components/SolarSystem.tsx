import '../style/solarSystem.css';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

function SolarSystem() {
  return (
    <div data-testid="solar-system">
      <Title headline="Planetas" />
      <section className="container_solar_system">
        {
          planets.map((planet, index) => (
            <PlanetCard
              key={ index }
              planetImage={ planet.image }
              planetName={ planet.name }
            />
          ))
        }
      </section>
    </div>
  );
}

export default SolarSystem;
