import Dump from "../../components/Dump";
const sourceURLS = ["Vb0vfN1nIU--0.gif", "Vb0vfN1nIU--1.png"];
export default function Vb0vfN1nIU() {
  return (
    <div>
      <Dump id="dvvidpw">
        {sourceURLS.map((url, index) => (
          <img className="workComponent" src={`/${url}`} key={index} />
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
