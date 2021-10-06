import Dump from "../../components/Dump";
const sourceURLS = ["/nLVOBmMFoi--0.png", "/nLVOBmMFoi--1.gif"];
export default function nLVOBmMFoi() {
  return (
    <div>
      <Dump id="illalli">
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
