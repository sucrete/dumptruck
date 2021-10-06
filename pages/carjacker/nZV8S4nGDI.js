import Dump from "../../components/Dump";
const sourceURLS = ["nZV8S4nGDI--0.jpg", "nZV8S4nGDI--1.png"];
export default function nZV8S4nGDI() {
  return (
    <div>
      <Dump id="carjacker">
        {sourceURLS.map((url, index) => (
          <img className="workComponent" src={`/${url}`} key={index} />
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
