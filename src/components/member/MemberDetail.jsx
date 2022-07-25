import React from "react";
import {
  Button,
  ButtonGroup,
  TableCell,
  TableRow,
} from "@aws-amplify/ui-react";
import { MdDelete, MdEdit } from "react-icons/md";

const MemberDetail = ({ member, removeMember, enableEditMode }) => {
  return (
    <TableRow>
      <TableCell>{member.first_name}</TableCell>
      <TableCell>{member.last_name}</TableCell>
      <TableCell>
        <ButtonGroup>
          <Button onClick={() => enableEditMode()}>
            <MdEdit />
          </Button>
          <Button onClick={() => removeMember(member)}>
            <MdDelete />
          </Button>
        </ButtonGroup>
      </TableCell>
    </TableRow>
  );
};

export default MemberDetail;
