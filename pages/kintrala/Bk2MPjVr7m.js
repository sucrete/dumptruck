import Dump from "../../components/Dump";
const sourceURLS = ["/Bk2MPjVr7m--0.gif", "/Bk2MPjVr7m--1.png"];
export default function Bk2MPjVr7m() {
  return (
    <div>
      <Dump id="kintrala">
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
