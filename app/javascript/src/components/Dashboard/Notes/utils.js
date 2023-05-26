import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const formatCreationDate = date => ({
  relativeDate: dayjs(date).fromNow(),
  fullDate: dayjs(date).format("dddd, h:mmA"),
});
