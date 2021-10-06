import Dump from "../../components/Dump";
const sourceURLS = [
  "/ZWedbk5bDK--0.png",
  "/ZWedbk5bDK--1.png",
  "/crawl.gif",
  "/ZWedbk5bDK--2.png",
];
export default function ZWedbk5bDK() {
  return (
    <div>
      <Dump id="isaac">
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
