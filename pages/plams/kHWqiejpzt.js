import Dump from "../../components/Dump";
const sourceURLS = [
  "/kHWqiejpzt--0.gif",
  "/kHWqiejpzt--0.gif",
  "/kHWqiejpzt--0.gif",
  "/kHWqiejpzt--1.png",
  "/kHWqiejpzt--2.gif",
  "/kHWqiejpzt--2.gif",
  "/kHWqiejpzt--2.gif",
];
export default function kHWqiejpzt() {
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
