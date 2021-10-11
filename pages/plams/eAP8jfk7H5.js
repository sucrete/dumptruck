import Dump from "../../components/Dump";
const sourceURLS = ["/eAP8jfk7H5--0.gif", "/eAP8jfk7H5--1.gif"];
export default function eAP8jfk7H5() {
  return (
    <div>
      <Dump id="plams">
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
