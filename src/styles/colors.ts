export const ColorAlpha = (color: string, alpha: number): string =>
  `${color}${Math.floor(alpha * 255).toString(16)}`;

const HubxBlack = '#000000';
const ColorDark = '#141829';
const White = '#FFFFFF';
const GrayishGreen = '#597165';
const PaywallBackground = '#101E17';
const PrimaryGreen = '#28AF6E';
const Gray = '#979798';
const LightGreen = '#2CCC80';
const SecondaryGray = '#BDBDBD';
const SecondaryDark = '#24201A';
const Red = '#E82C13';
const MainText = '#13231B';
const ThirdGray = '#ABABAB';
const DividerDark = '#3C3C43';
const SecondaryGreen = '#29BB89';

export default {
  Dark: ColorDark,
  Black: HubxBlack,
  Black20: ColorAlpha(HubxBlack, 0.2),
  Black24: ColorAlpha(HubxBlack, 0.24),
  Black40: ColorAlpha(HubxBlack, 0.4),
  Black70: ColorAlpha(HubxBlack, 0.7),
  White: '#FFFFFF',
  White08: ColorAlpha(White, 0.08),
  White1: ColorAlpha(White, 0.01),
  White05: ColorAlpha(White, 0.05),
  White10: ColorAlpha(White, 0.1),
  White15: ColorAlpha(White, 0.15),
  White20: ColorAlpha(White, 0.2),
  White30: ColorAlpha(White, 0.3),
  White40: ColorAlpha(White, 0.4),
  White50: ColorAlpha(White, 0.5),
  White52: ColorAlpha(White, 0.52),
  White60: ColorAlpha(White, 0.6),
  White70: ColorAlpha(White, 0.7),
  White80: ColorAlpha(White, 0.8),
  White88: ColorAlpha(White, 0.88),

  Dark5: ColorAlpha(ColorDark, 0.05),
  Dark10: ColorAlpha(ColorDark, 0.1),
  Dark20: ColorAlpha(ColorDark, 0.2),
  Dark30: ColorAlpha(ColorDark, 0.3),
  Dark40: ColorAlpha(ColorDark, 0.4),
  Dark50: ColorAlpha(ColorDark, 0.5),
  Dark60: ColorAlpha(ColorDark, 0.6),
  Dark70: ColorAlpha(ColorDark, 0.7),
  Dark80: ColorAlpha(ColorDark, 0.8),
  Dark90: ColorAlpha(ColorDark, 0.9),

  DividerDark: DividerDark,
  DividerDark10: ColorAlpha(DividerDark, 0.1),

  SecondaryGreen: SecondaryGreen,
  SecondaryGreen10: ColorAlpha(SecondaryGreen, 0.1),
  SecondaryGreen18: ColorAlpha(SecondaryGreen, 0.18),

  Red: Red,
  Red90: ColorAlpha(Red, 0.9),

  PrimaryGreen: PrimaryGreen,
  PrimaryGreen00: ColorAlpha(PrimaryGreen, 0),
  PrimaryGreen16: ColorAlpha(PrimaryGreen, 0.16),

  GrayishGreen: GrayishGreen,
  GrayishGreen70: ColorAlpha(GrayishGreen, 0.7),

  MainText: MainText,
  MainText70: ColorAlpha(MainText, 0.7),

  Gray: Gray,
  ThirdGray: ThirdGray,
  SecondaryGray: SecondaryGray,
  LightGreen: LightGreen,
  PaywallBackground: PaywallBackground,
  SecondaryDark: SecondaryDark,
};

export const gradients = {
  base: ['#00D1FF', '#B56ABD', '#E6999F'],
  variant: ['#F34870', '#F38650'],
};
