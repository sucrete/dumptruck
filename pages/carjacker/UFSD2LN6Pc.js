import Dump from "../../components/Dump";
const sourceURLS = ["UFSD2LN6Pc--0.png", "UFSD2LN6Pc--1.png"];
export default function UFSD2LN6Pc() {
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
