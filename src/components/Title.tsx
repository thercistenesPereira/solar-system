type TitlePropos = {
  headline: string
};

function Title({ headline }: TitlePropos) {
  return (
    <h2>{ headline }</h2>
  );
}

export default Title;
