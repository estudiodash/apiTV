/**
 * Module Dependencies
 *
 */

import $  from 'jquery';
import page  from 'page';
import {getShows, searchShows} from 'src/tvdash-appi-client';
import renderShows from  'src/render'
import $tvShowsContainer from 'src/tv-shows-container'
import 'src/search-form'
import qs from 'qs'

page ('/', function (ctx, next) {
    $tvShowsContainer.find('.tv-show').remove()

    if(!localStorage.shows) {
        getShows( function (shows) {
            $tvShowsContainer.find('.loader').remove();
            localStorage.shows = JSON.stringify(shows);
            renderShows(shows);
        })
    }else {
        renderShows(JSON.parse(localStorage.shows));
    }
})
page('/search', function (ctx,next) {
    $tvShowsContainer.find('.tv-show').remove();
    var $loader = $('<div class="loader">');
    $loader.appendTo($tvShowsContainer);
    const search = qs.parse(ctx.querystring)
    searchShows(search, function (res) {
        $loader.remove();
        var shows = res.map(function (resShows) {
            return resShows.show;
        })
        renderShows(shows);
    })

})
page()