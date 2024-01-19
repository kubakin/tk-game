import { useMutation, useQuery } from "@apollo/client";
import { USER_LEAVE } from "./query/Leave.mutation";
import { GET_USER_ME, UseMeData } from "./query/Me.query";
import { POSITION_SAVE, SendPositionDto } from "./query/position.mutation";
import { SEND_ATTEMPT, SendAttemptDto } from "./query/send-attempt.mutation";

export const useMe = () => {
  const me = useQuery<UseMeData>(GET_USER_ME);
  const [leave] = useMutation(USER_LEAVE);
  const [send_position] = useMutation<
    { position_save: string },
    SendPositionDto
  >(POSITION_SAVE);

  const [sendAttempt] = useMutation<{ sendAttempt: string }, SendAttemptDto>(
    SEND_ATTEMPT
  );

  const onSendAttemt = async (dto: SendAttemptDto) => {
    await sendAttempt({ variables: dto });
  };

  const onSendPosition = (dto: SendPositionDto) => {
    try {
      send_position({ variables: dto });
    } catch (e) {
      console.log(e);
    }
  };
  return {
    me,
    leave,
    onSendAttemt,
    onSendPosition,
  };
};
