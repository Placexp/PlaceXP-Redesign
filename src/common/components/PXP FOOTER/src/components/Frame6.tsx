import IonLogoLinkedin from "assets/IonLogoLinkedin";
import Vector from "assets/Vector";
import Vector1 from "assets/Vector1";
import Vector2 from "assets/Vector2";
import Vector3 from "assets/Vector3";

export default function Frame6(props: Frame6Props) {
  return (
    <div
      className={`relative text-center w-[1440px] h-[273px] bg-[rgba(226,221,255,1)] overflow-clip font-['Poppins']`}
      style={props.style}
    >
      <IonLogoLinkedin />
      <Vector />
      <Vector1 />
      <Vector2 />
      <Vector3 />
      <div
        className="h-0 absolute bg-black w-[1270px] left-[95px] top-[201px] outline outline-2 outline-[rgba(0,0,0,1)]"
       />
      <div
        className="absolute leading-none inline-block text-black left-[1069px] top-[221px]"
      >
        <p
          className="text-xl font-medium capitalize inline m-0 tracking-[2.4px] leading-[1.33]"
        >
          {"designed by "}
        </p>
        <p
          className="text-xl font-extrabold capitalize inline m-0 tracking-[2.4px] leading-[1.33]"
        >
          PlaceXP
        </p>
      </div>
      <p
        className="absolute text-xl font-medium text-black capitalize inline m-0 left-[126px] top-[221px] tracking-[2.4px] leading-[1.33]"
      >
        Copyright © 2023-24. All Rights Reserved.
      </p>
      <p
        className="absolute text-5xl font-bold capitalize inline m-0 h-[51px] w-[579px] left-[430px] top-[22px] tracking-[2.4px] leading-[1.33] text-[rgba(36,25,102,1)]"
      >
        Connect with us
      </p>
    </div>
  );
}

Frame6.defaultProps = {
  style: {},
};

interface Frame6Props {
  style: Object;
}