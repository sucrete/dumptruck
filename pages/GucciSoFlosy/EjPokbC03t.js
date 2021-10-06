import Dump from "../../components/Dump";
const sourceURLS = ["/EjPokbC03t--0.png", "/EjPokbC03t--1.jpg"];
export default function EjPokbC03t() {
  return (
    <div>
      <Dump id="GucciSoFlosy">
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
