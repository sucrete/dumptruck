import Dump from "../../components/Dump";
const sourceURLS = ["/gzLGblgsI2--0.png", "/gzLGblgsI2--1.jpeg"];
export default function gzLGblgsI2() {
  return (
    <div>
      <Dump id="petrograd">
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
