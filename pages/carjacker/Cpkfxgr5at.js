import Dump from "../../components/Dump";
const sourceURLS = ["/Cpkfxgr5at--0.png", "/Cpkfxgr5at--1.gif"];
export default function Cpkfxgr5at() {
  return (
    <div>
      <Dump id="carjacker">
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
