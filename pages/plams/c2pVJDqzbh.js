import Dump from "../../components/Dump";
const sourceURLS = ["/c2pVJDqzbh--0.gif", "/c2pVJDqzbh--1.png"];
export default function c2pVJDqzbh() {
  return (
    <div>
      <Dump id="plams">
        {sourceURLS.map((url, index) => (
          <img className="workComponent" src={url} key={index} />
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
