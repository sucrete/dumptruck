import Dump from "../../components/Dump";
const sourceURLS = [0, 1];
export default function D8BQC1I3MG() {
  return (
    <div>
      <Dump id="loserbitch">
        {sourceURLS.map((url) => (
          <img
            className="workComponent"
            src={`/D8BQC1I3MG--${url}.jpeg`}
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
