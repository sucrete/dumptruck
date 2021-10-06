import Dump from "../../components/Dump";
const sourceURLS = ["/RWZVS55dej.gif"];
export default function RWZVS55dej() {
  return (
    <div>
      <Dump id="D_MAGIK">
        {sourceURLS.map((url) => (
          <img className="workComponent" src={url} key={1} />
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
