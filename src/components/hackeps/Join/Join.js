import React from "react";
import HSkeleton from "src/components/hackeps/LoadingSkeleton/HSkeleton";
import logo from "src/icons/hackLogoWellDone.png";
import "src/components/hackeps/Join/Join.css";

const Join = (props) => {
  function ManageButton() {
    if (!props.event) {
      return <HSkeleton width={"20%"} height={"40px"} inline />;
    }

    if (props.event.accepted) {

      if (props.event.confirmed){
        return (
          <div
            style={{ width: `fit-content`, textDecoration: `none` }}
            className="py-2 px-4 m-auto p-bg-primary text-textPrimaryHackeps"
          >
            Acceptat!
          </div>
        );
      } else {
        return (
          <div
            style={{ width: `fit-content`, textDecoration: `none` }}
            className="py-2 px-4 m-auto p-bg-primary text-textPrimaryHackeps"
          >
            Confirma el correu
          </div>
        );
      }
    }

    if (props.event.registered) {
      return (
        <div
          style={{ width: `fit-content`, textDecoration: `none` }}
          className="py-2 px-4 m-auto text-textPrimaryHackeps p-bg-primary"
        >
          Pendent d'acceptació
        </div>
      );
    } else {
      return (
        <a
          href="/hackeps/inscripcio"
          style={{ width: `fit-content`, textDecoration: `none` }}
          className="py-2 px-4 m-auto text-textPrimaryHackeps p-bg-primary"
        >
          Inscriure's
        </a>
      );
    }
  }

  return (
    <div className="responsive-amongButton">
      <div className="pendentAcceptPC row container-fluid  p-bg-grey text-center m-auto lolospace">
        <div className="col-12 p-bg-grey">
          <div className="row">
            <img className="imgbox" src={logo} alt="" />
          </div>
          <div className="row text-center">
            <ManageButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
