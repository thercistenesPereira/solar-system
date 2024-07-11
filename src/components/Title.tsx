import '../style/title.css';

type TitlePropos = {
  headline: string
};

function Title({ headline }: TitlePropos) {
  return (
    <h2 className="subtitle">{ headline }</h2>
  );
}

export default Title;
