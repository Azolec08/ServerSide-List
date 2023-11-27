export type MyDataState = {
  name: string;
  switch?: boolean;
  inputChange: string;
};

export type MyDataAction =
  | { type: "change" }
  | { type: "updateInput"; value: any };
