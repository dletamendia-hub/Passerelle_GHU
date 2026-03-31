import clsx from "clsx";
import svgPaths from "./svg-3glqvsirmd";
import imgImageGhu from "figma:asset/cf199735f753725e7364425dd23f294c9f380395.png";
import imgImageBureauMedicalAvecRangements from "figma:asset/a9813713c8ab550d747f09a5a776a6e10bce842c.png";
import imgImageFauteuilRoulantManuelStandard from "figma:asset/bf65b98bf5ca6783fbe8ec333224de7a9fea678c.png";
import imgImageEcransPcDell24Pouces from "figma:asset/cb396bf4dc01e34998b1549ca114f86f3c09b6b9.png";
import imgImageLitMedicaliseElectrique from "figma:asset/de336258b23b03bec6aa3a91a7bfa98ac8abdef9.png";
import imgImageArmoireDeRangementMetallique from "figma:asset/c17e867d8488bd51720bdf3e8ba08a540b04a703.png";
import imgImageChariotDeSoinsMedical from "figma:asset/99ad2995c08cd70a0e3c6a0c849924b641fb720c.png";
import imgImageChaisesDeBureauErgonomiques from "figma:asset/3ae5e7d1f4f2b437f2b91139852b44b91116939b.png";
import imgImageSetupInformatiqueComplet from "figma:asset/db6afdb9b0cfebdaa4375cb9335d4057c2321483.png";
import imgImageArmoirePharmacieVitree from "figma:asset/9ff2ecb62b05b63344bc5372f7a324bfafeb2efa.png";
import imgImageImprimanteLaserCouleurHp from "figma:asset/0757d7022e99aefd1b87144602800a71473e1acb.png";
import imgImageBrancardDeTransport from "figma:asset/3320cfdb3c99fa634f5194a884b8680a0dbdad66.png";
import imgImageTableDeReunionModulable from "figma:asset/55bb44e2f8ef2e4758f32c1dffa5556c9547f59c.png";
import imgImageTabouretMedicalReglable from "figma:asset/9ee10f4ab12a91ce38fc80963cc3d0f41bca0965.png";
import imgImageBureauDirectionEnL from "figma:asset/cf5a33588ad8c408a6d025b1289c06933a6d76de.png";
import imgImageLitHospitalierElectriquePremium from "figma:asset/782bea48334397b8cffa72500c54b521acda8a11.png";
import imgImageClasseurMobileSurRoulettes from "figma:asset/af742c978d63eecec65f2172e093ffa49276c574.png";

function Paragraph1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute h-[48.75px] left-[20px] overflow-clip top-[91.5px] w-[258.75px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.375px] left-0 not-italic text-[#71717a] text-[15px] top-[-1px] tracking-[-0.2344px] w-[257px]">{children}</p>
    </div>
  );
}

