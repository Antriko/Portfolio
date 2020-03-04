import React, { Component } from 'react';
import $ from 'jquery';
import './CSS/index.css';
import techStack from './section/techStack.component.js';
import header from './section/header.component.js'

export default class Index extends Component {
    componentDidMount() {
        (function($){
            $.fn.fitText = function( kompressor, options ) {
              var compressor = kompressor || 1,
                  settings = $.extend({
                    'minFontSize' : Number.NEGATIVE_INFINITY,
                    'maxFontSize' : Number.POSITIVE_INFINITY
                  }, options);
              return this.each(function(){
                var $this = $(this);
                var resizer = function () {
                  $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
                };
                resizer();
                $(window).on('resize.fittext orientationchange.fittext', resizer);
              });  
            };
        })($);
        $(".textFit").fitText();
    };

    render() {
        return (
            <React.Fragment>
                {header()}
                {techStack()}
             </React.Fragment>
        );
    };
};