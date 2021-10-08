import Dump from "../../components/Dump";
const sourceURLS = ["/JxWnqOC03x.gif"];
export default function JxWnqOC03x() {
  return (
    <div>
      <Dump id="melipone">
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
