type PlanetPropsType = {
  planetName: string;
};

function PlanetName({ planetName }: PlanetPropsType) {
  return (
    <p data-testid="planet-name" className="planet_name">{ planetName }</p>
  );
}

export default PlanetName;
