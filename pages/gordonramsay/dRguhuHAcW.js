import Dump from "../../components/Dump";
const sourceURLS = ["/dogspin.gif", "/dRguhuHAcW.gif"];
export default function dRguhuHAcW() {
  return (
    <div>
      <Dump id="gordonramsay">
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
