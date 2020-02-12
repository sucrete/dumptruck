import TopFiles from "../components/TopFiles";
import Marquee from "../components/Marquee";
import Head from "next/head";

export default function Index() {
  return (
    <div className="app">
      <Head>
        <title>sucrete's dumpTRUCK</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="shortcut icon"
          href="https://image.flaticon.com/icons/svg/2422/2422056.svg"
        />
      </Head>
      <Marquee>
        <div className="title">
          sucrete's <br />
          files
        </div>
      </Marquee>

      <div className="topFilesContainer">
        <TopFiles />
      </div>

      <style jsx global>{`
        .title {
          margin-top: 20px;
          margin-left: 5px;
          margin-right: 15px;
          padding-bottom: 50px;
          width: 85%;
          font-family: "America Expanded Fat";
          font-size: 3em;
          line-height: 120%;
          background-size: cover;
          background-color: black;
          background-position: center;
          -webkit-background-clip: text;
          background-image: url("https://i.imgur.com/mpD6Aah.gif");
          -webkit-text-fill-color: transparent;
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
        @import url("https://fonts.googleapis.com/css?family=Work+Sans&display=swap");
        .profile {
          font-family: "Work Sans";
          font-size: 77%;
        }
        .directoryFooter {
          transition: all 0.25s;
          font-family: "Work Sans";
          border-top: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
          padding-left: 2px;
          height: 40px;
          position: relative;
          vertical-align: middle;
        }
        .allDumpsTitle {
          color: #484848;
          position: absolute;
          top: 50%;
          transform: translatey(-50%);
        }
        .iconImgReverse {
          height: 130%;
          position: relative;
          top: 85%;
          left: 0%;
          transform: translateY(-50%);
        }
        .allDumpsTitle {
          left: 38px;
        }
        .directoryFooter {
          border-top: unset;
          cursor: pointer;
        }
        .directoryFooter:hover {
          background: #f8f8f8;
        }
        .fileName {
          text-align: right;
          border-bottom: 1px solid #e0e0e0;
          height: 32px;
          font-family: "Work Sans";
          border-top: 1px solid transparent;
          transition: all 0.25s;
          cursor: pointer;
          border-left: 8px solid #f8f8f8;
          vertical-align: middle;
          position: relative;
        }
        .fileName:hover {
          background: #f8f8f8;
        }
        .fileName span {
          font-size: 0.9em;
          color: #484848;
          position: absolute;
          top: 50%;
          right: 0%;
          transform: translatey(-50%);
        }
        .page {
          margin: 10px;
          margin-top: 20px;
          padding-bottom: 100px;
        }
        .header {
          font-size: 3em;
          position: relative;
          margin-top: 6px;
          left: -3px;
          padding-bottom: 30px;
        }
      `}</style>
    </div>
  );
}
