// props types
export type TPropsTitle = {
  title: string;
};

export type TPropsSearchInput = {
  inputProps: {
    variant: "contained" | "standart" | "outlined";
    fullWidth: boolean;
    placeholder: string;
  };
};

// inteface others
export interface ITheme {
  seachBox: {
    width: number;
    borderRadius: number;
  };
  colors: {
    primary: string;
  };
}
