import Dump from "../../components/Dump";
const sourceURLS = [
  "https://lh3.googleusercontent.com/ON5gQUFaNMelBM2F7sejxUTC-SJ3NaKycowgCHaxVK5d2HD7qr_WOEL-Z4ohh5oc1POhEed_ZOBiB5D4zIBtuHWkzjgi1dpsVE-cEs8i2FqlMxV5iW-sVFyaKsyEPk4sIj_rqn3e2PBRs6MFe9yT6IaPDtq_RkBlSfJdkwgtA6drfrArms-nINUNFH8BPtxjwAl2gS-vuy-1R4XwMmIiDC9KCJga65zXcJUnWgllFfJpkWjWTRqDw9DBg_4uD2YGukcA9mUQ-tRU0oDul4pThByHcn2_cpsvvCL1_lgpYUdSEfmavzKxBNqswKYV98o3QU3tZx_9PH42GxIiypFcB2KYZEauNS8BrMCb9ZKwBlX9GSL_Y3fI9Tk2xbU14t0cPOub50p3ZDm0Q-fIkMKHOfBZLRqHF4qvtMl4yVBQ8QvZXB73NCDR3mS-q_u24pBwqvus1NYb1kqaiv-rBJQoFWFDh4B612dZFyZxFNXjaCQGE7MnxbG4T2VnkbcwAnOZGRx96nbLva_wy7aiTWH5lNiSBh5fjAObBohtPuOfjxcGLPHvv2rJduiBf1lFzh6ifoFzNTClvjzu1Tc9-1wfxSvPBhlKtlxtsADRhnvs8VIHlCOljvaxUv_zBpHnKoPVXt6odwaLv-mMvkmvW8Jw4nkN6PP22k5vSAOVXMtdaa_SGD9121k=w1440-h550-ft",
  "https://lh3.googleusercontent.com/0uWCbj_KVUfRGlpzbZHzWcwJaPvYBtiA1r0waSN0KJL7MsN_4jDlJonCOchEe5acWM3RZ3ZLvdSKTyf2iVQ9iru5L2DVrnRTmOCfDJymvNyLfTq5nD1s3JrYOHNrB4T9NPEFkgL9-WHufpvK6R3geRqudcgFmGLqT72A0_MX9wKw5fiT_2Tl62ZjWowUJ2N5Mt5hYJKXx37awJ-zqgHXsMZW0bO-OBktJyaT71Xqjdh7v_pQUqby8x34_PDhABp-QLM_329_0n2PHgwwiZEwlJpKsiBU4-JGg5sSvGyONsL5-OcDHPvHnOmFOl_kTkbGQ_3bTq6LreOI5Zr_Ct0nboatyVfZrtv8sgEbRpPZkPN7LLq3zqdnv28x9BkkbTFJIDZ51nwgcd8qoBcUaYbyBclwyDJRR3UCq_Gqf4mN_mW4uvhkh0VxavQNr9zjrhFehueWf-ELoRLAg6_Wz1mXSZR5DWOUN8hYt8IuIT7T4KvxNhB-jTef1ix814c_A3SXLjtWgOSv1f3xNaNpWzUFEJ4ugPqr_HiLGu8NY2ugD_rkQo2E096LJ-CQ8Fiq0syaPe-bVZvel_fLMbb4jmD96wK1D4pi6eqoYW6pHqJql5Nwo5P0N69DEImaKvuo0w6ZfOjm-C2RvwNaUroiiI39pnijhvbpKT23Q6Q7HDsOjnY6QsShS3A=w1440-h550-ft",
  "https://lh3.googleusercontent.com/IW090Zgv0ISZ7km_NLRm2kX49RAHhxHH2dhFYxl_C27U6HFh5CUvulKEigffy72Z97c8CCLxI9BSfRwl3Eh-u1-hz0xr0vNtxTvxAR6rlV2wjWdAbyaw9Fr9UxX3PUywFvzfytx91MdKjjdpvxgK4WN5891EG0EJ50BhsUnDeCcSB4cS3Qaaa9P4T1O88OMof9dhBrwY9rrIcOndSRzMIAVYra-wcrWQ8uLejWx22nIvPecaz1rs5wt7Op0AWziTQizLLzW81DekakEIN52VuChEQaiKvBpkx1iHnlOsozLmZ8FGhQQD7Y9mgcUI-9eHFC94K3EHF3AZsr7eMG1pGLjia-m-lsD1FnN_Xyb4VBy7aZDwaYT6kv5FKaY_Sr8BYfj5qrbwpnshXFUGCmk8dzs8qLuSEMFUyR_7xYqlNNs2KQ4pYRnlM9LTt6vB4zcWx3kq5LbbFDtK7F6pkH36KJfai2YJrH3oeMyxZEq6NfJDC4htmTHdDF6-GciPVrC4kme3TgxWSLQq8BLVs-8x5aWHPEeqYTCz52SE2hl4LGvwUDd4GjdikpZqiZUALEDgX8gfM25hnjD0OrB2whi1m0_bziVW-n_4O4UTVd6MkHMl-06eOwi1W0PYurXy5RIdWem3yZzQUEKnmxfL3iV3hnZtqx7MYjA8lGlfPvW8SWnMHKgif_c=w1440-h550-ft",
  "https://lh3.googleusercontent.com/E4yqACRvMJdffaahhUnXzrhM4OPa9NcSMRcdRC9EWFprqiW-DqBPCwix0eu89aNt9SQVsTL13Lz4_jUuaK0Ml7BRspXuz1PA6rjOGV63TzQ31x7UOAG8rZZbvKsy4lrcw0dHMQLq_7odBca_2KRGLOlJrAASlIkYEcoh07MLlhDBKtROEtC2TbvP2vcYzMnDeP-5IZq1P9zAYpV0mkWxLWbNMT6rvtMn0olOTsBYRZZAPGglka6OSQKawlwOGyLwjuFGKjPiSNQECqETSMt2VrRyds3PSgavlE2k8Z8YOE5IMOsmzBTHJC4RCH7mOcgmvz0EXMvu4fJT9siQXZmq7BEtuxC0C2ihx4EBQr6kGzHZa7Bm7AtVeeKiqrbkOZOsRUFgW74t0txnMucaujkikPvK0Aki3MM6urSlo6wWFOUixecEo9I3lPuOsEPyBZVm5ybsk2K77-AWnvtmwcQj5SY1gbSC5N3LHfOTEZbVHX9z1dF-sOI19gBKdJ-S2huM9iphoZsU1B95OqbPufrqtpAn0a1pC5UsUl7NwFDP6AuW6A0v4xmvfq04YYPGLaGlUkBIQgsCPX-eZ2RDDmB1QpEyTqFWjiyx4R3n_iAJ2a3G-rrh10bQ38ILIOs5rZ33nrvtibPI5woqeqQG5foMATsfAZzk4_fT2uRKiKhamy8w2pKyqGM=w1440-h550-ft",
  "https://lh3.googleusercontent.com/rwMXexID7j1LMlkz5Z85tubAxVDHFHg-nTH4AEjs1lzXnK4jSI9Fi9qSmAJDQ88owTvUDNg6grjqVCwkA62wP1xsBZb4QkOBs9g8N-kkF2dn7-CehYvvxMb2_t7RJu1F7-JiYDWtxjvymuIQeEDnVxT28DBB8w6rD-3zyAmfPhm47I6O2SHMTQuyXGE1SpyBgN1LP73mBfLqgw2laAtOBx097zd9gu8_nqmG8sOy9XHP6oCIy2foUllY_NQcyztCq8FbU_1P_ng5pd_F8BX2GOXLLVfLjqhZZwcXitj3n7vHHMU1gdQguS221ZikB1K-silm9FAOGVrNQTFUqVEX5mZBtjhAWhpkTfdNKng1f5unvE5nCKPz9xt0bcWFLO7UTOe7S61QRYWeTz4jCmnt7tuIeQLv9KWr8oGaHTyiYnw0ZQpb1D2TXAnpPsgivYpVYt2QBuWco3Ux-DyxWYLA0el6ShIsAsNb13pe3Rz7wtS8Me83GgbZcNOZo9gVZB8RNwY_urql5uQSGIbPwnrX_LKN5SaXwd9h0z30OpoQXP4h_FRw8G59tyGKOpdw48i9N_QmH5t4VGq6Wq1E1OBGgCW1hmALGomPxafzwf-h7x87QfouwQ0Xjh1P43Krk-IUhsSmx33TAxoZe31hcBdeqUydmOnsDgV-LC8NsiRTST3Uty2BBJY=w1440-h550-ft"
];
export default function Y9wsyOskma() {
  return (
    <div>
      <Dump id="ssnack">
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