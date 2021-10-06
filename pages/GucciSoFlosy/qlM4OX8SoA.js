import Dump from "../../components/Dump";
const sourceURLS = [
  "/qlM4OX8SoA--0.gif",
  "https://media.giphy.com/media/KZBXrasvRe5oVVlpiK/giphy.gif",
  "/qlM4OX8SoA--1.gif",
];
export default function qlM4OX8SoA() {
  return (
    <div>
      <Dump id="GucciSoFlosy">
        {sourceURLS.map((url, index) => (
          <img className="workComponent" src={url} key={index} />
        ))}
      </Dump>
      <style jsx>{`
        .workComponent {
          max-width: 425px;
        }
      `}</style>
    </div>
  );
}
