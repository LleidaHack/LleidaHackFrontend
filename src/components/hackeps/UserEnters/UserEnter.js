import React from "react";
import "src/components/hackeps/UserEnters/UserEnter.css"; // Importa el archivo de estilos CSS para el footer
import hackLogo from "src/icons/hackIcon.png";
import { Link } from "react-router-dom";
import Button from "src/components/buttons/Button";

const LinkAccounts = () => {
  return (
    <div className="The-Boxy bg-secondaryHackeps">
      <section className="Superior-Part">
        <div className="ImgContainer">
          <img className="p-5 image" src={hackLogo} alt="" />
        </div>

        <div className="bg-secondaryHackeps">
          <h1>Benvingut/da!</h1>
        </div>
        <Link to="/login">
          <Button primary className="m-2">
            Inicia sessió
          </Button>
        </Link>
      </section>

      <div className="separator"> o també </div>

      <section className="text-textSecondaryHackeps">
        <p>Crea un compte</p>
        <br />
        <div className="GridContainer">
          <div className="columna">
            <div className="iconContainer">
              <svg
                width="55"
                height="80"
                viewBox="0 0 55 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.3522 41.9716C47.1637 37.784 50.1117 33.0087 50.1117 27.7124C50.1117 15.6102 38.9564 0 27.1075 0C15.2586 0 4.10327 15.6102 4.10327 27.7124C4.10327 34.0646 8.53519 38.8597 12.7975 42.0032C9.06688 43.5833 5.88342 46.2252 3.6433 49.6002C1.40318 52.9753 0.205297 56.9343 0.198739 60.9848V69.1973C0.196131 70.7856 0.807804 72.3133 1.90586 73.4611L5.2473 76.9623C5.2473 77.011 5.23288 77.057 5.23288 77.1064C5.23379 77.8736 5.53903 78.609 6.08164 79.1515C6.62425 79.6939 7.35993 79.9991 8.12729 80H46.0877C46.855 79.9991 47.5907 79.6939 48.1333 79.1515C48.6759 78.609 48.9812 77.8736 48.9821 77.1064C48.9821 77.057 48.9697 77.011 48.9677 76.9623L52.3091 73.4611C53.4073 72.3134 54.0193 70.7856 54.0169 69.1973V60.9848C54.0107 56.9216 52.8059 52.9505 50.5531 49.5686C48.3004 46.1866 45.0999 43.544 41.3522 41.9716ZM33.2657 45.0807L33.1366 45.1418C33.0552 45.1806 32.9821 45.235 32.9217 45.3019C32.8612 45.3688 32.8145 45.447 32.7843 45.532C32.7541 45.617 32.7409 45.7071 32.7455 45.7971C32.7501 45.8872 32.7724 45.9755 32.8111 46.0569C32.8499 46.1384 32.9043 46.2114 32.9712 46.2719C33.0382 46.3323 33.1164 46.379 33.2014 46.4092C33.2864 46.4394 33.3765 46.4526 33.4666 46.448C33.5567 46.4434 33.645 46.4211 33.7265 46.3823L33.8542 46.3212C35.9743 45.3265 38.0232 44.1867 39.9864 42.9101C42.5866 43.8606 44.9519 45.359 46.922 47.3036C46.6524 47.2169 46.3715 47.1706 46.0884 47.1663H29.1731C31.0189 45.6732 33.6839 43.1085 33.8659 40.6515C36.6841 39.3567 39.0722 37.2818 40.7475 34.6723C42.4228 32.0629 43.3152 29.0282 43.3189 25.9275V25.5019C45.1459 27.3384 46.7541 29.3801 48.1113 31.5863C46.4557 36.6547 41.4882 41.1808 33.2657 45.0807ZM18.2491 30.7097C19.8863 31.2582 21.66 31.243 23.2874 30.6664L25.6579 29.8255C26.5975 29.4925 27.623 29.4925 28.5626 29.8255L30.9303 30.6644C32.5578 31.2409 34.3314 31.2562 35.9686 30.7076L41.6654 28.7998C41.0013 32.1718 39.1866 35.2086 36.5314 37.3914C33.8762 39.5742 30.5451 40.7675 27.1075 40.7675C23.6698 40.7675 20.3388 39.5742 17.6836 37.3914C15.0284 35.2086 13.2137 32.1718 12.5496 28.7998L18.2491 30.7097ZM12.8243 23.7136C17.1999 20.0065 22.2711 17.8489 27.1109 17.8489C31.9507 17.8489 37.0247 20.0093 41.401 23.715L35.6589 22.0674C34.2146 21.6541 32.6812 21.6706 31.2462 22.1147L28.3964 22.9969C27.5591 23.2564 26.6628 23.2564 25.8254 22.9969L22.9715 22.1175C21.5367 21.6733 20.0035 21.6569 18.5595 22.0701L12.8243 23.7136ZM27.1075 42.1336C28.8949 42.1339 30.6699 41.8372 32.36 41.2556C31.6582 43.3892 28.691 45.8812 27.1075 47.0167C25.5226 45.8819 22.5554 43.392 21.8543 41.2556C23.5447 41.8369 25.3199 42.1336 27.1075 42.1336ZM27.1075 1.37299C38.2491 1.37299 48.7383 16.2095 48.7383 27.709C48.7341 28.3904 48.6739 29.0702 48.5584 29.7417C43.1349 21.6369 34.8671 16.4759 27.1075 16.4759C19.3479 16.4759 11.078 21.6404 5.65451 29.7472C5.53665 29.0753 5.47714 28.3945 5.47666 27.7124C5.47666 16.2095 15.9659 1.37299 27.1075 1.37299ZM14.1407 42.9409C16.1541 44.2945 18.2926 45.4522 20.5269 46.3981C20.696 46.4659 20.8851 46.4637 21.0526 46.392C21.22 46.3204 21.3522 46.1852 21.4199 46.0161C21.4877 45.847 21.4855 45.658 21.4138 45.4906C21.3422 45.3232 21.2069 45.191 21.0378 45.1233C20.9005 45.0691 9.03304 40.2087 6.11803 31.5616C7.47187 29.3652 9.07468 27.3323 10.8947 25.5033V25.9275C10.8984 29.0285 11.7909 32.0634 13.4665 34.673C15.142 37.2826 17.5305 39.3575 20.3491 40.6522C20.531 43.1091 23.1961 45.6739 25.0419 47.167H8.12729C7.8439 47.171 7.56268 47.2173 7.29296 47.3043C9.24049 45.3812 11.5746 43.8939 14.1407 42.9409ZM2.90019 72.5138C2.04607 71.621 1.57023 70.4327 1.57212 69.1973V60.9848C1.56911 56.9116 2.8657 52.9436 5.2734 49.6576C5.25046 49.7915 5.23692 49.9269 5.23288 50.0626V72.6957C5.23357 73.1179 5.32763 73.5346 5.50832 73.9162C5.689 74.2978 5.95185 74.6347 6.27803 74.9028C6.07038 75.0712 5.88712 75.2675 5.73348 75.4863L2.90019 72.5138ZM46.0877 78.6284H8.12729C7.72389 78.6284 7.33701 78.4682 7.05177 78.183C6.76652 77.8979 6.60627 77.5111 6.60627 77.1078C6.60627 76.7045 6.76652 76.3177 7.05177 76.0326C7.33701 75.7474 7.72389 75.5872 8.12729 75.5872H46.0877C46.4911 75.5872 46.8779 75.7474 47.1632 76.0326C47.4484 76.3177 47.6087 76.7045 47.6087 77.1078C47.6087 77.5111 47.4484 77.8979 47.1632 78.183C46.8779 78.4682 46.4911 78.6284 46.0877 78.6284ZM52.6435 69.1973C52.6455 70.4328 52.1694 71.6213 51.3148 72.5138L48.4815 75.4842C48.3276 75.2656 48.1444 75.0693 47.9369 74.9007C48.263 74.6325 48.5258 74.2956 48.7064 73.914C48.8871 73.5325 48.9812 73.1158 48.9821 72.6936V69.879C48.9821 69.6969 48.9097 69.5223 48.7809 69.3936C48.6522 69.2648 48.4775 69.1925 48.2954 69.1925C48.1133 69.1925 47.9386 69.2648 47.8098 69.3936C47.681 69.5223 47.6087 69.6969 47.6087 69.879V72.6936C47.6082 73.0968 47.4477 73.4832 47.1626 73.7682C46.8775 74.0533 46.4909 74.2137 46.0877 74.2142H8.12729C7.724 74.2139 7.33734 74.0535 7.05217 73.7685C6.767 73.4834 6.60663 73.0968 6.60627 72.6936V50.0606C6.60663 49.6574 6.767 49.2709 7.05217 48.9858C7.33734 48.7007 7.724 48.5404 8.12729 48.54H46.0877C46.4909 48.5405 46.8775 48.7009 47.1626 48.986C47.4477 49.271 47.6082 49.6575 47.6087 50.0606V60.691C47.6087 60.873 47.681 61.0476 47.8098 61.1764C47.9386 61.3051 48.1133 61.3775 48.2954 61.3775C48.4775 61.3775 48.6522 61.3051 48.7809 61.1764C48.9097 61.0476 48.9821 60.873 48.9821 60.691V50.0606C48.9781 49.9248 48.9644 49.7894 48.9409 49.6556C51.3489 52.9414 52.6459 56.9094 52.6435 60.9827V69.1973Z"
                  fill="#000000"
                />
              </svg>
            </div>
            <Link to="/hacker-form">
              <Button primary className="m-2">
                Hacker
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LinkAccounts;
