import Dump from "../../components/Dump";
const sourceURLS = ["/xKgjk8FZiB--0.png", "/xKgjk8FZiB--1.jpg"];
export default function xKgjk8FZiB() {
  return (
    <div>
      <Dump id="qil">
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
