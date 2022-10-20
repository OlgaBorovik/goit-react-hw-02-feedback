import React from "react";
import PropTypes from "prop-types"

export const Notification = (props) => (
    <p>{props.message}</p>
)

Notification.propType = {
    message: PropTypes.string
}