import Dump from "../../components/Dump";
const sourceURLS = [
  "https://i.imgur.com/raEJTPZ.jpg",
  "/I4kcIEpfoe--1.gif",
  "/I4kcIEpfoe--2.gif",
];
export default function I4kcIEpfoe() {
  return (
    <div>
      <Dump id="melipone">
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
