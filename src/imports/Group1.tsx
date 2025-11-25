import imgHeroDominic4 from "figma:asset/2fdc5363ffd44aba3f03ddbd039d4efedabbd4db.png";
import { imgHeroDominic3 } from "./svg-6txx9";

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[776.145px] left-[32.46px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-32.679px_-18.737px] mask-size-[1395.16px_811.336px] top-[18.74px] w-[1353.33px]" data-name="hero dominic 3" style={{ maskImage: `url('${imgHeroDominic3}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHeroDominic4} />
      </div>
    </div>
  );
}