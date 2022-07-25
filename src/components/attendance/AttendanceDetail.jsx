import React from "react";
import { Button, TableCell, TableRow } from "@aws-amplify/ui-react";
import {MdEdit} from "react-icons/md";

const AttendanceDetail = ({ ride, enableEditMode }) => {
  return (
    <TableRow>
      <TableCell>{new Date(ride.date).toLocaleString("be-NL")}</TableCell>
      <TableCell>{ride.description}</TableCell>
      <TableCell>
        <Button onClick={() => enableEditMode()}>
          <MdEdit />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default AttendanceDetail;
