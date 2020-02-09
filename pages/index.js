import TopFiles from "../components/TopFiles";
import Marquee from "../components/Marquee";

export default function Index() {
  return (
    <div className="app">
      <Marquee>
        <div className="title">
          the
          <br />
          sucrete <br />
          directory
        </div>
      </Marquee>

      <div className="topFilesContainer">
        <TopFiles />
      </div>

      <style jsx>{`
        .title {
          margin-top: 20px;
          margin-left: 5px;
          margin-right: 15px;
          padding-bottom: 50px;
          width: 85%;
          font-family: "America Expanded Fat";
          font-size: 3em;
          line-height: 120%;
        }
        .topFilesContainer {
          margin-left: 3px;
          padding-top: 20px;
        }
        .app {
          margin: 10px;
          margin-top: 20px;
          padding-bottom: 100px;
        }
        @font-face {
          font-family: "America Expanded Regular";
          src: url("/fonts/GT-America-Expanded-Regular.otf") format("opentype");
          font-display: auto;
        }
        @font-face {
          font-family: "America Expanded Fat";
          src: url("/fonts/GT-America-Expanded-Bold.otf") format("opentype");
          font-display: auto;
        }
      `}</style>
    </div>
  );
}
