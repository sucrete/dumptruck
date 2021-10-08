import Dump from "../../components/Dump";
const sourceURLS = ["/qY1wneOsVg.gif"];
export default function qY1wneOsVg() {
  return (
    <div>
      <Dump id="maxlabor">
        {sourceURLS.map((url) => (
          <img className="workComponent" src={url} />
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
