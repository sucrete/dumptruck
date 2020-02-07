import Dump from "../../components/Dump";
const sourceURLS = [
  "https://lh3.googleusercontent.com/mqQl4MDlUJ0nqi6okr340vdImiLZseHPSpTE5e6zi2A0iNDU_JgxL7kDqM2484EQ85BJvaZuoSARa1LJBz5YlX1JTdaXcCuuqwJ91VnKwm97NsroT9jiiYhjCKt_6kVhHXK68vE7wRivUR3PSw_pz_CVOifC4QjycxuPrqCciLL3TWQHFiP82TDqHLuR4VGqM9MGKyS3BQvVMPpJEJBxiSIk8wEhKOVTqJ-4apdYJZo8xoHo1seacKg0G2ZBupzkb3NmdTPS2DyCYQLkhuEo_hL0VtwvuzK26Kcd4G9fpTXKSDjvAhYD5IAlnLIrSxY8d_-htwdn0vn7ZZ8UdbB95y1hnNzxMviDQlsvKdBK4YpVhcBzgcu5OSaUrvw_u9wjYprHPpaOInRzijbhD_aKcePbI3TK6qPGRS5KegB0D_CtA2hCklY4YK75j56Jdx-K5S5p6gf7zjiA0HMJSPwdlhKJdP6HlkCqcw4ROqYmp6S_Uuu5r1HQENZUY1VVfAwY-13pNVzg7IWpqvlzMsWX36fzp0esUTAuOCFCLtP8AZ9f3V1JZB9_WomZCkeFPHV7AznaJBIlyKc8U8msmnGDeGSlW_JbrU9myOWeXL3LiVurCUoihbUVDjjVZG6IpR6vEgd7MqwyrJY8D99uMhG3SVFHo4yYiDRIKE3-3xv7hfNiUj1LKzU=w1440-h550-ft",
  "https://lh3.googleusercontent.com/FJWEZzVLgIOV0GVG-ULqxzDFLu-K1DV_-V18fdbVcPuiniVhtPtlEyuoQNXGoKhFS-Ytkz5S6XVC_w5H4E82mRnTyBKrrS9s3r6hRfp8peDNXhKrfJ7Clsy8F62Ft8e6oMGnNiG-iu7p9KYSeKzYVVkk5ltiqck92PCSeMBg3EKKqDf_LKbbzMu-QV-qKy8GawKN9--EBNdFwHdcXAp6k3iCiaU_zDfFePecgEU1vNO7m6Q5PStIVEAtZQd9O3e2Jv6jivv7f4uRLGWqafw_VF8J927PeUUz6HqIM43HCWbs2MdfQylOm5JsVhYUd0J9CYCELo1dBBdhcUgAS2lFyAKGjJ3C6PYnP-49AX6iicltoUSg8jEvSEnKO4yKDcC7bFnPoKa1zSzcUtyOjzKKifiBHGnso3pPydRLTwzLip20VRDn_m2M2DuLfp1HVbB6kU_nDc4GBbpry_ooOalqD2apn48-wwIbvC2zkjOHhkkS3XQJ-cWhtnNThLrAVa9pVOWjZWY_d-nRIzinAI8kzC206KbhItw82OHoyhs4Vxb4_SiZhVWVGMWYCCQyzHRI7lpLHifjB-K888IbTE3pJ44XbN86rQFyKx5mLZUou-25MHDe75jZYTfUvxsA_6pP32pceYv2-U3GDTn91T-vQZqPVpiqWPY31kOzwuXU_yYfq7SXKjA=w1440-h550-ft"
];
export default function UvAS2onAHE() {
  return (
    <div>
      <Dump id="robocide">
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
