import Dump from "../../components/Dump";
const sourceURLS = ["/QSYDFDXuLj--0.png", "/QSYDFDXuLj--1.gif"];
export default function QSYDFDXuLj() {
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
