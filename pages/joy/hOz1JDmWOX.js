import Dump from "../../components/Dump";
const sourceURLS = [0, 1];
export default function hOz1JDmWOX() {
  return (
    <div>
      <Dump id="joy">
        {sourceURLS.map((url) => (
          <img
            className="workComponent"
            src={`/hOz1JDmWOX--${url}.png`}
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
