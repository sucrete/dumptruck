import Dump from "../../components/Dump";
const sourceURLS = [
  "https://lh3.googleusercontent.com/yUF7j3iuC0cXDMgsIUSh9tVqHA9xwXNJ7_onmiptad4roDRFKL8rxS-FB2mCUuBLTk-EMEGZBe7WkAyxfAf5blYVXF4Ea5bL8WoLDHjPmaBBv2xn5LBrwmsZ46KUIhFDEraucRqgimT3Q9e2II6h-vpuOoQhdrgSQiKA0Zg1sasljyIPkVo6uPgAfQfh6bj0eO47xlESc-eIfXnh58kudokQzI-tXc7O-eDkiNZ2Q4K4Niu3wisZwxyqGYfZeSUxq7gZyB41NOTkLeDqWzkZ_JmnppaEF0mI6JhTQdEB9wnviiiM5-C2bIAKcUfUZvepy2OhznMKQT4ZtiQjGJXJw603WXEImXRz09vc-OU6h0yjJJUPdsSC4IWkmV-s8wLk_o9hxsITOy27Y32r7aevbminsubjfLEGY72aVBa1Kq2tb7Xn44Gj-Qjm817aOsqc1TRWGJqUpcG5-t4W0F40Wm6UwkPbx4-ZFAkH-UzjbzFiUUtwXJiPlYxklCdsTOUu-jUKbj7gIY4oA3GiVws7rNa7Gr5pnaBaeCjT72HEEixuGtN2J9oxlL_l3uLSkLbEU7lw6yfQ9aAkqiEZWHMFahD02qpUoca9sB5sHB1fjSSDjsx7c_jZyZI9XH9s3IYrdEaPxkqa4Admn-c-ASmCl5aE43zt8uD3BwRuU4PTuEZr-qJm8tE=w1440-h479-ft"
];
export default function a0LsfsukYn() {
  return (
    <div>
      <Dump id="5ilverkitten">
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
