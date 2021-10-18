import Dump from "../../components/Dump";
const sourceURLS = ["/wvkxOtg3y7--0.gif", "/wvkxOtg3y7--1.png"];
export default function wvkxOtg3y7() {
  return (
    <div>
      <Dump id="sidonie">
        {sourceURLS.map((url) => (
          <img className="workComponent" src={url} key={url} />
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
