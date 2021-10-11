import Dump from "../../components/Dump";
const sourceURLS = ["/kifCBzGttM--0.gif", "/kifCBzGttM--1.jpg"];
export default function kifCBzGttM() {
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
