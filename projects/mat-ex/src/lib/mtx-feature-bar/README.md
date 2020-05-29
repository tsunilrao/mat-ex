# Feature Bar `<mtx-feature-bar>`

Feature Bars are modular elements to display a feature toolbar at top of page. They can house various Angular Material elements enhanced with Material Extension design and styling.

#### Feature Bar Content

Several directives are available to make it easier to structure your profile content:

| Attribute              | Description                                                  |
| ---------------------- | ------------------------------------------------------------ |
| `mtx-profile`          | Profile photo which can be `img` or `mat-icon`.              |

#### MatMenu

A dropdown Mat Menu as can be added using the `matMenu` property.

#### Examples

```
<mtx-feature-bar [matMenu]="menu">
    <mtx-profile size="large">
        <mtx-profile-photo><mat-icon>person</mat-icon></mtx-profile-photo>
        <mtx-profile-title>Title</mtx-profile-title>
        <mtx-profile-subtitle>Subtitle</mtx-profile-subtitle>
    </mtx-profile>
</mtx-feature-bar>
<mat-menu #menu="matMenu"></mat-menu>
```

#### More to come ...