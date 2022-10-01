import React from "react";

interface Props {
  width?: number;
  height?: number;
}

export const TwitterIcon = (props: Props) => {
  return /*#__PURE__*/ React.createElement(
    "svg",
    Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      width: props.width ? props.width : 30,
      height: props.height ? props.height : 30,
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M23.643 4.93699C22.808 5.30699 21.911 5.55699 20.968 5.66999C21.941 5.08778 22.669 4.17145 23.016 3.09199C22.1019 3.63497 21.1014 4.01718 20.058 4.22199C19.3564 3.47285 18.4271 2.97631 17.4143 2.80946C16.4016 2.64261 15.3621 2.81478 14.4572 3.29924C13.5524 3.7837 12.8328 4.55335 12.4102 5.48869C11.9875 6.42403 11.8855 7.47274 12.12 8.47199C10.2677 8.37898 8.45564 7.89753 6.80144 7.05889C5.14723 6.22025 3.68785 5.04315 2.51801 3.60399C2.11801 4.29399 1.88801 5.09399 1.88801 5.94599C1.88757 6.71298 2.07644 7.46823 2.43789 8.14472C2.79934 8.82121 3.32217 9.39802 3.96001 9.82399C3.22029 9.80045 2.49688 9.60057 1.85001 9.24099V9.30098C1.84994 10.3767 2.22204 11.4194 2.90319 12.252C3.58434 13.0846 4.53258 13.6559 5.58701 13.869C4.9008 14.0547 4.18135 14.0821 3.48301 13.949C3.78051 14.8746 4.36001 15.684 5.14038 16.2639C5.92075 16.8438 6.86293 17.1652 7.83501 17.183C6.18485 18.4784 4.1469 19.1811 2.04901 19.178C1.67739 19.1781 1.30609 19.1564 0.937012 19.113C3.06649 20.4822 5.54535 21.2088 8.07701 21.206C16.647 21.206 21.332 14.108 21.332 7.95199C21.332 7.75199 21.327 7.54999 21.318 7.34999C22.2293 6.69096 23.0159 5.87488 23.641 4.93999L23.643 4.93699V4.93699Z",
    })
  );
};

export const DiscordIcon = (props: Props) => {
  return /*#__PURE__*/ React.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        width: props.width ? props.width : 30,
        height: props.height ? props.height : 30,
      },
      props
    ),
    /*#__PURE__*/ React.createElement(
      "g",
      Object.assign({
        clipPath: "url(#clip0_74_345)",
      }),
      /*#__PURE__*/ React.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M15.432 3.002C17.147 3.292 18.787 3.802 20.317 4.492C20.3303 4.49732 20.3413 4.50726 20.348 4.52C23.059 8.442 24.397 12.868 23.897 17.962C23.8958 17.9728 23.8923 17.9831 23.8868 17.9925C23.8813 18.0018 23.8739 18.0098 23.865 18.016C22.0466 19.3408 20.0173 20.3486 17.863 20.997C17.8478 21.0015 17.8316 21.0013 17.8166 20.9963C17.8015 20.9913 17.7884 20.9817 17.779 20.969C17.326 20.348 16.914 19.694 16.554 19.007C16.5491 18.9975 16.5463 18.9871 16.5457 18.9765C16.5451 18.9658 16.5468 18.9552 16.5507 18.9452C16.5546 18.9353 16.5606 18.9263 16.5682 18.9188C16.5758 18.9114 16.585 18.9056 16.595 18.902C17.248 18.66 17.87 18.369 18.468 18.025C18.4787 18.0187 18.4876 18.0098 18.494 17.9992C18.5004 17.9885 18.504 17.9765 18.5046 17.9641C18.5052 17.9517 18.5027 17.9394 18.4974 17.9282C18.492 17.917 18.484 17.9073 18.474 17.9C18.347 17.807 18.222 17.71 18.102 17.612C18.091 17.6032 18.0778 17.5978 18.0638 17.5962C18.0498 17.5946 18.0357 17.5969 18.023 17.603C14.142 19.367 9.88899 19.367 5.96199 17.603C5.94934 17.5973 5.93535 17.5952 5.92158 17.597C5.9078 17.5987 5.89479 17.6043 5.88399 17.613C5.76399 17.71 5.63799 17.807 5.51199 17.9C5.50208 17.9075 5.49418 17.9173 5.48901 17.9286C5.48383 17.9399 5.48153 17.9523 5.48233 17.9647C5.48312 17.977 5.48698 17.989 5.49355 17.9996C5.50012 18.0101 5.50921 18.0188 5.51999 18.025C6.12008 18.3662 6.746 18.6597 7.39199 18.903C7.40199 18.9065 7.41111 18.9122 7.41874 18.9195C7.42637 18.9269 7.43233 18.9358 7.43622 18.9457C7.44011 18.9555 7.44183 18.9661 7.44127 18.9767C7.44072 18.9873 7.43789 18.9976 7.43299 19.007C7.07989 19.6944 6.66979 20.3511 6.20699 20.97C6.19723 20.9823 6.18399 20.9913 6.16901 20.996C6.15402 21.0006 6.13798 21.0006 6.12299 20.996C3.97233 20.3458 1.94638 19.3384 0.129992 18.016C0.121364 18.0094 0.114167 18.0011 0.108837 17.9917C0.103508 17.9822 0.100158 17.9718 0.0989923 17.961C-0.320008 13.555 0.532992 9.093 3.64499 4.518C3.65265 4.50595 3.66382 4.49653 3.67699 4.491C5.20799 3.8 6.84799 3.29 8.56199 3C8.57746 2.99755 8.59331 2.99987 8.60743 3.00666C8.62154 3.01345 8.63325 3.02439 8.64099 3.038C8.86934 3.43623 9.07533 3.84686 9.25799 4.268C11.0769 3.99624 12.9261 3.99624 14.745 4.268C14.909 3.888 15.143 3.407 15.353 3.038C15.3608 3.02455 15.3726 3.01386 15.3868 3.00741C15.4009 3.00096 15.4167 2.99907 15.432 3.002ZM5.86298 12.898C5.86298 14.209 6.83798 15.278 8.01998 15.278C9.22098 15.278 10.177 14.21 10.177 12.898C10.196 11.595 9.22998 10.518 8.01998 10.518C6.81898 10.518 5.86298 11.586 5.86298 12.898ZM13.838 12.898C13.838 14.209 14.812 15.278 15.995 15.278C17.206 15.278 18.152 14.21 18.152 12.898C18.171 11.595 17.205 10.518 15.995 10.518C14.793 10.518 13.838 11.586 13.838 12.898Z",
      })
    ),
    /*#__PURE__*/ React.createElement(
      "defs",
      Object.assign({}),
      /*#__PURE__*/ React.createElement(
        "clipPath",
        Object.assign({
          id: "clip0_74_345",
        }),
        /*#__PURE__*/ React.createElement("rect", {
          width: props.width ? props.width : 34,
          height: props.height ? props.height : 34,
          fill: "currentColor",
        })
      )
    )
  );
};

