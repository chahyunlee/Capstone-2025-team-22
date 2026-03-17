import dayjs from "dayjs";

export const formatDateAndTime = (iso: string) => {
  return dayjs(iso).format("YYYY.MM.DD HH:mm");
};
