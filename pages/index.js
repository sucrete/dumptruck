import TopFiles from "../components/TopFiles";

export default function Index() {
  return (
    <div className="app">
      <div className="landingHeader">
        <img
          className="guc"
          alt="logo for dumpTRUCK dump.fm gallery showcase"
          src="/dumpTRUCKlogo.svg"
        />
        <hr />
        <div className="title">
          sucrete's <br />
          dump.fm <br />
          collection
        </div>
      </div>
      <div className="topFilesContainer">
        <TopFiles />
      </div>

      <style jsx>{`
        .guc {
          width: 175px;
          margin-bottom: 10px;
          margin-top: 3px;
        }
        .landingHeader {
          background: #f8f8f8;
          padding-left: 20px;
          padding-top: 20px;
          padding-right: 20px;
        }
        .title {
          margin-top: 20px;
          margin-left: 5px;
          margin-right: 15px;
          padding-bottom: 50px;
          width: 85%;
          font-family: "America Expanded Regular";
          font-size: 3em;
        }
        hr {
          margin: 0px 5px;
        }
        .topFilesContainer {
          margin-left: 3px;
          padding-top: 20px;
        }
        .app {
          margin: 10px;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}
