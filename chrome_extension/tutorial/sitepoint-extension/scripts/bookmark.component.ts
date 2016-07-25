// To create a component, we need Angular's "Component" function.
// It can be imported from the "angular2/core" module.
import { Component } from 'angular2/core';

// A component decorator tells Angular that the "BookmarkComponent" class
// is a component and adds its meta data: the selector and the template.
@Component({
    selector: 'sp-bookmark',
    template: '<h1>Bookmark</h1>'
})

// The "BookmarkComponent" module exports the "BookmarkComponent" class,
// because we will need it in other modules,
// e.g. to create the bookmark list.
export class BookmarkComponent { }