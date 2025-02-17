import React, { ImgHTMLAttributes } from 'react';
import TrashSvg from '../../assets/trash.svg'; // Ajuste o caminho conforme necessário

interface TrashIconProps extends ImgHTMLAttributes<HTMLImageElement> {
    className: string;
}

const TrashIcon = ({ className, ...props }: TrashIconProps) => (
    <img
        src={TrashSvg}
        className={className}
        {...props}
    />
);

export default TrashIcon;