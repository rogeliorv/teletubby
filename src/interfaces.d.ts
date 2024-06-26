declare module 'react-scroll';

declare module 'tailwind-datepicker-react' {
  interface ITheme {
    background: string;
    todayBtn: string;
    clearBtn: string;
    icons: string;
    text: string;
    disabledText: string;
    input: string;
    inputIcon: string;
    selected: string;
  }

  interface IIcons {
    prev: () => ReactElement;
    next: () => ReactElement;
  }

  export interface IOptions {
    title?: string;
    autoHide?: boolean;
    todayBtn?: boolean;
    todayBtnText?: string;
    clearBtn?: boolean;
    clearBtnText?: string;
    maxDate?: Date;
    minDate?: Date;
    theme?: ITheme;
    icons?: IIcons;
    datepickerClassNames?: string;
    defaultDate?: Date | null;
    language?: string;
    weekDays?: string[];
    disabledDates?: Date[];
    inputNameProp?: string;
    inputIdProp?: string;
    inputPlaceholderProp?: string;
    inputDateFormatProp?: Intl.DateTimeFormatOptions;
  }

  type DatepickerProps = {
    children?: ReactElement | ReactNode;
    options?: IOptions;
    onChange?: (date: Date) => void;
    show: boolean;
    setShow: (show: boolean) => void;
    classNames?: string;
    selectedDateState?: [Date, (date: Date) => void];
  };

  export default function Datepicker(props: DatepickerProps): ReactElement;
}
