import { ComponentType, SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  filled?: boolean;
  className?: string;
}

export type IconComponent = ComponentType<IconProps>;
