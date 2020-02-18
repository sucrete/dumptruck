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
        <meta
          property="og:image"
          content="https://lh3.googleusercontent.com/MdohvhFJKJL1rn1Qrkk9RXSZ1Qlw_suiaLQoEqkKXwY0E1Bx0W9z645Ym3xlUktOfpgoA3MLRNdlhFQfMUULdB1tyQVVKxiUiAzqumj5bklOXzoSI2KHQvtpjP7IiLwIQjQHUu-1pGM8DvGdqu4xWw4g5dEP92woG1o7ZYVwJzrreWNlf3gJEuRCcu9nP9h6NbGxUde9nfU4OT98S72mwq3ETlq1R9X3i5PO-aVfaxJDHfn2FnPirx_aXffodzY8b2-8dabNH5wI8kjfsyaIXc9rbuA5u3kdRePpctRIV0cAnNHf6HqikTi6ZKIKEDC4vnzpF2DFPqGJ70lha5arzg4SY4CG3unnPPIJIS5igbLvP7EOf-Tmq_cUpt1DalM3kCH5FJsjvLzY1pyTa6BC8LYn9acxChDiBB9_02qZEw7fvh-zdnFQ81-OH7DlZB_OJEtDAyK7Ft2T1Jw37lra8Z91O39Tksxk6ToeKkn66q0eF5546XXLcy732xVJM1Wdxfw0FoVlOhDQuKfRONDm4g-_unaMojLxBDNhNFnxlRkfGiX-aQRMQwR_T_GNms-FBAL5vmTdLnqN8o6SgABWkBD0FAtfGxmD46ileWmsiTPWou-gVPa1MgcWx43_7yDWGUcxqpsex3g1NXIGBI4lNhqMRa5WH-Htl8-tFfGeLrtfmkr39gI=w1408-h717-ft"
        />
      </Head>
      <Marquee>
        <div className="titleContainer">
          <div className="title">
            sucrete's <br />
            files
          </div>
          <p className="topDescription">
            a repository of work casually saved to my hard drive between the
            years of 2012 and 2016 from the (now dead) meme accelerator{" "}
            <a
              className="dumpfmlink"
              href="https://sites.rhizome.org/surfclubs/#dump.fm"
              target="_blank"
            >
              dump.fm
            </a>
            . intended to be a permanent home for some very good work otherwise
            forgotten
          </p>
          <p className="descriptionDescription">best displayed on desktop</p>
        </div>
      </Marquee>

      <div className="topFilesContainer">
        <TopFiles />
      </div>

      <style jsx global>{`
        .descriptionDescription {
          color: grey;
        }
        .dumpfmlink:visited {
          color: midnightblue;
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
        @media screen and (max-width: 400px) {
          .title {
            font-size: 2.5em;
          }
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
