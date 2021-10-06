import Dump from "../../components/Dump";
const sourceURLS = ["qhH5SQzQNC--0.gif", "qhH5SQzQNC--1.png"];
export default function qhH5SQzQNC() {
  return (
    <div>
      <Dump id="carjacker">
        {sourceURLS.map((url) => (
          <img className="workComponent" src={`/${url}`} />
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
