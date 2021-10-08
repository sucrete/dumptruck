import Dump from "../../components/Dump";
const sourceURLS = ["/ZHZuNl9gZN.png"];
export default function ZHZuNl9gZN() {
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
