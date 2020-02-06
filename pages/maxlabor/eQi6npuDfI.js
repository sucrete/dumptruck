import Dump from "../../components/Dump";
const sourceURLS = ["/mushtable.gif"];
export default function eQi6npuDfI() {
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
