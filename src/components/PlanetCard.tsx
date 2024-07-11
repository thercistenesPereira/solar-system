import PlanetName from './PlanetName';

type PlanetProps = {
  planetName: string;
  planetImage: string;
};

function PlanetCard({ planetName, planetImage }: PlanetProps) {
  const removeAccents = (name: string) => {
    return name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  const classPlanet = `planet-${removeAccents(planetName.toLowerCase())}`;

  return (
    <div data-testid="planet-card" className="planet_card">
      <img
        src={ planetImage }
        alt={ `Planeta ${planetName}` }
        className={ classPlanet }
      />
      <PlanetName planetName={ planetName } />
    </div>
  );
}

export default PlanetCard;
