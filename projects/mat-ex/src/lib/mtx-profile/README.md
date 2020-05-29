# Profile `<mtx-profile>`

Profiles are modular elements to enhance the User Profiles in various Angular Material elements enhanced with Material Extension design and styling.

#### Profile Content

Several directives are available to make it easier to structure your profile content:

| Attribute              | Description                                                         |
| ---------------------- | ------------------------------------------------------------------- |
| `mtx-profile-photo`    | Profile photo which can be `img` or `mat-icon`.                     |
| `mtx-profile-header`   | Profile header to group title and subtitle. Can be used standalone. |
| `mtx-profile-title`    | Profile title which generally represents the name.                  |
| `mtx-profile-subtitle` | Profile subtitle can be like a status or designation.               |

#### Sizing

There are several profile sizes, and can be changed using the `size` property to set 
the size to `small`, `medium`, or `large`.

#### Examples

```
<mtx-profile>
    <mtx-profile-title>Title</mtx-profile-title>
    <mtx-profile-subtitle>Subtitle</mtx-profile-subtitle>
</mtx-profile>

<mtx-profile size="large">
    <mtx-profile-photo><img src="..."></mtx-profile-photo>
</mtx-profile>

<mtx-profile size="small">
    <mtx-profile-photo><img src="..."></mtx-profile-photo>
    <mtx-profile-title>Title</mtx-profile-title>
    <mtx-profile-subtitle>Subtitle</mtx-profile-subtitle>
</mtx-profile>
```
