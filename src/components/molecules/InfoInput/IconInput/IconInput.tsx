import { IconEmail } from '@/components/atoms/SvgIcon/IconEmail';
import { IconWhatsapp } from '@/components/atoms/SvgIcon/IconWhatsapp';
import { IconLinkedin } from '@/components/atoms/SvgIcon/IconLinkedin';
import { IconGithub } from '@/components/atoms/SvgIcon/IconGithub';
import { IconHeadphone } from '@/components/atoms/SvgIcon/IconHeadphone';
import { IconClimbing } from '@/components/atoms/SvgIcon/IconClimbing';
import { IconCook } from '@/components/atoms/SvgIcon/IconCook';
import { IconTableTennis } from '@/components/atoms/SvgIcon/IconTableTennis';
import { IconPetanque } from '@/components/atoms/SvgIcon/IconPetanque';
import { IconGlass } from '@/components/atoms/SvgIcon/IconGlass';
import { IconSnow } from '@/components/atoms/SvgIcon/IconSnow';
import { InputType } from '../InfoInput.styles';

interface IconProps {
  type: InputType;
}

export const Icon = ({ type }: IconProps) => {
  switch (type) {
    case 'mail':
      return <IconEmail />;
    case 'phone':
      return <IconWhatsapp />;
    case 'linkedin':
      return <IconLinkedin />;
    case 'github':
      return <IconGithub />;
    case 'music':
      return <IconHeadphone />;
    case 'climbing':
      return <IconClimbing />;
    case 'cook':
      return <IconCook />;
    case 'tableTennis':
      return <IconTableTennis />;
    case 'petanque':
      return <IconPetanque />;
    case 'pub':
      return <IconGlass />;
    case 'snow':
      return <IconSnow />;
    default:
      return null;
  }
};
