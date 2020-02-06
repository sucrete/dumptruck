import Marquee from "../components/Marquee";
import Body from "../components/ArtistBody";
import Link from "next/link";

const works = [
  "h6Fro9RoVn",
  "yeTfD6HtQe",
  "iSPlmlZByX",
  "exP9uZoTjY",
  "r33N5epQRe",
  "WoPfPIOZQ1",
  "nrBJGf1Xg8",
  "HwFRdtBQFC",
  "wPDZsg6BkW",
  "JHQT2Gt3h7",
  "cmuEfs1FIq",
  "mHGxIP6eRv",
  "O2AxafZ5Vp",
  "BRMscJGHFz",
  "MGS4gsEWYp",
  "q0aSCcb7gi",
  "IkvGe6voyG",
  "UFAakFLJSC",
  "gTrwP3tX6b",
  "P1OfPD2ukH",
  "quE0VAH42G",
  "zwI0yfaV6v",
  "mQVP0Pl7Jm"
];
const artist = "FAUXreal";
export default function FAUXreal() {
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
      </Body>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Work+Sans&display=swap");
        .profile {
          font-family: "Work Sans";
          font-size: 77%;
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
