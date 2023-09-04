import React from "react";
import { BiSolidShareAlt } from "react-icons/bi";
// import { RWebShare } from "react-web-share";
// import {InlineShareButtons} from 'sharethis-reactjs';
import { useDisclosure, ModalOverlay } from "@chakra-ui/react";
import ShareModal from "./ShareModal";

const EventList = (props) => {

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(0deg)"
    />
  );
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="grid grid-cols-3 mt-20 md:mt-16 py-16 md:py-5">
      <div className="col-span-3 md:col-span-1">
        <figure className="event-banner">
          <img src={props.eventBanner} alt="webinar" />
        </figure>
      </div>
      <div className="col-span-3 md:col-span-2 md:px-8">
        <div className="mt-5 w-[100%] h-[80%] md:h-[70%] lg:h-[80%]">
          <span className="font-8 f-color-7 text-xl lg:text-4xl">
            {props.eventTitle}
          </span>
          <p className="font-1 f-color-5 text-sm lg:text-md">
            {props.shortDescription}
          </p>
          <p className="font-4 f-color-3 mt-4">{props.eventDate}</p>
        </div>
        <div className="w-[100%] h-[10%] grid grid-cols-2">
          <div className="col-span-2 md:col-span-1 grid grid-cols-6 w-[100%]">
            <div className="avatar col-span-1 ">
              <div className=" md:w-16 rounded-full">
                <img src={props.speakerImage} />
              </div>
            </div>
            <div className="col-span-5 mt-2 px-3 md:px-2 lg:px-0">
              <p className="font-1 f-color-5">Speaker</p>
              <span className="font-5 f-color-7 md:text-lg">
                {props.speakerName}
              </span>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 flex justify-between md:justify-center align-middle mt-6 md:mt-0">
            <a
              href={props.meetLink}
              target="_blank"
              className="join-meet h-[100%] w-[75%] md:w-[60%] rounded-full btn md:mx-2"
            >
              <span className="font-8 f-color-4 text-lg lg:text-3xl">JOIN</span>
            </a>
            {/* <RWebShare
              data={{
                text: "Webinar meet",
                url: props.meetLink,
                title: props.eventTitle,
              }}
              onClick={() => console.log("shared successfully!")}
              className="share h-[100%] w-[20%] md:w-[25%] lg:w-[15%]"
            >
              <button className="btn btn-circle">
                <BiSolidShareAlt className="f-color-4 " size={25} />
              </button>
            </RWebShare> */}
            <button
              className="btn btn-circle share h-[100%] w-[20%] md:w-[25%] lg:w-[15%]"
              onClick={() => {
                setOverlay(<OverlayOne />);
                onOpen();
              }}
            >
              <BiSolidShareAlt className="f-color-4 " size={25} />
            </button>
            <ShareModal
              isOpen={isOpen}
              onOpen={onOpen}
              overlay={overlay}
              onClose={onClose}
              meetLink={props.meetLink}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventList;
