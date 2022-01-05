import { Picture } from "../SharedComponents/Image";
import styles from "./Bill.module.scss";

export const Bill: React.FC<{ state: { dogType: any; hairLength: any; service: any; services: any[] } }> = ({ state }) => {
  return (
    <div className={styles.Bill}>
      <div className={styles.BillBody}>
        <Picture src="/bimba.svg" style={styles.BimbaLogo} contain />
        <section style={{ color: "#878C93" }}>
          <h3 style={{ textAlign: "center" }}>Bimba</h3>
          <strong style={{ display: "block" }}>Ul. Dobriše Cesarića 6, 10000, Zagreb</strong>
        </section>
        <section className={styles.Services}>
          <div>
            <strong>Velicina: </strong>
            {state.dogType} pas
          </div>
          <div>
            <strong>Dlaka: </strong>
            {state.hairLength}
          </div>
        </section>
        <section className={styles.Services} style={{ marginTop: 0, borderTopStyle: "none" }}>
          {state.services.map((v, index) => {
            return <Service key={index} service={v} />;
          })}
        </section>
        <section style={{ width: "100%" }}>
          <div className={styles.Service}>
            <aside className={styles.ServiceSec1}>
              <strong>Ukupno</strong>
            </aside>
            <aside className={styles.ServiceSec2}>
              <strong>{state.services?.reduce((prev, curr) => prev + curr.price, 0)} HRK</strong>
            </aside>
          </div>
        </section>
      </div>
      <SVG />
    </div>
  );
};

const SVG = () => {
  return (
    <svg width="105%" viewBox="0 0 874 53" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_88_6)">
        <path
          d="M45 40.5C23.3589 36.8079 5 0.999987 5 0.999987H45H93.2936C95.7784 0.377416 98.4911 0.322116 101.5 0.999987H183.16C185.525 0.375774 188.116 0.320299 191 0.999987H269.552C270.646 0.888262 271.793 0.88421 273 0.999987H358.424C360.145 0.709495 361.995 0.692187 364 0.999987H450.916C451.904 0.921645 452.931 0.919275 454 0.999987H544.838C547.149 0.446414 549.682 0.400082 552.5 0.999987H632C632.691 0.967131 633.363 0.967754 634.017 0.999987H727.127C727.576 0.985123 728.033 0.984929 728.5 0.999987H818.943C819.918 0.921081 820.936 0.918677 822 0.999987H864C864 0.999987 874.568 29.2631 864 40.5C848.574 56.902 844.451 2.71563 822 0.999987H818.943C797.451 2.73854 796.485 41.6159 773 40.5C749.789 39.3971 751.725 1.74908 728.5 0.999987H727.127C704.406 1.75284 704.656 40.1395 681 40.5C657.116 40.864 656.564 2.11225 634.017 0.999987H632C608.789 2.1029 610.57 43.2767 587.5 40.5C567.038 38.0371 572.658 5.29123 552.5 0.999987H544.838C526.315 5.43614 522.007 42.4468 499 40.5C475.7 38.5283 477.317 2.76091 454 0.999987H450.916C428.239 2.79709 425.746 44.5708 401.5 40.5C380.523 36.9781 385.024 4.22824 364 0.999987H358.424C338.77 4.31796 335.997 43.2754 313 40.5C291.204 37.8696 294.853 3.09621 273 0.999987H269.552C248.609 3.13902 247.323 44.7457 224.5 40.5C204.615 36.8008 210.687 5.63917 191 0.999987H183.16C164.799 5.84629 160.068 44.9747 137.5 40.5C117.027 36.4407 121.861 5.58708 101.5 0.999987H93.2936C74.0892 5.8117 68.4983 44.5089 45 40.5Z"
          fill="white"
        />
        <path
          d="M5 0.999987C5 0.999987 23.3589 36.8079 45 40.5C71.5387 45.0276 75.2362 -4.917 101.5 0.999987C121.861 5.58708 117.027 36.4407 137.5 40.5C162.975 45.5511 165.722 -4.95671 191 0.999987C210.687 5.63917 204.615 36.8008 224.5 40.5C248.515 44.9675 248.684 -1.33241 273 0.999987C294.853 3.09621 291.204 37.8696 313 40.5C338.01 43.5184 339.1 -2.82347 364 0.999987C385.024 4.22824 380.523 36.9781 401.5 40.5C426.803 44.7483 428.415 -0.932189 454 0.999987C477.317 2.76091 475.7 38.5283 499 40.5C524.878 42.6898 527.099 -4.40737 552.5 0.999987C572.658 5.29123 567.038 38.0371 587.5 40.5C610.571 43.2767 608.789 2.1029 632 0.999987C656.551 -0.166622 656.424 40.8745 681 40.5C705.123 40.1323 704.387 0.222248 728.5 0.999987C751.725 1.74908 749.789 39.3971 773 40.5C797.551 41.6666 797.492 -0.872834 822 0.999987C844.451 2.71563 848.574 56.902 864 40.5C874.568 29.2631 864 0.999987 864 0.999987H45H5Z"
          stroke="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_88_6"
          x="0.181763"
          y="0.0108032"
          width="873.015"
          height="52.0778"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_88_6" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_88_6" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

const Service: React.FC<{ service: any }> = ({ service }) => {
  return (
    <div className={styles.Service}>
      <aside className={styles.ServiceSec1}>
        <strong>{service?.name}</strong>

        <strong>{minutesToHours(service?.duration)}</strong>
      </aside>
      <aside className={styles.ServiceSec2}>
        <strong>{service?.price}HRK</strong>
      </aside>
    </div>
  );
};

function minutesToHours(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours ? `${hours} h` : ""} ${minutes} min`;
}
