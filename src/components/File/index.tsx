import React, { useState } from "react";
import { Button, Modal } from "@/components/common";
import Dropzone from "./dropzone";

const File: React.FC = (): React.ReactElement => {
  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);
  return (
    <div>
      <Button
        text="Upload"
        type="success"
        variant="fill"
        onClick={() => setShow(true)}
      />
      <Modal show={show} closeModal={closeModal}>
        <Dropzone />
      </Modal>
    </div>
  );
};

export default File;
