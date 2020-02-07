import Dump from "../../components/Dump";
const sourceURLS = [
  "https://lh3.googleusercontent.com/sNajY__V_n5wjmKHvLurQy_wdgslGj8VrWz6pdeKad6ZWH7ThO5e3vBbEKCTd7w3-VYJ3tgSuVCVczVDu0JK1OslAzzuVG5hWNKBEpMcUMPP67UuwshZHMwnuq411GpXTm2ZLT4RGvuv3SV1lp104Vm0v6QK3xjqYPf7BIgjnqAYzXzYXxlM7b1Bwr7vdskGS8l6fsBhKYi_EDAp6_KXtfiCjek4QuU2fae0i-hZkQaewmpb-zbmKKzfWox7ZVbWW863Odlsbqo6N5bahcNm56iXwHhMyrzoV6bcE112l9d-mKSCE3T5jhFuX16yB9wfQPmwWb0Uw_wt4wAOec30s8RRMWIuPFbgXoZ_k6Rp4m98U5U-N3vvsx5XmC3gWLUAmC9g6zU3yE1FB7Ibxo9V_JI5TroKIRiPFTp2e0GJ6e7rpnJGgeSfnrVqC_qpRzwvsTXx7fqu7NAW1Co3Oh-tic_2hr-v8Lyj2NLX77VoaKxR2Sy3aaPQXSjVS13CwJFcFhvBXxY-YJeRbUVfa351RodYFEf3sFiz8Zv6_sUyuN2DY7y4RJeMgaOBmDd3SXSjQHPCU9ckuUWnN7UnPvzdjLQNCcnaCSwxjzoA5xM1-oWtslQM-EgHqU2hYRyimobAuuD1Wc7Hl_jOXJVMaSem3crS1_dFwOF1m5ckchQDUb3Vf_V480Y=w1440-h550-ft"
];
export default function P1OfPD2ukH() {
  return (
    <div>
      <Dump id="FAUXreal">
        {sourceURLS.map(url => (
          <img className="workComponent" src={url} />
        ))}
      </Dump>
      <style jsx>{`
        .workComponent {
          max-height: 400px;
          max-width: 425px;
        }
      `}</style>
    </div>
  );
}
