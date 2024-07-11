import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

function SolarSystem() {
  return (
    <div data-testid="solar-system">
      <Title headline="Planetas" />
      {
        planets.map((planet, index) => (
          <PlanetCard
            key={ index }
            planetName={ planet.name }
            planetImage={ planet.image }
          />
        ))
      }
    </div>
  );
}

export default SolarSystem;
