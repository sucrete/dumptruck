import Dump from "../../components/Dump";
const sourceURLS = ["/sVDvg0AWQO--0.png", "/ben.gif", "/sVDvg0AWQO--1.png"];
export default function sVDvg0AWQO() {
  return (
    <div>
      <Dump id="kalan">
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
