import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { getCurrentUserData } from "../../../../utils/firebaseapi/getCurrentUserData";
import { auth } from "../../../Config/Firebase/firebase-config";

const JobApply = ({allData}) => {
  const [userData, setUserData] = useState([]);
  const [resumeLink, setResumeLink] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [isMessageEmpty, setIsMessageEmpty] = useState(false);
  const form = useRef();

  const referrerEmail = allData.referrerEmail;
  const referrerName = allData.referrerName;

  // console.log('referrerEmail:', props.referrerEmail);
  // console.log('referrerName:', props.referrerName);

  const user = auth.currentUser;


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getCurrentUserData(user);
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, []);

  const emailService = {
    serviceID: "service_c5jn047",
    templateID: "template_tz6k30i",
    publicKey: "KObSacPhHth5fFCFj",
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!resumeLink || !coverLetter) {
      setIsMessageEmpty(true);
      return;
    }

    const emailData = {
      from_name: userData.name,
      from_email: userData.email,
      referrer_name: referrerName,
      to_email: referrerEmail,
      resume_link: resumeLink,
      cover_letter: coverLetter,
    };
    console.log(emailData);

    // emailjs
    //   .send(
    //     emailService.serviceID,
    //     emailService.templateID,
    //     emailData,
    //     emailService.publicKey
    //   )
    //   .then(
    //     function (response) {
    //       console.log("Email sent:", response);
    //     },
    //     function (error) {
    //       console.error("Email send failed:", error);
    //     }
    //   );
  };

  return (
    <>
      <button
        className="btn bg-color-3 border-none font-7"
        onClick={() => {document.getElementById("my_modal_6").showModal()
        console.log(referrerName, referrerEmail)
      }}
      >
        APPLY
      </button>
      <dialog
        id="my_modal_6"
        className="modal modal-bottom sm:modal-middle backdrop-blur-sm"
        onClose={() => setIsMessageEmpty(false)}
      >
        <div className="modal-box bg-color-2">
          <form method="dialog" ref={form} onSubmit={handleFormSubmit}>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <h3 className="font-bold text-lg font-8">Apply for the Opening</h3>
            <input
              type="text"
              name="resume_link"
              id="resumeLink"
              placeholder="enter your resume link(drive link)"
              className="col-span-1 py-4 my-3 bg-color-7 border-hidden placeholder-color-text w-[100%] rounded-xl"
              value={resumeLink}
              onChange={(e) => setResumeLink(e.target.value)}
            />
            <textarea
              rows="10"
              name="cover_letter"
              type="text"
              id="coverLetter"
              placeholder="enter your cover letter"
              className="py-4 mt-0 mb-6 bg-color-7 font-2 border-hidden placeholder-color-text w-[100%] rounded-xl"
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
            />
            {isMessageEmpty && (
              <p className="text-red-500 text-center mb-5">
                Please fill in all the fields.
              </p>
            )}
            <button
              type="submit"
              for="uploadfile"
              className="bg-color-4 w-full f-color-1 p-3 rounded-xl font-6 "
            >
              SUBMIT
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default JobApply;
