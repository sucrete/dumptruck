import Dump from "../../components/Dump";
const sourceURLS = ["/JUxM5G02DO--0.png", "/JUxM5G02DO--1.png"];
export default function JUxM5G02DO() {
  return (
    <div>
      <Dump id="illalli">
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
