import Dump from "../../components/Dump";
const sourceURLS = ["/jzlXlMPmDX--0.gif", "/jzlXlMPmDX--1.jpeg"];
export default function jzlXlMPmDX() {
  return (
    <div>
      <Dump id="girlafraid">
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
