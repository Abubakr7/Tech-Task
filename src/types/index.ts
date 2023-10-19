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

export type TPropsCard = {
  country: Country;
};

// inteface theme
export interface ITheme {
  seachBox: {
    width: number;
    borderRadius: number;
  };
  colors: {
    primary: string;
  };
}

// counteries contient type

type Continent = {
  name: String;
};

// countries language type
type Language = {
  name: String;
  native: String;
  rtl: Boolean;
};

// counties state type

type State = {
  name: String;
};

// single country type
export type Country = {
  capital: String;
  code: String;
  continent: Continent;
  currency: String;
  emoji: String;
  languages: Language[];
  name: String;
  native: String;
  phone: String;
  states: State[];
};

// response type data

export interface IResponseData {
  data: {
    countries: Country[];
  };
}
