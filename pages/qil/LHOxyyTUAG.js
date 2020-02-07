import Dump from "../../components/Dump";
const sourceURLS = [
  "https://lh3.googleusercontent.com/XKGIgBqpk5eNzFaa9JiCsdYNSs2qwcMcu61hCyr1WbzdItfXzx2-aSEdS-Rrn2b0iaI4Zd7RQtvXHzmbNbRHyEMKs_LqFTxzH7ohFJQsiK_KtMOZSEawdyDjquM0ZRt5eKyLvbgMJw72i4idyP33nNNcpLhOcDvLMeDLVkhO68-FqKyNO8wR_cBn1WChmufNGf3rQ77GITaRb_OKbEKpnh8yamKTXTgrvDWtBILxR5hjMNbRpl7JneVl4gtPZGg-Zvm-m7hTmM_mgAcDQ0egdLrqylLuqDtgcurUKv6EyzI3t1Onun1UEHGN3GBLmKp7MovTrScjtxTQ8DQjaMQgBlWMXtZa7xpyH2kNq3IrOrdRyMPG7Vwk6k37tg8-PAtliw1iAYx3w8yJFBn_K07FiNovQA3i9svPNIT37D6CEdUbtCmdKa08qDI5RZB8TNvBDFJdjnB_EjV8cMBS0Zz0F6Vx4GauR85yXCqBqtH3-TYrvoUtI-VRDIItC5SMW9Lq_Na844bI5OMmNEmNM88oDkZW5mWSGFNUFanM7OQ2w7wg-hxH6sAcv3acxb_S-HKVuZr6dmjlQ8_icdW6wDCSA7StNbouOVgAqPhfkDQK1T2M06euqEeLvmCyY-Ve1wHSxo4gndPbfYLlDNkpQsZMTn1FGka7LNN10IMgT9I0dgU83nTZE5s=w1440-h550-ft"
];
export default function LHOxyyTUAG() {
  return (
    <div>
      <Dump id="qil">
        {sourceURLS.map(url => (
          <img className="workComponent" src={url} />
        ))}
      </Dump>
      <style jsx>{`
        .workComponent {
          max-height: 400px;
          max-width: 500px;
        }
      `}</style>
    </div>
  );
}
