import React, { Component } from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext';
import { Section, Footer, Icon } from 'react-materialize'
import { Link } from 'react-router-dom'
export default function Footer1() {
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <Footer className="page-footer" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
            copyrights={<a style={{ color: theme.color }} > &copy; 2022 All Rights Reserved by FPTflix </a>}
            moreLinks={<a style={{ color: theme.color }} className="text-lighten-4 right" href="#!">More Links</a>}
        >
            <h5 style={{ color: theme.color }} className="text">
                About us
            </h5>
            <p style={{ color: theme.color }} className=" text-lighten-4">
                Our movie site is a legal movie site that has licensed blockbuster
                movies around the world with diverse content. In addition,
                users can also experience movies with 4k resolution without worrying about lag.
            </p>
        </Footer>
    )
}