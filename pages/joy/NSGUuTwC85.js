import Dump from "../../components/Dump";
const sourceURLS = [0, 1, 2];
export default function NSGUuTwC85() {
  return (
    <div>
      <Dump id="joy">
        {sourceURLS.map((url) => (
          <img
            className="workComponent"
            src={`/NSGUuTwC85--${url}.png`}
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
