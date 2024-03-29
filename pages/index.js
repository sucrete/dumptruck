import TopFiles from "../components/TopFiles";
import Marquee from "../components/Marquee";
import Head from "next/head";

export default function Index() {
  return (
    <div className="app">
      <Head>
        <title>sucrete's dumpTRUCK</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/heart.svg" />
        <meta property="og:title" content="dumpTRUCK" />
        <meta
          property="og:description"
          content="A limited repository of post-internet art from dump.fm"
        />
        <meta property="og:image" content="https://i.imgur.com/5e83NVF.png" />
        <meta property="og:url" content="https://dumptruck.now.sh/" />
        <meta property="og:type" content="website" />
      </Head>
      <Marquee>
        <div className="titleContainer">
          <div className="title">
            sucrete's <br />
            files
          </div>
          <p className="topDescription">
            below is a repository of work by users of the famed image chatroom
            and meme accelerator,<span> </span>
            <a
              className="dumpfmlink"
              href="https://sites.rhizome.org/surfclubs/#dump.fm"
              target="_blank"
            >
              dump.fm
            </a>
            . during it's heyday the platform was considered a haven for an
            avant-garde working primarily on the internet. in so doing the
            community helped originate what's known today as the 'internet
            aesthetic'
          </p>
          <p className="descriptionDescription">best displayed on desktop</p>
        </div>
      </Marquee>

      <div className="topFilesContainer">
        <TopFiles />
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css?family=Work+Sans&display=swap");
        .descriptionDescription {
          color: grey;
        }
        .dumpfmlink:visited {
          color: black;
        }
        .title {
          margin-top: 20px;
          margin-left: 5px;
          margin-right: 15px;
          font-family: "America Expanded Fat";
          font-size: 3em;
          line-height: 120%;
          background-size: cover;
          background-color: black;
          background-position: center;
          -webkit-background-clip: text;
          background-image: url("https://i.imgur.com/mpD6Aah.gif");
          -webkit-text-fill-color: transparent;
          hyphens: unset;
        }
        .topDescription,
        .descriptionDescription {
          font-family: "Work Sans", sans-serif;
          max-width: 350px;
          padding-left: 7px;
        }
        .titleContainer {
          padding-bottom: 25px;
          width: 85%;
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
        @media only screen and (max-width: 450px) {
          .titleContainer .title {
            font-size: 2.6em !important;
          }
        }
        @media only screen and (max-width: 400px) {
          .titleContainer .title {
            font-size: 2.2em !important;
          }
        }
        @media only screen and (max-width: 325px) {
          .titleContainer .title {
            font-size: 1.8em !important;
          }
        }
      `}</style>
    </div>
  );
}
