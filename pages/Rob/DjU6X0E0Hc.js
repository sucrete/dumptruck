import Dump from "../../components/Dump";
const sourceURLS = ["/DjU6X0E0Hc--0.jpeg", "/DjU6X0E0Hc--1.png"];
export default function DjU6X0E0Hc() {
  return (
    <div>
      <Dump id="Rob">
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
