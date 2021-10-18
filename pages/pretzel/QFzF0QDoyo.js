import Dump from "../../components/Dump";
const sourceURLS = ["/duckbill.gif", "/soulseek.gif"];
export default function QFzF0QDoyo() {
  return (
    <div>
      <Dump id="pretzel">
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
