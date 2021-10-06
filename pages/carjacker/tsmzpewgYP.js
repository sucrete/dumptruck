import Dump from "../../components/Dump";
const sourceURLS = ["tsmzpewgYP--0.png", "tsmzpewgYP--1.png"];
export default function tsmzpewgYP() {
  return (
    <div>
      <Dump id="carjacker">
        {sourceURLS.map((url) => (
          <img className="workComponent" src={`/${url}`} />
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
