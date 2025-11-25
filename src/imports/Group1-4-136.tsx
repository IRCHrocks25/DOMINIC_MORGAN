import imgHeroDominic3 from "figma:asset/b08793ef853dcfa0d013adfe13aebb51b1afcba9.png";
import imgHeroDominic4 from "figma:asset/2fdc5363ffd44aba3f03ddbd039d4efedabbd4db.png";

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[906.793px] left-[17px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-17.256px_-21.89px] mask-size-[736.646px_937.264px] pointer-events-none top-[21.89px] w-[708.638px]" data-name="hero dominic 3" style={{ maskImage: `url('${imgHeroDominic3}')` }}>
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-[-126.74%] max-w-none top-0 w-[228.41%]" src={imgHeroDominic4} />
        </div>
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0" />
      </div>
    </div>
  );
}