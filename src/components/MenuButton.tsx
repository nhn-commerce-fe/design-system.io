import { COLOR } from '../../constant/color';
import { Button, ButtonProps } from './button/Button';
import { SvgIcon } from './svg/SvgIcon';
import classNames from 'classnames';
import { AnchorProps, CustomLink } from './CustomLink';

interface MenuButtonProps extends ButtonProps {
  color?: keyof typeof COLOR;
  isOpen?: boolean;
  onClick?: () => void;
}

export const MenuButton = ({
  onClick = () => {},
  size = 'lg',
  leadingIcon,
  isOpen,
  label,
  hierarchy,
  color = 'gray300',
  ...props
}: MenuButtonProps) => {
  return (
    <Button
      onClick={onClick}
      size={size}
      leadingIcon={leadingIcon}
      label={label}
      hierarchy={hierarchy}
      className={classNames('menu-button', isOpen && 'is-active')}
      // trailingIcon={<SvgIcon icon="chevronDown" size={20} color={color} />}
    />
  );
};
