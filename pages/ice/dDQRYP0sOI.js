import Dump from "../../components/Dump";
const sourceURLS = [
  "/dDQRYP0sOI--0.png",
  "/dDQRYP0sOI--1.gif",
  "/dDQRYP0sOI--2.png",
];
export default function dDQRYP0sOI() {
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
