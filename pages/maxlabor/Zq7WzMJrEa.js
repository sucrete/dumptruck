import Dump from "../../components/Dump";
const sourceURLS = ["/Zq7WzMJrEa.png"];
export default function Zq7WzMJrEa() {
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
