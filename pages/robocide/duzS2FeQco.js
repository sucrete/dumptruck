import Dump from "../../components/Dump";
const sourceURLS = [
  "/duzS2FeQco--0.jpeg",
  "/duzS2FeQco--1.png",
  "/duzS2FeQco--2.png",
];
export default function duzS2FeQco() {
  return (
    <div>
      <Dump id="robocide">
        {sourceURLS.map((url) => (
          <img className="workComponent" src={url} key={url} />
        ))}
      </Dump>
      <style jsx>{`
        .workComponent {
          max-height: 400px;
          max-width: 500px;
        }
      `}</style>
    </div>
  );
}
