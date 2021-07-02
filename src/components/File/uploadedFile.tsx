import React, { HTMLAttributes, memo } from "react";

import * as UploadedFileStyles from "@/styles/file/uploadedFile.module.scss";

interface UploadedFileProps extends HTMLAttributes<HTMLDivElement> {
  errors?: string;
  name: string;
  size: string;
  id: string;
  onRemove: (filterId: string) => void;
}

const UploadedFile = memo(
  ({
    className,
    errors = "",
    name,
    id,
    size,
    onRemove,
  }: UploadedFileProps): React.ReactElement => {
    return (
      <div
        className={`${UploadedFileStyles.container} ${
          className ? className : ""
        }`}
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
          <div className={UploadedFileStyles.error} title={errors}>
            File not supported: {errors}
          </div>
        )}
        <div
          className={UploadedFileStyles.remove}
          title={"Remove file"}
          onClick={() => onRemove(id)}
        >
          &times;
        </div>
      </div>
    );
  }
);

export default UploadedFile;
