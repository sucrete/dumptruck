import Dump from "../../components/Dump";
const sourceURLS = [0, 1, 2, 3];
export default function OwLa7IfnIO() {
  return (
    <div>
      <Dump id="gularjinoish">
        {sourceURLS.map((index) => (
          <img
            className="workComponent"
            src={`/OwLa7IfnIO--${index}.png`}
            key={index}
          />
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
