export default function Vector3(props: Vector3Props) {
  return (
    <div
      className="absolute left-[63.47%] right-[32.36%] top-[39.19%] bottom-[38.83%]"
    >
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 60 30.075 C 60 13.474 46.56 0 30 0 C 13.44 0 0 13.474 0 30.075 C 0 44.632 10.32 56.752 24 59.549 V 39.098 H 18 V 30.075 H 24 V 22.556 C 24 16.752 28.71 12.03 34.5 12.03 H 42 V 21.053 H 36 C 34.35 21.053 33 22.406 33 24.06 V 30.075 H 42 V 39.098 H 33 V 60 C 48.15 58.496 60 45.684 60 30.075 Z"
          fill="#241966"
         />
      </svg>
    </div>
  );
}

Vector3.defaultProps = {};

interface Vector3Props {}
