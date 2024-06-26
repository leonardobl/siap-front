import { useState } from "react";
import { FormatFileSize } from "../../../../Utils/FormatFileSize";
import { v4 } from "uuid";
import { toast } from "react-toastify";

export interface IFileCustom extends File {
  sizeFormatted: string;
  uuid: string;
  file: File;
  progress: number;
  status: "IN_PROGRESS" | "FAILED_PROGRESS" | "FINISH_PROGRESS";
}

export const useInputFile = () => {
  const [file, setFile] = useState<IFileCustom | null>(null);

  const uploadFileFake = () => {
    let randomProgress = 1;
    const interval = setInterval(() => {
      randomProgress += Math.floor(Math.random() * 10);
      setFile((prevFile) =>
        prevFile
          ? {
              ...prevFile,
              progress: randomProgress >= 100 ? 100 : randomProgress,
              status: "IN_PROGRESS",
            }
          : prevFile
      );

      if (randomProgress >= 100) {
        clearInterval(interval);
        setFile((prevFile) =>
          prevFile ? { ...prevFile, status: "FINISH_PROGRESS" } : prevFile
        );
      }
    }, 40);
  };

  const dropHandler = (inputFile: File) => {
    if (file) {
      toast.info("Ja existe um arquivo em anexo!");
      return;
    }

    if (inputFile) {
      const formattedSize = FormatFileSize(inputFile.size, 2);
      const fileId = v4();

      const newFile: IFileCustom = {
        ...inputFile,
        file: inputFile,
        sizeFormatted: formattedSize,
        uuid: fileId,
        progress: 0,
        status: "IN_PROGRESS",
      };

      setFile(newFile);
      uploadFileFake();
    }
  };

  function handleClose() {
    setFile(null);
  }

  return {
    dropHandler,
    file,
    handleClose,
  };
};
