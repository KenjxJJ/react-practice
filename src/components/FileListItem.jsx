import React from "react";
import { PropTypes } from "prop-types";
import FileIcon from "./FileIcon";
import CommitMessage from "./CommitMessage/CommitMessage";
import Time from "./Time/Time";

function getFileName(file) {
  return [
    <FileIcon file={file} key={0} />,
    <td className="file-name" key={1}>
      {file.name}
    </td>,
  ];
}

const FileListItem = ({ file }) => (
  <tr className="filelist-item">
    {getFileName(file)}
    <CommitMessage commit={file.latestCommit} />
    <td className="age">
      <Time time={file.updated_at} />
    </td>
  </tr>
);

FileListItem.propTypes = {
  file: PropTypes.object.isRequired,
};

export default FileListItem;
