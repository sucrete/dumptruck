import Dump from "../../components/Dump";
const sourceURLS = [
  "/qZh86EY9Ez--0.gif",
  "/qZh86EY9Ez--1.gif",
  "/qZh86EY9Ez--2.png",
  "/qZh86EY9Ez--1.gif",
  "/qZh86EY9Ez--0.gif",
];
export default function qZh86EY9Ez() {
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
