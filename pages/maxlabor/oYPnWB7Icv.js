import Dump from "../../components/Dump";
const sourceURLS = ["/entrance.gif"];
export default function oYPnWB7Icv() {
  return (
    <div>
      <Dump id="maxlabor">
        {sourceURLS.map(url => (
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
