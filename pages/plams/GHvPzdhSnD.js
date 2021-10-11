import Dump from "../../components/Dump";
const sourceURLS = [0, 1];
export default function GHvPzdhSnD() {
  return (
    <div>
      <Dump id="plams">
        {sourceURLS.map((index) => (
          <img
            className="workComponent"
            src={`/GHvPzdhSnD--${index}.gif`}
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
