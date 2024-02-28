import React from 'react';
import PropTypes from 'prop-types';

function Message({ message, type }) {
    return (
        <span className={`min-h-6 rounded-lg bg-[#02c2ab] w-fit max-w-[80%] inline-block box-border px-4 py-2 font-semibold text-white ${type == 'bot' && 'self-end bg-[#1C4987]'}`}>
            {message}
        </span>
    )
}

Message.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

export default Message;