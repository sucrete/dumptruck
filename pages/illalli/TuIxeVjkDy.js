import Dump from "../../components/Dump";
const sourceURLS = ["/TuIxeVjkDy--0.gif", "/TuIxeVjkDy--1.gif"];
export default function TuIxeVjkDy() {
  return (
    <div>
      <Dump id="illalli">
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
