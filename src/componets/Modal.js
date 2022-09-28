import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "@firebase/firestore";
import { db, storage } from "../firebase";
import { ref, getDownloadURL, uploadString } from "firebase/storage";

function Modal() {
  const [open, setOpen] = useRecoilState(modalState);
  const [loading, setLoading] = useState(false);
  const filePickerRef = useRef(null);
  const reviewRef = useRef(null);
  const titleRef = useRef(null);
  const usernameRef = useRef(null);
  const starRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const uploadPost = async (e) => {
    if (loading) return;
    setLoading(true);
    const docRef = await addDoc(collection(db, "posts"), {
      review: reviewRef.current.value,
      title: titleRef.current.value,
      username: usernameRef.current.value,
      rating: starRef.current.value,
      timestamp: serverTimestamp(),
    });
    console.log("new doc added with id", docRef.id);
    const imageRef = ref(storage, `posts/${docRef.id}/image`);
    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL,
        });
      }
    );
    setOpen(false);
    setLoading(false);
    setSelectedFile(null);
  };

  return (
    <div>
      {open && (
        <div className="modal-container">
          <div className="modal-center">
            <div className="modal-btn">
              <button onClick={() => setOpen(false)}>X</button>
            </div>
            <div className="show-file">
              {selectedFile ? (
                <img
                  src={selectedFile}
                  alt="selected file"
                  onClick={() => selectedFile(null)}
                  ref={filePickerRef}
                />
              ) : (
                "choose file"
              )}
            </div>
            <div>
              <input
                type="file"
                className="modal-file"
                onChange={addImageToPost}
              />
            </div>
            <div className="modal-text">
              <input type="text" placeholder="Title" ref={titleRef} />
            </div>
            <div className="modal-text">
              <input type="text" placeholder="Your Name" ref={usernameRef} />
            </div>
            <div className="modal-text-review">
              <textarea
                cols="30"
                rows="10"
                placeholder="Write Your Review..........."
                ref={reviewRef}
              ></textarea>
            </div>
            <div className="modal-text">
              <input
                type="number"
                placeholder="Give Rating...... "
                max="5"
                min="0"
                ref={starRef}
              />
            </div>
            <div className="modal-upload">
              <button onClick={uploadPost} disabled={!selectedFile}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