export const MagicIcon = (props: Props) => {
  return /*#__PURE__*/ React.createElement(
    "svg",
    Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 39 24",
      fill: "currentColor",
      "aria-hidden": "true",
      width: props.width ? props.width : 39,
      height: props.height ? props.height : 24,
    }),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      width: props.width ? props.width : 39,
      height: props.height ? props.height : 24,
      d: "M3.27889 0.852964C3.21264 0.866463 3.01178 0.907566 2.83249 0.944291C2.65325 0.981017 2.40933 1.06651 2.29044 1.1343C2.17161 1.2021 1.97846 1.30832 1.86132 1.37034C1.3542 1.63885 0.825463 2.42145 0.658754 3.15037C0.624243 3.30116 0.601116 6.97181 0.600213 12.4388C0.598827 21.1417 0.602983 21.4916 0.712898 21.848C1.02548 22.8621 1.8827 23.5912 2.95047 23.7512C4.47423 23.9795 6.01087 22.828 6.35212 21.2021C6.42343 20.8625 6.43891 19.9009 6.43981 15.7701C6.4409 10.5826 6.43987 10.6049 6.67602 10.6049C6.72589 10.6049 7.96038 11.8055 9.41939 13.2729C11.716 15.5827 12.1237 15.967 12.4565 16.1356C13.4482 16.6379 14.621 16.5899 15.4074 16.0148C15.5724 15.8941 16.5706 14.5982 18.4295 12.0913C19.9562 10.0325 21.2443 8.33284 21.292 8.31435C21.3397 8.29587 21.4234 8.318 21.4779 8.36354C21.5563 8.42903 22.6717 9.73266 24.2292 11.5791C24.3003 11.6634 24.4466 11.8353 24.5543 11.9612C24.6619 12.087 24.75 12.2454 24.75 12.3132C24.75 12.3808 24.3515 12.975 23.8645 13.6335C19.9714 18.8973 19.3685 19.8161 19.1972 20.7458C19.0175 21.7213 19.56 22.7863 20.4738 23.252C21.2958 23.6709 20.789 23.6472 28.9358 23.6472H36.2836L36.6284 23.5067C37.1547 23.292 37.668 22.8789 37.944 22.4476C38.2692 21.9398 38.3865 21.5177 38.3882 20.8503C38.3894 20.3786 38.3667 20.2533 38.2233 19.9425C37.8954 19.2317 37.3041 18.7104 36.5305 18.4505C36.1489 18.3224 36.0801 18.3205 31.9283 18.3246C29.2835 18.3271 27.6551 18.3063 27.5568 18.2685C27.4681 18.2345 27.4 18.1608 27.4 18.099C27.4 18.0388 27.7727 17.55 28.2281 17.0128C28.6836 16.4756 29.1686 15.9016 29.3059 15.7374C29.4433 15.5731 29.7502 15.2062 29.988 14.9219C30.9238 13.8036 31.2105 13.2022 31.2054 12.3682C31.2018 11.7594 31.0552 11.2241 30.754 10.7194C30.6419 10.5315 30.0778 9.82009 29.5003 9.13848C27.5789 6.87057 27.4 6.64833 27.4 6.52964C27.4 6.45729 27.4523 6.39953 27.5355 6.38007C27.6101 6.36262 29.5953 6.34158 31.9472 6.33331L36.2233 6.31823L36.5847 6.17279C37.7146 5.71798 38.4162 4.73399 38.42 3.59855C38.4241 2.40376 37.7002 1.38925 36.5546 0.9843L36.1631 0.845911H28.5443H20.9256L20.5444 0.984969C20.1336 1.13485 19.8295 1.31629 19.5352 1.58705C19.433 1.68105 18.0981 3.48071 16.5688 5.58628C15.0395 7.69184 13.746 9.43849 13.6942 9.46767C13.576 9.53444 13.4671 9.4335 10.988 6.96062C6.1989 2.18353 5.43028 1.43309 5.17124 1.28151C5.01953 1.19273 4.7485 1.06906 4.5689 1.00668C4.24386 0.893764 3.50842 0.806146 3.27889 0.852964Z",
    })
  );
};
