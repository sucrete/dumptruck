import Marquee from "../components/Marquee";
import Body from "../components/ArtistBody";
import Link from "next/link";

const works = ["TuIxeVjkDy", "nLVOBmMFoi", "JUxM5G02DO"];
const artist = "illalli";
export default function Illalli() {
  return (
    <div className="page">
      <Marquee>
        <div className="profile">PROFILE</div>
        <div className="header">{artist}</div>
      </Marquee>
      <Body artist={artist}>
        {works.map(work => (
          <Link href="[artist]/[work]" as={`${artist}/${work}`}>
            <div className="fileName" key={work}>
              <span>
                {artist}/{work}.dump
              </span>
            </div>
          </Link>
        ))}
        <Link href="[artist]/all" as={`${artist}/all`}>
          <div className="directoryFooter">
            <img className="iconImgReverse" src="/alldumps.png" />
            <span className="allDumpsTitle">one page</span>
          </div>
        </Link>
      </Body>

      <style jsx>{`
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
        @media screen and (max-width: 400px) {
          .header {
            font-size: 2.5em !important;
          }
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
