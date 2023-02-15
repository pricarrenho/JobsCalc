export type InputCheckBoxProps = {
  value: string;
  name: string;
  option: InputCheckBoxOption[];
  onChange: (value: "pendent" | "started" | "done") => void;
};

export type InputCheckBoxOption = {
  value: string;
  label: string;
};
