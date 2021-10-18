import Dump from "../../components/Dump";
const sourceURLS = ["/XcIwIgtmmi--0.png", "/XcIwIgtmmi--1.gif"];
export default function XcIwIgtmmi() {
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
