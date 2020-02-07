import Dump from "../../components/Dump";
const sourceURLS = [
  "https://lh3.googleusercontent.com/5ymB5ZPr71yvzqGdOZcq8DewxM9vdWUz4V6i5-ZXOcytGNQhUzRl9Gy0htc9so48D3LT3qaqclrraIbpPoeSzy4pLtcljuXePZyaReCBID9Uff6mHnho_T7jcCGY7bcCn07A-N4l4t0aY6I8VndzwJHZflPJMzrRQrCD4Zoh6AfnlvEJ7r0abvJxq_4iKkEQWFj5tjV6Ro871vN1RJAdatLLRcOYFP1VgjX3yPC6w1sgRN74VuCPxdhHL8lMJdCXzLxHf9DeaOUhhfkJ-Ux3AoSNex0YUF_7wYdeRWWSLPQ7xKTqv4z1L5Ep7vcMGWpFEjOPILH27F862pmTdhwqa-c69ub9416h5YiOwPR3J507QQizCAiU1wp8htMslqkHIePItU23lVk2KLrqWt6PLFX09G5p6H68I5jA55AXMWqrCZYmz3BxnVLph1TY69Z8nJ5gUbjaJXfCrknAMqKcT0LUhz7kdQC8cCM-uaWkcYOjNP4Yk4Usm8uWlIlz79wiMILY1sN5Hja-zKuXrdAE5Roffb8ukUtXnf1fzeGXG63PyTlJgt57IWO_NvcVIG3rjtwxWheJiyO4bBPCKzWPBieDDHGJoDCqBRSwNmC9gTkc3XCO5VKCDwW8mq0IY-tpeMORAwyVnjKly34FQifMf1bRLGmZ3uNZCM-s4ZUhxGSLbWmcw8Y=w1440-h550-ft",
  "https://lh3.googleusercontent.com/BSZUhcXb-v2r0ovbvcd7OalkL8P7yaeUWcv-G5Lp7OebJPe_36-xvITvZymbobKfhIuZpCs5-9K2jsSlmSqcHF58Cw3z-N51c3pIVuy1B69LhqKhMRQcqX7Enzezss28i8B8l3OucL02mxDQ_B6r9xj2IzkS4ng9jgay55kAUgNSAdK7zZYaxuVmGlgvqGjWzA0I9Irihyg1xcqkGnhvqVrjqEoeXw7Inghv2bYGTER3jnku23TRLpGg4Am-dBGwQkJLrPKxCSTy-ru1Bz9Hjv9E2ZX30y1jx8BroipcGMK7UBCCOEnTnGO9YWf5mVlqUNaza16e_PxO0IFKgOQrGvMkMFoL3Gez0jxkfSxjHk_A8EYLBQjqG_pYvBmD7KFDCtFUgUiRFeUdouO5tfGJOS-Gf0yM-vbMBvalhZQGODlQoBVweCKl26C36xCT7Mb7-e-YkOHeYPr_hz3fFzREM8zKn_DB9v2yPmlTq10GOviQ_wg9fD7EKseEgzDTJ0UGD-6INdMP6VmGIGEOODXEcYjZs4mN1NzipQv5F89jKbd2Rdy__dI8Q8CzilTil3PwUgwqs2T-p9WWRskrwGhjBlcbcf2XhYMLBo3Hu7Mmojg1AJSv5OZmFtYhs4BGvoEo6AbrgKtBZIvHZsYq4IdD10daWT0_9hgmffRrLD_Rl0au1mFg5Tg=w1440-h550-ft"
];
export default function GLv5h5HUqp() {
  return (
    <div>
      <Dump id="polymer">
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
