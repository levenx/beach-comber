import React from 'react';
import classnames from 'classnames';
import './index.less';

export interface IButton {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
}

export default function Switch(props: IButton) {
    const { checked, onChange, disabled = false } = props;
    return (
        <div
            onClick={() => {
                if (!disabled) {
                    onChange(!checked)
                }
            }}
            className={classnames("dumbo-switch", {
                'dumbo-switch--default': !checked,
                'dumbo-switch--checked': checked,
                'dumbo-switch--disabled': disabled
            })}>

        </div>
    )
}
