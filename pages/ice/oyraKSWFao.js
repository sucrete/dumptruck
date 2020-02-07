import Dump from "../../components/Dump";
const sourceURLS = ["/rapids.gif", "/rapids2.gif", "/rapids3.gif"];
export default function oyraKSWFao() {
  return (
    <div>
      <Dump id="ice">
        {sourceURLS.map(url => (
          <img className="workComponent" src={url} />
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
