import React, { useState } from "react";
import PropTypes from 'prop-types'

import { btnContainer, btnEdit } from "../../styles/modules/btn.module.scss";

const GenericDropdown = ({ id, title, center = false, ...props }) => {
    
    const [showOptions, setShowOptions] = useState(false);

    const getOptions = () => {
        
        if (showOptions) {
            setShowOptions(false);
        }
        else{
            setShowOptions(true);
        }
    };

    const hideOptions = (e) => {

        if (!e.currentTarget.contains(e.relatedTarget)) {
            setShowOptions(false);
        }
        
    };

    return (
        <div onClick={() => getOptions()} onBlur={(e) => hideOptions(e)} className={btnContainer} center={center.toString()}>
            <button type="button" className={btnEdit} btndropdown={showOptions.toString()}>
                {title}
            </button>
            { showOptions && <React.Fragment>{props.children}</React.Fragment> }
        </div>
    );
};

GenericDropdown.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string
};

export default GenericDropdown;