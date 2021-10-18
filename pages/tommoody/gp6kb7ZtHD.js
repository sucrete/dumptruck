import Dump from "../../components/Dump";
const sourceURLS = ["/gp6kb7ZtHD--0.jpeg", "/gp6kb7ZtHD.gif"];
export default function gp6kb7ZtHD() {
  return (
    <div>
      <Dump id="tommoody">
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
