import Dump from "../../components/Dump";
const sourceURLS = ["/BgRg6t3uMK--0.gif", "/BgRg6t3uMK--1.gif"];
export default function BgRg6t3uMK() {
  return (
    <div>
      <Dump id="gosane">
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
