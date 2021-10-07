import Dump from "../../components/Dump";
const sourceURLS = [
  "/lqcVqXe8Lg--0.gif",
  "/lqcVqXe8Lg--1.gif",
  "/lqcVqXe8Lg--3.png",
];
export default function lqcVqXe8Lg() {
  return (
    <div>
      <Dump id="kintrala">
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
