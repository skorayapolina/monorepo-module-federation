declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module "*.svg" {
  const svg: React.FC<React.SVGAttributes<SVGElement>>;
  export default svg;
}

declare const __PLATFORM__: 'desktop' | 'mobile';
