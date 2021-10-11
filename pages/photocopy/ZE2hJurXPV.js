import Dump from "../../components/Dump";
const sourceURLS = [0, 1, 2, 3, 4];
export default function ZE2hJurXPV() {
  return (
    <div>
      <Dump id="photocopy">
        {sourceURLS.map((url) => (
          <img
            className="workComponent"
            src={`/ZE2hJurXPV--${url}.png`}
            key={url}
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
