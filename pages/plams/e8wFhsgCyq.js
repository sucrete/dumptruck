import Dump from "../../components/Dump";
const sourceURLS = [
  "https://lh3.googleusercontent.com/xvtn0zFaddAsabsYmIVXSpW2JBOFT13MR3kp2GmHCl4eJ_CO8tDlgUHFjzQaO7ByaMLeX84uom8uZRZybBQMQ8uL-w1RI1_Xb0e1c1BfF48212_swx7tFzTLMC-noif_DWoftsvhx15Gjr4qhXE-MFgI09guckfcOLRX3TOWffXqHC0DpNW_Ej_JA5n5-gndBtN7ot_N1_lXPV2Sz8ydKv1_yIYH1v-VD5AvqzhPHJu7Q3OPtf5HeAiMwSnXV-yE927KlJqzQs_ZRhSgDGOfvr_-43PgrKOBjcvNwxkbm_qzw_7-hWpqCr_Y0G1xRAa29i4C3iRHBYqKjYi9JrI2fneGtAbjI1EK0jYq0Q0eRFPvDEun3lzYkD8Mnc8TAAeZsaW2kIjeS8lVXajloPXdkiu1EsZCsevFtnv7qD7yqNW5qFe6_Dv7GZAu5mgvtcugLpx5Mgmnm8XsqnPmdKAXLt5bGDiZiaU2c5zyGdqr5T98OV-rlWeuqvRFPf9m4nSaofVqc9ybgvGyXGQ6IvoWQeoLGK-KvXDThASvpID9mkQE7leXx-0JTCmoKIfSPNvKLjvHBRfG_MILSvh4zfHkUQ9JX17ygww1vnBKjmE4GvoIIzxsZLHK3R6KjE3jjBKmcE7Iy6_HOxYlHNvo_Ii1-615TDMRm-56tFH1wWr36XkZ9enpws8=w1440-h550-ft",
  "https://lh3.googleusercontent.com/1kAMc3BZYYHzBPXMu5Jc0y0WJ5qNAEr83Y3N63nI8o7MxHKeNKybgzVkS_WaS10VUrIgkAAEbjtzASCrP4fX7tK2YSjlo0fNwWmd4Lntv3BttK4PWFvUWBUmC6VKbsThYt6nEl1mvYwWRcvqf75TRWYRrmY53FOEjHl2IYQdysuOSwUWYd9t0e08ll7hp4CCOFIk90oBFo8-JVf1sO8pG5aUDMzLsKC-txBs6csYGvcvGyfLAD6Z8BGKe0kPAUF-j6nd2ctRXnBvkKa6JgZETOu8eamO53qBn4eB8J30_g_11vnZa7gegcdyX9NSfcza6ThY-kRfvu_6tybc5AzfqmKW2Q9lmVozcvMKGWIn6WGlNoVZX4eW0bV2OE5YnDdaRN1RDck2c4pQZAtQ4adMiQ9yficZEEAgSNI6RFuhUIIgLCvoNpArt1INBox_EO1lYJBqk_yfiUVi5e5OzprFnC-BkS5nRAFYM_G7G1OZpYbCXHZEKo450wq-Kw8TWhqw2EzBnSzO58xGucyItygPUzq_wtL3WR7UrAQ2h9RWZ4b0_H_GnXxZ00BBf02v2MzjhV5-Ly5W7yc-sVyOB6z0x-xIQP402wC_Vkcifv8EJUQfSP7oFOXuo8dpYHyu0MxJXTxV0BWZAj8IkPQ_91-9a-7gbjxsUgwUg4rJSUoYGtu3gvVnljE=w1440-h550-ft"
];
export default function e8wFhsgCyq() {
  return (
    <div>
      <Dump id="plams">
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
