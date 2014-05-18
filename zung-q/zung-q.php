<?php
/**
 * @package ZungQuestionnaire
 */
/*
Plugin Name: Zung Questionnaire
Plugin URI: http://codepen.io/dougludlow/pen/aypwg
Description: The Zung Self-Rating Depression Scale Questionnaire.
Version: 0.1
Author: Douglas Ludlow
Author URI: http://dougludlow.info/
License: GPLv2 or later
*/

/*
This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/

define( 'ZUNG__PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'ZUNG__PLUGIN_DIR', plugin_dir_path( __FILE__ ) );

add_shortcode( 'zung', 'zung' );

//[zung]
function zung( $atts ){

    wp_enqueue_script( 'jquery' );
    wp_enqueue_script( 'bootstrap', '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.1.1/js/bootstrap.js' );
    wp_enqueue_script( 'angular', '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.16/angular.js' );
    wp_enqueue_script( 'jquery.floatThead-slim', 'http://cdnjs.cloudflare.com/ajax/libs/floatthead/1.2.7/jquery.floatThead-slim.js');
    wp_enqueue_script( 'scoped', ZUNG__PLUGIN_URL . 'scripts/scoped.js');
    wp_enqueue_script( 'zung-script', ZUNG__PLUGIN_URL . 'scripts/zung.js' );

    ob_start();
    include ZUNG__PLUGIN_DIR . 'views/zung.php';
    return ob_get_clean();
}
