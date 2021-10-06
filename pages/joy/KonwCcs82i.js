import Dump from "../../components/Dump";
const sourceURLS = [
  "/KonwCcs82i--0.gif",
  "/KonwCcs82i--1.jpg",
  "/KonwCcs82i--2.png",
  "/KonwCcs82i--3.png",
];
export default function KonwCcs82i() {
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
