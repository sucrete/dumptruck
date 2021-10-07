import Dump from "../../components/Dump";
const sourceURLS = ["/G1Zhwf9YSy--0.jpeg", "/G1Zhwf9YSy--1.png"];
export default function G1Zhwf9YSy() {
  return (
    <div>
      <Dump id="lianne">
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
