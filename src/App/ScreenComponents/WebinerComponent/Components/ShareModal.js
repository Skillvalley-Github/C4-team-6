import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

const ShareModal = (props) => {
  return (
    <div>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        {props.overlay}
        <ModalContent mx={5} mt="30vh" backgroundColor={"blackAlpha.900"}>
          <ModalHeader>Share Session Link</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="flex justify-cennter">
            <WhatsappShareButton url={props.meetLink}>
              <RiWhatsappFill size={40} className="f-color-3" />
            </WhatsappShareButton>
            <LinkedinShareButton url={props.meetLink}>
              <FaLinkedinIn size={40} className="f-color-3" />
            </LinkedinShareButton>
            <TwitterShareButton url={props.meetLink}></TwitterShareButton>
            <EmailShareButton url={props.meetLink}>
              <MdEmail size={40} className="f-color-3" />
            </EmailShareButton>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ShareModal;
