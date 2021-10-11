import Dump from "../../components/Dump";
const sourceURLS = ["/e8wFhsgCyq--0.gif", "/e8wFhsgCyq--1.gif"];
export default function e8wFhsgCyq() {
  return (
    <div>
      <Dump id="plams">
        {sourceURLS.map((url) => (
          <img className="workComponent" src={url} key={url} />
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
