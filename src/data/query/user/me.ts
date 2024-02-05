import { useMutation, useQuery } from "@apollo/client";
import { USER_LEAVE } from "./query/Leave.mutation";
import { GET_USER_ME, UseMeData } from "./query/Me.query";
import { POSITION_SAVE, SendPositionDto } from "./query/position.mutation";
import { SEND_ATTEMPT, SendAttemptDto } from "./query/send-attempt.mutation";
import { USER_JOIN } from "./query/Join.mutation";
import { SEND_MESSAGE, SendMessageDto } from "./query/SendMessage.mutation";

export const useMe = () => {
  const me = useQuery<UseMeData>(GET_USER_ME);
  const [leave] = useMutation(USER_LEAVE);
  const [join] = useMutation(USER_JOIN);
  const [send_position] = useMutation<
    { position_save: string },
    SendPositionDto
  >(POSITION_SAVE);

  const [sendAttempt] = useMutation<{ sendAttempt: string }, SendAttemptDto>(
    SEND_ATTEMPT
  );

  const [sendMessage] = useMutation<{ sendMessage: string }, SendMessageDto>(
    SEND_MESSAGE
  );

  const onSendMessage = async (message: string) => {
    await sendMessage({variables: {message}});
  }

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
    join,
    onSendAttemt,
    onSendPosition,
    onSendMessage,
  };
};
