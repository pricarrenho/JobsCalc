export type CardJobProps = {
  id: string;
  position: number;
  name: string;
  daysLeft: number;
  value: number;
  jobsStatus: "pendent" | "started" | "done";
  deleteButton: () => void;
};
