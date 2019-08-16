/**
 * Module Dependencies
 *
 */
import $  from 'jquery';

export function getShows(fn) {
    $.ajax('http://api.tvmaze.com/shows', {
        success: function ( shows,texStatus, xhr) {
            fn(shows)
        }
    })
}
export function searchShows(search, fn) {
    $.ajax('http://api.tvmaze.com/search/shows', {
        data: search,
        success: function (res, textStatus, xhr) {
            fn(res)
        }
    })

}

