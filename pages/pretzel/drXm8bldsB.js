import Dump from "../../components/Dump";
const sourceURLS = [
  "https://lh3.googleusercontent.com/6guEUzWLqpFEqp52N4VqXYnCwsPTH2ylI3MYej48_OHC1cmHwxD-fN_SnvxC9nlPOEpdzFmm342TKX5ZUobRRJiHoLaccogb1VbZkBbcdPpiOmNI3K37aMIoYNKyW2sbz24qif20AG_JDDE60zJMWSI8QTvpW5lryEy21vHLz63BdKGfaO5vw2OGNKXK54ompi0SlFZrcXI94YWITL7SUJffH7fUYro8seEtP-kGpehmUMiAfaZ0AZXN9hCFR-ke2XiGgkOGUagYCem_SwarKd2VKJNBYJ26Uc5D-l2Kk3uPi2KVuXuf9b10tTBc991CLwDmX-ehPstQc844aVWUMwVITxISBJkj288f_sYUNq2i9UIzlt20D5N-fCXjAcxueCt5gsfdFN8xGhO3UHf2h4DtS58jPja1Mw3t7DhbJohd0-9kj-lr7_YfxeDfIaBzaan4IsKXPju82vVTWtTUvr84vR0h32K61_tzCVDVq-yvvmqHSLq9jZ0IFFCpIHRsDTaeuOlAVfZN7WX1lbnKca13RFs1PA_hYhNE8cMyPNyFUDkV2_QN11mV24y6uk-kxpaAeSJeHxCxMYgFcLXWlNWNJHFfnlMjx4CaL9KEGn0kL91Nk8POC5Flk2nQQkbJJKWh-DgB_p1J5rryT2NditWC4jy9ZsCq8vGT4BoEiviQb4w6cXc=w1440-h501-ft",
  "https://lh3.googleusercontent.com/E__E2o49-czg5irpWeVJ_aDkxeZKVLj5KBoigqhspde6PvSAF80FXXlrEffWLDMUE_mh1wBmUC23I8FJx9G_KCPo1pLjSK84QgiSBxguXIq4AR46BxpUVK-_xc_aKsC0P67a3pj5AIt0-Jb0xFV7qqvBmrmXcAIBWv1CdYDuARlNa1yCGp4nEspAbqvd1OluZrk8vB9XH6YPzpR6ndsgprx8o8qoCMFj63XnI39cfMDoFX_yr2xaDiQNMEgaza8vAXI4toeZ7b3noZNLuBq6f0BBlXwOb5-pkX64EbUEmvFuSDPEB7H3yClVPOLIY2g5f-WsasOZ5HwS7BLpDZ9IQta7e02_9qvcrghHpA5DrtnIoJsHnpq-NuI1T_-6YcGSbIZBuCOPjZddTTBZM1AtQmigKOjmD0nQFUckJY84kOp0xoK_Ps7hQTixTPhi0CQkDJZsEkXuQrrxxscGi4fbYwxbfuwobRh3oVlWJm4CZdK-Wxdl-O32MPp0V-IH8UeqjZ1raOR-XCppXMRQ3EH4hrpJ0CPocr_DSGwPYLH5AbIFc4bNmC-u5xLzvz2mGdDIN01nDbQerP7Hr_P8RdRPTao6VLJO05JqniZ2R8QoRkOB4LsLFjLOF6sum4bthU_nkgwpRYXiLj9cF_RC9IV3csc7axicQpVUjYqrY_-GfsF65IfK1W0=w1440-h501-ft"
];
export default function drXm8bldsB() {
  return (
    <div>
      <Dump id="pretzel">
        {sourceURLS.map(url => (
          <img className="workComponent" src={url} />
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
