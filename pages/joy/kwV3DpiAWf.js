import Dump from "../../components/Dump";
const sourceURLS = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];
export default function kwV3DpiAWf() {
  return (
    <div>
      <Dump id="joy">
        {sourceURLS.map((url) => (
          <img
            className="workComponent"
            src={`/kwV3DpiAWf--${url}.png`}
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
