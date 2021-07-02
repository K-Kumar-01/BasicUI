import React, { HTMLAttributes } from "react";

import * as UploadedFileStyles from "@/styles/file/uploadedFile.module.scss";

interface UploadedFileProps extends HTMLAttributes<HTMLDivElement> {
  errors?: string;
  name: string;
  size: string;
}

const UploadedFile: React.FC<UploadedFileProps> = ({
  className,
  errors = "",
  name,
  size,
}): React.ReactElement => {
  return (
    <div
      className={`${UploadedFileStyles.container}${className ? className : ""}`}
    >
      <div className={UploadedFileStyles.fileName} title={name}>
        {name}
      </div>
      <div className={UploadedFileStyles.fileSize} title={size}>
        ({size})
      </div>
      {!errors ? (
        <div className={UploadedFileStyles.success}>Acceptable</div>
      ) : (
        <div className={UploadedFileStyles.error}>
          File not supported: {errors}
        </div>
      )}
    </div>
  );
};

export default UploadedFile;
