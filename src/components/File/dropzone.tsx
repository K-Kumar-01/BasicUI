import React, { HTMLAttributes, DragEvent, useState, useEffect } from "react";
import UploadedFile from "./uploadedFile";
import { Button } from "@/components/common";

import * as DropzoneStyles from "@/styles/file/dropzone.module.scss";

interface DropzoneProps extends HTMLAttributes<HTMLDivElement> {
  multiple?: boolean;
  maxLength?: number;
  fileTypes?: string[];
  maxSize?: number;
  sizeUnit?: "Bytes" | "KB" | "MB" | "GB" | "TB";
  showUploadButton?: boolean;
  handleUpload?: any;
}

const Dropzone: React.FC<DropzoneProps> = ({
  className = "",
  multiple = false,
  maxLength = 10,
  fileTypes = ["file/*"],
  maxSize = 1024,
  sizeUnit = "KB",
  showUploadButton = true,
  handleUpload,
}): React.ReactElement => {
  const [selectedFiles, setSelectedFiles] = useState<
    Array<{ file: File; errors: string; id: string }>
  >([]);

  const [unsupportedFile, setUnsupportedFile] = useState<boolean>(false);

  useEffect(() => {
    let isUnsupportedFilePresent = false;
    for (const file of selectedFiles) {
      if (file.errors) {
        isUnsupportedFilePresent = true;
        break;
      }
    }
    setUnsupportedFile(isUnsupportedFilePresent);
  }, [selectedFiles]);

  const dragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const dragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const dragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const fileDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    validateFiles(droppedFiles);
  };

  const checkFileLength = (files: FileList): boolean => {
    if (!multiple) {
      maxLength = 1;
    }
    if (files.length > maxLength) {
      alert("Maximum Length exceeded");
      return false;
    }
    return true;
  };

  const generateFileTypeRecord = (
    fileTypes: string[]
  ): Record<string, string[]> => {
    const fileTypeRecord: Record<string, string[]> = {};
    for (const fileType of fileTypes) {
      const [type, extension] = fileType.split("/");
      if (fileTypeRecord[type]) {
        if (extension.trim() === "*") {
          fileTypeRecord[type] = [extension, ...fileTypeRecord[type]];
        } else {
          fileTypeRecord[type] = [...fileTypeRecord[type], extension];
        }
      } else {
        fileTypeRecord[type] = [extension];
      }
    }
    return fileTypeRecord;
  };

  const checkFileType = (
    file: File,
    fileTypeRecord: Record<string, string[]>
  ): boolean => {
    const [type, extension] = file.type.split("/");
    let valid = true;
    if (
      !(
        "file" in fileTypeRecord ||
        fileTypeRecord[type].includes("*") ||
        fileTypeRecord[type].includes(extension)
      )
    ) {
      valid = false;
    }
    return valid;
  };

  const convertSize = (size: number, to: string): string => {
    const availableSizes = ["BYTES", "KB", "MB", "GB", "TB"];
    let index = availableSizes.lastIndexOf(sizeUnit.toUpperCase());
    if (index === -1) {
      console.info("Size Unit given wrong. Defaulting back to KB");
      index = 1;
    }
    const convertedSize =
      (size / Math.pow(1024, index)).toFixed(3).toString() + ` ${to}`;
    return convertedSize;
  };

  const checkFileSize = (file: File) => {
    const availableSizes = ["BYTES", "KB", "MB", "GB", "TB"];
    let index = availableSizes.lastIndexOf(sizeUnit.toUpperCase());
    if (index === -1) {
      console.info("Size Unit given wrong. Defaulting back to KB");
      index = 1;
    }
    const allowedSize = maxSize * Math.pow(1024, index);
    return file.size <= allowedSize;
  };

  const generateId = (): string =>
    Math.floor(Math.random() * Math.pow(10, 9)).toString() +
    new Date().toString();

  const validateFiles = (files: FileList) => {
    checkFileLength(files);
    const fileTypeRecord = generateFileTypeRecord(fileTypes);
    let filesValidated: Array<{ file: File; errors: string; id: string }> = [];
    for (const file of files) {
      let errors = "";
      const sizeResult = checkFileSize(file);
      !sizeResult && (errors += "Size limit exceed");
      const typeResult = checkFileType(file, fileTypeRecord);
      !typeResult && (errors += ", Invalid Type");
      filesValidated = [...filesValidated, { file, errors, id: generateId() }];
    }
    setSelectedFiles([...selectedFiles, ...filesValidated]);
  };

  const removeFile = (filterId: string) => {
    const allSelectedFiles = [...selectedFiles].filter(
      ({ id }) => id != filterId
    );
    setSelectedFiles(allSelectedFiles);
  };

  return (
    <div className={`${DropzoneStyles.dropzone} ${className}`}>
      <div
        className={DropzoneStyles.dropContainer}
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          height={30}
          width={40}
        >
          <title>Drop here</title>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                className="cls-1"
                d="M33.71,52.24,52.49,33.52a2.67,2.67,0,0,0-3.76-3.78L34.61,43.81V2.67a2.67,2.67,0,1,0-5.33,0V44L15.17,29.75a2.67,2.67,0,0,0-3.79,3.76L29.93,52.23a2.67,2.67,0,0,0,3.78,0Z"
              />
              <path
                className="cls-1"
                d="M56,64H8a8,8,0,0,1-8-8V37.33a2.67,2.67,0,0,1,5.33,0V56A2.67,2.67,0,0,0,8,58.67H56A2.67,2.67,0,0,0,58.67,56V37.33a2.67,2.67,0,0,1,5.33,0V56A8,8,0,0,1,56,64Z"
              />
            </g>
          </g>
        </svg>
        Drag &amp; Drop files here or click to upload
      </div>
      <div className={DropzoneStyles.fileUploadContainer}>
        {selectedFiles.map(({ file, errors, id }) => (
          <UploadedFile
            key={id}
            name={file.name}
            id={id}
            onRemove={removeFile}
            size={convertSize(file.size, sizeUnit)}
            errors={errors}
          />
        ))}
      </div>
      {showUploadButton && selectedFiles.length > 0 && (
        <React.Fragment>
          {unsupportedFile && (
            <p style={{ color: "#d9534f" }}>
              Please remove all unsupported Files.
            </p>
          )}
          <Button
            text="Upload"
            variant="fill"
            type="primary"
            disabled={unsupportedFile}
            title={"Upload Images"}
            style={{ display: "block", margin: "0 auto" }}
            onClick={e => {
              handleUpload
                ? handleUpload(e)
                : console.log("I will handle upload");
            }}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default Dropzone;
