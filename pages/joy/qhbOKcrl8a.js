import Dump from "../../components/Dump";
const sourceURLS = [
  "/qhbOKcrl8a--0.png",
  "/qhbOKcrl8a--1.png",
  "/qhbOKcrl8a--2.png",
];
export default function qhbOKcrl8a() {
  return (
    <div>
      <Dump id="joy">
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
