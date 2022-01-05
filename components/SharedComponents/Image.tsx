import Image from "next/image";

export const Picture: React.FC<{ style: any; src: string; svg?: any; contain?: boolean }> = ({ style, src, svg, contain }) => {
  return (
    <div className={style} style={{ position: "relative", width: "100%" }}>
      <Image alt="" src={src} layout="fill" objectFit={`${contain ? "contain" : "cover"}`} objectPosition={"center"} />
      {svg ? svg : <></>}
    </div>
  );
};
