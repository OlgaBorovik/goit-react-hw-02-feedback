import React from "react";
import PropTypes from 'prop-types'

export const Section = (props) => (
<section>
        <h2>{props.title}</h2>
        {props.children}
 </section>
)


Section.propType = {
    title: PropTypes.string,
}