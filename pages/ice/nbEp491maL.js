import Dump from "../../components/Dump";
const sourceURLS = ["/nbEp491maL--0.gif", "/nbEp491maL--1.png"];
export default function nbEp491maL() {
  return (
    <div>
      <Dump id="ice">
        {sourceURLS.map((url, index) => (
          <img className="workComponent" src={url} key={index} />
        ))}
      </Dump>
      <style jsx>{`
        .workComponent {
          max-height: 400px;
          max-width: 500px;
        }
      `}</style>
    </div>
  );
}