function Paragraph({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute h-[48.75px] left-[20px] overflow-clip top-[91.5px] w-[258.75px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.375px] left-0 not-italic text-[#71717a] text-[15px] top-[-1px] tracking-[-0.2344px] w-[241px]">{children}</p>
    </div>
  );
}
type Container12Props = {
  additionalClassNames?: string;
};

function Container12({ children, additionalClassNames = "" }: React.PropsWithChildren<Container12Props>) {
  return (
    <div className={clsx("bg-[rgba(255,255,255,0.7)] h-[82px] relative rounded-[16px] shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#e5e5e4] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[25px] py-px relative size-full">{children}</div>
    </div>
  );
}
type Wrapper6Props = {
  additionalClassNames?: string;
};

function Wrapper6({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper6Props>) {
  return (
    <div className={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">{children}</div>
    </div>
  );
}
type Container11Props = {
  additionalClassNames?: string;
};

function Container11({ children, additionalClassNames = "" }: React.PropsWithChildren<Container11Props>) {
  return (
    <div className={clsx("relative rounded-[14px] shrink-0 size-[40px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">{children}</div>
    </div>
  );
}
type Wrapper5Props = {
  additionalClassNames?: string;
};

function Wrapper5({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper5Props>) {
  return (
    <div className={clsx("h-[16px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">{children}</div>
    </div>
  );
}
type Wrapper4Props = {
  additionalClassNames?: string;
};

function Wrapper4({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper4Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return <Wrapper4 additionalClassNames={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>{children}</Wrapper4>;
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return <Wrapper4 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</Wrapper4>;
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("size-[20px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}
type LinkProps = {
  additionalClassNames?: string;
};

function Link({ children, additionalClassNames = "" }: React.PropsWithChildren<LinkProps>) {
  return (
    <div className={clsx("bg-white justify-self-stretch relative rounded-[16px] shrink-0", additionalClassNames)}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[2px] relative size-full">{children}</div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}
type Icon2Props = {
  additionalClassNames?: string;
};

function Icon2({ children, additionalClassNames = "" }: React.PropsWithChildren<Icon2Props>) {
  return (
    <Wrapper1 additionalClassNames={additionalClassNames}>
      <g id="Icon">{children}</g>
    </Wrapper1>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type TextText4Props = {
  text: string;
};

function TextText4({ text }: TextText4Props) {
  return (
    <Wrapper3 additionalClassNames="h-[20px]">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#0f172a] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">{text}</p>
    </Wrapper3>
  );
}
type LabelTextProps = {
  text: string;
};

function LabelText({ text }: LabelTextProps) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#0f172a] text-[14px] top-[0.5px] tracking-[0.1996px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type Container10Props = {
  additionalClassNames?: string;
};

function Container10({ additionalClassNames = "" }: Container10Props) {
  return (
    <div className="absolute content-stretch flex h-[26px] items-center justify-between left-[20px] top-[20px] w-[258.75px]">
      <TextText text="Mobilier médical" additionalClassNames="w-[118.836px]" />
      <StatusBadgeText text="Disponible" />
    </div>
  );
}
type ParagraphText2Props = {
  text: string;
};

function ParagraphText2({ text }: ParagraphText2Props) {
  return (
    <div className="absolute h-[48.75px] left-[20px] overflow-clip top-[91.5px] w-[258.75px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.375px] left-0 not-italic text-[#71717a] text-[15px] top-[-1px] tracking-[-0.2344px] w-[259px]">{text}</p>
    </div>
  );
}
type TextText3Props = {
  text: string;
};

function TextText3({ text }: TextText3Props) {
  return (
    <Wrapper2 additionalClassNames="h-[32px] w-[175.695px]">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#71717a] text-[12px] top-px tracking-[0.3px] uppercase w-[95px]">{text}</p>
    </Wrapper2>
  );
}
type ParagraphText1Props = {
  text: string;
  additionalClassNames?: string;
};

function ParagraphText1({ text, additionalClassNames = "" }: ParagraphText1Props) {
  return (
    <div className={clsx("absolute h-[48.75px] left-[20px] overflow-clip w-[258.75px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.375px] left-0 not-italic text-[#71717a] text-[15px] top-[-1px] tracking-[-0.2344px] w-[255px]">{text}</p>
    </div>
  );
}
type Container9Props = {
  additionalClassNames?: string;
};

function Container9({ additionalClassNames = "" }: Container9Props) {
  return (
    <div className="absolute content-stretch flex h-[26px] items-center justify-between left-[20px] top-[20px] w-[258.75px]">
      <TextText text="Matériel de stockage" additionalClassNames="w-[152.625px]" />
      <StatusBadgeText text="Disponible" />
    </div>
  );
}

function Container8() {
  return (
    <Wrapper5 additionalClassNames="w-[143.766px]">
      <Icon />
      <TextText1 text="Bâtiment C, 1er étage" />
    </Wrapper5>
  );
}
type Container7Props = {
  additionalClassNames?: string;
};

function Container7({ additionalClassNames = "" }: Container7Props) {
  return (
    <Wrapper5 additionalClassNames="w-[29.492px]">
      <Icon1 />
      <TextText2 text="3" additionalClassNames="w-[7.492px]" />
    </Wrapper5>
  );
}

function Container6() {
  return (
    <Wrapper5 additionalClassNames="w-[157.406px]">
      <Icon />
      <TextText1 text="Bâtiment B, 2ème étage" />
    </Wrapper5>
  );
}
type ParagraphTextProps = {
  text: string;
};

function ParagraphText({ text }: ParagraphTextProps) {
  return (
    <div className="absolute h-[48.75px] left-[20px] overflow-clip top-[91.5px] w-[258.75px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.375px] left-0 not-italic text-[#71717a] text-[15px] top-[-1px] tracking-[-0.2344px] w-[217px]">{text}</p>
    </div>
  );
}
type HeadingTextProps = {
  text: string;
  additionalClassNames?: string;
};

function HeadingText({ text, additionalClassNames = "" }: HeadingTextProps) {
  return (
    <div className={clsx("absolute h-[25.5px] left-[20px] overflow-clip w-[258.75px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[25.5px] left-0 not-italic text-[#0f172a] text-[17px] top-[0.5px] tracking-[-0.4316px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type StatusBadgeText1Props = {
  text: string;
};

function StatusBadgeText1({ text }: StatusBadgeText1Props) {
  return (
    <div className="bg-[#fef3c7] h-[26px] relative rounded-[8px] shrink-0 w-[68.477px]">
      <div aria-hidden="true" className="absolute border border-[#fde68a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[11px] py-[5px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#92400e] text-[12px] whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}
type Container5Props = {
  additionalClassNames?: string;
};

function Container5({ additionalClassNames = "" }: Container5Props) {
  return (
    <Wrapper5 additionalClassNames="w-[27.672px]">
      <Icon1 />
      <TextText2 text="1" additionalClassNames="w-[5.672px]" />
    </Wrapper5>
  );
}

function Container4() {
  return (
    <Wrapper5 additionalClassNames="w-[116.039px]">
      <Icon />
      <TextText1 text="Bâtiment A, RDC" />
    </Wrapper5>
  );
}
type Container3Props = {
  additionalClassNames?: string;
};

function Container3({ additionalClassNames = "" }: Container3Props) {
  return (
    <div className="absolute content-stretch flex h-[26px] items-center justify-between left-[20px] top-[20px] w-[258.75px]">
      <TextText text="Équipement médical" additionalClassNames="w-[141.008px]" />
      <StatusBadgeText text="Disponible" />
    </div>
  );
}
type Container2Props = {
  additionalClassNames?: string;
};

function Container2({ additionalClassNames = "" }: Container2Props) {
  return (
    <Wrapper5 additionalClassNames="w-[29.172px]">
      <Icon1 />
      <TextText2 text="2" additionalClassNames="w-[7.172px]" />
    </Wrapper5>
  );
}
type TextText2Props = {
  text: string;
  additionalClassNames?: string;
};

function TextText2({ text, additionalClassNames = "" }: TextText2Props) {
  return (
    <Wrapper4 additionalClassNames={clsx("h-[16px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#0f172a] text-[12px] top-px whitespace-nowrap">{text}</p>
    </Wrapper4>
  );
}

function Icon1() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[8.34%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 14.6639">
              <path d={svgPaths.p32640e00} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[8.33%] left-1/2 right-1/2 top-1/2" data-name="Vector">
          <div className="absolute inset-[-10%_-0.67px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 8">
              <path d="M0.666667 7.33333V0.666667" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[13.71%] right-[13.71%] top-[29.17%]" data-name="Vector">
          <div className="absolute inset-[-20%_-5.74%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9469 4.66678">
              <path d={svgPaths.p290cb600} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[17.79%_31.25%_60.75%_31.25%]" data-name="Vector">
          <div className="absolute inset-[-19.42%_-11.11%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.33356 4.76689">
              <path d={svgPaths.p683da00} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <Wrapper5 additionalClassNames="w-[158.453px]">
      <Icon />
      <TextText1 text="Bâtiment C, 3ème étage" />
    </Wrapper5>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="h-[16px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#71717a] text-[12px] top-px whitespace-nowrap">{text}</p>
    </div>
  );
}
type TextText1Props = {
  text: string;
};

function TextText1({ text }: TextText1Props) {
  return (
    <Wrapper3 additionalClassNames="h-[16px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#71717a] text-[12px] top-px whitespace-nowrap">{text}</p>
    </Wrapper3>
  );
}

function Icon() {
  return (
    <Wrapper>
      <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </Wrapper>
  );
}
type ContainerProps = {
  additionalClassNames?: string;
};

function Container({ additionalClassNames = "" }: ContainerProps) {
  return (
    <div className="absolute content-stretch flex h-[26px] items-center justify-between left-[20px] top-[20px] w-[258.75px]">
      <TextText text="Mobilier de bureau" additionalClassNames="w-[134.305px]" />
      <StatusBadgeText text="Disponible" />
    </div>
  );
}
type StatusBadgeTextProps = {
  text: string;
};

function StatusBadgeText({ text }: StatusBadgeTextProps) {
  return (
    <div className="bg-[#dcfce7] h-[26px] relative rounded-[8px] shrink-0 w-[83.055px]">
      <div aria-hidden="true" className="absolute border border-[#bbf7d0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[11px] py-[5px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#166534] text-[12px] whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}
type TextTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextText({ text, additionalClassNames = "" }: TextTextProps) {
  return (
    <Wrapper4 additionalClassNames={clsx("h-[16px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#71717a] text-[12px] top-px tracking-[0.3px] uppercase whitespace-nowrap">{text}</p>
    </Wrapper4>
  );
}
type Icon4Vector1Props = {
  additionalClassNames?: string;
};

function Icon4Vector1({ additionalClassNames = "" }: Icon4Vector1Props) {
  return (
    <div className={clsx("absolute left-[33.33%] right-[12.5%]", additionalClassNames)}>
      <div className="absolute inset-[-0.83px_-7.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 1.66667">
          <path d="M0.833333 0.833333H11.6667" id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </svg>
      </div>
    </div>
  );
}
type Icon4VectorProps = {
  additionalClassNames?: string;
};

function Icon4Vector({ additionalClassNames = "" }: Icon4VectorProps) {
  return (
    <div className={clsx("absolute left-[12.5%] right-[87.46%]", additionalClassNames)}>
      <div className="absolute inset-[-0.83px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.675 1.66667">
          <path d="M0.833333 0.833333H0.841667" id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </svg>
      </div>
    </div>
  );
}
type Icon3Vector1Props = {
  additionalClassNames?: string;
};

function Icon3Vector1({ additionalClassNames = "" }: Icon3Vector1Props) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-5.56%_-0.83px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 16.6667">
          <path d="M0.833333 0.833333V15.8333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </svg>
      </div>
    </div>
  );
}
type Icon3VectorProps = {
  additionalClassNames?: string;
};

function Icon3Vector({ additionalClassNames = "" }: Icon3VectorProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-0.83px_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 1.66667">
          <path d="M0.833333 0.833333H15.8333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </svg>
      </div>
    </div>
  );
}
type ContainerText1Props = {
  text: string;
};

function ContainerText1({ text }: ContainerText1Props) {
  return (
    <div className="h-[16px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#71717a] text-[12px] top-px whitespace-nowrap">{text}</p>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return (
    <div className="h-[32px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#0f172a] text-[24px] top-0 tracking-[0.0703px] whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function PrototypePasserelleGhu() {
  return (
    <div className="bg-white relative size-full" data-name="Prototype Passerelle GHU">
      <div className="absolute content-stretch flex flex-col gap-[142.5px] h-[2494.5px] items-start left-0 pt-[85px] top-0 w-[1347px]" data-name="Home">
        <div className="h-[450px] relative shrink-0 w-full" data-name="Container">
          <div className="absolute h-[536px] left-0 overflow-clip top-[-86px] w-[1347px]" data-name="Container">
            <div className="absolute h-[583px] left-0 top-0 w-[1347px]" data-name="Image (GHU)">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageGhu} />
            </div>
            <div className="absolute h-[536px] left-0 top-0 w-[1347px]" data-name="Container">
              <div className="absolute inset-[-40.3%_0_-32.09%_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1347 924">
                  <g id="Container">
                    <rect fill="url(#paint0_linear_17_4732)" height="536" transform="translate(0 216)" width="1347" />
                    <g filter="url(#filter0_f_17_4732)" id="Ellipse 1">
                      <circle cx="673" cy="462" fill="var(--fill-0, white)" fillOpacity="0.7" r="348" />
                    </g>
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="924" id="filter0_f_17_4732" width="924" x="211" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                      <feGaussianBlur result="effect1_foregroundBlur_17_4732" stdDeviation="57" />
                    </filter>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_17_4732" x1="673.5" x2="673.5" y1="0" y2="536">
                      <stop stopColor="white" stopOpacity="0.4" />
                      <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                      <stop offset="1" stopColor="white" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[48px] h-[450px] items-center justify-center left-0 py-[84.406px] top-0 w-[1347px]" data-name="Container">
            <div className="font-['Fraunces:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#0f172a] text-[52px] text-center tracking-[-1.677px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
              <p className="leading-[75.6px] mb-0">Donnez une seconde vie</p>
              <p className="leading-[75.6px]">au matériel du GHU</p>
            </div>
            <div className="h-[82px] relative shrink-0 w-[576.281px]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative size-full">
                <div className="bg-[rgba(255,255,255,0.7)] flex-[1_0_0] h-[82px] min-h-px min-w-px relative rounded-[16px]" data-name="Container">
                  <div aria-hidden="true" className="absolute border border-[#e5e5e4] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
                  <div className="flex flex-row items-center size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[25px] py-px relative size-full">
                      <Container11 additionalClassNames="bg-[#3b82f6]">
                        <Icon2 additionalClassNames="relative shrink-0">
                          <path d={svgPaths.p140c1100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          <path d="M15 14.1667V7.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          <path d="M10.8333 14.1667V4.16667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          <path d="M6.66667 14.1667V11.6667" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </Icon2>
                      </Container11>
                      <Wrapper6 additionalClassNames="h-[48px]">
                        <ContainerText text="16" />
                        <ContainerText1 text="Biens disponibles" />
                      </Wrapper6>
                    </div>
                  </div>
                </div>
                <Container12 additionalClassNames="w-[161.672px]">
                  <Container11 additionalClassNames="bg-[#10b981]">
                    <Icon2 additionalClassNames="relative shrink-0">
                      <path d={svgPaths.p3c797180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p3ac0b600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </Icon2>
                  </Container11>
                  <Wrapper6 additionalClassNames="h-[48px]">
                    <ContainerText text="14" />
                    <ContainerText1 text="À réserver" />
                  </Wrapper6>
                </Container12>
                <Container12 additionalClassNames="w-[163.352px]">
                  <Container11 additionalClassNames="bg-[#8b5cf6]">
                    <Wrapper1 additionalClassNames="relative shrink-0">
                      <g clipPath="url(#clip0_17_4718)" id="Icon">
                        <path d={svgPaths.p17cc7980} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                      <defs>
                        <clipPath id="clip0_17_4718">
                          <rect fill="white" height="20" width="20" />
                        </clipPath>
                      </defs>
                    </Wrapper1>
                  </Container11>
                  <Wrapper6 additionalClassNames="h-[48px]">
                    <ContainerText text="0" />
                    <ContainerText1 text="Transférés" />
                  </Wrapper6>
                </Container12>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1817px] relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex flex-col gap-[32px] items-start pt-[48px] px-[32px] relative size-full">
            <div className="content-stretch flex h-[52px] items-center justify-between relative shrink-0 w-full" data-name="Container">
              <div className="h-[36px] relative shrink-0 w-[363.742px]" data-name="Heading 2">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                  <p className="font-['Inter:Bold',sans-serif] font-bold leading-[36px] not-italic relative shrink-0 text-[#0f172a] text-[30px] tracking-[0.3955px] whitespace-nowrap">Tous les biens disponibles</p>
                </div>
              </div>
              <div className="bg-white h-[52px] relative rounded-[14px] shrink-0 w-[100px]" data-name="Container">
                <div aria-hidden="true" className="absolute border-2 border-[#e5e5e4] border-solid inset-0 pointer-events-none rounded-[14px]" />
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[6px] py-[2px] relative size-full">
                  <div className="bg-[#0f172a] relative rounded-[10px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 size-[40px]" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[10px] px-[10px] relative size-full">
                      <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                        <div className="absolute inset-[12.5%]" data-name="Vector">
                          <div className="absolute inset-[-5.56%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                              <path d={svgPaths.pf3beb80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            </svg>
                          </div>
                        </div>
                        <Icon3Vector additionalClassNames="inset-[37.5%_12.5%_62.5%_12.5%]" />
                        <Icon3Vector additionalClassNames="inset-[62.5%_12.5%_37.5%_12.5%]" />
                        <Icon3Vector1 additionalClassNames="inset-[12.5%_62.5%_12.5%_37.5%]" />
                        <Icon3Vector1 additionalClassNames="inset-[12.5%_37.5%_12.5%_62.5%]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[10px]" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[10px] px-[10px] relative size-full">
                      <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                        <Icon4Vector additionalClassNames="bottom-1/2 top-1/2" />
                        <Icon4Vector additionalClassNames="bottom-1/4 top-3/4" />
                        <Icon4Vector additionalClassNames="bottom-3/4 top-1/4" />
                        <Icon4Vector1 additionalClassNames="bottom-1/2 top-1/2" />
                        <Icon4Vector1 additionalClassNames="bottom-1/4 top-3/4" />
                        <Icon4Vector1 additionalClassNames="bottom-3/4 top-1/4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[____388.25px_394.25px_394.25px_minmax(0,1fr)] h-[1637px] relative shrink-0 w-full" data-name="Container">
              <Link additionalClassNames="col-1 row-1 self-stretch">
                <div className="bg-[#f4f4f5] content-stretch flex flex-col h-[192px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                  <div className="h-[192px] relative shrink-0 w-full" data-name="Image (Bureau médical avec rangements)">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageBureauMedicalAvecRangements} />
                  </div>
                </div>
                <div className="h-[192.25px] relative shrink-0 w-full" data-name="Container">
                  <Container />
                  <div className="absolute h-[25.5px] left-[20px] overflow-clip top-[58px] w-[258.75px]" data-name="Heading 3">
                    <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[25.5px] left-0 not-italic text-[#0f172a] text-[17px] top-[0.5px] tracking-[-0.4316px] w-[168px]">Bureau médical avec rangements</p>
                  </div>
                  <div className="absolute h-[48.75px] left-[20px] overflow-clip top-[91.5px] w-[258.75px]" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.375px] left-0 not-italic text-[#71717a] text-[15px] top-[-1px] tracking-[-0.2344px] w-[251px]">Bureau en bois massif avec 3 tiroirs, très bon état. Utilisé dans un cabinet médical. Dimensions: 150x80cm. Inclut un caisson mobile à roulettes.</p>
                  </div>
                  <div className="absolute content-stretch flex h-[16px] items-center justify-between left-[20px] top-[156.25px] w-[258.75px]" data-name="Container">
                    <Container1 />
                    <Container2 />
                  </div>
                </div>
              </Link>
              <Link additionalClassNames="col-2 row-1 self-stretch">
                <div className="bg-[#f4f4f5] content-stretch flex flex-col h-[192px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                  <div className="h-[192px] relative shrink-0 w-full" data-name="Image (Fauteuil roulant manuel standard)">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFauteuilRoulantManuelStandard} />
                  </div>
                </div>
                <div className="h-[192.25px] relative shrink-0 w-full" data-name="Container">
                  <Container3 />
                  <div className="absolute h-[25.5px] left-[20px] overflow-clip top-[58px] w-[258.75px]" data-name="Heading 3">
                    <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[25.5px] left-0 not-italic text-[#0f172a] text-[17px] top-[0.5px] tracking-[-0.4316px] w-[191px]">Fauteuil roulant manuel standard</p>
                  </div>
                  <div className="absolute h-[48.75px] left-[20px] overflow-clip top-[91.5px] w-[258.75px]" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.375px] left-0 not-italic text-[#71717a] text-[15px] top-[-1px] tracking-[-0.2344px] w-[247px]">Fauteuil roulant manuel, parfait état de fonctionnement. Révision complète effectuée en janvier 2026. Assise confortable, freins en bon état.</p>
                  </div>
                  <div className="absolute content-stretch flex h-[16px] items-center justify-between left-[20px] top-[156.25px] w-[258.75px]" data-name="Container">
                    <Container4 />
                    <Container5 />
                  </div>
                </div>
              </Link>
              <Link additionalClassNames="col-3 row-1 self-stretch">
                <div className="bg-[#f4f4f5] content-stretch flex flex-col h-[192px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                  <div className="h-[192px] relative shrink-0 w-full" data-name="Image (Écrans PC Dell 24 pouces)">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageEcransPcDell24Pouces} />
                  </div>
                </div>
                <div className="h-[192.25px] relative shrink-0 w-full" data-name="Container">
                  <div className="absolute content-stretch flex h-[26px] items-center justify-between left-[20px] top-[20px] w-[258.75px]" data-name="Container">
                    <TextText text="Équipement informatique" additionalClassNames="w-[180.063px]" />
                    <StatusBadgeText1 text="Réservé" />
                  </div>
                  <HeadingText text="Écrans PC Dell 24 pouces" additionalClassNames="top-[58px]" />
                  <ParagraphText text="Lot de 3 écrans Dell 24 pouces, résolution Full HD. Parfait pour bureaux administratifs ou secrétariats. Câbles inclus." />
                  <div className="absolute content-stretch flex h-[16px] items-center justify-between left-[20px] top-[156.25px] w-[258.75px]" data-name="Container">
                    <Container6 />
                    <Container7 />
                  </div>
                </div>
              </Link>
              <Link additionalClassNames="col-4 row-1 self-stretch">
                <div className="bg-[#f4f4f5] content-stretch flex flex-col h-[192px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                  <div className="h-[192px] relative shrink-0 w-full" data-name="Image (Lit médicalisé électrique)">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageLitMedicaliseElectrique} />
                  </div>
                </div>
                <div className="h-[192.25px] relative shrink-0 w-full" data-name="Container">
                  <div className="absolute content-stretch flex h-[26px] items-center justify-between left-[20px] top-[20px] w-[258.75px]" data-name="Container">
                    <TextText text="Mobilier médical" additionalClassNames="w-[118.836px]" />
                    <StatusBadgeText1 text="Réservé" />
                  </div>
                  <HeadingText text="Lit médicalisé électrique" additionalClassNames="top-[58px]" />
                  <Paragraph>{`Lit médicalisé électrique avec commande filaire, hauteur variable. Bon état général, quelques traces d'usage mineures. Matelas non inclus.`}</Paragraph>
                  <div className="absolute content-stretch flex h-[16px] items-center justify-between left-[20px] top-[156.25px] w-[258.75px]" data-name="Container">
                    <Container8 />
                    <Container5 />
                  </div>
                </div>
              </Link>
              <Link additionalClassNames="col-1 h-[388.25px] row-2">
                <div className="bg-[#f4f4f5] content-stretch flex flex-col h-[192px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                  <div className="h-[192px] relative shrink-0 w-full" data-name="Image (Armoire de rangement métallique)">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageArmoireDeRangementMetallique} />
                  </div>
                </div>
                <div className="h-[192.25px] relative shrink-0 w-full" data-name="Container">
                  <Container9 />
                  <div className="absolute h-[25.5px] left-[20px] overflow-clip top-[58px] w-[258.75px]" data-name="Heading 3">
                    <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[25.5px] left-0 not-italic text-[#0f172a] text-[17px] top-[0.5px] tracking-[-0.4316px] w-[183px]">Armoire de rangement métallique</p>
                  </div>
                  <ParagraphText text="Grande armoire métallique à 4 portes, idéale pour stockage de dossiers ou matériel. Structure solide, quelques rayures superficielles." />
                  <div className="absolute content-stretch flex h-[16px] items-center justify-between left-[20px] top-[156.25px] w-[258.75px]" data-name="Container">
                    <Wrapper5 additionalClassNames="w-[157.609px]">
                      <Icon />
                      <TextText1 text="Bâtiment A, 2ème étage" />
                    </Wrapper5>
                    <Container5 />
                  </div>
                </div>
              </Link>
              <Link additionalClassNames="col-2 h-[388.25px] row-2">
                <div className="bg-[#f4f4f5] content-stretch flex flex-col h-[192px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                  <div className="h-[192px] relative shrink-0 w-full" data-name="Image (Chariot de soins médical)">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageChariotDeSoinsMedical} />
                  </div>
                </div>
                <div className="h-[192.25px] relative shrink-0 w-full" data-name="Container">
                  <Container3 />
                  <HeadingText text="Chariot de soins médical" additionalClassNames="top-[58px]" />
                  <div className="absolute h-[48.75px] left-[20px] overflow-clip top-[91.5px] w-[258.75px]" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.375px] left-0 not-italic text-[#71717a] text-[15px] top-[-1px] tracking-[-0.2344px] w-[249px]">Chariot à 3 plateaux sur roulettes, très pratique pour transporter matériel et médicaments. Nettoyé et désinfecté.</p>
                  </div>
                  <div className="absolute content-stretch flex h-[16px] items-center justify-between left-[20px] top-[156.25px] w-[258.75px]" data-name="Container">
                    <Wrapper5 additionalClassNames="w-[143.063px]">
                      <Icon />
                      <TextText1 text="Bâtiment B, 1er étage" />
                    </Wrapper5>
                    <Container2 />
                  </div>
                </div>
              </Link>
              <Link additionalClassNames="col-3 h-[388.25px] row-2">
                <div className="bg-[#f4f4f5] content-stretch flex flex-col h-[192px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                  <div className="h-[192px] relative shrink-0 w-full" data-name="Image (Chaises de bureau ergonomiques)">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageChaisesDeBureauErgonomiques} />
                  </div>
                </div>
                <div className="h-[192.25px] relative shrink-0 w-full" data-name="Container">
                  <Container />
                  <div className="absolute h-[25.5px] left-[20px] overflow-clip top-[58px] w-[258.75px]" data-name="Heading 3">
                    <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[25.5px] left-0 not-italic text-[#0f172a] text-[17px] top-[0.5px] tracking-[-0.4316px] w-[151px]">Chaises de bureau ergonomiques</p>
                  </div>
                  <ParagraphText1 text="Lot de 4 chaises de bureau avec réglage hauteur et dossier inclinable. Très confortables, utilisées dans une salle de réunion. Revêtement en tissu noir." additionalClassNames="top-[91.5px]" />
                  <div className="absolute content-stretch flex h-[16px] items-center justify-between left-[20px] top-[156.25px] w-[258.75px]" data-name="Container">
                    <Wrapper5 additionalClassNames="w-[158.148px]">
                      <Icon />
                      <TextText1 text="Bâtiment A, 4ème étage" />
                    </Wrapper5>
                    <Wrapper5 additionalClassNames="w-[29.688px]">
                      <Icon1 />
                      <TextText2 text="4" additionalClassNames="w-[7.688px]" />
                    </Wrapper5>
                  </div>
                </div>
              </Link>
              <Link additionalClassNames="col-4 row-2 self-stretch">
                <div className="bg-[#f4f4f5] content-stretch flex flex-col h-[192px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                  <div className="h-[192px] relative shrink-0 w-full" data-name="Image (Setup informatique complet)">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSetupInformatiqueComplet} />
                  </div>
                </div>
                <div className="h-[198.25px] relative shrink-0 w-full" data-name="Container">
                  <div className="absolute content-stretch flex h-[32px] items-center justify-between left-[20px] top-[20px] w-[258.75px]" data-name="Container">
                    <TextText3 text="Équipement informatique" />
                    <StatusBadgeText text="Disponible" />
                  </div>
                  <HeadingText text="Setup informatique complet" additionalClassNames="top-[64px]" />
                  <div className="absolute h-[48.75px] left-[20px] overflow-clip top-[97.5px] w-[258.75px]" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.375px] left-0 not-italic text-[#71717a] text-[15px] top-[-1px] tracking-[-0.2344px] w-[243px]">Configuration complète : unité centrale Dell, écran 27 pouces, clavier et souris sans fil. Idéal pour poste administratif. Windows 11 Pro installé.</p>
                  </div>
                  <div className="absolute content-stretch flex h-[16px] items-center justify-between left-[20px] top-[162.25px] w-[258.75px]" data-name="Container">
                    <Wrapper5 additionalClassNames="w-[157.75px]">
                      <Icon />
                      <TextText1 text="Bâtiment B, 3ème étage" />
                    </Wrapper5>
                    <Container5 />
                  </div>
                </div>
              </Link>
              <Link additionalClassNames="col-1 h-[388.25px] row-3">
                <div className="bg-[#f4f4f5] content-stretch flex flex-col h-[192px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                  <div className="h-[192px] relative shrink-0 w-full" data-name="Image (Armoire pharmacie vitrée)">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageArmoirePharmacieVitree} />
                  </div>
                </div>
                <div className="h-[192.25px] relative shrink-0 w-full" data-name="Container">
                  <Container9 />
                  <HeadingText text="Armoire pharmacie vitrée" additionalClassNames="top-[58px]" />
                  <Paragraph1>Armoire murale avec porte vitrée et serrure. Parfaite pour stockage sécurisé de médicaments. 3 étagères intérieures réglables en hauteur.</Paragraph1>
                  <div className="absolute content-stretch flex h-[16px] items-center justify-between left-[20px] top-[156.25px] w-[258.75px]" data-name="Container">
                    <Wrapper5 additionalClassNames="w-[158.109px]">
                      <Icon />
                      <TextText1 text="Bâtiment C, 2ème étage" />
                    </Wrapper5>
                    <Container5 />
                  </div>
                </div>
              </Link>
              <Link additionalClassNames="col-2 row-3 self-stretch">
                <div className="bg-[#f4f4f5] content-stretch flex flex-col h-[192px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                  <div className="h-[192px] relative shrink-0 w-full" data-name="Image (Imprimante laser couleur HP)">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageImprimanteLaserCouleurHp} />
                  </div>
                </div>
                <div className="h-[198.25px] relative shrink-0 w-full" data-name="Container">
                  <div className="absolute content-stretch flex h-[32px] items-center justify-between left-[20px] top-[20px] w-[258.75px]" data-name="Container">
                    <TextText3 text="Équipement informatique" />
                    <StatusBadgeText text="Disponible" />
                  </div>
                  <HeadingText text="Imprimante laser couleur HP" additionalClassNames="top-[64px]" />
                  <ParagraphText1 text="Imprimante multifonction laser couleur HP LaserJet. Impression, copie, scan. Réseau Ethernet et WiFi. Cartouches neuves incluses." additionalClassNames="top-[97.5px]" />
                  <div className="absolute content-stretch flex h-[16px] items-center justify-between left-[20px] top-[162.25px] w-[258.75px]" data-name="Container">
                    <Wrapper5 additionalClassNames="w-[143.266px]">
                      <Icon />
                      <TextText1 text="Bâtiment A, 1er étage" />
                    </Wrapper5>
                    <Container5 />
                  </div>
                </div>
              </Link>
              <Link additionalClassNames="col-3 h-[388.25px] row-3">
                <div className="bg-[#f4f4f5] content-stretch flex flex-col h-[192px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                  <div className="h-[192px] relative shrink-0 w-full" data-name="Image (Brancard de transport)">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageBrancardDeTransport} />
                  </div>
                </div>
                <div className="h-[192.25px] relative shrink-0 w-full" data-name="Container">
                  <Container3 />
                  <HeadingText text="Brancard de transport" additionalClassNames="top-[58px]" />
                  <ParagraphText2 text="Brancard de transport sur roulettes avec matelas. Hauteur réglable, freins aux 4 roues. Entièrement désinfecté et révisé." />
                  <div className="absolute content-stretch flex h-[16px] items-center justify-between left-[20px] top-[156.25px] w-[258.75px]" data-name="Container">
                    <Container4 />
                    <Container5 />
                  </div>
                </div>
              </Link>
              <Link additionalClassNames="col-4 h-[388.25px] row-3">
                <div className="bg-[#f4f4f5] content-stretch flex flex-col h-[192px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                  <div className="h-[192px] relative shrink-0 w-full" data-name="Image (Table de réunion modulable)">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTableDeReunionModulable} />
                  </div>
                </div>
                <div className="h-[192.25px] relative shrink-0 w-full" data-name="Container">
                  <Container />
                  <HeadingText text="Table de réunion modulable" additionalClassNames="top-[58px]" />
                  <ParagraphText2 text="Grande table de réunion rectangulaire en stratifié blanc. Surface résistante, pieds métalliques. Peut accueillir 8 personnes confortablement." />
                  <div className="absolute content-stretch flex h-[16px] items-center justify-between left-[20px] top-[156.25px] w-[258.75px]" data-name="Container">
                    <Wrapper5 additionalClassNames="w-[157.945px]">
                      <Icon />
                      <TextText1 text="Bâtiment B, 4ème étage" />
                    </Wrapper5>
                    <Container5 />
                  </div>
                </div>
              </Link>
              <Link additionalClassNames="col-1 row-4 self-stretch">
                <div className="bg-[#f4f4f5] content-stretch flex flex-col h-[192px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                  <div className="h-[192px] relative shrink-0 w-full" data-name="Image (Tabouret médical réglable)">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTabouretMedicalReglable} />
                  </div>
                </div>
                <div className="h-[192.25px] relative shrink-0 w-full" data-name="Container">
                  <Container10 />
                  <HeadingText text="Tabouret médical réglable" additionalClassNames="top-[58px]" />
                  <div className="absolute h-[48.75px] left-[20px] overflow-clip top-[91.5px] w-[258.75px]" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.375px] left-0 not-italic text-[#71717a] text-[15px] top-[-1px] tracking-[-0.2344px] w-[253px]">Tabouret médical pivotant avec dossier et réglage en hauteur. Assise en skai facilement nettoyable. Base à 5 roulettes pour une stabilité optimale.</p>
                  </div>
                  <div className="absolute content-stretch flex h-[16px] items-center justify-between left-[20px] top-[156.25px] w-[258.75px]" data-name="Container">
                    <Container8 />
                    <Container7 />
                  </div>
                </div>
              </Link>
              <Link additionalClassNames="col-2 row-4 self-stretch">
                <div className="bg-[#f4f4f5] content-stretch flex flex-col h-[192px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                  <div className="h-[192px] relative shrink-0 w-full" data-name="Image (Bureau direction en L)">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageBureauDirectionEnL} />
                  </div>
                </div>
                <div className="h-[192.25px] relative shrink-0 w-full" data-name="Container">
                  <Container />
                  <HeadingText text="Bureau direction en L" additionalClassNames="top-[58px]" />
                  <Paragraph1>{`Bureau d'angle en forme de L, plateau stratifié aspect noyer. Grande surface de travail, passe-câbles intégré. Trois tiroirs avec serrure.`}</Paragraph1>
                  <div className="absolute content-stretch flex h-[16px] items-center justify-between left-[20px] top-[156.25px] w-[258.75px]" data-name="Container">
                    <Wrapper5 additionalClassNames="w-[157.844px]">
                      <Icon />
                      <TextText1 text="Bâtiment A, 5ème étage" />
                    </Wrapper5>
                    <Container5 />
                  </div>
                </div>
              </Link>
              <Link additionalClassNames="col-3 row-4 self-stretch">
                <div className="bg-[#f4f4f5] content-stretch flex flex-col h-[192px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                  <div className="h-[192px] relative shrink-0 w-full" data-name="Image (Lit hospitalier électrique premium)">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageLitHospitalierElectriquePremium} />
                  </div>
                </div>
                <div className="h-[192.25px] relative shrink-0 w-full" data-name="Container">
                  <Container10 />
                  <div className="absolute h-[25.5px] left-[20px] overflow-clip top-[58px] w-[258.75px]" data-name="Heading 3">
                    <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[25.5px] left-0 not-italic text-[#0f172a] text-[17px] top-[0.5px] tracking-[-0.4316px] w-[198px]">Lit hospitalier électrique premium</p>
                  </div>
                  <Paragraph>Lit médicalisé haut de gamme avec télécommande sans fil. 4 moteurs électriques, garde-corps escamotables, roulettes directionnelles avec freins centralisés.</Paragraph>
                  <div className="absolute content-stretch flex h-[16px] items-center justify-between left-[20px] top-[156.25px] w-[258.75px]" data-name="Container">
                    <Container1 />
                    <Container5 />
                  </div>
                </div>
              </Link>
              <Link additionalClassNames="col-4 row-4 self-stretch">
                <div className="bg-[#f4f4f5] content-stretch flex flex-col h-[192px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                  <div className="h-[192px] relative shrink-0 w-full" data-name="Image (Classeur mobile sur roulettes)">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageClasseurMobileSurRoulettes} />
                  </div>
                </div>
                <div className="h-[192.25px] relative shrink-0 w-full" data-name="Container">
                  <Container9 />
                  <HeadingText text="Classeur mobile sur roulettes" additionalClassNames="top-[58px]" />
                  <div className="absolute h-[48.75px] left-[20px] overflow-clip top-[91.5px] w-[258.75px]" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.375px] left-0 not-italic text-[#71717a] text-[15px] top-[-1px] tracking-[-0.2344px] w-[256px]">Meuble de classement mobile 3 tiroirs, structure métallique robuste. Finition anti-rayures. Serrure intégrée pour sécuriser les documents.</p>
                  </div>
                  <div className="absolute content-stretch flex h-[16px] items-center justify-between left-[20px] top-[156.25px] w-[258.75px]" data-name="Container">
                    <Container6 />
                    <Container2 />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col h-[154.5px] items-start left-[32px] pb-[2px] pt-[34px] px-[34px] rounded-[36px] top-[499px] w-[1283px]" data-name="Home">
        <div aria-hidden="true" className="absolute border border-[#e5e5e4] border-solid inset-0 pointer-events-none rounded-[36px] shadow-[0px_3px_20px_0px_rgba(0,0,0,0.08)]" />
        <div className="h-[86.5px] relative shrink-0 w-full" data-name="Container">
          <div className="absolute content-stretch flex flex-col gap-[12px] h-[86.5px] items-start left-0 top-0 w-[494.578px]" data-name="Container">
            <LabelText text="RECHERCHEZ" />
            <div className="h-[54.5px] relative shrink-0 w-full" data-name="Container">
              <div className="absolute bg-white h-[54.5px] left-0 rounded-[14px] top-0 w-[494.578px]" data-name="Text Input">
                <div className="content-stretch flex items-center overflow-clip pl-[48px] pr-[16px] py-[14px] relative rounded-[inherit] size-full">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[15px] text-[rgba(10,10,10,0.5)] tracking-[-0.2344px] whitespace-nowrap">Rechercher par titre ou description...</p>
                </div>
                <div aria-hidden="true" className="absolute border-2 border-[#e5e5e4] border-solid inset-0 pointer-events-none rounded-[14px]" />
              </div>
              <Icon2 additionalClassNames="absolute left-[16px] top-[17.25px]">
                <path d={svgPaths.pcddfd00} id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d="M17.5 17.5L13.9167 13.9167" id="Vector_2" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </Icon2>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[12px] h-[86.5px] items-start left-[514.58px] top-0 w-[288.75px]" data-name="Container">
            <LabelText text="CATÉGORIE" />
            <div className="bg-white h-[54.5px] relative rounded-[14px] shrink-0 w-full" data-name="Dropdown">
              <div aria-hidden="true" className="absolute border-2 border-[#e5e5e4] border-solid inset-0 pointer-events-none rounded-[14px]" />
              <div className="absolute left-[-580.58px] size-0 top-[-565px]" data-name="Option" />
              <div className="absolute left-[-580.58px] size-0 top-[-565px]" data-name="Option" />
              <div className="absolute left-[-580.58px] size-0 top-[-565px]" data-name="Option" />
              <div className="absolute left-[-580.58px] size-0 top-[-565px]" data-name="Option" />
              <div className="absolute left-[-580.58px] size-0 top-[-565px]" data-name="Option" />
              <div className="absolute left-[-580.58px] size-0 top-[-565px]" data-name="Option" />
              <div className="absolute left-[-580.58px] size-0 top-[-565px]" data-name="Option" />
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[12px] h-[86.5px] items-start left-[823.33px] top-0 w-[288.75px]" data-name="Container">
            <LabelText text="STATUT" />
            <div className="bg-white h-[54.5px] relative rounded-[14px] shrink-0 w-full" data-name="Dropdown">
              <div aria-hidden="true" className="absolute border-2 border-[#e5e5e4] border-solid inset-0 pointer-events-none rounded-[14px]" />
              <div className="absolute left-[-889.33px] size-0 top-[-565px]" data-name="Option" />
              <div className="absolute left-[-889.33px] size-0 top-[-565px]" data-name="Option" />
              <div className="absolute left-[-889.33px] size-0 top-[-565px]" data-name="Option" />
              <div className="absolute left-[-889.33px] size-0 top-[-565px]" data-name="Option" />
              <div className="absolute left-[-889.33px] size-0 top-[-565px]" data-name="Option" />
              <div className="absolute left-[-889.33px] size-0 top-[-565px]" data-name="Option" />
              <div className="absolute left-[-889.33px] size-0 top-[-565px]" data-name="Option" />
            </div>
          </div>
          <div className="absolute content-stretch flex h-[86.5px] items-end left-[1132.08px] top-0 w-[82.914px]" data-name="Container">
            <div className="bg-[#3b82f6] flex-[1_0_0] h-[50px] min-h-px min-w-px relative rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" data-name="Button">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[31.453px] pr-[31.461px] relative size-full">
                  <Icon2 additionalClassNames="relative shrink-0">
                    <path d={svgPaths.pcddfd00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M17.5 17.5L13.9167 13.9167" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </Icon2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col h-[85px] items-start left-0 pb-px pt-[20px] px-[32px] top-0 w-[1347px]" data-name="Root">
        <div className="content-stretch flex h-[44px] items-center justify-between relative shrink-0 w-full" data-name="Container">
          <div className="h-[44px] relative shrink-0 w-[226.516px]" data-name="Link">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
              <div className="bg-[#0f172a] relative rounded-[10px] shrink-0 size-[40px]" data-name="Root">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[14.289px] pr-[14.297px] relative size-full">
                  <Wrapper2 additionalClassNames="h-[28px] w-[11.414px]">
                    <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[18px] text-white top-0 tracking-[-0.4395px] whitespace-nowrap">P</p>
                  </Wrapper2>
                </div>
              </div>
              <Wrapper6 additionalClassNames="h-[44px]">
                <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 1">
                  <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#0f172a] text-[20px] top-0 tracking-[-0.4492px] whitespace-nowrap">Passerelle GHU</p>
                </div>
                <Text text="Plateforme de réemploi interne" />
              </Wrapper6>
            </div>
          </div>
          <Wrapper2 additionalClassNames="h-[36px] w-[547.547px]">
            <div className="absolute bg-[#0f172a] content-stretch flex flex-col h-[36px] items-start left-0 pt-[8px] px-[16px] rounded-[10px] top-0 w-[123.266px]" data-name="Link">
              <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Root">
                <Wrapper>
                  <path d={svgPaths.p3a151200} id="Vector" stroke="var(--stroke-0, #FFFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p1811de30} id="Vector_2" stroke="var(--stroke-0, #FFFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </Wrapper>
                <Wrapper3 additionalClassNames="h-[20px]">
                  <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#fffefe] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Catalogue</p>
                </Wrapper3>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col h-[36px] items-start left-[127.27px] pt-[8px] px-[16px] rounded-[10px] top-0 w-[111.727px]" data-name="Link">
              <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Root">
                <Wrapper>
                  <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </Wrapper>
                <TextText4 text="Déposer" />
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col h-[36px] items-start left-[242.99px] pt-[8px] px-[16px] rounded-[10px] top-0 w-[135.875px]" data-name="Link">
              <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Root">
                <Wrapper>
                  <path d={svgPaths.p1975cc00} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </Wrapper>
                <TextText4 text="Mon espace" />
              </div>
            </div>
            <div className="absolute content-stretch flex gap-[8px] h-[36px] items-center left-[398.87px] pl-[17px] top-0 w-[148.68px]" data-name="Container">
              <div aria-hidden="true" className="absolute border-[#0f172a] border-l border-solid inset-0 pointer-events-none" />
              <div className="bg-[#0f172a] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
                  <Wrapper>
                    <path d={svgPaths.p399eca00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d={svgPaths.pc93b400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </Wrapper>
                </div>
              </div>
              <div className="h-[36px] relative shrink-0 w-[91.68px]" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                  <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
                    <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#0f172a] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Sophie Martin</p>
                  </div>
                  <Text text="Cardiologie" />
                </div>
              </div>
            </div>
          </Wrapper2>
        </div>
      </div>
    </div>
  );
}