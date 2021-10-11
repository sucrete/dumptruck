import Dump from "../../components/Dump";
const sourceURLS = ["/Dfq2xbdJfO--0.gif", "/Dfq2xbdJfO--1.png"];
export default function Dfq2xbdJfO() {
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
