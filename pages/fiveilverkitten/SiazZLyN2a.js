import Dump from "../../components/Dump";
const sourceURLS = ["/gameoflife.gif"];
export default function SiazZLyN2a() {
  return (
    <div>
      <Dump id="5ilverkitten">
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
