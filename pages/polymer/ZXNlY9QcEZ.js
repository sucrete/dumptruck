import Dump from "../../components/Dump";
const sourceURLS = [
  "/ZXNlY9QcEZ--0.gif",
  "/ZXNlY9QcEZ--1.png",
  "/ZXNlY9QcEZ--2.png",
  "/ZXNlY9QcEZ--3.png",
];
export default function ZXNlY9QcEZ() {
  return (
    <div>
      <Dump id="polymer">
        {sourceURLS.map((url, index) => (
          <img className="workComponent" src={url} key={index} />
        ))}
      </Dump>
      <style jsx>{`
        .workComponent {
          max-height: 400px;
          max-width: 500px;
        }
      `}</style>
    </div>
  );
}
