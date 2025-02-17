import React from 'react';
import TrashSvg from '../../assets/trash.svg'; // Ajuste o caminho conforme necessário

interface TrashIconProps {
    className: string;
}

const TrashIcon = ({ className }: TrashIconProps) => (
    <img
        src={TrashSvg}
        alt="Remover tarefa"
        className={className}
    />
);

export default TrashIcon;