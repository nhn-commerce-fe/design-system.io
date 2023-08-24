import classNames from 'classnames';
import { ReactNode, useState } from 'react';
import { ButtonProps } from './button/Button';
import { MenuButton } from './MenuButton';

interface DropdownProps extends Pick<ButtonProps, 'hierarchy' | 'leadingIcon' | 'label'> {
  menus?: Array<string>;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
}

const Dropdown = ({
  className = '',
  hierarchy,
  label,
  leadingIcon,
  children,
  menus,
  disabled,
  ...props
}: DropdownProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibleChange = () => {
    if (disabled) return;

    setIsVisible((prev) => !prev);
  };

  return (
    <div className={classNames('dropdown', isVisible && 'is-active', className && className)} {...props}>
      <MenuButton
        hierarchy={hierarchy}
        leadingIcon={leadingIcon}
        label={label}
        isOpen={isVisible}
        onClick={handleVisibleChange}
      />
      {isVisible && <div className="dropdown__content">{children}</div>}
    </div>
  );
};

export default Dropdown;
