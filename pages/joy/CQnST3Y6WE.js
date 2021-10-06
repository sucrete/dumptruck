import Dump from "../../components/Dump";
const sourceURLS = [
  "/CQnST3Y6WE--0.png",
  "CQnST3Y6WE--1.gif",
  "CQnST3Y6WE--2.png",
  "CQnST3Y6WE--3.png",
  "CQnST3Y6WE--4.png",
];
export default function CQnST3Y6WE() {
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
