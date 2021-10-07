import Dump from "../../components/Dump";
const sourceURLS = [
  "/YqZmNPyL6L--0.png",
  "/YqZmNPyL6L--1.gif",
  "/YqZmNPyL6L--2.gif",
  "/YqZmNPyL6L--3.png",
];
export default function YqZmNPyL6L() {
  return (
    <div>
      <Dump id="kiptok">
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
