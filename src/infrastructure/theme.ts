export interface Theme {
    dark: boolean,
    colors: {
      primary: string
      background: string
      card: string
      text: string
      border: string
      notification: string
      COLOR_FIRST: string
      COLOR_SECOND: string
      COLOR_THIRD: string
      COLOR_FOURTH: string
      COLOR_FIFTH: string
      COLOR_OFF_WHITE: string,
      COLOR_DANGER: string
      COLOR_SUCCESS: string
      COLOR_GRAY: string
      COLOR_PRIMARY_GREEN: string
      COLOR_SECONDARY_GREEN: string
      TEXT_GRAY: string
    },
  }
  
  export const LightTheme = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'black',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
      COLOR_FIRST: '#D88C9A',
      COLOR_SECOND: '#F2D0A9',
      COLOR_THIRD: '#F1E3D3',
      COLOR_FOURTH: '#99C1B9',
      COLOR_FIFTH: '#8E7DBE',
      COLOR_OFF_WHITE: "#f7f7f7",
      COLOR_DANGER: '#df4759',
      COLOR_SUCCESS: '#5cb85c',
      COLOR_GRAY: '#d1d1d1',
      COLOR_PRIMARY_GREEN: '#2f783a',
      COLOR_SECONDARY_GREEN: '#cadecd',
      TEXT_GRAY: '#9c9c9c'
    },
};

  export const DarkTheme = {
    dark: true,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'black',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
      COLOR_FIRST: '#000000',
      COLOR_SECOND: '#3E065F',
      COLOR_THIRD: '#700B97',
      COLOR_FOURTH: '#8E05C2',
      COLOR_FIFTH: '#8E7DBE',
      COLOR_OFF_WHITE: "gray",
      COLOR_DANGER: '#df4759',
      COLOR_SUCCESS: '#5cb85c',
      COLOR_GRAY: '#d1d1d1',
      COLOR_PRIMARY_GREEN: '#2f783a',
      COLOR_SECONDARY_GREEN: '#cadecd',
      TEXT_GRAY: '#9c9c9c'
    },
  };