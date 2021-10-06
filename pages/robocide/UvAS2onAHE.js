import Dump from "../../components/Dump";
const sourceURLS = ["/UvAS2onAHE--0.png", "/UvAS2onAHE--1.png"];
export default function UvAS2onAHE() {
  return (
    <div>
      <Dump id="robocide">
        {sourceURLS.map((url, index) => (
          <img className="workComponent" src={url} key={index} />
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
